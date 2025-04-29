import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AsyncDocuments } from "../../src/Store/Actions/VirtualspaceAction";

const Shoebox = ({ project}) => {
  const dispatch = useDispatch();

  const id = project?.workspace
  const [Docufile, setDocufile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [DocufileTitle, setDocufileTitle] = useState("");
  const [DocufileDescription, setDocufileDescription] = useState("");
  const [validationErrors, setValidationErrors] = useState({
    title: "",
    description: "",
  });

  const handleDocufileChange = (e) => {
    const selectedDocufile = e.target.files[0];
    setDocufile(selectedDocufile);
  };

  const handleDocufileUpload = async () => {
    setValidationErrors({ title: "", description: "" });

    if (!DocufileTitle.trim()) {
      setValidationErrors((prev) => ({
        ...prev,
        title: "Docufile title is required.",
      }));
      return;
    }

    if (!DocufileDescription.trim()) {
      setValidationErrors((prev) => ({
        ...prev,
        description: "Docufile description is required.",
      }));
      return;
    }

    if (!Docufile) {
      setErrorMessage("Please select a Docufile to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", Docufile);
    formData.append("title", DocufileTitle);
    // formData.append("description", DocufileDescription);

    setIsUploading(true);
    setErrorMessage("");

    try {
      await dispatch(AsyncDocuments(id, formData));
      setUploadSuccess(true);
      setDocufile(null);
      setDocufileTitle("");
      setDocufileDescription("");
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Failed to upload the Docufile. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Document Sharing</h2>

      <div className="px-8 mx-auto max-w-3xl pt-7">
        <div className="border p-6 rounded-xl bg-white shadow-lg">
          <h3 className="text-3xl font-semibold text-gray-800 mb-5">
            Document Sharing
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Upload and share documents securely between the client and
            freelancer.
          </p>

          {/* Docufile Input */}
          <input
            type="file"
            onChange={handleDocufileChange}
            className="border p-3 rounded-lg text-sm mb-3 w-full"
            accept=".pdf,.jpeg,.jpg,.png,.doc,.docx"
          />

          {Docufile && (
            <div className="mb-5">
              <div className="flex flex-col space-y-2">
                <label className="text-lg font-semibold text-gray-700">
                  Docufile Title
                </label>
                <input
                  type="text"
                  value={DocufileTitle}
                  onChange={(e) => setDocufileTitle(e.target.value)}
                  placeholder="Enter Docufile title"
                  className="border p-3 rounded-lg text-sm w-full"
                />
                {validationErrors.title && (
                  <p className="text-red-500 text-sm">
                    {validationErrors.title}
                  </p>
                )}
              </div>

              <div className="flex flex-col space-y-2 mt-3">
                <label className="text-lg font-semibold text-gray-700">
                  Docufile Description
                </label>
                <textarea
                  value={DocufileDescription}
                  onChange={(e) => setDocufileDescription(e.target.value)}
                  placeholder="Enter brief description of the Docufile"
                  className="border p-3 rounded-lg text-sm w-full h-26"
                />
                {validationErrors.description && (
                  <p className="text-red-500 text-sm">
                    {validationErrors.description}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Upload Button */}
          <button
            onClick={handleDocufileUpload}
            className="w-full text-sm bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition ease-in-out duration-200"
            disabled={isUploading}
          >
            {isUploading ? "Uploading..." : "Upload Document"}
          </button>

          {uploadSuccess && (
            <p className="text-green-500 text-sm mt-4">
              Docufile uploaded successfully!
            </p>
          )}
          {errorMessage && (
            <p className="text-red-500 text-sm mt-4">{errorMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shoebox;
