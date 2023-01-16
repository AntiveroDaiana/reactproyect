import { useNavigate } from "react-router-dom";


function NoCursos() {

    const navigate = useNavigate();

    const handleHome = () => {
        navigate("/");
    }

   

    return (
        <div className="not-cursos">
            <h3>Lo siento! Aun no tenemos cursos de ese estilo.</h3>
            <button className="item-detail__text-container-back" onClick={handleHome}>Ir al inicio</button>
        </div>
    )
}

export default NoCursos;