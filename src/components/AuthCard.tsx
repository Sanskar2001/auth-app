import { type ReactNode } from "react";
import Icon from "./Icon";

interface AuthCardProps {
  iconName: string;
  title: string;
  subtitle: string;
  children: ReactNode;
  footerContent: ReactNode;
}

export default function AuthCard({
  iconName,
  title,
  subtitle,
  children,
  footerContent,
}: AuthCardProps) {
  return (
    <div className="min-h-screen bg-white">
      <header className="h-16 flex">
        <div className="w-full px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-900">
            <div className="h-8 w-8 rounded-full border border-gray-200 flex items-center justify-center">
              <Icon name="logo" className="h-5 w-5" />
            </div>
            <span className="font-semibold">foo-rum</span>
          </div>
          <a href="/" className="text-sm text-gray-700">
            Back to home
          </a>
        </div>
      </header>

      <main className="flex justify-center items-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-md">
          <div className="bg-gray-100 rounded-2xl p-2">
            <div className="bg-white rounded-xl p-8">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <Icon name={iconName} className="h-6 w-6 text-gray-900" />
                </div>
              </div>

              <h1 className="text-2xl font-bold text-gray-900 text-center mb-2">
                {title}
              </h1>
              <p className="text-gray-600 text-center mb-8">{subtitle}</p>

              {children}
            </div>

            <div className="text-center mt-4 p-2">{footerContent}</div>
          </div>
        </div>
      </main>
    </div>
  );
}
