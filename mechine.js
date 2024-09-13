let machines = 6;
let productsPerDay = 200;
let additionalMachines = 2;
let unsoldProducts = 3;

let productsPerMachine = productsPerDay / machines;

let totalProduction = productsPerMachine * (machines + additionalMachines);

let finalProducts = totalProduction - unsoldProducts;
let fianlproductsinhand = totalProduction - finalProducts;
finalOutPut = "factory have only :" + ' ' + fianlproductsinhand + ' ' + 'products';

console.log(finalOutPut)

