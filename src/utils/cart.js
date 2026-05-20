// const exampleCart = [
//     {
//         product:{
//             productId: "123456",
//             price: 1000,
//             labelledPrice: 1500,
//             name :"Example Product",
//             image : "https://via.placeholder.com/300"
//         },
//         quantity: 2
//     }
// ]

export function getCart(){
    const cartString = localStorage.getItem("cart");

    if(cartString == null){
        localStorage.setItem("cart", "[]");
        return [];
    }else{

        const cart = JSON.parse(cartString);
        return cart;
    }
}

export function addToCart(product, quantity){ 

    const cart = getCart();

    const existingProductIndex = cart.findIndex(
        (item) => {
            return item.product.productId == product.productId
        }
    ) // -1 if not found

    if(existingProductIndex == -1){
        
        if(quantity > 0){
            
            cart.push({
                
                product: {
                    productId: product.productId,
                    price: product.price,
                    labelledPrice: product.labelledPrice,
                    name: product.name,
                    image: product.images[0]
                },
                quantity: quantity
            })
        }
    }else{

        const newQuantity = cart[existingProductIndex].quantity + quantity;

        if(newQuantity > 0){

            cart[existingProductIndex].quantity = newQuantity;

        }else{

            cart.splice(existingProductIndex, 1);

        }

    }

    const cartString = JSON.stringify(cart);

    localStorage.setItem("cart", cartString);

}

export function getCartTotal(cart){

    let total = 0;

    for(let i=0; i<cart.length; i++){

        total += cart[i].product.price * cart[i].quantity;


    }

    return total;

}