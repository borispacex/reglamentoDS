var hi = '08:30';		// Hora de ingreso
var hs =  '17:30';	// Hora de salida

var hie = '08:44';	// Hora de llegada Empleado
var hse = '17:30';	// Hora de salida Empleado

var fc = 0.2; // Factor de compensacion

var sueldo = 3000, comision = 0, bonos = 0;
var sm = (((sueldo + comision + bonos)/22)/8)/60; // Sueldo por minuto

var fi = 6; // Factor de importancia

/* CALCULOS */
var mp = restarTiempo(hi, hie);	// Minutos penalizados
var mb = mp - (restarTiempo(hs, hse) * fc);	// Minutos base
var mdi = mb * fi * sm;	// Multa del Dia por Ingreso

console.log('Multa : ' + mdi + 'Bs');

// 08:00, 09:15
function restarTiempo(inicio, fin) {
	var horaI = inicio.substring(0, 2);
  var minI= inicio.substring(3, 5);
  var horaF = fin.substring(0, 2);
  var minF= fin.substring(3, 5);
  // validar para horas
  var minutos = 0;
  if (horaI < horaF) {
  	var horaExtra = parseInt(horaF) - parseInt(horaI);
    minutos = parseInt(minF) + 60*(horaExtra - 1) + (60 - parseInt(minI));
  } else {
  	minutos = parseInt(minF) - parseInt(minI);
  }
  return Math.abs(minutos);
}
