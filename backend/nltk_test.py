import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem import PorterStemmer

# Download necessary NLTK resources (uncomment this if you haven't downloaded them already)
nltk.download('stopwords')
nltk.download('punkt')

# Initialize stopwords and stemmer
stop_words = set(stopwords.words('english'))
stemmer = PorterStemmer()

# Test text
text = "This is a test sentence. Let's see if it works."

# Tokenization (Case folding)
tokens = word_tokenize(text.lower())

# Stopwords removal
filtered_tokens = [word for word in tokens if word not in stop_words]

# Stemming
stemmed_tokens = [stemmer.stem(word) for word in filtered_tokens]

# Output
print("Original Text:", text)
print("Tokens:", tokens)
print("Filtered Tokens (Stopwords Removed):", filtered_tokens)
print("Stemmed Tokens:", stemmed_tokens)
