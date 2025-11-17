import React, { useEffect, useState, useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../components/provider/AuthProvider";

const MyConnections = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;

  const [requests, setRequests] = useState([]);
  const [editing, setEditing] = useState(null); 
  const [formData, setFormData] = useState({ note: "" });

  useEffect(() => {
    if (!userEmail) return;

    fetch(`http://localhost:3000/requests?email=${encodeURIComponent(userEmail)}`)
      .then((res) => res.json())
      .then((data) => setRequests(data))
      .catch(() => toast.error("Failed to load requests"));
  }, [userEmail]);

  // OPEN UPDATE 
  const openUpdateForm = (req) => {
    setEditing(req);
    setFormData({ note: req.note || "" });
  };

  // UPDATE SUBMIT
  const handleUpdateSubmit = async () => {
    try {
      const res = await fetch(`http://localhost:3000/requests/${editing._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Updated successfully!");

        setRequests((prev) =>
          prev.map((item) =>
            item._id === editing._id ? { ...item, ...formData } : item
          )
        );

        setEditing(null);
      }
    } catch (err) {
      toast.error("Update failed");
    }
  };

  // DELETE
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this request?")) return;

    try {
      const res = await fetch(`http://localhost:3000/requests/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Deleted!");
        setRequests((prev) => prev.filter((r) => r._id !== id));
      }
    } catch {
      toast.error("Delete failed");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-5">My Connections</h1>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3">Partner</th>
              <th className="p-3">Subject</th>
              <th className="p-3">Study Mode</th>
              <th className="p-3">Update</th>
              <th className="p-3">Delete</th>
            </tr>
          </thead>

          <tbody>
            {requests.map((r) => (
              <tr key={r._id} className="border-b">
                <td className="p-3 flex items-center gap-3">
                  <img src={r.partnerProfileImage} className="w-12 h-12 rounded-full" />
                  <div>
                    <div className="font-semibold">{r.partnerName}</div>
                    <div className="text-sm text-gray-600">
                      {r.note || "No note"}
                    </div>
                  </div>
                </td>

                <td className="p-3">{r.subject}</td>
                <td className="p-3">{r.studyMode}</td>

                <td className="p-3">
                  <button
                    onClick={() => openUpdateForm(r)}
                    className="px-3 py-1 bg-blue-500 text-white rounded"
                  >
                    Update
                  </button>
                </td>

                <td className="p-3">
                  <button
                    onClick={() => handleDelete(r._id)}
                    className="px-3 py-1 bg-red-600 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {requests.length === 0 && (
              <tr>
                <td colSpan={5} className="p-6 text-center text-gray-500">
                  No connections yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* UPDATE MODAL */}
      {editing && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white p-6 w-96 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-3">Update Info</h2>

            <label className="block mb-2 text-sm font-medium">Note</label>
            <textarea
              value={formData.note}
              onChange={(e) => setFormData({ ...formData, note: e.target.value })}
              className="w-full border p-2 rounded"
            />

            <div className="flex justify-end gap-3 mt-4">
              <button onClick={() => setEditing(null)} className="px-3 py-2 bg-gray-300 rounded">
                Cancel
              </button>
              <button onClick={handleUpdateSubmit} className="px-3 py-2 bg-blue-600 text-white rounded">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyConnections;
