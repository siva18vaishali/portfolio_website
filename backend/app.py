from flask import Flask, request, jsonify
from flask_mail import Mail, Message
from flask_cors import CORS
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

# CORS configuration for production
CORS(app)

# Mail config
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.environ.get('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.environ.get('MAIL_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = os.environ.get('MAIL_USERNAME')

mail = Mail(app)

@app.route('/')
def home():
    return jsonify({"message": "Flask Backend is running!", "status": "success"})

@app.route('/contact', methods=['POST', 'OPTIONS'])
def contact():
    if request.method == 'OPTIONS':
        return '', 200
        
    try:
        if not request.is_json:
            return jsonify({'status': 'error', 'message': 'Content-Type must be application/json'}), 400
            
        data = request.get_json()
        if not data:
            return jsonify({'status': 'error', 'message': 'No JSON data received'}), 400
            
        name = data.get('name', '').strip()
        email = data.get('email', '').strip()
        message = data.get('message', '').strip()

        if not name or not email or not message:
            return jsonify({'status': 'error', 'message': 'All fields are required'}), 400
        
        msg = Message(
            subject=f"Portfolio Contact: {name}",
            recipients=[os.environ.get('MAIL_USERNAME')],
            body=f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"
        )
        
        mail.send(msg)
        return jsonify({'status': 'success', 'message': 'Message sent successfully!'})
    
    except Exception as e:
        return jsonify({'status': 'error', 'message': 'Failed to send email'}), 500

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)