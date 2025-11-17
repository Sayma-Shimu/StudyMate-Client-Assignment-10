import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { AuthContext } from "../components/provider/AuthProvider";

const EditProfile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const userEmail = user?.email;

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (!userEmail) return;

    axios
      .get(`https://study-mates-projects.vercel.app/profile?email=${userEmail}`)
      .then((res) => {
        // if (res.data.length > 0) setProfile(res.data[0]);
        // else toast.error("Profile not found");
        console.log(res.data)
        setProfile(res.data)
      })
      .catch(() => toast.error("Failed to load profile"));
  }, [userEmail]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!profile || !profile._id) return toast.error("Invalid profile");

    try {
      const res = await axios.patch(
        `https://study-mates-projects.vercel.app/profile/update/${profile._id}`,
        {
          name: profile.name,
          profileImage: profile.profileImage,
          subject: profile.subject,
          studyMode: profile.studyMode,
          availabilityTime: profile.availabilityTime,
          location: profile.location,
          experienceLevel: profile.experienceLevel,
        }
      );

      if (res.data.success || res.status === 200) {
        toast.success("Profile Updated Successfully!");
        navigate("/profile");
      } else {
        toast.error("Update failed");
      }
    } catch {
      toast.error("Update failed");
    }
  };

  if (!profile)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">Loading profile...</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-green-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-green-400 p-6 text-white text-center">
          <h2 className="text-3xl font-bold">Edit Profile</h2>
          <p className="mt-1 opacity-90">Update your details below</p>
        </div>

        {/* Form */}
        <div className="p-6">
          <form className="grid gap-4" onSubmit={handleUpdate}>
            <input
              type="text"
              value={profile.name || ""}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              className="input input-bordered w-full"
              placeholder="Name"
              required
            />
            <input
              type="text"
              value={profile.profileImage || ""}
              onChange={(e) =>
                setProfile({ ...profile, profileImage: e.target.value })
              }
              className="input input-bordered w-full"
              placeholder="Profile Image URL"
              required
            />
            <input
              type="text"
              value={profile.subject || ""}
              onChange={(e) =>
                setProfile({ ...profile, subject: e.target.value })
              }
              className="input input-bordered w-full"
              placeholder="Subject"
              required
            />
            <select
              value={profile.studyMode || ""}
              onChange={(e) =>
                setProfile({ ...profile, studyMode: e.target.value })
              }
              className="select select-bordered w-full"
              required
            >
              <option value="">Select Study Mode</option>
              <option>Online</option>
              <option>Offline</option>
            </select>
            <input
              type="text"
              value={profile.availabilityTime || ""}
              onChange={(e) =>
                setProfile({ ...profile, availabilityTime: e.target.value })
              }
              className="input input-bordered w-full"
              placeholder="Availability Time"
              required
            />
            <input
              type="text"
              value={profile.location || ""}
              onChange={(e) =>
                setProfile({ ...profile, location: e.target.value })
              }
              className="input input-bordered w-full"
              placeholder="Location"
              required
            />
            <select
              value={profile.experienceLevel || ""}
              onChange={(e) =>
                setProfile({ ...profile, experienceLevel: e.target.value })
              }
              className="select select-bordered w-full"
              required
            >
              <option value="">Select Experience Level</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Expert</option>
            </select>

            <button className="btn bg-green-600 text-white mt-4 hover:bg-green-700 transition-all duration-300 shadow-lg">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
