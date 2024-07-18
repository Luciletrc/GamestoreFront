$(document).ready(function(){

    $(".filter-button").click(function(){
        let value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
        }
    });
    
    $(".filter-button").click(function(){
        if ($(".filter-button").removeClass("active")) {
            $(this).removeClass("active");
        }
        $(this).addClass("active");
    });

});

let products = [];
document.querySelectorAll('card').forEach(function(card) {
    let titleElement = card.querySelector('card-title');
    if (!titleElement) {
        console.error('No card-title found in card');
        return;
    }

    let id = card.querySelector('card-title').textContent;
    let title = card.querySelector('card-title').textContent;
    let genre = 'RPG'; // Remplacez ceci par la véritable valeur du genre
    let price = parseFloat(card.querySelector('card-price').textContent.replace('Prix: €', ''));
    let stock = parseInt(card.querySelector('stock').textContent.replace('Stock: ', ''));
    let product = new product(id, title, genre, price, stock);
    products.push(product);
});

document.querySelectorAll('bi-cart-plus').forEach(function(button, index) {
    button.addEventListener('DOMContentLoaded', 'click', function() {
        let product = products[index];
        
        if (!product.isInStock()) {
            alert('Désolé, ce produit est en rupture de stock.');
            return;
        }
        
        if (cart[product.title]) {
            if (cart[product.title].quantity < product.stock) {
                cart[product.title].quantity += 1;
            } else {
                alert('Désolé, vous ne pouvez pas ajouter plus de ce produit au panier.');
                return;
            }
        } else {
            cart[product.title] = {
                price: product.price,
                quantity: 1
            };
        }
        
        product.purchase();
        this.parentElement.querySelector('stock').textContent = 'Stock: ' + product.stock;
        
        localStorage.setItem('cart', JSON.stringify(cart));
    });
});
