import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.ensemble import RandomForestClassifier
from sklearn.pipeline import Pipeline
from sklearn.model_selection import train_test_split
import joblib
from preprocess import preprocess_text  # Import preprocess_text

# Load your labeled dataset
df = pd.read_csv('software_eng_questions.csv')

# Preprocess the questions
df['cleaned'] = df['question'].apply(preprocess_text)  # Use preprocess_text here

# Train/test split
X_train, X_test, y_train, y_test = train_test_split(df['cleaned'], df['level'], test_size=0.2, random_state=42)

# Pipeline: TF-IDF + Random Forest
pipeline = Pipeline([
    ('tfidf', TfidfVectorizer()),
    ('clf', RandomForestClassifier(n_estimators=100, random_state=42))
])

# Train
pipeline.fit(X_train, y_train)

# Save model
joblib.dump(pipeline, 'model/classifier.joblib')  # Save model in the 'model' directory

print("✅ Model trained and saved as model/classifier.joblib")