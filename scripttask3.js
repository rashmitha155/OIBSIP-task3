let convert = () =>{
    number = document.getElementById('num').value;
    let temp = document.querySelector("#temp").value;
    result = document.getElementById('res');
    if( temp == "Celsius")
    {
        let F = number * (9 / 5) + 32
        result.innerHTML = F.toFixed(4) + " F"
    }
    else
    {
        let C = (number - 32) * (5 / 9)
        result.innerHTML = C.toFixed(4) + " °C"
    }
}