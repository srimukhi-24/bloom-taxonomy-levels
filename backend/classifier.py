import joblib
from preprocess import preprocess_text

def load_model():
    try:
        return joblib.load("model/classifier.joblib")
    except FileNotFoundError:
        print("Error: Model file not found.")
        return None

def predict_level(model, question):
    if model is None:
        raise ValueError("Model is not loaded properly.")
    
    preprocessed = preprocess_text(question)
    return model.predict([preprocessed])[0]
