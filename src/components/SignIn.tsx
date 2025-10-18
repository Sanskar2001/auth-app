import { Link, useNavigate } from "react-router-dom";
import AuthCard from "./AuthCard";
import SignInForm from "./SignInForm";
import { useAuth } from "../contexts/AuthContext";

export default function SignIn() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSignInSuccess = () => {
    // Simulate successful login
    login({ name: "John Doe", email: "john@example.com" });
    navigate("/");
  };

  return (
    <AuthCard
      iconName="login"
      title="Sign in to continue"
      subtitle="Sign in to access all the features on this app"
      footerContent={
        <>
          <span className="text-gray-600">Do not have an account? </span>
          <Link
            to="/signup"
            className="text-indigo-600 hover:text-indigo-700 font-medium"
          >
            Sign Up
          </Link>
        </>
      }
    >
      <SignInForm onSuccess={handleSignInSuccess} />
    </AuthCard>
  );
}
