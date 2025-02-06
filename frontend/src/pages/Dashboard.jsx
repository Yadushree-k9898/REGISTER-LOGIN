import { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [visiblePasswords, setVisiblePasswords] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("Unauthorized. Please log in.");
          return;
        }
        const res = await fetch("http://localhost:5000/api/auth/users", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        setUsers(data);
        const visibilityState = data.reduce((acc, user) => {
          acc[user._id] = false;
          return acc;
        }, {});
        setVisiblePasswords(visibilityState);
      } catch (err) {
        console.error("Error fetching users:", err);
        setError("Failed to fetch user data");
      }
    };
    fetchUsers();
  }, []);

  const togglePasswordVisibility = (userId) => {
    setVisiblePasswords((prev) => ({
      ...prev,
      [userId]: !prev[userId],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto pt-16 px-4 pb-6"> {/* Increased max-width and adjusted padding */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center uppercase tracking-wide">
          Logged-in Users
        </h2>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {error && (
            <div className="mx-6 mt-4 p-4 bg-red-50 rounded-lg">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          {users.length > 0 ? (
            <div className="p-8"> {/* Increased padding for better spacing */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="px-8 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-8 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                      <th className="px-8 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date of Birth</th>
                      <th className="px-8 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Password</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {users.map((user) => (
                      <tr 
                        key={user._id} 
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-8 py-5 whitespace-nowrap text-sm text-gray-900">{user.name}</td>
                        <td className="px-8 py-5 whitespace-nowrap text-sm text-gray-900">{user.email}</td>
                        <td className="px-8 py-5 whitespace-nowrap text-sm text-gray-900">
                          {new Date(user.dob).toDateString()}
                        </td>
                        <td className="px-8 py-5 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            <code className="flex-1 px-3 py-1 text-sm bg-gray-50 rounded-md font-mono text-gray-900">
                              {visiblePasswords[user._id] ? user.password : "••••••••"}
                            </code>
                            <button
                              onClick={() => togglePasswordVisibility(user._id)}
                              className="p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
                              aria-label="Toggle password visibility"
                            >
                              {visiblePasswords[user._id] ? (
                                <EyeOff className="w-4 h-4" />
                              ) : (
                                <Eye className="w-4 h-4" />
                              )}
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="p-6 text-center">
              <p className="text-gray-500">Loading user data...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;