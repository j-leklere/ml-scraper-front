export default function numberFormatter(number) {
  if (typeof number !== "Number") {
    number = Number(number);
  }
  return number.toLocaleString("es-ES", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
}
