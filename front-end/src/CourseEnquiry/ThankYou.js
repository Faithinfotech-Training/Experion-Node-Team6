import { Link } from "react-router-dom";

function ThankYou() {
    var head = {
        padding: 20,
        background: 'burlywood',
        fontSize: 20,
        padding: 20,
        margin: 20


    }
    return (
        <>
            <div style={head}>
                <h1>Thank You For Reaching Out</h1>
                <p>We will contact you soon</p>
                {/* <button>
                    <Link to='/'>Back to Home</Link>
                </button> */}
            </div>
        </>
    )
}
export default ThankYou;
