// ## E-Commerce Cart System
// - Products array:
// ```jsx
// const products = [
//   { id: 1, name: "Laptop", price: 50000 },
//   { id: 2, name: "Mouse", price: 500 },
//   { id: 3, name: "Keyboard", price: 1500 }
// ];
// ```
// - Functions to:
//     1. Add products to cart.
//     2. Calculate total cart value.
//     3. Apply discount if total > 1000.
//     4. Remove items from cart.
const products = [
   { id: 1, name: "Laptop", price: 50000 },
   { id: 2, name: "Mouse", price: 500 },
   { id: 3, name: "Keyboard", price: 1500 }
 ];
let cart = products;
let p=[];
for(let x of products){
    p.push(x.price);
}
let tot= p.reduce((a,b)=>a+b);
console.log(tot);
if(tot>1000){
    console.log("discount");
}
else{
    console.log("No discount");
}
cart.pop();
console.log(cart);