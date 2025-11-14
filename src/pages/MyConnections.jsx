import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../components/provider/AuthProvider";
import { toast } from "react-toastify";

const MyConnections = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    if (!userEmail) return;

    fetch(`http://localhost:3000/requests?email=${userEmail}`)
      .then((res) => res.json())
      .then((data) => setRequests(data));
  }, [userEmail]);

  // DELETE request
  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:3000/requests/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();
    if (data.success) {
      toast.success("Deleted!");
      setRequests((prev) => prev.filter((item) => item._id !== id));
    }
  };

  // UPDATE request
  const handleUpdate = async (id) => {
    const newNote = prompt("Enter new note:");
    if (!newNote) return;

    const res = await fetch(`http://localhost:3000/requests/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ note: newNote }),
    });

    const data = await res.json();
    if (data.success) {
      toast.success("Updated!");
      setRequests((prev) =>
        prev.map((item) =>
          item._id === id ? { ...item, note: newNote } : item
        )
      );
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-5">My Connections</h1>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3">Partner</th>
            <th className="p-3">Subject</th>
            <th className="p-3">Study Mode</th>
            <th className="p-3">Update</th>
            <th className="p-3">Delete</th>
          </tr>
        </thead>

        <tbody>
          {requests.map((req) => (
            <tr key={req._id} className="border-b">
              <td className="p-3 flex items-center gap-3">
                <img
                  src={req.partnerProfileImage}
                  className="w-12 h-12 rounded-full"
                />
                {req.partnerName}
              </td>

              <td className="p-3">{req.subject}</td>
              <td className="p-3">{req.studyMode}</td>

              <td className="p-3">
                <button
                  onClick={() => handleUpdate(req._id)}
                  className="px-3 py-1 bg-blue-500 text-white rounded"
                >
                  Update
                </button>
              </td>

              <td className="p-3">
                <button
                  onClick={() => handleDelete(req._id)}
                  className="px-3 py-1 bg-red-600 text-white rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyConnections;
