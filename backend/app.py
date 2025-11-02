from flask import Flask, request, jsonify
from flask_mail import Mail, Message
from flask_cors import CORS
import os
from dotenv import load_dotenv

load_dotenv()


app = Flask(__name__)
CORS(app)

# Mail config
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'siva04vaishali@gmail.com'   # your Gmail
app.config['MAIL_PASSWORD'] = 'orkl kqld wsep uind'     # app password
app.config['MAIL_DEFAULT_SENDER'] = 'siva04vaishali@gmail.com'

mail = Mail(app)

@app.route('/')
def home():
    return jsonify({"message": "Flask Backend is running!", "status": "success"})

@app.route('/contact', methods=['POST', 'OPTIONS'])
def contact():
    if request.method == 'OPTIONS':
        return '', 200
        
    try:
        data = request.get_json()
        if not data:
            return jsonify({'status': 'error', 'message': 'No JSON data received'}), 400
            
        print("Received data:", data)
        
        name = data.get('name')
        email = data.get('email')
        message = data.get('message')

        if not all([name, email, message]):
            return jsonify({'status': 'error', 'message': 'Missing required fields'}), 400
        
        msg = Message(
            subject=f"Portfolio Contact: {name}",
            recipients=[os.environ.get('MAIL_USERNAME')],
            body=f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"
        )
        
        mail.send(msg)
        return jsonify({'status': 'success', 'message': 'Message sent successfully!'})
    
    except Exception as e:
        print("Error:", e)
        return jsonify({'status': 'error', 'message': 'Internal server error'}), 500

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)