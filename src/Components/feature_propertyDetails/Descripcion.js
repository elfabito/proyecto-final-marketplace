function DPropiedad(props) {
  return (
    <div className="DPropiedad">
      <div>
        <h2>Descripción</h2>
        <div>
          <span>
            {props?.texto?.map((parrafo, index) => (
              <p key={index}>{parrafo}</p>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}

export default DPropiedad;
