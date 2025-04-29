import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "./Data";

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(20);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState(new Set());
  const [selectedCategory, setSelectedCategory] = useState("");
  const [switchCount, setSwitchCount] = useState(0);
  const [termsAccepted, setTermsAccepted] = useState(false); // Track acceptance of terms
  const navigate = useNavigate();

  // Filter questions based on the selected category
  const filteredQuestions =
    selectedCategory === ""
      ? questions
      : questions.filter((q) => q.category === selectedCategory);

  useEffect(() => {
    if (timer > 0 && !isSubmitted) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1500);

      return () => clearInterval(interval);
    } else if (timer === 0 && !answeredQuestions.has(currentQuestionIndex)) {
      handleNext();
    }
  }, [timer, isSubmitted, currentQuestionIndex, answeredQuestions]);

  // Handle tab switching logic
  const handleVisibilityChange = () => {
    if (document.visibilityState === "hidden") {
      setSwitchCount((prevCount) => {
        if (prevCount < 3) {
          alert(
            `You have switched tabs ${prevCount + 1} times. Please stay on this page.`
          );
          return prevCount + 1;
        } else {
          navigate("/second-page"); // Redirect after 3 warnings
          return prevCount;
        }
      });
    }
  };

  useEffect(() => {
    if (termsAccepted) {
      document.addEventListener("visibilitychange", handleVisibilityChange);
    }
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [termsAccepted]);

  // Handle next question logic
  const handleNext = () => {
    if (
      selectedAnswer === filteredQuestions[currentQuestionIndex].correctAnswer
    ) {
      setScore((prev) => prev + 1);
    }
    setAnsweredQuestions((prev) => new Set(prev).add(currentQuestionIndex));
    setSelectedAnswer("");
    setTimer(10);
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  // Handle quiz submission
  const handleSubmit = () => {
    if (
      selectedAnswer === filteredQuestions[currentQuestionIndex].correctAnswer
    ) {
      setScore((prev) => prev + 1);
    }
    setIsSubmitted(true);
  };

  // Calculate the knowledge level and percentage
  const percentage = Math.round((score / filteredQuestions.length) * 100);
  let knowledgeLevel = "";
  if (percentage <= 40) {
    knowledgeLevel = "Basic";
  } else if (percentage <= 70) {
    knowledgeLevel = "Conceptual";
  } else {
    knowledgeLevel = "Advanced";
  }

  const currentQuestion = filteredQuestions[currentQuestionIndex];

  // Step 1: Display Terms & Conditions
  if (!termsAccepted) {
    return (
      <div className="text-center p-6 bg-[#196eaf] min-h-screen flex items-center justify-center text-white">
        <div className="bg-white text-black p-6 rounded-lg shadow-lg">
  <h1 className=" text-3xl font-bold mb-6">Terms & Conditions</h1>
  <p className="mb-6 text-left">
    1. <span className="font-bold"> Tab Switching Limit</span>: You are not allowed to switch tabs or minimize the browser during the quiz. If you switch tabs more than three (3) times, your quiz session will be terminated, and you will not receive any marks for the test.
  </p>
  <p className="mb-6 text-left">
    2.  <span className="font-bold"> Security and Surveillance</span>: You agree to allow access to your camera for security purposes during the quiz. This is to ensure that the test is being taken without any external help or cheating.
  </p>
  <p className="mb-6 text-left">
    3. <span className="font-bold">Privacy and Data Usage </span>: Any personal information provided will only be used for the purpose of this quiz and to improve the user experience. We respect your privacy and will not share your personal information with third parties without your consent.
  </p>
  <p className="mb-6 text-left">
    4.  <span className="font-bold">Conduct During the Quiz </span>: Any form of cheating, including but not limited to, seeking help from external sources or using unauthorized tools, is strictly prohibited.
  </p>
  <p className="mb-6 text-left">
    5.  <span className="font-bold">Technical Issues </span>: If you encounter any technical issues during the quiz, please contact the support team immediately.
  </p>
  <button
    className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
    onClick={() => setTermsAccepted(true)} // Accept terms and proceed
  >
    Accept & Proceed
  </button>
</div>

      </div>
    );
  }

  // Step 2: Display Language Selection
  if (!selectedCategory) {
    return (
      <div className="text-center p-6 bg-[#196eaf] min-h-screen flex items-center justify-center text-white">
        <div className="bg-white text-black p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6">Choose a Quiz Category</h1>
          <select
            className="px-4 py-2 border rounded bg-white text-black"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Select a category</option>
            <option value="React">React</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
          </select>
        </div>
      </div>
    );
  }

  // Step 3: Display the Quiz After Language Selection
  return (
    <div className="p-6 bg-[#196eaf] min-h-screen w-screen flex flex-col lg:flex-row items-center justify-center text-white">
      {isSubmitted ? (
        <div className="text-center flex-1">
          <h2 className="text-4xl font-bold mb-6">
            Your Score: {score} / {filteredQuestions.length}
          </h2>
          <h3 className="text-2xl font-semibold mb-4">
            Percentage: {percentage}%
          </h3>
          <h3 className="text-2xl font-semibold mb-8">
            Knowledge Level: {knowledgeLevel}
          </h3>
          <button
            className="px-6 py-3 bg-[#196eaf] text-white rounded-lg hover:bg-blue-700"
            onClick={() => {
              setIsSubmitted(false);
              setSelectedCategory("");
              setScore(0);
              setCurrentQuestionIndex(0);
              setAnsweredQuestions(new Set());
            }}
          >
            Back to Category Selection
          </button>
        </div>
      ) : (
        selectedCategory && (
          <div className="flex flex-1 flex-col lg:flex-row items-center justify-center w-full h-full">
            {/* Left Column (Question and Options) */}
            <div className="w-full lg:w-2/3 max-w-2xl p-8 bg-white text-black rounded-lg shadow-lg flex flex-col items-center">
              <h2 className="text-2xl font-bold mb-4">{currentQuestion.question}</h2>
              <p className="text-lg font-medium mb-6">Time Left: {timer}s</p>
              <div className="space-y-4">
                {currentQuestion.options.map((option, index) => (
                  <div
                    key={index}
                    className={`p-4 border rounded-lg cursor-pointer hover:bg-gray-200 ${
                      selectedAnswer === option ? "bg-blue-100" : ""
                    }`}
                    onClick={() => setSelectedAnswer(option)}
                  >
                    <input
                      type="radio"
                      name="answer"
                      value={option}
                      checked={selectedAnswer === option}
                      onChange={() => setSelectedAnswer(option)}
                      className="mr-2"
                    />
                    <label>{option}</label>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-between">
                {currentQuestionIndex < filteredQuestions.length - 1 ? (
                  <button
                    onClick={handleNext}
                    className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                    disabled={!selectedAnswer}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="px-6 py-2 bg-[#196eaf] text-white rounded-lg hover:bg-blue-600"
                    disabled={!selectedAnswer}
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
  
}

export default Quiz;
