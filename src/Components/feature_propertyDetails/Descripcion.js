import { useEffect, useState } from "react";

function DPropiedad(props) {
    const [info, setinfo] = useState([]);
    useEffect(() => {
        setinfo(props?.texto)
      }, [props?.texto])
        ;
    return (
        <div className="DPropiedad">
            <div>
                
                <div>
                    <span>
                        <p>{info}</p>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default DPropiedad;
