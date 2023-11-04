import {useContext, useState} from "react";
import axios from "axios";
import {UserContext} from "./UserContext.jsx";

export default function RegisterAndLoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginOrRegister, setIsLoginOrRegister] = useState('login');
  const {setUsername:setLoggedInUsername, setId} = useContext(UserContext);
  async function handleSubmit(ev) {
    ev.preventDefault();
    const url = isLoginOrRegister === 'register' ? 'register' : 'login';
    const {data} = await axios.post(url, {username,password});
    setLoggedInUsername(username);
    setId(data.id);
  }
  return (
    <div >
      <div><h1 className="bg-blue-500  h-[60px] shadow -lg text-4xl font-extrabold  "><i>Welcome To Cpx Chat App</i></h1></div>
      <div className="bg-gray-500 w-[500px] h-[600px] shadow-lg rounded-lg flex flex-col justify-center items-center">
      <div className="text-slate-400 hover:text-sky-400 text-4xl font-bold justify-items-center items-start p-2 mb-2">Welcome to Cpx Chitranjan</div>
      <form className="w-64 mx-auto mb-12" onSubmit={handleSubmit}>
        <input value={username}
               onChange={ev => setUsername(ev.target.value)}
               type="text" placeholder="username"
               className="block w-full rounded-lg p-2 mb-2 border" />
        <input value={password}
               onChange={ev => setPassword(ev.target.value)}
               type="password"
               placeholder="password"
               className="block w-full rounded-lg p-2 mb-2 border" />
        <button className="bg-green-500 text-white block w-full rounded-xl p-2">
          {isLoginOrRegister === 'register' ? 'Register' : 'Login'}
        </button>
        <div className="text-center mt-2">
          {isLoginOrRegister === 'register' && (
            <div className="text-red-400">
              You have Already a member?
              <button className="ml-1 text-green-300" onClick={() => setIsLoginOrRegister('login')}>
                Login here
              </button>
            </div>
          )}
          {isLoginOrRegister === 'login' && (
            <div className="text-red-400">
              You Do'nt have an account?
              <button className="ml-1 text-green-300" onClick={() => setIsLoginOrRegister('register')}>
                Register Here
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
    </div>
  );
}