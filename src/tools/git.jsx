import React, { useState, useEffect } from "react";

const GitHubFinder = () => {
  // State for storing GitHub username and user data
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    return (
      localStorage.getItem("theme") === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  });

  // Toggle dark mode and store preference
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Fetch user from GitHub API
  const fetchUser = async () => {
    if (!username) return;
    try {
      const response = await fetch(
        `https://api.github.com/users/${encodeURIComponent(username)}`
      );
      const data = await response.json();

      if (data.message) {
        alert("User not found");
        setUserData(null);
        return;
      }

      setUserData(data);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex justify-center items-center p-4">
      <div className="max-w-lg w-full p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg">
        <div className="flex justify-between mb-4">
          <h1 className="text-xl font-bold">Git Finder</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded-lg"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        <div className="relative mb-6">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Search GitHub username..."
            className="w-full px-4 py-3 rounded-lg shadow bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          <button
            onClick={fetchUser}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg"
          >
            Search
          </button>
        </div>

        {userData && (
          <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-6">
              <img
                src={userData.avatar_url}
                alt="Avatar"
                className="w-20 h-20 rounded-full border-4 border-gray-300 dark:border-gray-600"
              />
              <div className="flex-1">
                <div className="flex justify-between">
                  <h2 className="text-2xl font-bold">{userData.name || userData.login}</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Joined {new Date(userData.created_at).toLocaleDateString()}
                  </p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">{userData.bio || "No bio available"}</p>
              </div>
            </div>

            <div className="mt-4 p-4 bg-gray-200 dark:bg-gray-700 rounded-lg flex justify-between text-center">
              <div>
                <p className="text-gray-500 dark:text-gray-400">Repos</p>
                <p className="font-bold">{userData.public_repos}</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Followers</p>
                <p className="font-bold">{userData.followers}</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Following</p>
                <p className="font-bold">{userData.following}</p>
              </div>
            </div>

            <div className="mt-4 space-y-1">
              <p>📍 {userData.location || "Not Available"}</p>
              <p>🐦 {userData.twitter_username || "Not Available"}</p>
              <p>🔗 <a href={userData.blog} className="underline" target="_blank" rel="noopener noreferrer">{userData.blog || "Not Available"}</a></p>
              <p>🏢 {userData.company || "Not Available"}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GitHubFinder;
