function ipva(){

   const valBank = 0.0052;
   let aplicar = prompt("Informe o valor que irá aplicar:");
   console.log(aplicar);

   let mes = prompt("Informe quantos meses deixará aplicado:");
   console.log(mes);

   let calcMes = valBank*mes;
   console.log(calcMes);

   let resultFInal = aplicar * calcMes;
   alert(`Seus ${aplicar} ao final de ${mes} meses renderão R$ ${resultFInal.toFixed(3)}`);

}