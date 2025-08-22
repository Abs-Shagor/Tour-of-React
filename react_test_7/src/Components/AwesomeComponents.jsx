import { ToastContainer, toast } from 'react-toast'

// import AwesomeButton from 'react-awesome-button/src/components/AwesomeButton';
// import {
//   AwesomeButton,
//   AwesomeButtonProgress,
//   AwesomeButtonSocial,
// } from 'react-awesome-button';

function AwesomeComponents() {

    const wave = () => toast('Hi there 👋, This site is made by Abs Shagor!');


    return (
        <div>
            <h1 className=' text-[24px] font-semibold text-center my-10 italic ' >Let's use some beautiful components from Awesome Components site!</h1>

            <div>
                <div>
                    <h3 className=' text-gray-600 '>Click the below button to see the tooltip!</h3>
                    <button onClick={wave} className=' btn btn-primary ' >Click Me</button>
                    <ToastContainer />
                </div>

                <div>
                    <h3 className=' text-gray-600 '>Some Awesome 3D buttons!!!</h3>
                    {/* <AwesomeButton type="primary">Primary</AwesomeButton> */}

                </div>

            </div>
        </div>
    )
}
export default AwesomeComponents;