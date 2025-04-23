//1. convertir la siguiente funcion a una funcion flecha en una solo linea sin llaves(1p)
function esPar(numero){
  if (numero % 2 === 0){
    return true;
  } else {
    return false;
  }
}

/// Resolucion al 1.
const esPar = (numero) => numero % 2 === 0 ? true : false;

console.log(esPar(4));
console.log(esPar(15));


//2. Crear una funcion callback que acepte un arreglo de numeros y una funcion callback donde duplique cada elemento del arreglo

/// Resolucion al 2
const numeros = [1, 3, 76, 12, 4];

function duplicar(num){
  return num * 2;
}

function duplicarNumeros(arr, callback){
  for (let i = 0; i < arr.length; i++){
    arr[i] = callback(arr[i]);
  }
  return arr;
}

const resultado = duplicarNumeros(numeros, duplicar);
console.log(resultado);

//---------------------------------------------------------------------------------------------------------------------------------------------------
//3. Usando los metodos setTimeOut y setInterval crear un contador que disminuya del 5 al 0 

/// Solucion al 3
let contador = 5;
let intervalID = setInterval(() => {
  console.log(contador);
  contador--;
}, 500); ;

setTimeout(() => clearInterval(intervalID), 3500);

//---------------------------------------------------------------------------------------------------------------------------------------------------

// Dado el siguiente arreglo:
const libros = [
  { id: 1, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", año: 1967 },
  { id: 2, titulo: "La casa de lo Espiritus", autor: "Isabel Allende", año: 1982 },
  { id: 3, titulo: "Rayuela", autor: "Julio Cortázar", año: 1963 },
  { id: 4, titulo: "El código Da Vinci", autor: "Dan Brown", año: 2005 }
];
//4. Cambiar el nombre del libro con id 3 a Final del juego usando for..of
console.log(libros[2].titulo);

/// Solucion al 4
for (const libro of libros){
  if (libro.id === 3) {
    libro.titulo = "Final del juego";
    break; // Salir del bucle una vez que se ha encontrado y cambiado el libro
  }
}

console.log(libros[2].titulo);

//---------------------------------------------------------------------------------------------------------------------------------------------------  
//5. Crear una  funcion que muestre solo los titulos de arreglo libros usando for..of
const librosa = [
  { id: 1, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", año: 1967 },
  { id: 2, titulo: "La casa de lo Espiritus", autor: "Isabel Allende", año: 1982 },
  { id: 3, titulo: "Rayuela", autor: "Julio Cortázar", año: 1963 },
  { id: 4, titulo: "El código Da Vinci", autor: "Dan Brown", año: 2005 }
];


/// Solucion al 5
function mostrarTitulos(arr){
  for (const libro of arr){
    console.log(libro.titulo);
  }
}

mostrarTitulos(librosa);
//---------------------------------------------------------------------------------------------------------------------------------------------------

// ya acabe esto es solo para perder el tiempo blablabla, nose que escribir