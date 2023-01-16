import BounceLoader from "react-spinners/BounceLoader";

function Spinner() {
    return (
        <div className="spinner">
            <BounceLoader
                color="#CF1B7D"
                size={100}
            />
        </div>
    )
}

export default Spinner;