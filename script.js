const buttons = document.querySelectorAll(".buy-button");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        const product = button.closest(".product-card");
        const name = product.querySelector("h3").textContent;

        alert(name + " додано в кошик!");
    });
});
