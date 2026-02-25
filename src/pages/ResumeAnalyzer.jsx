import {
  UploadCloud,
  FileText,
  Sparkles,
  CheckCircle,
  AlertCircle,
  TrendingUp,
} from "lucide-react";

const ResumeAnalyzer = () => {
  return (
    <div className="space-y-10">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">
          Resume Analyzer
        </h1>
        <p className="text-sm text-gray-500">
          Upload your resume and get AI-powered insights instantly
        </p>
      </div>

      {/* Upload Section */}
      <div className="bg-white border border-dashed border-gray-300 rounded-2xl p-12 flex flex-col items-center justify-center text-center hover:border-blue-500 transition cursor-pointer">

        <div className="bg-blue-100 p-4 rounded-full mb-4">
          <UploadCloud className="text-blue-600" size={32} />
        </div>

        <h2 className="text-lg font-semibold text-gray-800">
          Drag & Drop your resume
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Supports PDF, DOCX (Max 5MB)
        </p>

        <button className="mt-6 px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition">
          Browse File
        </button>
      </div>

      {/* Results Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Score Card */}
        <div className="bg-linear-to-br from-blue-600 to-indigo-600 text-white rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg">

          <div className="text-5xl font-bold">82</div>
          <p className="text-sm mt-2 opacity-80">ATS Compatibility Score</p>

          <div className="mt-4 flex items-center gap-2 text-sm">
            <TrendingUp size={16} />
            Strong match for frontend roles
          </div>
        </div>

        {/* Strengths */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border space-y-4">

          <div className="flex items-center gap-2 text-green-600 font-semibold">
            <CheckCircle size={18} />
            Strengths
          </div>

          <ul className="text-sm text-gray-600 space-y-2">
            <li>✔ Clear project descriptions</li>
            <li>✔ Relevant technical skills</li>
            <li>✔ Quantified achievements</li>
          </ul>
        </div>

        {/* Improvements */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border space-y-4">

          <div className="flex items-center gap-2 text-red-500 font-semibold">
            <AlertCircle size={18} />
            Improvements
          </div>

          <ul className="text-sm text-gray-600 space-y-2">
            <li>⚠ Add more measurable impact</li>
            <li>⚠ Improve keyword density</li>
            <li>⚠ Add certifications section</li>
          </ul>
        </div>

      </div>

      {/* Skills Match */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border space-y-6">

        <div className="flex items-center gap-2 text-blue-600 font-semibold">
          <Sparkles size={18} />
          Skill Match Analysis
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">

          {[
            { skill: "React", match: "95%" },
            { skill: "Node.js", match: "88%" },
            { skill: "MongoDB", match: "80%" },
            { skill: "System Design", match: "60%" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-4 flex flex-col items-center"
            >
              <div className="font-semibold text-gray-700">
                {item.skill}
              </div>
              <div className="text-blue-600 font-bold mt-1">
                {item.match}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Suggestions */}
      <div className="bg-linear-to-r from-indigo-50 to-blue-50 border rounded-2xl p-6 shadow-sm">

        <div className="flex items-center gap-2 text-indigo-600 font-semibold">
          <FileText size={18} />
          AI Suggestions
        </div>

        <p className="text-sm text-gray-600 mt-3 leading-relaxed">
          Consider restructuring your resume to place your strongest
          technical projects above internships. Tailor your summary
          section to match the job description keywords more closely.
          Add metrics (%, revenue impact, performance gains) wherever possible.
        </p>
      </div>

    </div>
  );
};

export default ResumeAnalyzer;
