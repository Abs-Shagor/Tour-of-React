import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';


const Login = () => {

    const {signin,signinWithGoogle, signinWithGithub} = useContext(AuthContext);

    const navigate = useNavigate();

    // Login or Signin with email/password
    function handleFormSubmit(event) {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signin(email, password)
            .then(res => {
                navigate('/home');
                toast.success('Login Successfully!')
            })
            .catch(error => {
                toast.error('Invalid Credentials!');
            })
    }

    // Login with Google
    function handleGoogleLogin(event) {
        event.preventDefault();
        signinWithGoogle()
        .then(res => {
            navigate('/home');
            toast.success('Login Successfully!')
        })
        .catch(error => {
            toast.error('Invalid Credentials!');
        })
    }

    // Login with Github
    function handleGithubLogin(event) {
        event.preventDefault();
        signinWithGithub()
        .then(res => {
            navigate('/home');
            toast.success('Login Successfully!')
        })
        .catch(error => {
            toast.error('Invalid Credentials!');
        })
    }


    return (
        <div className='max-w-[400px] mx-auto border border-gray-500 rounded-xl p-5'>
            <h1 className='text-[30px] font-semibold text-center mb-10'>Login</h1>
            <form onSubmit={handleFormSubmit} className='grid gap-5'>
                <input type="email" name="email" placeholder='Enter your email' autoComplete='email' required className='w-full border border-gray-500 rounded-md px-3 py-2' />
                <input type="password" name="password" placeholder='Enter your password' autoComplete='password' required className='w-full border border-gray-500 rounded-md px-3 py-2' />
                <button className='w-full btn btn-primary rounded-md '>Login</button>
            </form>
            <div className='flex items-center gap-2 my-5'>
                <div className='flex-grow border-t bg-gray-500'></div>
                <div> Or </div>
                <div className='flex-grow border-t bg-gray-500'></div>
            </div>

            <div className='grid gap-3'>
                <button onClick={handleGoogleLogin} className='btn bg-pink-50 rounded-md'>Login with Google</button>
                <button onClick={handleGithubLogin} className='btn bg-pink-50 rounded-md'>Login with Github</button>
            </div>
        </div>
    );
};

export default Login;