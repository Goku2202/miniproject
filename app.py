from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # Allow all origins

# Database Configuration
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '907272'
app.config['MYSQL_DB'] = 'game_addiction'

mysql = MySQL(app)

# Fetch Questions Based on Age
@app.route('/questions/<age_group>', methods=['GET'])
def get_questions(age_group):
    try:
        cur = mysql.connection.cursor()
        cur.execute("SELECT id, question_text FROM questions WHERE age_group = %s", (age_group,))
        questions = cur.fetchall()

        if not questions:
            return jsonify({"error": "No questions found"}), 404

        formatted_questions = []
        for q in questions:
            cur.execute("SELECT id, answer_text, score FROM answers WHERE question_id = %s", (q[0],))
            answers = cur.fetchall()
            formatted_questions.append({
                "id": q[0],
                "question": q[1],
                "answers": [{"id": a[0], "text": a[1], "score": a[2]} for a in answers]
            })

        return jsonify(formatted_questions), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/submit', methods=['POST'])
def submit_survey():
    try:
        data = request.get_json()
        responses = data.get('responses', [])

        if not responses:
            return jsonify({"error": "No responses provided"}), 400

        total_score = sum(response['score'] for response in responses)

        if total_score <= 15:
            level = 'Low Addiction'
        elif total_score <= 30:
            level = 'Moderate Addiction'
        elif total_score <= 45:
            level = 'High Addiction'
        else:
            level = 'Severe Addiction'

        return jsonify({"total_score": total_score, "level": level}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
