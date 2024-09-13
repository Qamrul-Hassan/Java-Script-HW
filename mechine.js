let machines = 6; // Initial number of machines
let productsPerDay = 200; // Total products produced per day
let additionalMachines = 2; // Additional machines added
let unsoldProducts = 3; // Products not sold

// Products produced by one machine per day
let productsPerMachine = productsPerDay / machines;

// Total products produced by 8 machines (6 + 2)
let totalProduction = productsPerMachine * (machines + additionalMachines);

// Final number of products after subtracting unsold products
let finalProducts = totalProduction - unsoldProducts;
let fianlproductsinhand = totalProduction - finalProducts;
finalOutPut = "factory have only :" + ' ' + fianlproductsinhand + ' ' + 'products';

console.log(finalOutPut)

