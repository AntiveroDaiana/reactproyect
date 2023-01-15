//import { useEffect } from "react";
import { Link } from "react-router-dom";
import './Home.css';
//import AOS from "aos";
//import "aos/dist/aos.css";

function Home() {

    //useEffect(() => {
    //    AOS.init();
   // }, []);

    return (
        <div
            className="home"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-once="true">
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