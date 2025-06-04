import { useState } from "react";
import prettier from "prettier/standalone";
import parserBabel from "prettier/parser-babel";

export default function JSBeautifier() {
  const [inputCode, setInputCode] = useState("// Paste or write JS code here");
  const [outputCode, setOutputCode] = useState("");

  const handleBeautify = () => {
    try {
      const formatted = prettier.format(inputCode, {
        parser: "babel",
        plugins: [parserBabel],
        semi: true,
        singleQuote: true,
      });
      setOutputCode(formatted);
    } catch (error) {
      setOutputCode("⚠️ Error formatting code:\n" + error.message);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100 text-center">
        🧼 JavaScript Beautifier
      </h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">Input</label>
          <textarea
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
            className="w-full h-64 p-4 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-zinc-800 text-sm font-mono dark:text-white"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">Beautified Output</label>
          <textarea
            readOnly
            value={outputCode}
            className="w-full h-64 p-4 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-zinc-900 text-sm font-mono dark:text-white"
          />
        </div>
      </div>
      <div className="text-center mt-6">
        <button
          onClick={handleBeautify}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition"
        >
          Beautify
        </button>
      </div>
    </div>
  );
}
