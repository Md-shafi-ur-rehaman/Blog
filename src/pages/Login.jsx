import { useState, useContext } from "react";
import { useNavigate  } from "react-router-dom";
import { useAuth } from "../Hooks/AuthProvider";


function Login(props){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [authorName, setAuthorName] = useState('john doe');
    const [isPending, setIsPending] = useState(false);

    const auth = useAuth();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(true){
          console.log(auth);
          if(name === '' || email === '' || password === '') return;
          const user ={name,email,password}
          auth.login(user);
          setName('');
          setEmail('');
          setPassword('');
        }
    }

    return(
        <div className="w-full bg-indigo p-8 ">
            <h1 className="text-center font-bold text-2xl mb-6">Login</h1>
            <form onSubmit={handleSubmit} className="w-full flex flex-col sm:px-20 md:px-30 lg:px-80">
                <label htmlFor="">name</label>
                <input
                    className="border rounded-md p-2 mb-2"
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <label htmlFor="">Email</label>
                <input
                    className="border rounded-md p-2 mb-2"
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
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
                    { !isPending
                      ?
                      <input
                        className="border rounded-md p-2 bg-black text-white cursor-pointer"
                        type="submit"
                        value="Create"
                      />
                      :
                      <button className="border rounded-md p-2 bg-black text-white" disabled>Creating user</button>
                    }

            </form>
        </div>
    )
}

export default Login;
