import { useState, useContext } from "react";
import { useNavigate  } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";
import PropTypes from 'prop-types';


function Login({ setToken }){
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const {login} = useAuth();

    const handleSubmit = async (e) => {
      e.preventDefault();
      // try{
      //   const response = await fetch('http://localhost:3000/login', {
      //       method: 'POST',
      //       headers: {
      //         'Content-Type': 'application/json'
      //       },
      //       body: JSON.stringify({userName,password}),
      //     });
      //     if(!response.ok){
      //       throw new Error('cant login')
      //     }
      //     const token = await  response.json();
      //     console.log(token);
      //     setToken({"token":"124"});
      // }
      // catch(err){
      //   console.log(err)
      // }

      if (userName === "user" && password === "password") {
        // Replace with actual authentication logic
        await login({ userName });
      } else {
        alert("Invalid username or password");
      }

    }

    return(
        <div className="w-full bg-indigo p-8 ">
            <h1 className="text-center font-bold text-2xl mb-6">Login</h1>
            <form onSubmit={handleSubmit} className="w-full flex flex-col sm:px-20 md:px-30 lg:px-80">
                <label htmlFor="">user name</label>
                <input
                    className="border rounded-md p-2 mb-2"
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="name"
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                />

                <label htmlFor="">Password</label>
                <input
                    className="border rounded-md p-2 mb-2"
                    type="password"
                    name="password"
                    id="password"
                    required
                    placeholder="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <input
                  className="border rounded-md p-2 bg-black text-white cursor-pointer"
                  type="submit"
                  value="Login"
                />
            </form>
        </div>
    )
}

export default Login;
