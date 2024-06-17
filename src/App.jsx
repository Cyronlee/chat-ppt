import "./App.css";
import { generatePPT } from "./pptgen.js";
import { useState } from "react";
import { generatePrompt } from "./prompt.js";

function App() {
  const [promptValue, setPromptValue] = useState();
  const [userInput, setUserInput] = useState();
  return (
    <div className="flex flex-col gap-2">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Chat PPT
        </span>
      </h1>

      <div className="w-[50vw] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="需求"
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
          value={userInput}
        ></textarea>

        <p className="py-1 text-gray-500 dark:text-gray-400">
          输入PPT的需求，点击生成Prompt
        </p>
        <button
          onClick={() => {
            setPromptValue(generatePrompt(userInput));
          }}
          type="button"
          className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
        >
          1.生成Prompt
        </button>
      </div>

      <div className="w-[50vw] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="需求"
          value={promptValue}
        ></textarea>

        <p className="py-1 text-gray-500 dark:text-gray-400">
          点击复制Prompt，然后拷贝给任意AI，生成PPT结构化数据
        </p>
        <button
          onClick={() => generatePPT()}
          type="button"
          className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
        >
          2.复制Prompt
        </button>
      </div>

      <div className="w-[50vw] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="粘贴PPT结构化数据"
        ></textarea>

        <p className="py-1 text-gray-500 dark:text-gray-400">
          点击生成并下载.pptx文件
        </p>
        <p className="py-1 text-gray-500 dark:text-gray-400">
          你可以使用Google Slide打开
        </p>
        <button
          onClick={() => generatePPT()}
          type="button"
          className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
        >
          3.生成PPT
        </button>
      </div>
    </div>
  );
}

export default App;
