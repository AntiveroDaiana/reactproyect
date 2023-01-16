import { useNavigate } from "react-router-dom";


function NotFound() {

    const navigate = useNavigate();

    const handleHome = () => {
        navigate("/");
    };

    return (
        <div className="not-found">
            <img src={process.env.PUBLIC_URL + "/assets/images/404.png"} alt="404"/>
            <h3>¡Oh!, no hay nada aquí</h3>
            <button className="item-detail__text-container-back" onClick={handleHome}>Ir al inicio</button>
        </div>
    )
}

export default NotFound;