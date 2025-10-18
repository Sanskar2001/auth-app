import { type ReactNode } from "react";
import Icon from "./Icon";

interface AuthModalProps {
  iconName: string;
  title: string;
  subtitle: string;
  children: ReactNode;
  footerContent: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({
  iconName,
  title,
  subtitle,
  children,
  footerContent,
  isOpen,
  onClose,
}: AuthModalProps) {
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
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center">
              <Icon name={iconName} className="h-6 w-6 text-gray-900" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-900 text-center mb-2">
            {title}
          </h1>
          <p className="text-gray-600 text-center mb-8">{subtitle}</p>

          {/* Form Content */}
          {children}

          {/* Footer Content */}
          <div className="text-center mt-6">{footerContent}</div>
        </div>
      </div>
    </div>
  );
}
