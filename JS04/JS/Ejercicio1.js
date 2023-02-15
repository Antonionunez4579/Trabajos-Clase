let personas = ["Sofia","David","Juan"];
personas.push("Sara","Agustin"); //Agrega una elemento al final
let primeraPersona = personas.shift();
console.log("persona llamada ", primeraPersona);
console.log("Personas enn la fila ", personas);
personas.splice(1,0,"Renata"); // Agrega elemento en ciertas posiciones
personas.push("Elena");
console.log("Personas en la fila",personas);


let asterisco = "*";
for (i = 0; i < 5; i++){
console.log(asterisco);
asterisco += "*";
}

let xValue = 10;
while (xValue > 0) {
    console.log(xValue);
    xValue -= 0.5;
}


for (let i = 1; i <= 100; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

