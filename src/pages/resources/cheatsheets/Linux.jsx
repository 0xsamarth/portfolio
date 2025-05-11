import { useState } from "react";
import { motion } from "framer-motion";
import { ClipboardCopy, TerminalSquare, Check } from "lucide-react";

const commands = [
  {
    category: "File & Directory",
    items: [
      { cmd: "ls", desc: "List directory contents" },
      { cmd: "cd", desc: "Change directory" },
      { cmd: "pwd", desc: "Print working directory" },
      { cmd: "mkdir", desc: "Create a new directory" },
      { cmd: "rm", desc: "Remove files/directories" },
      { cmd: "touch", desc: "Create an empty file" },
      { cmd: "cp", desc: "Copy files/directories" },
      { cmd: "mv", desc: "Move/rename files/directories" },
      { cmd: "tree", desc: "Display directory structure in tree format" },
      { cmd: "find", desc: "Search files and directories" },
    ],
  },
  {
    category: "File Viewing & Editing",
    items: [
      { cmd: "cat", desc: "Display file contents" },
      { cmd: "less", desc: "View file page-by-page" },
      { cmd: "nano", desc: "Edit files in terminal" },
      { cmd: "vim", desc: "Advanced file editor" },
      { cmd: "head", desc: "Show beginning of file" },
      { cmd: "tail", desc: "Show end of file" },
    ],
  },
  {
    category: "User & Permissions",
    items: [
      { cmd: "whoami", desc: "Show current user" },
      { cmd: "chmod", desc: "Change file permissions" },
      { cmd: "chown", desc: "Change file owner" },
      { cmd: "sudo", desc: "Run command as root" },
      { cmd: "adduser", desc: "Add new user" },
      { cmd: "passwd", desc: "Change user password" },
    ],
  },
  {
    category: "Networking",
    items: [
      { cmd: "ip a", desc: "Show IP address" },
      { cmd: "ping", desc: "Test network connectivity" },
      { cmd: "netstat", desc: "Show network stats" },
      { cmd: "ss", desc: "Show socket stats" },
      { cmd: "curl", desc: "Transfer data from/to server" },
      { cmd: "wget", desc: "Download files from web" },
      { cmd: "traceroute", desc: "Show route to host" },
    ],
  },
  {
    category: "Process Management",
    items: [
      { cmd: "ps aux", desc: "List running processes" },
      { cmd: "top", desc: "Real-time process viewer" },
      { cmd: "kill", desc: "Terminate process by PID" },
      { cmd: "htop", desc: "Interactive process viewer (advanced)" },
      { cmd: "nice", desc: "Start process with priority" },
      { cmd: "killall", desc: "Kill processes by name" },
    ],
  },
  {
    category: "Disk & System Info",
    items: [
      { cmd: "df -h", desc: "Show disk usage" },
      { cmd: "du -sh *", desc: "Show size of files/folders" },
      { cmd: "free -h", desc: "Show memory usage" },
      { cmd: "uname -a", desc: "Show system information" },
      { cmd: "uptime", desc: "Show system uptime" },
      { cmd: "lscpu", desc: "Show CPU architecture info" },
      { cmd: "lsblk", desc: "Show block device info" },
    ],
  },
];

export default function LinuxFundamentals() {
  const [copiedCmd, setCopiedCmd] = useState(null);

  const copyToClipboard = (cmd) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCmd(cmd);
    setTimeout(() => setCopiedCmd(null), 1500);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 font-mono">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-center mb-10 text-teal-400"
      >
        🐧 Linux Fundamentals Cheat Sheet
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {commands.map((section, i) => (
          <motion.div
            key={section.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-gray-800 rounded-2xl p-5 shadow-xl border border-gray-700"
          >
            <h2 className="text-xl font-semibold text-teal-300 mb-4">
              <TerminalSquare className="inline mr-2 text-teal-400" />
              {section.category}
            </h2>
            <ul className="space-y-3">
              {section.items.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition"
                >
                  <div>
                    <span className="text-teal-400 font-bold">{item.cmd}</span>
                    <p className="text-sm text-gray-300">{item.desc}</p>
                  </div>
                  <button onClick={() => copyToClipboard(item.cmd)}>
                    {copiedCmd === item.cmd ? (
                      <Check className="text-green-400" />
                    ) : (
                      <ClipboardCopy className="hover:text-teal-300" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <footer className="mt-20 text-center text-sm text-gray-500">
        Built with 💻 + 🐧 by <span className="text-blue-600 font-medium">Samarth Aher</span>
      </footer>
    </div>
  );
}
