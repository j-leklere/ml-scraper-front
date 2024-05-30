export default function SavedSearch({
  key,
  id,
  name,
  term,
  quantity,
  lastTimeSearched,
  comparisonProduct,
}) {
  return (
    <div className="saved-searches-list--search" key={key}>
      <h4 className="saved-searches-list--search-id">Id: {id}</h4>
      <h4 className="saved-searches-list--search-name">Nombre: {name}</h4>
      <p className="saved-searches-list--search-term">Término: {term}</p>
      <p className="saved-searches-list--search-quantity">
        Cantidad: {quantity}
      </p>
      <p className="saved-searches-list--search-last-time-searched">
        Última búsqueda: {lastTimeSearched}
      </p>
      {comparisonProduct && (
        <p className="saved-searches-list--search-comparison-product">
          Producto de comparación: {comparisonProduct}
        </p>
      )}
    </div>
  );
}
