import { useContext } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Navbar = () => {

    const { user, signout } = useContext(AuthContext);

    function handleLogout() {
        signout()
        .then(res => {
            toast.success('Log out successfully!');
        })
        .catch(error => {
            toast.error('Something wrong!');
        })
    }

    return (
        <div className=' sticky top-0 bg-white/50 backdrop-blur-md z-1000 pt-2 mb-10'>
            <div className='flex justify-between items-center'>
                <h1 className='text-[32px] font-semibold '>Abs Group and Ind.</h1>
                <div className='flex gap-3 font-semibold '>
                    <Link to={'/home'}>HOME</Link>
                    <Link to={'/about'}>ABOUT</Link>
                    <Link to={'/contact'}>CONTACT</Link>
                    <Link to={'/others'}>OTHERS</Link>
                    {
                        user && <Link to={'/history'}>HISTORY</Link>
                    }
                </div>

                {
                    user ?
                        <div className='flex gap-3 items-center'>
                            <Link to={'/'} onClick={handleLogout} className='btn'>Logout</Link>
                            <Link to={'/profile'}> { (user.photoURL && <img src={user.photoURL} className='w-10 h-10 rounded-2xl' /> ) || user.displayName || user.email } </Link>
                        </div>
                        :
                        <div className=' flex gap-3 '>
                            <Link to={'/login'} className='btn'>Login</Link>
                            <Link to={'/signup'} className='btn btn-primary'>Signup</Link>
                        </div>

                }
            </div>
            <hr className='text-gray-500 mt-2  ' />
        </div>
    );
};

export default Navbar;