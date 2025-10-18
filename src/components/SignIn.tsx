import { Link } from "react-router-dom";
import AuthCard from "./AuthCard";
import SignInForm from "./SignInForm";

export default function SignIn() {
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
      <SignInForm />
    </AuthCard>
  );
}
