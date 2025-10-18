import { Link, useNavigate } from "react-router-dom";
import AuthCard from "./AuthCard";
import SignUpForm from "./SignUpForm";
import { useAuth } from "../contexts/AuthContext";

export default function SignUp() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSignUpSuccess = () => {
    // Simulate successful signup
    login({ name: "John Doe", email: "john@example.com" });
    navigate("/");
  };

  return (
    <AuthCard
      iconName="login"
      title="Create an account to continue"
      subtitle="Create an account to access all the features on this app"
      footerContent={
        <>
          <span className="text-gray-600">Already have an account? </span>
          <Link
            to="/signin"
            className="text-indigo-600 hover:text-indigo-700 font-medium"
          >
            Sign In
          </Link>
        </>
      }
    >
      <SignUpForm onSuccess={handleSignUpSuccess} />
    </AuthCard>
  );
}
