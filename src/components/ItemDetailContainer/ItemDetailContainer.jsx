import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { requestCursosById } from "../../helpers/requestData";
import ItemDetail from "../ItemDetail/ItemDetail";
import NotFound from "../NotFound/NotFound";
import Spinner from "../Spinner/Spinner";


function ItemDetailContainer() {

    const [cursos, setCursos] = useState(null);
    const [error, setError] = useState(null);
    const { itemId } = useParams();

    useEffect( () => {
        requestCursosById(Number(itemId))
            .then( (res) => {
                setCursos(res);
                setError(null);
            })
            .catch( (err) => {
                setError(err.error);
            });
    }, [itemId]);

    return (
        <div>
            {
                error
                    ? <NotFound />
                    : cursos
                        ? <ItemDetail {...cursos} />
                        : <Spinner />
            }
        </div>
    )
}

export default ItemDetailContainer;