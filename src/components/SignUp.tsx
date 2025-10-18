import { Link } from "react-router-dom";
import AuthCard from "./AuthCard";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
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
      <SignUpForm />
    </AuthCard>
  );
};

export default SignUp;
