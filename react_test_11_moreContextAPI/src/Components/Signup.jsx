import { toast } from 'react-toastify';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const {signup} = useContext(AuthContext);

    const navigate = useNavigate();

    function handleFormSubmit(event) {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signup(email, password)
            .then(res => {
                event.target.reset();
                navigate('/home');
                toast.success('Signup Successfully!')
            })
            .catch(error => {
                toast.error('Invalid Credentials!');
            })
    }
    return (
        <div className='max-w-[400px] mx-auto border border-gray-500 rounded-xl p-5'>
            <h1 className='text-[30px] font-semibold text-center mb-10'>Signup</h1>
            <form onSubmit={handleFormSubmit} className='grid gap-5'>
                <input type="text" name="name" placeholder='Name' autoComplete='name' required className='w-full border border-gray-500 rounded-md px-3 py-2' />
                <input type="email" name="email" placeholder='Enter your email' autoComplete='email' required className='w-full border border-gray-500 rounded-md px-3 py-2' />
                <input type="password" name="password" placeholder='Enter your password' autoComplete='password' required className='w-full border border-gray-500 rounded-md px-3 py-2' />
                <button className='w-full btn btn-primary rounded-md '>Signup</button>
            </form>
        </div>
    );
};

export default Signup;