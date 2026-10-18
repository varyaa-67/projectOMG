const button = document.querySelectorAll('.buy-button')

button.forEach(function(button) {
    button.addEventListener("click", function() {
        const product = button.closest(".product-card");
        const name = product.querySelector("h3").textContent;

        alert(name + " додано в кошик!");
    });
});

const searchToggle = document.getElementById("search-toggle");
const catalogSearch = document.getElementById("catalogSearch");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const searchMessage = document.getElementById("searchMessage");

const products = document.querySelectorAll(".product-card");
searchToggle.addEventListener("click", function() {
    catalogSearch.hidden = !catalogSearch.hidden;
    if (!catalogSearch.hidden) {
        searchInput.focus();
        document.getElementById("catalog").scrollIntoView({
            behavior: "smooth"
        });
    }
});
function searchProducts() {
    const query = searchInput.value.trim().toLowerCase();
    let found = 0;
    products.forEach(function(product) {
        const name = product.querySelector("h3")
            .textContent.toLowerCase();
        if (name.includes(query)) {
            product.style.display = "";
            found++;
        } else {
            product.style.display = "none";
        }
    });
    if (query === "") {
        searchMessage.textContent = "";
    } else if (found === 0) {
        searchMessage.textContent = "Товарів не знайдено";
    } else {
        searchMessage.textContent = "Знайдено товарів: " + found;
    }
}
searchInput.addEventListener("input", searchProducts);
clearSearch.addEventListener("click", function() {
    searchInput.value = "";
    searchProducts();
    searchInput.focus();
});
