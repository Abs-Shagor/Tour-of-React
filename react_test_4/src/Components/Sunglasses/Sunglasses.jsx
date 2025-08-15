import './Sunglasses.css'
function Sunglasses() {
    // we can write css in a separate file and can use them by importing (ex. Sunglasses.css)
    // or, we can use css in inline by using style tag. like we do in the below code

    return (
        <span className='sunglass-design' style={{boxShadow:'0 10px 10px gray'}} >I am from Sunglasses</span>
    )
}
export default Sunglasses;