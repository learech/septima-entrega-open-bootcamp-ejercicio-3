const fecha = new Date();

const fechaNacimiento = new Date(21, 9, 1984)
console.log(fechaNacimiento);

const fecha3 = fecha > fechaNacimiento;
console.log(fecha3);

const dia = fechaNacimiento.getDate();
console.log(dia);

const mes = fechaNacimiento.getMonth() + 1;
console.log(mes);

const year = fechaNacimiento.getFullYear();
console.log(year);