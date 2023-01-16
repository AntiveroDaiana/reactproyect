import { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { requestAllCursos } from "../../helpers/requestData";
import NoCursos from "../NoCursos/NoCursos";

function ItemListContainer() {

    const [cursos, setCursos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { itemName, categoryId } = useParams();

    useEffect( () => {
        setCursos([]);
        setLoading(true);
        requestAllCursos()
            .then( (res) => {
                if (itemName) {
                    let name = itemName.toLowerCase();
                    setCursos(res.filter( cursos => cursos.name.toLowerCase().includes(name)));
                    setLoading(false);
                } else if (categoryId) {
                    setCursos(res.filter( cursos => cursos.category === categoryId ));
                    setLoading(false);
                } else {
                    setCursos(res);
                    setLoading(false);
                }
            })
            .catch( (err) => {
                console.log(err);
            });
    }, [ itemName, categoryId]);

    return (
        <div>
            {
                loading
                    ? <Spinner />
                    : cursos.length === 0
                        ? <NoCursos />
                        : <ItemList cursos={cursos} />
            }
        </div>
    );
}

export default ItemListContainer;