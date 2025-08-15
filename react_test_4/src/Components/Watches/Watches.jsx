import { add, multiply } from '../Utilities/Utilities';
import './Watches.css'

function Watches() {
    return(
        <div>
            <span className="title-design">I am from Watches</span>
            <br />
            <span> 3 + 8 = {add(3, 8)}</span>
            <br />
            <span> 3 * 8 = {multiply(3, 8)}</span>
        </div>
    )
}
export default Watches;