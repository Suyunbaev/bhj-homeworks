let productQuantityControl = document.getElementsByClassName("product__quantity-control")
let uppItems = document.getElementsByClassName("product__quantity-control_dec")
let downItems = document.getElementsByClassName("product__quantity-control_inc")
let productQuantity = document.getElementsByClassName("product__quantity-value")
let productAdd = document.getElementsByClassName("product__add")
let basketCartProducts = document.getElementsByClassName("cart__products")




 for (let i = 0; i < productQuantityControl.length; i++) {
    productQuantityControl[i].addEventListener('click', (e)=>{
        let target = e.target
        if (target.classList.contains('product__quantity-control_inc')){
            target.previousElementSibling.textContent ++
        }
        if (target.classList.contains('product__quantity-control_dec')){
            if (target.nextElementSibling.textContent <= 1){
                return 0
            }
            else {
            target.nextElementSibling.textContent --
            }
        }
        
    });
 }
 
 for (let i = 0; i < productAdd.length; i++) {
    productAdd[i].addEventListener('click', (e)=>{
        let target = e.target
        let cloneId =  target.closest("div[data-id]");
        let cloneSrc = cloneId.getElementsByClassName("product__image");
        let cloneQuantity = cloneId.getElementsByClassName("product__quantity-value");
        let findProduct =  document.querySelector('.cart__products');
        
        let cartProduct = [...findProduct.children].find( cartItem => cartItem.dataset.id === cloneId.dataset.id);
             
        if (cartProduct) {
            let quantity = cartProduct.querySelector('.cart__product-count').textContent;
            cartProduct.querySelector('.cart__product-count').textContent = Number(cloneQuantity[0].textContent) + Number(quantity);
        }else{
            findProduct.innerHTML += `
            <div class="cart__product" data-id=${cloneId.dataset.id}>
            <img class="cart__product-image" src=${cloneSrc[0].getAttribute('src')}>
            <div class="cart__product-count">${cloneQuantity[0].textContent}</div>
            </div> `; 
        }
    })
}