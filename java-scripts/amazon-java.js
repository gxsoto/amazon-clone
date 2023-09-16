
let productsHTML = '';

products.forEach((product) => {
    //create html for each product
    productsHTML += `
    <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.productName}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceInCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary"
          data-product-name="${product.id}">
            Add to Cart
          </button>
        </div>`;
});

//adding the html to the page for all the products.
document.querySelector('.products-grid').innerHTML = productsHTML;

//adding to cart everytime button is clicked 
document.querySelectorAll(".add-to-cart-button").forEach((button) => {
  button.addEventListener('click', () => {
    //the data attached to the button
    const productId = button.dataset.productId;

    let match;

    cartProducts.forEach((thing) => {
      if(productId === thing.productId) {
        match = thing;
      }
    });

    if(match) {
      match.quantity++;
    } else {
      cartProducts.push({
        productId: productId,
        quantity: 1
      });
    }
  
    

    console.log(cartProducts);
  });
});