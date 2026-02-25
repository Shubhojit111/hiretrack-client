import { useState } from "react";

const tones = [
  { id: "professional", label: "Professional", desc: "Formal & polished", icon: "💼" },
  { id: "enthusiastic", label: "Enthusiastic", desc: "Energetic & passionate", icon: "🚀" },
  { id: "concise", label: "Concise", desc: "Brief & impactful", icon: "⚡" },
  { id: "storytelling", label: "Storytelling", desc: "Narrative-driven", icon: "📖" },
];

const templates = [
  { id: "standard", label: "Standard", desc: "Classic structure" },
  { id: "modern", label: "Modern", desc: "Fresh & dynamic" },
  { id: "executive", label: "Executive", desc: "Senior-level tone" },
];

export default function CoverLetter() {
  const [selectedTone, setSelectedTone] = useState("professional");
  const [selectedTemplate, setSelectedTemplate] = useState("standard");

  return (
    <div className="bg-slate-50">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-slate-800">
            AI Cover Letter Generator
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Generate a tailored, standout cover letter in seconds
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-6">

            {/* Job Details */}
            <Card title="Job Details">
              <div className="grid md:grid-cols-2 gap-4">
                <Input label="Job Role *" placeholder="e.g. Frontend Engineer" />
                <Input label="Company Name *" placeholder="e.g. Google" />
              </div>

              <Textarea
                label="Key Skills"
                placeholder="React, TypeScript, System Design, Node.js..."
              />

              <Textarea
                label="Notable Experience (Optional)"
                placeholder="Built a platform with 10k+ users, led a team..."
              />
            </Card>

            {/* Tone */}
            <Card title="Tone & Style">
              <div className="grid md:grid-cols-4 gap-4">
                {tones.map(tone => (
                  <button
                    key={tone.id}
                    onClick={() => setSelectedTone(tone.id)}
                    className={`p-4 rounded-xl border transition text-left
                      ${selectedTone === tone.id
                        ? "border-indigo-600 bg-indigo-50"
                        : "border-slate-200 hover:border-slate-300"}`}
                  >
                    <div className="text-lg mb-2">{tone.icon}</div>
                    <div className="text-sm font-semibold text-slate-800">
                      {tone.label}
                    </div>
                    <div className="text-xs text-slate-500">
                      {tone.desc}
                    </div>
                  </button>
                ))}
              </div>
            </Card>

            {/* Template */}
            <Card title="Template">
              <div className="flex gap-4">
                {templates.map(temp => (
                  <button
                    key={temp.id}
                    onClick={() => setSelectedTemplate(temp.id)}
                    className={`flex-1 p-4 rounded-xl border transition
                      ${selectedTemplate === temp.id
                        ? "bg-indigo-600 text-white border-indigo-600"
                        : "border-slate-200 text-slate-700 hover:border-slate-300"}`}
                  >
                    <div className="text-sm font-semibold">
                      {temp.label}
                    </div>
                    <div className="text-xs opacity-80">
                      {temp.desc}
                    </div>
                  </button>
                ))}
              </div>
            </Card>

            {/* CTA */}
            <button className="w-full mt-4 bg-linear-to-r from-indigo-600 to-indigo-500 text-white py-3 rounded-xl font-medium text-sm hover:opacity-90 transition shadow-md">
              ✨ Generate Cover Letter →
            </button>

          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">

            {/* Pro Tips */}
            <Card title="Pro Tips">
              <ul className="space-y-3 text-sm text-slate-600">
                <li>• Customize with specific project examples</li>
                <li>• Mention company’s recent news</li>
                <li>• Quantify your impact</li>
                <li>• Mirror keywords from job description</li>
              </ul>
            </Card>

            {/* Quick Stats */}
            <Card title="Quick Stats">
              <div className="flex gap-4">
                <StatBox value="3.2x" label="Avg. Response" sub="higher callbacks" />
                <StatBox value="45 min" label="Time Saved" sub="per application" />
              </div>
            </Card>

            {/* AI Info */}
            <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6">
              <h3 className="text-sm font-semibold text-indigo-700 mb-2">
                AI-Powered
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our AI analyzes thousands of successful applications
                to craft letters that get noticed by hiring managers.
              </p>
              <button className="mt-3 text-xs text-indigo-600 font-medium">
                Learn how it works →
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

/* COMPONENTS */

const Card = ({ title, children }) => (
  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
    <h3 className="text-sm font-semibold text-slate-800 mb-4">
      {title}
    </h3>
    <div className="space-y-4">
      {children}
    </div>
  </div>
);

const Input = ({ label, placeholder }) => (
  <div>
    <label className="block text-xs font-medium text-slate-500 mb-1">
      {label}
    </label>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full border border-slate-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  </div>
);

const Textarea = ({ label, placeholder }) => (
  <div>
    <label className="block text-xs font-medium text-slate-500 mb-1">
      {label}
    </label>
    <textarea
      rows={3}
      placeholder={placeholder}
      className="w-full border border-slate-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
    />
  </div>
);

const StatBox = ({ value, label, sub }) => (
  <div className="flex-1 bg-slate-100 rounded-xl p-4 text-center">
    <div className="text-indigo-600 font-semibold text-lg">
      {value}
    </div>
    <div className="text-xs text-slate-700">
      {label}
    </div>
    <div className="text-[10px] text-slate-500">
      {sub}
    </div>
  </div>
);