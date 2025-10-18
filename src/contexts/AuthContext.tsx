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
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null
  );

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

  const login = async (email: string, password: string): Promise<boolean> => {
    // Valid accounts
    const validAccounts = [
      { email: "demo@example.com", password: "password123", name: "Demo User" },
      { email: "test@user.com", password: "testpass", name: "Test User" },
    ];

    // Check if credentials match any valid account
    const validAccount = validAccounts.find(
      (account) => account.email === email && account.password === password
    );

    if (validAccount) {
      const userData = { name: validAccount.name, email: validAccount.email };
      setIsAuthenticated(true);
      setUser(userData);

      localStorage.setItem(
        "auth",
        JSON.stringify({
          isAuth: true,
          userData: userData,
        })
      );
      return true;
    }

    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);

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
