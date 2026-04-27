import { useEffect, useState } from "react";


function useCurrencyInfo(currency){
    const [data, setData] = useState({}) //{},empty object, because if api is not called, then it wont crash
    useEffect(() => {
            fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)

            .then((res) => res.json())
            .then((res) => setData(res[currency]) ) // if hold in regular variabile, then UI wont update


    }, [currency]) // as the currency changes, useEffect will trigger [dependency (currency)]


    return data
}

export default useCurrencyInfo //anyone can import and use -> const cuurencyData = useCurrencyInfo("usd");