from flask import Flask, request, jsonify
from flask_cors import CORS
from classifier import load_model, predict_level

app = Flask(__name__)
CORS(app)

# Load trained model
try:
    model = load_model()
except FileNotFoundError:
    print("Error: Model file 'classifier.joblib' not found.")
    model = None  # Set model to None, handle appropriately in the routes.

# Home route for testing server status
@app.route("/", methods=["GET"])
def home():
    return "Server is up and running!"

@app.route("/classify", methods=["POST"])
def classify():
    if not model:
        return jsonify({"error": "Model not loaded properly."}), 500

    data = request.get_json()
    question = data.get("question", "")
    if not question:
        return jsonify({"error": "No question provided"}), 400

    predicted_level = predict_level(model, question)
    return jsonify({"level": predicted_level})

if __name__ == "__main__":
    app.run(debug=True)
