import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export const useAuthModal = () => {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const { isAuthenticated } = useAuth();

  const requireAuth = (callback: () => void) => {
    if (isAuthenticated) {
      callback();
    } else {
      setShowSignInModal(true);
    }
  };

  const switchToSignUp = () => {
    setShowSignInModal(false);
    setShowSignUpModal(true);
  };

  const switchToSignIn = () => {
    setShowSignUpModal(false);
    setShowSignInModal(true);
  };

  const closeModals = () => {
    setShowSignInModal(false);
    setShowSignUpModal(false);
  };

  return {
    showSignInModal,
    showSignUpModal,
    requireAuth,
    switchToSignUp,
    switchToSignIn,
    closeModals,
  };
};
