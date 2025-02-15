import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react";
import { sections } from "./data/data";
import { GHP, GHS, LCP, LCS, LICP, LICS } from "./assets";
import { HoverImage } from "./HoverImage";
import { Sidebar } from "./Sidebar";
import { useIsMediumScreen } from "./useMedium";

function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [showCommand, setShowCommand] = useState(false);
  const [command, setCommand] = useState("");
  const ref = useRef<HTMLDivElement | null>(null);
  const isMedium = useIsMediumScreen();
  useEffect(() => {
    ref.current?.focus();
  }, []);

  const handleKeyDown = (e: any) => {
    if (e.key === ":") {
      setShowCommand(true);
      setCommand("");
    } else if (e.key === "Escape") {
      setShowCommand(false);
    } else if (e.key === "Enter" && showCommand) {
      handleCommand(command);
    }
  };

  const handleCommand = (cmd: any) => {
    const sectionMatch = Object.keys(sections).find((section) =>
      cmd.toLowerCase().includes(section),
    );
    if (sectionMatch) {
      setActiveSection(sectionMatch);
    }
    setShowCommand(false);
    setCommand("");
    ref.current?.focus();
  };

  return (
    <div
      tabIndex={0}
      ref={ref}
      className="h-screen flex gap-4 bg-gray-900 text-green-500 md:p-4 p-2 font-mono overflow-y-hidden flex-col"
      onKeyDown={handleKeyDown}
      onClick={() => ref.current?.focus()}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="border border-green-500 md:p-4 py-4 mb-4"
      >
        <div className="px-2 flex items-center justify-between">
          <div className="flex items-center w-[70%]">
            <Terminal className="w-6 h-6" />
            <h1 className="max-md:text-lg w-full text-2xl font-bold break-words ">
              ~/.souvik_bhattacharjee/software_engineer
            </h1>
          </div>
          <Sidebar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </div>

        <div className="text-sm mt-2 max-md:px-2">
          Press ':' for commands - try :about, :skills, :experience, :projects
        </div>

        <motion.div
          className="mt-4 flex justify-end space-x-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <a
            href="https://github.com/Souvik00076"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HoverImage defaultSrc={GHP} hoverSrc={GHS} />
          </a>
          <a
            href="https://www.linkedin.com/in/svik06/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HoverImage defaultSrc={LICP} hoverSrc={LICS} />
          </a>
          <a
            href="https://leetcode.com/u/fCw6bqOcJu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HoverImage defaultSrc={LCP} hoverSrc={LCS} />
          </a>
        </motion.div>
      </motion.div>

      <div className="flex w-full md:gap-4 flex-1 max-h-full overflow-y-hidden">
        {isMedium && (
          <motion.div
            className=" border border-green-500 p-4 h-full"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            {Object.entries(sections).map(([key, section]) => (
              <motion.div
                key={key}
                className={`flex items-center space-x-2 p-2 cursor-pointer ${
                  activeSection === key ? "bg-green-800" : ""
                }`}
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  setActiveSection(key);
                }}
              >
                {section.icon}
                <span>{section.title}</span>
              </motion.div>
            ))}
          </motion.div>
        )}
        <div className="border border-green-500 flex-1 no-scrollbar overflow-y-scroll  p-4 ">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="h-full"
            >
              <h2 className="text-xl mb-4 flex items-center space-x-2">
                {(sections as any)[activeSection].icon}
                <span>{(sections as any)[activeSection].title}</span>
              </h2>
              {Array.isArray((sections as any)[activeSection].content) ? (
                <div className="space-y-4">
                  {(sections as any)[activeSection].content
                    .sort((a: any, b: any) => a.priority - b.priority)
                    .map((item: any, index: any) =>
                      typeof item === "string" ? (
                        <div
                          key={index}
                          className="flex items-center space-x-2"
                        >
                          <span className="text-green-300">~</span>
                          <span>{item}</span>
                        </div>
                      ) : (
                        <div
                          key={index}
                          className="border border-green-700 p-4 "
                        >
                          {item.role ? (
                            <>
                              <h3 className="text-lg text-green-300">
                                {item.role}
                              </h3>
                              <p className="text-sm">
                                {item.company} | {item.period}
                              </p>
                              <p className="mt-2">{item.details}</p>
                              <div className="mt-4">
                                <h4 className="text-green-400 mb-2">
                                  Problems Solved:
                                </h4>
                                <ul className="space-y-2">
                                  {item.problems.map(
                                    (problem: any, idx: number) => (
                                      <li
                                        key={idx}
                                        className="flex items-start"
                                      >
                                        <span className="text-green-300 mr-2">
                                          →
                                        </span>
                                        <span>{problem}</span>
                                      </li>
                                    ),
                                  )}
                                </ul>
                              </div>
                              <div className="mt-4">
                                <h4 className="text-green-400 mb-2">
                                  Technologies Used :
                                </h4>
                                <div className="break-words text-green-300">
                                  {item.technologies.join(", ")}.
                                </div>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="flex gap-8 items-center">
                                <h3 className="text-lg text-green-300">
                                  {item.name}
                                </h3>
                                {item.live && (
                                  <a
                                    href={item.live}
                                    className="bg-green-900 text-green-300 px-2 py-1 rounded text-sm font-bold hover:cursor-pointer"
                                  >
                                    Live
                                  </a>
                                )}
                              </div>
                              <p className="mt-2">{item.description}</p>
                              <div className="mt-4">
                                <h4 className="text-green-400 mb-2">
                                  Key Challenges Solved:
                                </h4>
                                <ul className="space-y-2">
                                  {item.problems.map(
                                    (problem: any, idx: number) => (
                                      <li
                                        key={idx}
                                        className="flex items-start"
                                      >
                                        <span className="text-green-300 mr-2">
                                          →
                                        </span>
                                        <span>{problem}</span>
                                      </li>
                                    ),
                                  )}
                                </ul>
                              </div>
                              <div className="mt-4">
                                <h4 className="text-green-400 mb-2">
                                  Tech Stack:
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {item.techStack.map(
                                    (tech: any, idx: number) => (
                                      <span
                                        key={idx}
                                        className="bg-green-900 text-green-300 px-2 py-1 rounded text-sm"
                                      >
                                        {tech}
                                      </span>
                                    ),
                                  )}
                                </div>
                              </div>
                              {item.link ? (
                                <a
                                  href={item.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-green-400 hover:text-green-300 mt-4 inline-block"
                                >
                                  View on GitHub →
                                </a>
                              ) : (
                                <div className="mt-4">
                                  <span className="text-red-500">
                                    {item.notice}
                                  </span>
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      ),
                    )}
                  <div className="w-full h-2"></div>
                </div>
              ) : (
                <p className="whitespace-pre-line">
                  {(sections as any)[activeSection].content}
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <AnimatePresence>
        {showCommand && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-0 left-0 right-0 bg-gray-800 p-2"
          >
            <div className="flex items-center">
              <span className="text-green-500 mr-2">:</span>
              <input
                type="text"
                value={command.replace(":", "")}
                onChange={(e) => setCommand(e.target.value)}
                className="bg-transparent border-none outline-none text-green-500 w-full"
                autoFocus
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
