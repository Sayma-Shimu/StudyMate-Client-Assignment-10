import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../components/provider/AuthProvider";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const API_URL = "https://study-mates-projects.vercel.app";
const COLORS = ["#22c55e", "#3b82f6", "#a855f7", "#f97316"];

const Overview = () => {
  const { user } = useContext(AuthContext);

  const [partners, setPartners] = useState([]);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    const loadData = async () => {
      try {
        const partnersRes = await axios.get(`${API_URL}/partners`);
        const requestsRes = await axios.get(
          `${API_URL}/requests?email=${user.email}`
        );

        setPartners(partnersRes.data.data || []);
        setRequests(requestsRes.data || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [user?.email]);

  // 🔢 Cards data
  const subjectCount = {};
  const studyModeCount = {};

  partners.forEach((p) => {
    subjectCount[p.subject] = (subjectCount[p.subject] || 0) + 1;
    studyModeCount[p.studyMode] = (studyModeCount[p.studyMode] || 0) + 1;
  });

  const topSubject =
    Object.keys(subjectCount).sort(
      (a, b) => subjectCount[b] - subjectCount[a]
    )[0] || "N/A";

  const barData = Object.keys(subjectCount).map((key) => ({
    subject: key,
    count: subjectCount[key],
  }));

  const pieData = Object.keys(studyModeCount).map((key) => ({
    name: key,
    value: studyModeCount[key],
  }));

  if (loading) {
    return (
      <div className="flex justify-center items-center h-48">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Dashboard Overview</h2>

      {/* 🔹 Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Total Partners" value={partners.length} color="green" />
        <Card title="My Requests" value={requests.length} color="blue" />
        <Card title="Top Subject" value={topSubject} color="purple" />
      </div>

      {/* 🔹 Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-4">Partners by Subject</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <XAxis dataKey="subject" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-4">Study Mode Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" label>
                {pieData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 🔹 Data Table */}
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="font-semibold mb-4">My Requests</h3>

        {requests.length === 0 ? (
          <p className="text-gray-500">No requests found</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Partner</th>
                  <th>Subject</th>
                  <th>Study Mode</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((req, index) => (
                  <tr key={req._id}>
                    <td>{index + 1}</td>
                    <td>{req.partnerName}</td>
                    <td>{req.subject}</td>
                    <td>{req.studyMode}</td>
                    <td>
                      {new Date(req.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

// 🔹 Reusable Card Component
const Card = ({ title, value, color }) => (
  <div className="bg-white rounded-xl shadow p-6">
    <h3 className="text-gray-500 text-sm">{title}</h3>
    <p className={`text-3xl font-bold text-${color}-600`}>
      {value}
    </p>
  </div>
);

export default Overview;
