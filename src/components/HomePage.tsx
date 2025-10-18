import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useAuthModal } from "../hooks/useAuthModal";
import Icon from "./Icon";
import TextEditor from "./TextEditor";
import PostCard from "./PostCard";
import AuthModal from "./AuthModal";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import sampleData from "../constants/SampleData";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [posts, setPosts] = useState(sampleData);
  const { isAuthenticated, login, logout } = useAuth();
  const {
    showSignInModal,
    showSignUpModal,
    requireAuth,
    switchToSignUp,
    switchToSignIn,
    closeModals,
  } = useAuthModal();

  const handleSubmit = (text: string) => {
    setPosts((prev) => [
      { name: "You", text, avatar: "https://i.pravatar.cc/80?img=68" },
      ...prev,
    ]);
  };

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

          {isAuthenticated ? (
            <button
              onClick={logout}
              className="text-sm text-gray-700 inline-flex items-center gap-1 hover:text-gray-900"
            >
              Logout
              <Icon name="login" className="h-5 w-5" />
            </button>
          ) : (
            <Link
              to="/signin"
              className="text-sm text-gray-700 inline-flex items-center gap-1 hover:text-gray-900"
            >
              Login
              <Icon name="login" className="h-5 w-5" />
            </Link>
          )}
        </div>
      </header>

      <main className="flex justify-center items-center">
        <div className="flex justify-center items-center">
          <div className="col-span-12 md:col-span-7">
            <div className="mt-6">
              <TextEditor onSubmit={handleSubmit} requireAuth={requireAuth} />
            </div>

            <div className="mt-6 space-y-6">
              {posts.map((p, i) => (
                <PostCard
                  key={i}
                  name={p.name}
                  text={p.text}
                  avatar={p.avatar}
                  requireAuth={requireAuth}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      <AuthModal
        iconName="login"
        title="Sign in to continue"
        subtitle="Sign in to access all the features on this app"
        isOpen={showSignInModal}
        onClose={closeModals}
        footerContent={
          <>
            <span className="text-gray-600">Do not have an account? </span>
            <button
              onClick={switchToSignUp}
              className="text-indigo-600 hover:text-indigo-700 font-medium"
            >
              Sign Up
            </button>
          </>
        }
      >
        <SignInForm onSuccess={closeModals} />
      </AuthModal>

      <AuthModal
        iconName="login"
        title="Create an account to continue"
        subtitle="Create an account to access all the features on this app"
        isOpen={showSignUpModal}
        onClose={closeModals}
        footerContent={
          <>
            <span className="text-gray-600">Already have an account? </span>
            <button
              onClick={switchToSignIn}
              className="text-indigo-600 hover:text-indigo-700 font-medium"
            >
              Sign In
            </button>
          </>
        }
      >
        <SignUpForm onSuccess={closeModals} />
      </AuthModal>
    </div>
  );
};

export default HomePage;
