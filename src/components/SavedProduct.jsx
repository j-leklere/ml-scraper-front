export default function SavedProduct({
  key,
  id,
  name,
  url,
  image_url,
  price_ars,
  price_usd,
  discount,
  currency,
}) {
  return (
    <div className="saved-products-list--product" key={key}>
      <h4 className="saved-products-list--product-id">Id: {id}</h4>
      <h4 className="saved-products-list--product-name">Nombre: {name}</h4>
      <p className="saved-products-list--product-url">Url: {url}</p>
      <p className="saved-products-list--product-image">Imagen: {image_url}</p>
      <p className="saved-products-list--product-price-ars">
        Precio (ARS): {price_ars}
      </p>
      <p className="saved-products-list--product-price-usd">
        Precio (USD): {price_usd}
      </p>
      <p className="saved-products-list--product-discount">
        Descuento: {discount}
      </p>
      <p className="saved-products-list--product-currency">
        Moneda: {currency}
      </p>
    </div>
  );
}
