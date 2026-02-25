import axios from "axios";
import { X } from "lucide-react";
import { useEffect, useState } from "react";


const AddJob = ({ isAddOpen, onAddClose, onAddJob }) => {
    const [formData, setFormData] = useState({
        company: "",
        position: "",
        location: "Anonymous",
        salary: "",
        link: "",
        status: "Saved",
    });

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value)
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:5000/api/job/create",
                formData, { withCredentials: true })
            console.log(response.data.message)
            onAddJob(response.data.job);
            onAddClose();
            setFormData({
                company: "",
                position: "",
                location: "Anonymous",
                salary: "",
                link: "",
                status: "Saved",
            });
        }

        catch (err) {
            console.log(err.response?.data?.message || err.message)
        }
    }

    if (!isAddOpen) return null;

    return (
        <>
            {/* Overlay */}
            <div
                onClick={onAddClose}
                className="fixed inset-0 h-screen bg-black/40 backdrop-blur-sm z-40"
            />

            {/* Modal */}
            <div className="fixed inset-0 flex items-center justify-center z-50 px-4">

                <div className="w-full  max-w-2xl bg-white rounded-2xl shadow-2xl p-8 relative animate-[fadeIn_0.25s_ease-in-out]">

                    <div className="top flex justify-between items-center mb-6">
                        {/* Title */}
                        <h2 className="text-2xl font-semibold text-gray-800 ">
                            Add Application
                        </h2>

                        {/* Close Button */}
                        <button
                            onClick={onAddClose}
                            className=" text-gray-400 cursor-pointer hover:text-gray-700 transition"
                        >
                            <X size={28} />
                        </button>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5">

                        {/* Row 1 */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-medium text-gray-600">
                                    Company *
                                </label>
                                <input
                                    type="text"
                                    name="company"
                                    onChange={handleChange}
                                    className="w-full mt-1 px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-600">
                                    Position *
                                </label>
                                <input
                                    type="text"
                                    name="position"
                                    onChange={handleChange}
                                    className="w-full mt-1 px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-medium text-gray-600">
                                    Location
                                </label>
                                <input
                                    type="text"
                                    name="location"
                                    onChange={handleChange}
                                    className="w-full mt-1 px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-600">
                                    Salary
                                </label>
                                <input
                                    type="text"
                                    name="salary"
                                    onChange={handleChange}
                                    className="w-full mt-1 px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            {/* status */}
                            <div>
                                <label className="text-sm font-medium text-gray-600">
                                    Status
                                </label>
                                <select
                                    name="status"
                                    onChange={handleChange}
                                    className="w-full mt-1 px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                >
                                    <option>Saved</option>
                                    <option>Applied</option>
                                    <option>Interview</option>
                                    <option>Rejected</option>
                                    <option>Offered</option>
                                </select>
                            </div>

                            {/* Link */}
                            <div>
                                <label className="text-sm font-medium text-gray-600">
                                    Application Link
                                </label>
                                <input
                                    type="text"
                                    name="link"
                                    onChange={handleChange}
                                    className="w-full mt-1 px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>


                        </div>

                        {/* Notes
                        <div>
                            <label className="text-sm font-medium text-gray-600">
                                Notes
                            </label>
                            <textarea
                                name="notes"
                                rows="3"
                                onChange={handleChange}
                                className="w-full mt-1 px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div> */}

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl font-medium"
                        >
                            Add Application
                        </button>

                    </form>
                </div>
            </div>
        </>
    );
};

export default AddJob;
