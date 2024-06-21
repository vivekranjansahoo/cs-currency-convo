import Freecurrencyapi from "@everapi/freecurrencyapi-js";

const freecurrencyapi = new Freecurrencyapi(
  "fca_live_chuCNCE1KV10f9nYBGrkTE4C8xMj2DBxolcTwyhb"
);

export async function converCurrency(fromCurrency, toCurrency, units) {
  const res = await freecurrencyapi.latest({
    base_currency: fromCurrency,
    currencies: toCurrency,
  });

  const multiplier = res.data[toCurrency];

  return multiplier * units;
}
