import { useState } from "react";
import ToolbarButton from "./ToolbarButton";
import Icon from "./Icon";
import NotImplementedModal from "./NotImplementedModal";

interface TextEditorProps {
  onSubmit: (text: string) => void;
  requireAuth?: (callback: () => void) => void;
}

const TextEditor = ({ onSubmit, requireAuth }: TextEditorProps) => {
  const [text, setText] = useState("");
  const [showNotImplementedModal, setShowNotImplementedModal] = useState(false);

  const showNotImplemented = () => {
    setShowNotImplementedModal(true);
  };

  const submit = () => {
    const callback = () => {
      const trimmed = text.trim();
      if (!trimmed) return;
      onSubmit(trimmed);
      setText("");
    };

    if (requireAuth) {
      requireAuth(callback);
    } else {
      callback();
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const callback = () => {
      setText(e.target.value);
    };

    if (requireAuth) {
      requireAuth(callback);
    } else {
      callback();
    }
  };

  return (
    <div className="bg-gray-100 rounded-2xl p-2 w-full max-w-2xl">
      <div className="bg-white rounded-xl">
        <div className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="bg-gray-100 rounded-xl p-1">
              <div className="flex items-center gap-4">
                <select className="text-xs rounded-md border border-gray-200 p-2 text-gray-700 bg-white">
                  <option>Paragraph</option>
                </select>

                <div className="flex items-center gap-2">
                  <ToolbarButton onClick={showNotImplemented}>
                    <Icon name="bold" className="h-4 w-4" />
                  </ToolbarButton>
                  <ToolbarButton onClick={showNotImplemented}>
                    <Icon name="italic" className="h-4 w-4" />
                  </ToolbarButton>
                  <ToolbarButton onClick={showNotImplemented}>
                    <Icon name="underline" className="h-4 w-4" />
                  </ToolbarButton>
                </div>

                <div className="h-6 w-px bg-gray-300"></div>

                <div className="flex items-center gap-2">
                  <ToolbarButton onClick={showNotImplemented}>
                    <Icon name="align" className="h-4 w-4" />
                  </ToolbarButton>
                </div>

                <div className="h-6 w-px bg-gray-300"></div>
                <div className="flex items-center gap-2">
                  <ToolbarButton onClick={showNotImplemented}>
                    <span className="text-xs text-gray-500">99</span>
                  </ToolbarButton>
                  <ToolbarButton onClick={showNotImplemented}>
                    <Icon name="code" className="h-4 w-4" />
                  </ToolbarButton>
                </div>
              </div>
            </div>
            <div className="ml-auto">
              <ToolbarButton onClick={showNotImplemented}>
                <div className="bg-[#FFD9D9] w-full h-full rounded-md items-center flex justify-center">
                  <img width={15} height={15} src={"./trash.png"} />
                </div>
              </ToolbarButton>
            </div>
          </div>
          <div className="relative">
            <textarea
              value={text}
              onChange={handleTextChange}
              placeholder="How are you feeling today?"
              className="w-full resize-none min-h-28 outline-none placeholder:text-gray-400 text-gray-800 p-1"
            />
          </div>
        </div>
        <div className="flex items-center gap-2 border-t border-gray-100 p-3">
          <div className="flex items-center gap-2">
            <ToolbarButton onClick={showNotImplemented}>
              <Icon name="plus" className="h-4 w-4" />
            </ToolbarButton>
            <ToolbarButton onClick={showNotImplemented}>
              <Icon name="mic" className="h-4 w-4" />
            </ToolbarButton>
            <ToolbarButton onClick={showNotImplemented}>
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

      <NotImplementedModal
        isOpen={showNotImplementedModal}
        onClose={() => setShowNotImplementedModal(false)}
      />
    </div>
  );
};

export default TextEditor;
