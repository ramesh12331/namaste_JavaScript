// const cart = ["shoes","pants","kurta"];

// // const promise = createOrder(cart);
 
// // console.log(promise)
// createOrder(cart)
// .then(function(orderId){
//     console.log(orderId)
//     return orderId;
// })
// .then(function(orderId){
//     return proceedToPayment(orderId);
// })
// .then(function(paymentInfo){
//     console.log(paymentInfo)
// })
// .catch(function(err){
//     console.log(err)
// })


// function createOrder(cart){
//     const promise = new Promise(function(resolve,reject){
//         if(!validateCart(cart)){
//             const err = new Error("Cart is not valid");
//             reject(err);
//         }
//         const orderId = "12345";
//         if(orderId);
//         resolve(orderId);
//     });
//     return promise;
// }

// function proceedToPayment(cart){
//     return new Promise(function(resolve,reject){
//         resolve("Payment Successfull");
//     });
// }

// ************
const cart = ["shoes", "pants", "kurta"];

createOrder(cart)
  .then(function(orderId) {
    console.log("Order ID:", orderId);
    return orderId;
  })
  .then(function(orderId) {
    return proceedToPayment(orderId);
  })
  .then(function(paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function(err) {
    console.log("Error:", err.message);
  });

function validateCart(cart) {
  // Example: valid if cart has at least 1 item
  return cart && cart.length > 0;
}

function createOrder(cart) {
  const promise = new Promise(function(resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    const orderId = "12345";
    resolve(orderId);
  });
  return promise;
}

function proceedToPayment(orderId) {
  return new Promise(function(resolve, reject) {
    resolve("Payment Successful for Order " + orderId);
  });
}
