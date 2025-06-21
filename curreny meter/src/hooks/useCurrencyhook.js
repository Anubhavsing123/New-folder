// import { useEffect, useState } from "react";

// function useCurrencyHook(currency) {
//   const [data, setData] = useState({});
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch(`https://api.frankfurter.app/latest?from=${currency.toUpperCase()}`)
//       .then((res) => {
//         if (!res.ok) throw new Error("Network response was not ok");
//         return res.json();
//       })
//       .then((res) => setData(res.rates || {}))
//       .catch((err) => setError(err.message));
//   }, [currency]);

//   useEffect(() => {
//     if (error) {
//       console.error(error);
//     } else {
//       console.log(data);
//     }
//   }, [data, error]);

//   return data;
// }

// export default useCurrencyHook;
import { useEffect, useState } from "react";

const useCurrencyHook = (baseCurrency) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchRates = async () => {
      const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
      const json = await res.json();
      const rates = json.rates;

      // ✅ Inject base currency as a 1:1 rate
      rates[baseCurrency] = 1;

      setData(rates);
    };

    fetchRates();
  }, [baseCurrency]);

  return data;
};

export default useCurrencyHook;