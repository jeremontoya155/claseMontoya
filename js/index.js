class Turno {
  constructor(dia, nombre, horario) {
    this.dia = dia;
    this.nombre = nombre;
    this.horario = horario;
  }

  comp() {
    return `${this.dia}${this.horario}`;
  }
  mostrar() {
    console.log(`
      ${this.nombre}
      ${this.dia}
      ${this.horario}
      `);
  }
}

class Producto {
  constructor(id, nombreP, marca, precio) {
    this.id = id;
    this.nombreP = nombreP;
    this.marca = marca;
    this.precio = precio;
  }
  compa() {
    return `${this.nombreP}${this.marca}`;
  }
  muestreo() {
    console.log(`

      ${this.id}
      ${this.nombreP}
      ${this.marca}
      ${this.precio}

    `);
  }
}

//Genero la variable que almacenaran los turnos

let turnos = [];
let productos = [];

let producto_uno = new Producto(1, "Cera", "Gran Bastardo", 700);
let producto_dos = new Producto(2, "Cera", "Mr Blonde", 850);
let producto_tres = new Producto(3, "Texturizador", "Mr Blonde", 1200);
let producto_cuatro = new Producto(4, "Texturizador", "Kuav", 1000);
let producto_cinco = new Producto(5, "Shampoo(bidon)", "Opcion", 1500);
let producto_seis = new Producto(6, "Shampoo(bidon)", "Sulkey", 1900);
let producto_siete = new Producto(7, "Filos", "Gillete", 2700);
let producto_ocho = new Producto(8, "Filos", "ELIOS", 3000);
let producto_nueve = new Producto(9, "Filos", "Super Max", 2450);

productos.push(
  producto_uno,
  producto_dos,
  producto_tres,
  producto_cuatro,
  producto_cinco,
  producto_seis,
  producto_siete,
  producto_ocho,
  producto_nueve
);
//Genero la carga de los turnos

function cargarTurnos() {
  let nombre = prompt("Ingrese el nombre de la persona que quiere el turno");
  let dia = prompt("Ingrese el dia para el cual quiere el turno");
  let hora = prompt("Ingrese la hora en la que quiere  el turno");

  let turno = new Turno(dia, nombre, hora);

  return turno;
}

function comparar(array, turno) {
  let ban = true;
  array.forEach((element) => {
    if (
      element.dia === turno.dia &&
      element.nombre === turno.nombre &&
      element.horario === turno.horario
    ) {
      ban = false;
    }

    if (ban == true) {
      array.push(turno);
      console.log("Se cargo el turno");
    } else {
      console.log("El turno yav estaba reservado");
    }
  });
}

function agendar(array) {
  let turno = cargarTurnos();
  comparar(array, turno);
}

let btnCarga = document.getElementById("btn_cargar");

btnCarga.addEventListener("click", () => {
  let turno = cargarTurnos();
  let ban = true;
  for (let t of turnos) {
    if (t.comp() == turno.comp()) {
      ban = false;
    }
  }

  if (ban) {
    turnos.push(turno);
    alert("Se reservo el turno");
  } else {
    alert("El turno ya estaba reservado");
  }
});

let boton_mostrar = document.getElementById("btn_mostrar");

boton_mostrar.addEventListener("click", () => {
  if (turnos.length > 0) {
    for (let t of turnos) {
      t.mostrar();
    }
  } else {
    console.log("No se cargo todavia ningun turno");
  }
});

function buscar(nom) {
  let resultado = turnos.find((tur) => tur.nombre === nom);
  return resultado;
}

let busqueda_nombre = document.getElementById("btn_nombre");

busqueda_nombre.addEventListener("click", () => {
  let n = prompt("Ingrese el nombre del turno que desea buscar");
  let devolucion = buscar(n);
  if (devolucion != null) {
    alert(`Si ${n} tiene el siguiente turno`);
    devolucion.mostrar();
  } else {
    alert("La persona indicada no tiene ningun turno");
  }
});

function buscar_dia(d) {
  let auxA = turnos.filter((t) => t.dia == d);
  return auxA;
}

let btn_dia = document.getElementById("btn_dia");

btn_dia.addEventListener("click", () => {
  let d = prompt("Ingrese  el dia en el cual quiere ver los turnos que hay");
  let carga = buscar_dia(d);
  if (carga.length > 0) {
    for (let c of carga) {
      c.mostrar();
    }
  } else {
    console.log("No habia turnos en el dia indicado");
  }
});

function buscar_producto(nombre_p, marca_p) {
  let aux = `${nombre_p}${marca_p}`;
  let producto = productos.find(
    (p) => p.compa().toLowerCase() === aux.toLowerCase()
  );
  if (producto != null) {
    producto.muestreo();
  } else {
    console.log("No se encontro  ningun producto");
  }
}

let btn_producto = document.getElementById("btn_producto");

btn_producto.addEventListener("click", () => {
  let n = prompt("Ingrese el nombre del producto que desea buscar");
  let m = prompt("Ingrese la marca del producto");

  buscar_producto(n, m);
});

function eliminar(nom) {
  let buscado = buscar(nom);
  if (buscado != null) {
    let indice = turnos.indexOf(buscado);
    turnos.splice(indice, 1);
    console.log("Se elimino el elemento buscado");
  } else {
    console.log("No se pudo encontrar el turno para el nombre ingresado");
  }
}

let btn_eliminar = document.getElementById("btn_eliminar");
btn_eliminar.addEventListener("click", () => {
  let n = prompt("Ingrese el nombre de la persona con el turno");
  eliminar(n);
});
