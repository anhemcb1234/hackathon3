import React, {useState} from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from "../firebase";
import {Link, useNavigate} from "react-router-dom";

const Login = () => {
    let navigate = useNavigate();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [show, setShow] = useState(true);

    const _doLogin = async (evt) => {
        setShow(false);
        evt.preventDefault();
        try {
            const resp = await signInWithEmailAndPassword(auth, email, password);
            console.log(resp.user);
            sessionStorage.setItem('user', JSON.stringify(resp.user));
            navigate('/home')
        } catch (e) {
            alert("Login fail. Check your email and password pls T.T")
            console.error(e);
        }

    }

  return (<div>
    <div className="font-sans">
      <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
        {show ? (
            <div className="relative sm:max-w-sm w-full">
              <div
                  className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
              <div
                  className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
              <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                <label className="block mt-3 text-sm text-gray-700 text-center font-semibold">
                  Login
                </label>
                <form method="" action="" className="mt-10">

                  <div>
                    <input type="text" placeholder="Email"
                           onChange={(e) => setEmail(e.target.value)}
                           className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>
                    <p className="error font-semibold text-red-600">{email.length === 0 ?
                        <p>Enter email pls</p> : ''}</p>
                  </div>

                  <div className="mt-7">
                    <input type="password" placeholder="Password"
                           onChange={(e) => setPassword(e.target.value)}
                           className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>
                    <p className="error font-semibold text-red-600">{password.length === 0 ?
                        <p>Enter password pls</p> : ''}</p>
                  </div>


                  <div className="mt-7">
                    <button
                        type="submit"
                        onClick={_doLogin}
                        className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                      Login
                    </button>
                  </div>


                  <div className="mt-7">
                    <div className="flex justify-center items-center">
                      <label className="mr-2">Do you have an account?</label>
                      <a href="#"
                         className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                        <Link to="/SignUp">Sign up</Link>
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
        ) : (
            <div className="w-screen h-screen flex items-center justify-center">
              <svg
                  role="status"
                  className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                />
                <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                />
              </svg>
            </div>
        )}
      </div>
    </div>
  </div>);
};

export default Login;