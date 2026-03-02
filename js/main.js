const API_URL = "http://localhost:3000/products"; // endpoint GET/POST

// Afficher les produits dans la page
function displayProducts(products) {
    const list = document.getElementById("product-list");
    list.innerHTML = ""; // vide la liste avant affichage

    products.forEach(product => {
        const li = document.createElement("li");
        li.textContent = `${product.name} - ${product.price} €`;

        // Bouton supprimer
        const btnDelete = document.createElement("button");
        btnDelete.textContent = "Supprimer";
        btnDelete.style.marginLeft = "10px";
        btnDelete.addEventListener("click", async () => {
            try {
                await fetch(`${API_URL}/${product.id}`, { method: "DELETE" });
                fetchProducts(); // recharger la liste
            } catch (err) {
                console.error("Erreur DELETE :", err);
            }
        });

        li.appendChild(btnDelete);
        list.appendChild(li);
    });
}

// Récupérer les produits depuis l'API
async function fetchProducts() {
    try {
        const res = await fetch(API_URL);
        const data = await res.json();
        displayProducts(data);
    } catch (err) {
        console.error("Erreur fetch :", err);
    }
}

// Ajouter un produit via le formulaire
document.getElementById("product-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const product = {
        name: document.getElementById("name").value,
        price: document.getElementById("price").value
    };

    try {
        await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product)
        });

        e.target.reset();
        fetchProducts(); // recharger la liste
    } catch (err) {
        console.error("Erreur POST :", err);
    }
});

// Chargement initial
fetchProducts();