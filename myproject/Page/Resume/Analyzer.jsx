import React, { useState } from "react";
import Nav from "../../components/Nav/Nav";


import { NavLink } from "react-router-dom";

const Analyzer = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // States for data received from API
  const [wordCount, setWordCount] = useState(null);
  const [skillsAnalysis, setSkillsAnalysis] = useState(null);
  const [improvementSuggestions, setImprovementSuggestions] = useState([]); // Initialize improvement suggestions state
const[ softSkill ,setsoftskill]=useState([]);
const[ course_recommendation,setcourse_recommendation]=useState([]);
  // Function to handle file selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Function to handle file submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setError("Please upload a file.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:5000/analyze_resume", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to analyze resume");
      }

      // Handle the response and set the data in state
      const data = await response.json();
      console.log(data);

      setWordCount(data.word_count);
      setSkillsAnalysis(data?.skills_analysis.skills_score);
      setImprovementSuggestions(data?.improvement_suggestions || []); // Update improvement suggestions state
      setsoftskill(data?.soft_skills ||[])
      setcourse_recommendation(data?.course_recommendations ||[])
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-[100%] bg-gray-100 overflow-hidden mb-7">
      <div className='w-screen h-[5vw]' > <Nav /> </div>
    
      {/* <div className="bg-[#196eaf] py-3 flex items-center justify-start gap-[35vw] px-[4vw] overflow-hidden">
        <NavLink to={"/"}>
          <i className="ri-arrow-left-s-line text-3xl font-[500]"></i>
        </NavLink>
        <h1 className="text-center text-white text-2xl font-bold">Analyze Resume </h1>
      </div> */}

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Content */}
        <div className="overflow-hidden p-6 sm:p-8">
          {/* Upload Section */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 bg-gray-50 text-center">
            <p className="text-gray-700 font-medium">Drag & drop your resume here or</p>

            {/* File Input */}
            <input
              type="file"
              accept=".pdf, .docx"
              className="hidden"
              onChange={handleFileChange}
              id="fileInput"
            />

            {/* Button to open file input */}
            <button
              onClick={() => document.getElementById("fileInput").click()}
              className="mt-3 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Choose File
            </button>

            {file && <p className="mt-3 text-sm text-gray-700">File Selected: {file.name}</p>}

            <p className="mt-2 text-sm text-gray-500">Accepted formats: PDF, DOCX (Max size: 5MB)</p>

            <div className="text-center mt-8">
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition"
              >
                Analyze Resume
              </button>
            </div>
          </div>

          {/* Loading/Error Messages */}
          {loading && <p className="text-center text-blue-600">Loading...</p>}
          {error && <p className="text-center text-red-600">{error}</p>}

          {/* Analysis Results */}
          <div className="mt-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">Analysis Summary</h3>
            {/* */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="text-lg font-medium text-blue-700">Skills Score</h4>

                <p className="text-gray-700 mt-2">
                  {skillsAnalysis ? `${skillsAnalysis}% match with the job description` : "No data available"}
                </p>
              </div>

              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h4 className="text-lg font-medium text-yellow-700">Word Count</h4>
                <p className="text-gray-700 mt-2">{wordCount ? wordCount : "No data available"}</p>
              </div>
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h4 className="text-lg font-medium text-yellow-700">soft skills </h4>
                <p className="text-gray-700 mt-2">{softSkill ? softSkill : "No data available"}</p>
              </div>

              <div className="p-4 bg-green-50 border border-green-200 rounded-lg col-span-2">
  <h4 className="text-lg font-medium text-green-700">Improvement Suggestions</h4>
  <ul className="list-disc list-inside">
    {improvementSuggestions.length > 0 ? (
      improvementSuggestions.map((suggestion, index) => (
        <li key={index} className="text-gray-700 mt-2">
          {suggestion}
        </li>
      ))
    ) : (
      <p className="text-gray-700 mt-2">No suggestions available</p>
    )}
  </ul>
</div>
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg col-span-2">
  <h4 className="text-lg font-medium text-green-700">course_recommendation</h4>
  <ul className="list-disc list-inside">
    {course_recommendation.length > 0 ? (
      course_recommendation.map((suggestion, index) => (
        <li key={index} className="text-gray-700 mt-2">
          {suggestion}
        </li>
      ))
    ) : (
      <p className="text-gray-700 mt-2">No suggestions available</p>
    )}
  </ul>
</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analyzer;
