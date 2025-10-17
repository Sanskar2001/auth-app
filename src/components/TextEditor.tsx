import { useState } from "react";
import ToolbarButton from "./ToolbarButton";
import Icon from "./Icon";
const TextEditor = ({ onSubmit }: { onSubmit: (text: string) => void }) => {
  const [text, setText] = useState("");
  const [activeButtons, setActiveButtons] = useState<Set<string>>(new Set());

  function toggleButton(buttonName: string) {
    setActiveButtons((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(buttonName)) {
        newSet.delete(buttonName);
      } else {
        newSet.add(buttonName);
      }
      return newSet;
    });
  }

  function submit() {
    const trimmed = text.trim();
    if (!trimmed) return;
    onSubmit(trimmed);
    setText("");
  }

  return (
    <div className="bg-gray-100 rounded-2xl p-2 w-full max-w-2xl">
      <div className="bg-white rounded-xl">
        <div className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="bg-gray-100 rounded-xl p-1">
              <div className="flex items-center gap-4">
                <select className="text-xs rounded-md border border-gray-200 px-3 py-2 text-gray-700 bg-white">
                  <option>Paragraph</option>
                </select>

                <div className="flex items-center gap-2">
                  <ToolbarButton
                    isActive={activeButtons.has("bold")}
                    onClick={() => toggleButton("bold")}
                  >
                    <Icon name="bold" className="h-4 w-4" />
                  </ToolbarButton>
                  <ToolbarButton
                    isActive={activeButtons.has("italic")}
                    onClick={() => toggleButton("italic")}
                  >
                    <Icon name="italic" className="h-4 w-4" />
                  </ToolbarButton>
                  <ToolbarButton
                    isActive={activeButtons.has("underline")}
                    onClick={() => toggleButton("underline")}
                  >
                    <Icon name="underline" className="h-4 w-4" />
                  </ToolbarButton>
                </div>

                <div className="h-6 w-px bg-gray-300"></div>

                <div className="flex items-center gap-2">
                  <ToolbarButton
                    isActive={activeButtons.has("align")}
                    onClick={() => toggleButton("align")}
                  >
                    <Icon name="align" className="h-4 w-4" />
                  </ToolbarButton>
                </div>

                <div className="h-6 w-px bg-gray-300"></div>
                <div className="flex items-center gap-2">
                  <ToolbarButton>
                    <span className="text-xs text-gray-500">99</span>
                  </ToolbarButton>
                  <ToolbarButton
                    isActive={activeButtons.has("code")}
                    onClick={() => toggleButton("code")}
                  >
                    <Icon name="code" className="h-4 w-4" />
                  </ToolbarButton>
                </div>
              </div>
            </div>
            <div className="ml-auto">
              <ToolbarButton>
                <div className="bg-[#FFD9D9] w-full h-full rounded-md items-center flex justify-center">
                  <img width={15} height={15} src={"./trash.png"} />
                </div>
              </ToolbarButton>
            </div>
          </div>
          <div className="relative">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="How are you feeling today?"
              className="w-full resize-none min-h-28 outline-none placeholder:text-gray-400 text-gray-800 p-1"
            />
          </div>
        </div>
        <div className="flex items-center gap-2 border-t border-gray-100 p-3">
          <div className="flex items-center gap-2">
            <ToolbarButton>
              <Icon name="plus" className="h-4 w-4" />
            </ToolbarButton>
            <ToolbarButton>
              <Icon name="mic" className="h-4 w-4" />
            </ToolbarButton>
            <ToolbarButton>
              <Icon name="video" className="h-4 w-4" />
            </ToolbarButton>
          </div>
          <div
            onClick={submit}
            className="ml-auto inline-flex items-center h-8 px-3 rounded-full"
          >
            <ToolbarButton>
              <img width={20} src={"./send.png"} />
            </ToolbarButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
