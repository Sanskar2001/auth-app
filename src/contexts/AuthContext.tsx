import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  user: { name: string; email: string } | null;
  login: (user: { name: string; email: string }) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null
  );

  // Load authentication state from localStorage on component mount
  useEffect(() => {
    const savedAuth = localStorage.getItem("auth");
    if (savedAuth) {
      try {
        const { isAuth, userData } = JSON.parse(savedAuth);
        if (isAuth && userData) {
          setIsAuthenticated(true);
          setUser(userData);
        }
      } catch (error) {
        console.error("Error parsing saved auth data:", error);
        // Clear invalid data
        localStorage.removeItem("auth");
      }
    }
  }, []);

  const login = (userData: { name: string; email: string }) => {
    setIsAuthenticated(true);
    setUser(userData);
    // Save to localStorage
    localStorage.setItem(
      "auth",
      JSON.stringify({
        isAuth: true,
        userData: userData,
      })
    );
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    // Remove from localStorage
    localStorage.removeItem("auth");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
