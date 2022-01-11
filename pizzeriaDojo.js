//Crea una function llamada pizzaOven que devuelva un objeto JavaScript (Pizza
/*
function pizzOven(tipoCorteza, tipoSalsa, quesos, carne){
    let pizza = [];
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.carne = carne;
    return pizza;
}

let pizza1 = pizzOven("Sin corteza", "tomate", "queso cerrano", "chorizo");
console.log(pizza1)

//Crea una pizza con: "estilo Chicago", "tradicional", ["mozzarella"] y ["pepperoni", "salchicha]

let pizza2 = pizzOven("estilo Chicago", "tradicional", "mozzarella", ["peperoni","salchicha"]);
console.log(pizza2)

//Crea una pizza con: "lanzada a mano" , "marinara" , ["mozzarella", "feta"] y ["champiñones", "aceitunas", "cebollas"]

let pizza3 = pizzOven("lanzada a mano","mariana", ["mozazarella","feta"],["champiñones","aceitunas","cebollas"]);
console.log(pizza3)

//Crea 2 pizzas aleatorias

let cliente1 = pizzOven("Bordes de queso","salsa de ajo","cazu marzu",["salami","peperoni","pineapple"]);
console.log(cliente1)
*/

//Bonus: Crea una function llamada randomPizza que use Math.random () para crear una pizza aleatoria.

// Retorna un número aleatorio entre 0 (incluido) y 1 (excluido)


function crazypizza(tipoCorteza, tipoSalsa, quesos, carne){
    let pizza = [];
    Math.floor(Math.random() * 10);
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.carne = carne;
    return pizza;
}

let clases = ["estilo Chicago", "tradicional", "mozzarella","Bordes de queso","salsa de ajo","cazu marzu"];
tipo = clases[Math.floor(Math.random() * 5)]
console.log(tipo)
