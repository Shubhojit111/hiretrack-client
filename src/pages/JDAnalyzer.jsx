import { useState } from "react";

const SAMPLE =
  "Seeking a Full Stack Developer proficient in React, Node.js, TypeScript, MongoDB, AWS, Docker, and CI/CD. Must have experience with GraphQL APIs and system design. Kubernetes and Redis experience is a plus.";

const REQUIRED_SKILLS = [
  "React",
  "Node.js",
  "TypeScript",
  "MongoDB",
  "AWS",
  "Docker",
  "CI/CD",
  "GraphQL",
];

const NICE_TO_HAVE = ["Kubernetes", "Redis", "Terraform"];

export default function JDAnalyzer() {
  const [jd, setJd] = useState("");
  const [result, setResult] = useState(null);

  const analyze = () => {
    if (!jd.trim()) return;

    const lower = jd.toLowerCase();

    const matched = REQUIRED_SKILLS.filter(skill =>
      lower.includes(skill.toLowerCase())
    );

    const gaps = REQUIRED_SKILLS.filter(
      skill => !matched.includes(skill)
    );

    const nice = NICE_TO_HAVE.filter(skill =>
      lower.includes(skill.toLowerCase())
    );

    const percentage = Math.round(
      (matched.length / REQUIRED_SKILLS.length) * 100
    );

    // console.log("jd", jd);
    // console.log("lower", lower);
    console.log("matched", matched);
    console.log("gaps", gaps);
    console.log("nice", nice);
    console.log("percentage", percentage);

    setResult({
      percentage,
      matched,
      gaps,
      nice,
      seniority: lower.includes("senior")
        ? "Senior"
        : lower.includes("junior")
          ? "Junior"
          : "Mid-Level",
      salary: "₹18–28 LPA",
    });
  };

  return (
    <div className="bg-slate-50">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* HEADER */}
        <div>
          <h1 className="text-2xl font-semibold text-slate-800">
            AI Job Description Analyzer
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Paste a JD and instantly see how well you match the role
          </p>
        </div>

        {/* INPUT + SIDE INFO */}
        <div className="flex flex-col lg:flex-row gap-8">

          {/* LEFT INPUT */}
          <div className="flex-1 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-semibold text-slate-800">
                Job Description
              </h3>
              <span className="text-xs text-slate-400">
                {jd.length} chars
              </span>
            </div>

            <textarea
              rows={6}
              value={jd}
              onChange={e => setJd(e.target.value)}
              placeholder="Paste job description..."
              className="w-full border border-slate-200 rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            />

            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => setJd(SAMPLE)}
                className="text-xs text-indigo-600"
              >
                Try sample →
              </button>

              <button
                onClick={analyze}
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition"
              >
                Analyze Job Description →
              </button>
            </div>
          </div>

          {/* RIGHT SIDE INFO */}
          <div className="w-full lg:w-80 flex flex-col gap-6">

            <Card title="What we analyze">
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Required Skills</li>
                <li>• Match Score</li>
                <li>• Skill Gaps</li>
                <li>• Responsibilities</li>
                <li>• Seniority Level</li>
              </ul>
            </Card>

            <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-5">
              <h3 className="text-sm font-semibold text-indigo-700 mb-2">
                AI-Powered Insight
              </h3>
              <p className="text-xs text-slate-600">
                Our model analyzes thousands of job descriptions to
                identify patterns and skill requirements.
              </p>
            </div>

          </div>
        </div>

        {/* RESULTS */}
        {result && (
          <div className="space-y-8">

            {/* TOP METRICS */}
            <div className="flex flex-wrap gap-6">

              <MatchCircle percent={result.percentage} />

              <MetricCard label="Seniority" value={result.seniority} />
              <MetricCard label="Salary Range" value={result.salary} />
              <MetricCard
                label="Skills Matched"
                value={`${result.matched.length} of ${REQUIRED_SKILLS.length}`}
              />
            </div>

            {/* AI RECOMMENDATION */}
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5">
              <h3 className="text-sm font-semibold text-indigo-700">
                AI Recommendation
              </h3>
              <p className="text-sm text-slate-700 mt-1">
                {result.percentage > 70
                  ? "Strong candidate with solid core skill alignment."
                  : "Improve missing core skills to increase match score."}
              </p>
            </div>

            {/* SKILL SECTIONS */}
            <div className="flex flex-col md:flex-row flex-wrap gap-6">
              <div className="flex-1 min-w-[280px]">
                <SkillSection
                  title="Matched Skills"
                  skills={result.matched}
                  color="green"
                />
              </div>

              <div className="flex-1 min-w-[280px]">
              <SkillSection
                title="Skill Gaps"
                skills={result.gaps}
                color="red"
              />
              </div>

              <div className="flex-1 min-w-[280px]">
              <SkillSection
                title="Nice to Have"
                skills={result.nice}
                color="amber"
              />
              </div>

              <div className="flex-1 min-w-[280px]">
              <Card title="Key Responsibilities">
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Build scalable frontend applications</li>
                  <li>• Collaborate with backend teams</li>
                  <li>• Own feature delivery end-to-end</li>
                  <li>• Mentor junior developers</li>
                </ul>
              </Card>
              </div>

            </div>

            {/* CTA */}
            <button className="w-full bg-indigo-600 text-white py-3 rounded-xl text-sm font-medium hover:bg-indigo-700 transition">
              Generate Cover Letter for This Role →
            </button>

          </div>
        )}
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
    {children}
  </div>
);

const MetricCard = ({ label, value }) => (
  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm text-center">
    <div className="text-sm text-slate-500">{label}</div>
    <div className="text-lg font-semibold text-slate-800 mt-1">
      {value}
    </div>
  </div>
);

const SkillSection = ({ title, skills, color }) => {
  const colorMap = {
    green: "bg-green-100 text-green-700",
    red: "bg-red-100 text-red-700",
    amber: "bg-amber-100 text-amber-700",
  };

  return (
    <Card title={title}>
      <div className="flex flex-wrap gap-2">
        {skills.length ? (
          skills.map(skill => (
            <span
              key={skill}
              className={`px-3 py-1 rounded-full text-xs ${colorMap[color]}`}
            >
              {skill}
            </span>
          ))
        ) : (
          <span className="text-sm text-slate-400">
            None detected
          </span>
        )}
      </div>
    </Card>
  );
};

const MatchCircle = ({ percent }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex items-center justify-center">
      <div className="relative w-32 h-32">
        <svg width="120" height="120">
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="#e2e8f0"
            strokeWidth="8"
            fill="transparent"
          />
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="#4f46e5"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            transform="rotate(-90 60 60)"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-lg font-semibold text-slate-800">
            {percent}%
          </div>
          <div className="text-xs text-slate-500">
            Match
          </div>
        </div>
      </div>
    </div>
  );
};