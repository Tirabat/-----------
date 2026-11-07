const button = document.getElementById("button")
let result = 0
let error = false
button.addEventListener('click', () => {
    document.getElementById('firsterror').textContent = ""
    document.getElementById('seconderror').textContent = ""
    document.getElementById('thirderror').textContent = ""
    document.getElementById('result').textContent = ""
    const first = +document.getElementById("firstinput").value
    const second = document.getElementById("secondinput").value
    const third = +document.getElementById("thirdinput").value
    if (Number.isNaN(first)){
        document.getElementById('firsterror').textContent = "ошибка, введите корректное число"
        error = true
    }
    if (Number.isNaN(third)){
        document.getElementById('thirderror').textContent = "ошибка, введите корректное число"
        error = true
    }
    if (second === "+"){
        result = first + third
    } else if (second === "-") {
        result = first - third
    } else if (second === "*"){
        result = first * third
    } else if (second === "/"){
        result = first / third
    } else {
        document.getElementById('seconderror').textContent = "ошибка введите корректный знак"
    }
    if (error){
        error = false; return
    } else{
        document.getElementById('result').textContent = result
    }
})

