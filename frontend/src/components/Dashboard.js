import React, { useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [question, setQuestion] = useState("");
  const [predictedLevel, setPredictedLevel] = useState("");

  const handleClassify = async () => {
    if (!question.trim()) {
      alert("Please enter a question");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/classify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      const data = await response.json();
      if (data.level) {
        setPredictedLevel(data.level);
      } else {
        setPredictedLevel("Unable to predict level.");
      }
    } catch (error) {
      console.error("Error:", error);
      setPredictedLevel("Server error.");
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Bloom’s Taxonomy Level Classifier</h2>
      <textarea
        rows={5}
        placeholder="Type your software engineering question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <br />
      <button onClick={handleClassify}>Classify</button>
      {predictedLevel && (
        <div className="result">
          <strong>Predicted Level:</strong> {predictedLevel}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
