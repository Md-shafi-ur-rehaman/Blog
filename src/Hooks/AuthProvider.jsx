import {useContext, createContext, useState} from 'react';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({children})=>{
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(localStorage.getItem("site") || "");
  const navigate = useNavigate();

  const login = (data) => {
    e.preventDefault();
    // try {
    //   const response = await fetch("https://localhost:3000/users", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data)
    //   });
    //   const res = await response.json();
    //   if (res.data) {
    //     setUser(res.data.user);
    //     setToken(res.token);
    //     localStorage.setItem("site", res.token);
    //     navigate("/dashboard");
    //     return;
    //   }
    //   throw new Error(res.message);
    // }
    // catch (err) {
    // console.error(err);
    // }
  }

  const logOut = ()=>{
    setUser(null);
    setToken("");
    localStorage.removeItem("site");
    navigate("/login");
  }

  return <AuthContext.Provider value={{ token, user, login, logOut }}>{children}</AuthContext.Provider>
}

export default AuthProvider;
