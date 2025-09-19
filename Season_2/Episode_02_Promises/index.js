// ***Basic Example***

const cart = ["shoes","pants","kurta"];

createOrder(cart,function(orderId){
    proceedToPayment(orderId,function(paymentInfo){
        showOrderSummery(paymentInfo,function(){
            updateWalletBalence();
        })
    })
})

createOrder(cart)
    .then((orderId)=>proceedToPayment(orderId))
    .then((paymentInfo)=>showOrderSummery(paymentInfo))
    .then((paymentInfo)=>updateWalletBalence(paymentInfo));


// ***RealTie Example***
const GITHUB_API = "https://api.github.com/users/ramesh12331"
const user = fetch(GITHUB_API)

console.log(user);

user.then(function(data){
    console.log(data);
});