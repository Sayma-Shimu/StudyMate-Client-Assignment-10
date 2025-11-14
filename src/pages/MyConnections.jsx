import React, { useEffect, useState, useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../components/provider/AuthProvider";


const MyConnections = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    if (!userEmail) return;

    fetch(`http://localhost:3000/requests?email=${encodeURIComponent(userEmail)}`)
      .then((res) => res.json())
      .then((data) => setRequests(data))
      .catch((err) => {
        console.error(err);
        toast.error("Failed to load requests");
      });
  }, [userEmail]);

  const handleDelete = async (id) => {
    const ok = window.confirm("Are you sure you want to delete this request?");
    if (!ok) return;

    try {
      const res = await fetch(`http://localhost:3000/requests/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.deletedCount && data.deletedCount > 0) {
        toast.success("Request deleted");
        setRequests((prev) => prev.filter((r) => r._id !== id));
      } else if (data.success) {
       
        toast.success("Request deleted");
        setRequests((prev) => prev.filter((r) => r._id !== id));
      } else {
        toast.error("Delete failed");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error");
    }
  };

  const handleUpdate = async (id) => {
    const newNote = window.prompt("Enter new note:");
    if (newNote === null) return; 
    try {
      const res = await fetch(`http://localhost:3000/requests/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ note: newNote }),
      });
      const data = await res.json();
      if (data.modifiedCount && data.modifiedCount > 0) {
        toast.success("Updated");
        setRequests((prev) => prev.map((r) => (r._id === id ? { ...r, note: newNote } : r)));
      } else if (data.success) {
        toast.success("Updated");
        setRequests((prev) => prev.map((r) => (r._id === id ? { ...r, note: newNote } : r)));
      } else {
        toast.error("Update failed");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error");
    }
  };

  if (!userEmail) {
    return (
      <div className="p-6 text-center">
        <p className="text-lg">Please log in to see your connections.</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-5">My Connections</h1>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left">Partner</th>
              <th className="p-3 text-left">Subject</th>
              <th className="p-3 text-left">Study Mode</th>
              <th className="p-3">Update</th>
              <th className="p-3">Delete</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((r) => (
              <tr key={r._id} className="border-b">
                <td className="p-3 flex items-center gap-3">
                  <img src={r.partnerProfileImage} alt="" className="w-12 h-12 rounded-full" />
                  <div>
                    <div className="font-semibold">{r.partnerName}</div>
                    <div className="text-sm text-gray-600">{r.note || "No note"}</div>
                  </div>
                </td>
                <td className="p-3">{r.subject}</td>
                <td className="p-3">{r.studyMode}</td>
                <td className="p-3">
                  <button onClick={() => handleUpdate(r._id)} className="px-3 py-1 bg-blue-500 text-white rounded">
                    Update
                  </button>
                </td>
                <td className="p-3">
                  <button onClick={() => handleDelete(r._1d || r._id)} className="px-3 py-1 bg-red-600 text-white rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {requests.length === 0 && (
              <tr>
                <td colSpan={5} className="p-6 text-center text-gray-600">
                  No connections yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyConnections;
