const EXCHANGE_API_KEY = "8590f910d04621e87a4fc7e4";

document.getElementById("convertBtn").addEventListener("click", async () => {
    const amount = parseFloat(document.getElementById("amount").value);
    const mode = document.getElementById("mode").value;
    let from, to;

    switch(mode) {
        case "JPYtoSGD": from="JPY"; to="SGD"; break;
        case "SGDtoJPY": from="SGD"; to="JPY"; break;
        case "JPYtoKRW": from="JPY"; to="KRW"; break;
        case "KRWtoJPY": from="KRW"; to="JPY"; break;
    }

    const url = `https://v6.exchangerate-api.com/v6/${EXCHANGE_API_KEY}/pair/${from}/${to}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const rate = data.conversion_rate;
        const result = amount * rate;
        document.getElementById("result").textContent = `結果: ${result.toFixed(2)}`;
    } catch (error) {
        document.getElementById("result").textContent = "エラーが発生しました";
    }
});
