import { useEffect, useState } from "react";

function DPropiedad(props) {
    const [info, setinfo] = useState([]);
    useEffect(() => {
        setinfo(props?.texto)
      }, [])
        ;
    return (
        <div className="DPropiedad">
            <div>
                <h2>Descripción</h2>
                <div>
                    <span>
                        <p>{info.descripcion}</p>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default DPropiedad;
