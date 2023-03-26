const enterData = (message,dataType) => {
    let data
    if (dataType == "number") {
        do{
            data = parseInt(prompt(message))
        }while(isNaN(data))
    }
    if (dataType == "date") {
        let validate = /^\d{2}\/\d{2}\/\d{4}$/
        do {
            data = (prompt(message))
        } while (!validate.test(data))
        data = new Date(data)
    }
    return data
}

let advance = true

while (advance) {
    let idProduct = enterData("Seleccione el número de workshop que desea realizar: 1- Fotografía infantil 2- Paisaje 3- Retratos","number")
    let dateEvent = enterData("Ingrese la fecha de inicio: 04/04/2023, 02/05/2023, 06/06/2023","date")

    let warning = `Usted seleccionó el workshop ${idProduct} con fecha de inicio ${dateEvent}`
    
    if (idProduct === 1 || idProduct === 2 || idProduct === 3) {
        alert(warning)
    } else{
        alert("No ha seleccionado un workshop disponible")
    }
    advance = confirm("Desea continuar?")
}

