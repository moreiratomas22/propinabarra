function calcularPropina() {
    const totalTip = document.getElementById("total-tip").value;
    const numBarmans = document.getElementById("num-barmans").value;
    const numCajeros = document.getElementById("num-cajeros").value;
  
    // Calcula la cantidad de propina que cada empleado recibirá
    const totalEmployees = parseInt(numBarmans) + parseInt(numCajeros);
    const tipPerEmployee = totalTip / totalEmployees;
    const tipPerCajero = tipPerEmployee * 0.7;
    const totalTipForBarmans = ((tipPerEmployee * 0.3) * parseInt(numCajeros) ) + (tipPerEmployee * numBarmans) ;
    const tipPerBarman = totalTipForBarmans / parseInt(numBarmans);
  
    // Muestra el resultado en la página
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Cada cajero recibirá $${tipPerCajero.toFixed(
      2
    )}, y cada barman recibirá $${tipPerBarman.toFixed(2)}.`;
  }
  