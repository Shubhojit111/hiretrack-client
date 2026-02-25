import {
  Search,
  Filter,
  Plus,
  ExternalLink,
  Pencil,
  Trash2,
} from "lucide-react";
import { useEffect, useState } from "react";
import AddJob from "./AddJob";
import axios from "axios";
import EditJob from "./EditJob";
import { Link } from "react-router-dom";
import config from "../../utils/config"


const statusStyles = {
  Applied: "bg-blue-100 text-blue-600",
  Interview: "bg-yellow-100 text-yellow-600",
  Offered: "bg-green-100 text-green-600",
  Rejected: "bg-red-100 text-red-600",
  Saved: "bg-gray-100 text-gray-600",
};



const JobTracker = () => {
  const serverURL = config.serverURL;

  const [isAddOpen, setIsAddOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [applications, setApplications] = useState([])


  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const getAllJobs = async () => {
      try {
        const response = await axios.get(
          `${serverURL}/api/job/read`,
          {
            withCredentials: true
          })
        console.log(response.data.jobs)
        setApplications(response.data.jobs)
      }
      catch (error) {
        console.log(error.response?.data?.message || "Failed to fetch jobs")
      } finally {
        setLoading(false)
      }
    }
    getAllJobs();
  }, [])

  const handleAddJob = (newJob) => {
    setApplications(prev => [...prev, newJob]);
  };

  const handleUpdateJob = (updatedJob) => {
    setApplications(prev =>
      prev.map(job =>
        job._id === updatedJob._id ? updatedJob : job
      )
    );
  };



  const handleDelete = async (id) => {
    try {
      const response = await axios.post(`${serverURL}/api/job/delete/${id}`,
        {},
        { withCredentials: true }
      )
      console.log(response.data.message)
      setApplications(prev => prev.filter((app) => app._id !== id))
    }
    catch (error) {
      console.log(error.response?.data?.message || error.message)
    }
  }

  const [selectedJob, setSelectedJob] = useState({})

  const handleEdit = async (job) => {
    setSelectedJob(job)
    setIsEditOpen(true)
  }
  const [selectedStatus, setSelectedStatus] = useState("All")

  const [searchTerm, setSearchTerm] = useState("");

  const filteredApplications = applications
    .filter((job) =>
      selectedStatus === "All"
        ? true
        : job.status === selectedStatus
    )
    .filter((job) =>
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.position.toLowerCase().includes(searchTerm.toLowerCase())
    );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-60">
        <div className="text-gray-500 text-lg">Loading applications...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-60">
        <div className="bg-red-100 text-red-600 px-6 py-3 rounded">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Job Tracker
          </h1>
          <p className="text-sm text-gray-500">
            Manage all your applications
          </p>
        </div>

        <button onClick={() => setIsAddOpen(prev => !prev)}
          className="flex items-center gap-2 cursor-pointer bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
          <Plus size={18} />
          Add application
        </button>
      </div>

      {/* Search + Filter */}
      <div className="flex gap-4">

        {/* Search */}
        <div className="relative w-96">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search company or role..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Filter */}
        <button
          className="flex items-center gap-2 border cursor-pointer px-4 py-2.5 rounded-lg text-sm text-gray-600">
          <Filter size={16} />
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="bg-transparent outline-none cursor-pointer"
          >
            <option value="All">All</option>
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Rejected">Rejected</option>
            <option value="Offered">Offered</option>
            <option value="Saved">Saved</option>
          </select>
        </button>


      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full text-sm">

            {/* Table Head */}
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="text-center px-6 py-4">Company</th>
                <th className="text-center px-6 py-4">Role</th>
                <th className="text-center px-6 py-4">Location</th>
                <th className="text-center px-6 py-4">Salary</th>
                <th className="text-center px-6 py-4">Status</th>
                <th className="text-center px-6 py-4">Actions</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y">

              {filteredApplications.map((app) => (
                <tr key={app._id} className="hover:bg-gray-50 transition">

                  <td className="px-6 py-4 font-medium text-gray-800 text-center">
                    {app.company}
                  </td>

                  <td className="px-6 py-4 text-gray-600 text-center">
                    {app.position}
                  </td>

                  <td className="px-6 py-4 text-gray-600 text-center">
                    {app.location || "location1"}
                  </td>

                  <td className="px-6 py-4 text-gray-600 text-center">
                    {app.salary || "salary1"}
                  </td>

                  <td className="px-6 py-4 text-center">
                    <span
                      className={`px-3 py-1 text-xs rounded-full font-medium ${statusStyles[app.status]}`}
                    >
                      {app.status || "status1"}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center gap-4 text-gray-500">

                      <Link to={
                        app.link.startsWith("http")
                          ? app.link
                          : `https://${app.link}`
                      }
                        target="_blank">
                        <ExternalLink
                          size={18} color="blue"
                          className="cursor-pointer hover:text-blue-600 transition"
                        />
                      </Link>

                      <button
                        onClick={() => handleEdit(app)}
                      >
                        <Pencil
                          size={18} color="green"
                          className="cursor-pointer hover:text-green-600 transition"
                        />
                      </button>

                      <button
                        onClick={() => handleDelete(app._id)}
                      >
                        <Trash2
                          size={18} color="red"
                          className="cursor-pointer hover:text-red-600 transition"
                        />
                      </button>

                    </div>
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>

      <AddJob
        isAddOpen={isAddOpen}
        onAddClose={() => setIsAddOpen(false)}
        onAddJob={handleAddJob}
      />

      <EditJob
        jobData={selectedJob}
        isEditOpen={isEditOpen}
        onEditClose={() => setIsEditOpen(false)}
        onUpdateJob={handleUpdateJob}
      />


    </div>
  );
};

export default JobTracker;
