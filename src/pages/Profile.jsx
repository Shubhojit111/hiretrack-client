import { useEffect, useState } from "react";
import { Pencil } from "lucide-react";
import axios from "axios";
import config from "../utils/config"

export default function Profile() {
    const {serverURL} = config
    const [user, setUser] = useState({})
    
    const [activeTab, setActiveTab] = useState("about");
    const completion = 86;

    const skills = [
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "AWS",
        "Docker",
        "Figma",
    ];

    const experience = [
        {
            title: "Senior Frontend Engineer · Tech Corp",
            years: "2021 — Present",
        },
        {
            title: "Full‑stack Developer · Startup Labs",
            years: "2019 — 2021",
        },
    ];

    const education = [
        {
            title: "B.Tech · Computer Science",
            place: "XYZ University",
            years: "2016 — 2020",
        },
    ];

    useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(`${serverURL}/api/auth/check`, { withCredentials: true })
        console.log(response.data)
        // setUser(response.data.user)
      }
      catch (err) {
        console.log(err.response?.data?.message || err.message)
      }
    }
    checkAuth()
  }, [])

    return (
        <div className="space-y-8 h-fit">
            {/* PAGE TITLE */}
            <div>
                <h1 className="text-2xl font-semibold text-slate-900">
                    My Profile
                </h1>
                <p className="text-sm text-slate-500">
                    Manage your professional identity
                </p>
            </div>

            {/* TOP: PROFILE + SNAPSHOT */}
            <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)]">
                {/* MAIN PROFILE CARD */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                    {/* Cover strip */}
                    <div className="h-20 bg-linear-to-r from-indigo-500 via-sky-500 to-cyan-400" />

                    <div className="px-6 pb-6 -mt-8 flex flex-col gap-4">
                        {/* Avatar + Name row */}
                        <div className="flex flex-col sm:flex-row sm:items-end gap-4">
                            <div className="relative">
                                <div className="w-20 h-20 rounded-2xl bg-slate-900 text-white flex items-center justify-center text-2xl font-semibold shadow-lg border-4 border-white">
                                    JD
                                </div>
                                <button
                                    type="button"
                                    className="absolute -bottom-2 -right-2 bg-white border border-slate-200 rounded-full p-1.5 shadow-sm"
                                >
                                    <Pencil size={14} className="text-slate-600" />
                                </button>
                            </div>

                            <div className="flex-1 flex flex-col gap-1">
                                <div className="flex flex-wrap items-center gap-3">
                                    <h2 className="text-lg font-semibold text-slate-900">
                                        John Developer
                                    </h2>
                                    <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-600 rounded-full font-medium">
                                        Pro
                                    </span>
                                </div>

                                <p className="text-sm text-slate-600">
                                    Senior Frontend Engineer
                                </p>

                                <div className="flex flex-wrap gap-4 text-xs text-slate-500">
                                    <span>📍 San Francisco, CA</span>
                                    <span>✉️ john@example.com</span>
                                    <span>🗓 4+ years experience</span>
                                </div>
                            </div>
                        </div>

                        {/* Short bio */}
                        <p className="text-sm text-slate-600 max-w-3xl">
                            Passionate full‑stack developer focused on building clean, fast and
                            reliable web experiences.
                        </p>
                    </div>
                </div>

                {/* SNAPSHOT + LINKS */}
                <div className="space-y-4">
                    {/* Completion */}
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full border-4 border-indigo-500/20 flex items-center justify-center">
                            <div className="text-sm font-semibold text-slate-800">
                                {completion}%
                            </div>
                        </div>
                        <div className="text-sm">
                            <p className="font-semibold text-slate-900">
                                Profile completeness
                            </p>
                            <p className="text-xs text-slate-500">
                                Add more details to reach 100%.
                            </p>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 text-sm">
                        <p className="font-semibold text-slate-900 mb-2">
                            Links & resume
                        </p>
                        <div className="space-y-1 text-xs text-slate-700 mb-3">
                            <p>github.com/johndev</p>
                            <p>linkedin.com/in/johndev</p>
                            <p>johndev.io</p>
                        </div>
                        <div className="border border-dashed border-slate-300 rounded-lg py-2 text-center text-xs text-slate-500">
                            Upload resume (demo)
                        </div>
                    </div>
                </div>
            </div>

            {/* TABS + DETAILS */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 space-y-5 text-sm">
                {/* Tabs */}
                <div className="flex flex-wrap gap-3 text-sm font-medium border-b border-slate-100 pb-3">
                    {["about", "skills", "experience", "education"].map((tab) => (
                        <button
                            key={tab}
                            type="button"
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-1.5 rounded-full capitalize transition ${activeTab === tab
                                ? "bg-indigo-600 text-white shadow-sm"
                                : "text-slate-600 hover:bg-slate-50"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* ABOUT */}
                {activeTab === "about" && (
                    <div className="space-y-3 text-slate-600">
                        <p>
                            This is a simple demo summary area where you can describe how you work,
                            what you care about, and the kind of problems you like solving.
                        </p>
                        <p>
                            In a real product, this could be a rich text field or guided questions.
                            Here it just gives a clean, readable overview.
                        </p>
                    </div>
                )}

                {/* SKILLS */}
                {activeTab === "skills" && (
                    <div className="space-y-3">
                        <p className="text-xs text-slate-500">
                            Core skills grouped in a compact view.
                        </p>
                        <div className="flex flex-wrap gap-2 text-xs text-slate-700">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* EXPERIENCE */}
                {activeTab === "experience" && (
                    <div className="space-y-3">
                        {experience.map((exp) => (
                            <div key={exp.title} className="border border-slate-200 rounded-xl p-3">
                                <p className="text-slate-900 text-sm">
                                    {exp.title}
                                </p>
                                <p className="text-xs text-slate-500">
                                    {exp.years}
                                </p>
                            </div>
                        ))}
                    </div>
                )}

                {/* EDUCATION */}
                {activeTab === "education" && (
                    <div className="space-y-3">
                        {education.map((edu) => (
                            <div key={edu.title} className="border border-slate-200 rounded-xl p-3">
                                <p className="text-slate-900 text-sm">
                                    {edu.title}
                                </p>
                                <p className="text-xs text-slate-500">
                                    {edu.place} · {edu.years}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}