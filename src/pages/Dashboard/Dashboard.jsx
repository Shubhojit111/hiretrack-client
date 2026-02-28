import axios from "axios";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import config from "../../utils/config"

const monthlyData = [
  { month: "Sep", value: 5 },
  { month: "Oct", value: 8 },
  { month: "Nov", value: 12 },
  { month: "Dec", value: 6 },
  { month: "Jan", value: 9 },
  { month: "Feb", value: 7 },
];



const Dashboard = () => {
  const serverURL = config.serverURL;
  const [applications, setApplications] = useState([]);

  const statusData = [
    { name: "Applied", value: applications.filter(app => app.status === "Applied").length, color: "#3b82f6" },
    { name: "Interview", value: applications.filter(app => app.status === "Interview").length, color: "#f59e0b" },
    { name: "Offered", value: applications.filter(app => app.status === "Offered").length, color: "#10b981" },
    { name: "Rejected", value: applications.filter(app => app.status === "Rejected").length, color: "#ef4444" },
    { name: "Saved", value: applications.filter(app => app.status === "Saved").length, color: "#6b7280" },
  ];

  useEffect(() => {
    const getApplications = async () => {
      try {
        const response = await axios.get(
          `${serverURL}/api/job/read`,
          {
            withCredentials: true,
          }
        );
        setApplications(response.data.jobs);
      } catch (error) {
        console.log(error.response?.data?.message || error.message);
      }
    };
    getApplications();
  }, []);

  return (
    <div className="flex flex-col h-screen bg-[#f5f6f8] animate-fadeIn">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
        <p className="text-gray-500 text-sm">
          Your job search at a glance
        </p>
      </div>

      {/* Stats Cards */}
      <div className="flex flex-wrap gap-6 mb-8">
        <Card title="Total Applications" value={applications.length} />
        <Card
          title="Interviews"
          value={
            applications.filter((app) => app.status === "Interview").length
          }
        />
        <Card
          title="Offers"
          value={
            applications.filter((app) => app.status === "Offered").length
          }
        />
        <Card
          title="Rejected"
          value={
            applications.filter((app) => app.status === "Rejected").length
          }
        />
        <Card
          title="Saved"
          value={
            applications.filter((app) => app.status === "Saved").length
          }
        />
      </div>

      {/* Charts Section */}
      <div className="flex flex-col lg:flex-row gap-6 mb-8">

        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm flex-1 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
          <h3 className="font-medium text-gray-700 mb-4">
            Monthly Applications
          </h3>
          <div className="h-72 flex items-center justify-center">
            <BarChart width={500} height={280} data={monthlyData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#3b82f6" radius={[6, 6, 0, 0]} />
            </BarChart>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm flex-1 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
          <h3 className="font-medium text-gray-700 mb-4">
            Status Breakdown
          </h3>
          <div className="h-72 flex items-center justify-center">
            <PieChart width={300} height={280}>
              <Pie
                data={statusData}
                dataKey="value"
                innerRadius={60}
                outerRadius={90}
              >
                {statusData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </div>
        </div>
      </div>

      {/* Recent Applications Table */}
      <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
        <h3 className="font-medium text-gray-700 mb-4">
          Recent Applications
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-center">
            <thead className="text-gray-500 border-b">
              <tr>
                <th className="py-3">Company</th>
                <th>Role</th>
                <th>Status</th>
                <th>Location</th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              {[...applications].reverse().slice(0, 5).map((app, index) => (
                <TableRow
                  key={index}
                  company={app.company}
                  role={app.position}
                  status={app.status}
                  location={app.location}
                />
              ))}
            </tbody>
          </table>
        </div>


      </div>


    </div>
    // </div>
  );
};

export default Dashboard;

/* ================== COMPONENTS ================== */

const Card = ({ title, value }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm min-w-[220px] flex-1 
                  transition-all duration-300 ease-in-out
                  hover:-translate-y-1 hover:shadow-xl hover:bg-gray-50 cursor-pointer">
    <p className="text-gray-500 text-sm">{title}</p>
    <h2 className="text-2xl font-semibold mt-2 text-gray-800">{value}</h2>
  </div>
);

const TableRow = ({ company, role, status, location }) => {
  const statusColor = {
    Applied: "bg-blue-100 text-blue-700",
    Interview: "bg-yellow-100 text-yellow-700",
    Offered: "bg-green-100 text-green-700",
    Rejected: "bg-red-100 text-red-700",
  };

  return (
    <tr className="border-b border-gray-200 transition-all duration-200 ease-in-out hover:bg-gray-100">
      <td className="py-3 font-medium">{company}</td>
      <td>{role}</td>
      <td>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor[status]
            }`}
        >
          {status}
        </span>
      </td>
      <td>{location}</td>
    </tr>
  );
};