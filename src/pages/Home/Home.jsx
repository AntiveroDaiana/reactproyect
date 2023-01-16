import { Link } from "react-router-dom";
import './Home.css';


function Home() {
    return (
        <div className="home">
            <div className="home__content">
                <h1>¡Es tu momento de crecer profesionalmente!</h1>
                <h2>Los cursos más completos en un solo lugar</h2>
                <Link to = {"/cursos"}>Ver todos los cursos</Link>
            </div>
            <img src={process.env.PUBLIC_URL + "/img/pchome.png"} alt="Pchome" className="home__images"/>   
        </div>
    )
}

export default Home;