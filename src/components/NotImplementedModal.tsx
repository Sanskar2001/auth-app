import Icon from "./Icon";

interface NotImplementedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotImplementedModal = ({ isOpen, onClose }: NotImplementedModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-900/40 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl p-2 max-w-md w-full mx-4 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gray-100 rounded-xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">
              <Icon name="warning" className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Function Not Implemented
            </h3>
          </div>

          <p className="text-gray-600 mb-6">
            This feature is not yet implemented. Please try again later.
          </p>

          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotImplementedModal;
