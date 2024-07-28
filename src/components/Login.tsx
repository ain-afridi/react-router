import React, { useState } from "react";
import { useAuth } from "./Auth";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const auth = useAuth();
    const location = useLocation();

    const locatePath = location.state?.path || '/'
    const handleLogin = () => {
        auth.login(username);
        navigate(locatePath
            , { replace: true }
        )
    }
  return (
    <div>
      <label>
        username:
              <input type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
              />
          </label>
          
          <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
