import { Plus, Trash2, Pencil } from "lucide-react";
import { useEffect, useState } from "react";

export default function Profile() {
    const [activeTab, setActiveTab] = useState("skills");

    const [skills, setSkills] = useState([
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Node.js", level: 75 },
        { name: "Python", level: 70 },
        { name: "AWS", level: 60 },
        { name: "GraphQL", level: 65 },
        { name: "Docker", level: 55 },
        { name: "Figma", level: 50 },
    ]);

    // ✅ Added missing states
    const [experience] = useState([
        {
            company: "Tech Corp",
            role: "Frontend Developer",
            years: "2021 - Present",
        },
    ]);

    const [education] = useState([
        {
            school: "XYZ University",
            degree: "B.Tech CSE",
            years: "2016 - 2020",
        },
    ]);

    const [newSkill, setNewSkill] = useState("");
    const [newExperience, setNewExperience] = useState({
        company: "",
        role: "",
        years: "",
    });
    const [newEducation, setNewEducation] = useState({
        school: "",
        degree: "",
        years: "",
    });

    const addSkill = () => {
        if (!newSkill.trim()) return;
        setSkills([...skills, { name: newSkill, level: 50 }]);
        setNewSkill("");
    };

    const addExperience = () => {
        if (!newExperience.company.trim() || !newExperience.role.trim() || !newExperience.years.trim()) return;
        setExperience([...experience, newExperience]);
        setNewExperience({ company: "", role: "", years: "" });
    };

    const addEducation = () => {
        if (!newEducation.school.trim() || !newEducation.degree.trim() || !newEducation.years.trim()) return;
        setEducation([...education, newEducation]);
        setNewEducation({ school: "", degree: "", years: "" });
    };

    // ✅ Added missing removeSkill
    const removeSkill = (skillName) => {
        setSkills(skills.filter((skill) => skill.name !== skillName));
    };

    const completion = 72;

    return (
        <div className="space-y-8 h-screen">

            {/* PAGE TITLE */}
            <div>
                <h1 className="text-2xl font-semibold text-slate-800">
                    My Profile
                </h1>
                <p className="text-sm text-slate-500">
                    Manage your professional identity
                </p>
            </div>

            {/* PROFILE HEADER CARD */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">

                {/* Cover Photo */}
                <div className="h-24 bg-[#5cbaed] relative " />

                {/* Content Section */}
                <div className="px-6 pb-6 -mt-5 z-40 flex flex-col gap-4">

                    {/* Avatar + Name Row */}
                    <div className="flex items-end gap-4">

                        {/* Avatar */}
                        <div className="relative">
                            <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-indigo-500 to-cyan-500 text-white flex items-center justify-center text-2xl font-semibold shadow-md border-4 border-white">
                                JD
                            </div>

                            {/* Edit Icon */}
                            <button className="absolute -bottom-2 -right-2 bg-white border border-slate-200 rounded-full p-1 shadow hover:bg-slate-100 transition">
                                <Pencil size={14} className="text-slate-600" />
                            </button>
                        </div>

                        {/* Name + Badge */}
                        <div className="flex flex-col gap-1 z-40">
                            <div className="flex items-center gap-3">
                                <h2 className="text-lg font-semibold text-slate-800">
                                    John Developer
                                </h2>

                                <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-600 rounded-full font-medium">
                                    ✨ Pro
                                </span>
                            </div>

                            <p className="text-sm text-slate-500">
                                Senior Frontend Engineer
                            </p>
                        </div>
                    </div>

                    {/* Info Row */}
                    <div className="flex flex-wrap gap-6 text-xs text-slate-500">
                        <span>📍 San Francisco, CA</span>
                        <span>✉️ john@example.com</span>
                        <span>🗓 4+ years exp</span>
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-slate-600 max-w-3xl">
                        Passionate full-stack developer with 4+ years of experience
                        building scalable web applications. Love clean code, great UX,
                        and shipping fast.
                    </p>

                </div>
            </div>

            {/* COMPLETION + LINKS */}
            <div className="flex flex-col md:flex-row gap-6">

                {/* COMPLETION CARD */}
                <div className="flex-1 bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex items-center gap-6">

                    <div className="relative w-20 h-20">
                        <svg width="80" height="80">
                            <circle
                                cx="40"
                                cy="40"
                                r="32"
                                stroke="#e2e8f0"
                                strokeWidth="6"
                                fill="transparent"
                            />
                            <circle
                                cx="40"
                                cy="40"
                                r="32"
                                stroke="#4f46e5"
                                strokeWidth="6"
                                fill="transparent"
                                strokeDasharray={2 * Math.PI * 32}
                                strokeDashoffset={
                                    2 * Math.PI * 32 -
                                    (completion / 100) * 2 * Math.PI * 32
                                }
                                strokeLinecap="round"
                                transform="rotate(-90 40 40)"
                            />
                        </svg>

                        <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-slate-700">
                            {completion}%
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-slate-800">
                            Profile Completeness
                        </h3>
                        <p className="text-xs text-slate-500">
                            Add more details to stand out
                        </p>
                    </div>
                </div>

                {/* LINKS CARD */}
                <div className="flex-1 bg-white rounded-2xl shadow-sm border border-slate-200 p-6 space-y-3">
                    <h3 className="text-sm font-semibold text-slate-800">
                        Links & Resume
                    </h3>

                    <div className="text-sm text-slate-600 space-y-1">
                        <p>github.com/johndev</p>
                        <p>linkedin.com/in/johndev</p>
                        <p>johndev.io</p>
                    </div>

                    <div className="border border-dashed border-slate-300 rounded-xl py-3 text-center text-xs text-slate-500 cursor-pointer hover:bg-slate-50 transition">
                        Upload Resume (PDF)
                    </div>
                </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col gap-6">

                <div className="flex gap-4 text-sm font-medium">
                    {["skills", "experience", "education"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 rounded-lg transition capitalize ${activeTab === tab
                                ? "bg-indigo-100 text-indigo-600"
                                : "text-slate-500 hover:text-slate-700"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* SKILLS */}
                {activeTab === "skills" && (
                    <div className="flex flex-col gap-6">

                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="flex items-center gap-2 bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-full text-sm"
                                >
                                    {skill.name}
                                    <button
                                        onClick={() => removeSkill(skill.name)}
                                        className="text-indigo-500 hover:text-red-500"
                                    >
                                        <Trash2 size={14} />
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-3">
                            <input
                                type="text"
                                value={newSkill}
                                onChange={(e) => setNewEducation(e.target.value)}
                                placeholder="Add new skill..."
                                className="flex-1 border border-slate-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <button
                                onClick={addSkill}
                                className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700"
                            >
                                <Plus size={16} />
                                Add
                            </button>
                        </div>
                    </div>
                )}

                {/* EXPERIENCE */}
                {activeTab === "experience" && (
                    <>
                        <div className="flex flex-col gap-4">
                            {experience.map((exp, i) => (
                                <div
                                    key={i}
                                    className="border border-slate-200 rounded-xl p-4 flex flex-col gap-1"
                                >
                                    <h4 className="text-sm font-semibold text-slate-800">
                                        {exp.role}
                                    </h4>
                                    <p className="text-sm text-slate-600">
                                        {exp.company}
                                    </p>
                                    <p className="text-xs text-slate-500">
                                        {exp.years}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-3">
                            <input
                                type="text"
                                value={newExperience}
                                onChange={(e) => setNewExperience(e.target.value)}
                                placeholder="Add new skill..."
                                className="flex-1 border border-slate-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <button
                                onClick={addExperience}
                                className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700"
                            >
                                <Plus size={16} />
                                Add
                            </button>
                        </div>
                    </>
                )}

                {/* EDUCATION */}
                {activeTab === "education" && (
                    <>
                        <div className="flex flex-col gap-4">
                            {education.map((edu, i) => (
                                <div
                                    key={i}
                                    className="border border-slate-200 rounded-xl p-4 flex flex-col gap-1"
                                >
                                    <h4 className="text-sm font-semibold text-slate-800">
                                        {edu.degree}
                                    </h4>
                                    <p className="text-sm text-slate-600">
                                        {edu.school}
                                    </p>
                                    <p className="text-xs text-slate-500">
                                        {edu.years}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-3">
                            <input
                                type="text"
                                value={newEducation}
                                onChange={(e) => setNewEducation(e.target.value)}
                                placeholder="Add new skill..."
                                className="flex-1 border border-slate-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <button
                                onClick={addEducation}
                                className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700"
                            >
                                <Plus size={16} />
                                Add
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>

    );
}