import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem import PorterStemmer
import string

# Download necessary NLTK resources
nltk.download('stopwords')
nltk.download('punkt')

# Initialize stopwords and stemmer
stop_words = set(stopwords.words('english'))
stemmer = PorterStemmer()

def preprocess_text(text):
    # Tokenization (Case folding)
    tokens = word_tokenize(text.lower())  # Convert text to lowercase for case folding

    # Remove punctuation
    tokens = [word for word in tokens if word not in string.punctuation]

    # Stopwords removal
    filtered_tokens = [word for word in tokens if word not in stop_words]

    # Stemming
    stemmed_tokens = [stemmer.stem(word) for word in filtered_tokens]

    return ' '.join(stemmed_tokens)

# Test with sample text
text = "This is a test sentence. Let's see if it works."
processed_text = preprocess_text(text)
print("Processed Text:", processed_text)
