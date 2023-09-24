import PropTypes from "prop-types";
import { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  isDoctor: false,
  dash: "patient",
  user: {
    name: "",
    email: "",
  },
  handleLogin: async () => {}, // Function for handling login
  handleLogout: async () => {}, // Function for handling logout
});

function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const handleLogin = async (username, password) => {
    // Implement authentication logic and update user state
  };
  const handleLogout = async () => {
    // Implement logout logic and update user state
  };

  const authContextValue = useMemo(() => {
    return {
      isLoggedIn: !!user,
      isDoctor: user?.isDoctor || false,
      dash: user?.dash || "patient",
      user,
      handleLogin,
      handleLogout,
    };
  }, [user]);
  return (
    <AuthContext.Provider value={authContextValue}>
      {props.children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthContext, AuthProvider };
