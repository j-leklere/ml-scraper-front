export default function Result({ nombre, precio, url }) {
  return (
    <div className="result">
      <h4 className="result-price">${precio}</h4>
      <div>
        <p className="strong">
          <strong>Nombre: </strong>
        </p>
        <p className="result-name">{nombre}</p>
        <p className="strong">
          <strong>Link:</strong>
        </p>
        <p className="result-url">{url}</p>
      </div>
    </div>
  );
}
