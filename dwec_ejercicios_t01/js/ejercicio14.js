



function calcularDescuento(salarioBruto){
    if(salarioBruto < 600){
        return 0.08;
    }else if(salarioBruto >= 600 && salarioBruto<= 1000){
        return 0.10;
    }else{
        return 0.12;
    }
}

function calcSalarioNeto(salarioBruto, descuento){
    return salarioBruto * (1-descuento);
}

function calcSalarioBruto(hTrabajadas, turno){
    let dinxhora=0;
    let salir = false;
    while(!salir){
        switch(turno){
            case `m`:
                dinxhora = 45;
                salir = true
                break;
            case `t`:
                dinxhora = 47;
                salir = true
                break;
            case `n`:
                dinxhora = 50;
                salir = true
                break;
            default:
                alert("Turno no válido. Usa 'm' para mañanas, 't' para tardes, o 'n' para noches.")
        }
    }
    return hTrabajadas * dinxhora
}

function app(){
    let totalSal = 0;
    let salir = false;

    while (!salir){
        let hTrabajadas = parseFloat(prompt("Intoduce las horas trabajadas: "))
        let turno="";
        do{
            turno= prompt("Introduce el turno de trabajo(m para mañanas, t para tardes, n para noches)")
        }while(turno !== 'm' && turno !== 't' && turno !== 'n')
        let salarioBruto = calcSalarioBruto(hTrabajadas, turno)
        //let descuento = calcularDescuento(salarioBruto)
        let SalarioNeto = calcSalarioNeto(salarioBruto, calcularDescuento(salarioBruto))
        console.log(`El salario neto del trabajador es: ${SalarioNeto}€`)

        totalSal += SalarioNeto

        salir = confirm("quieres salir?");
    }

    console.log(`El total de los salarios es de: ${totalSal}€`)

}

app();