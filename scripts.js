// scripts.js
document.addEventListener("DOMContentLoaded", function () {
    const menuItems = {
        appetizers: [
            { name: "Spring Rolls", description: "Fresh vegetables wrapped in crispy rice paper.", price: "$5.99" },
            { name: "Garlic Bread", description: "Toasted bread with garlic butter.", price: "$3.99" }
        ],
        mainCourse: [
            { name: "Grilled Chicken", description: "Juicy chicken breast grilled to perfection.", price: "$12.99" },
            { name: "Pasta Alfredo", description: "Creamy Alfredo pasta with grilled chicken.", price: "$14.99" }
        ],
        desserts: [
            { name: "Chocolate Cake", description: "Rich chocolate cake with a creamy center.", price: "$6.99" },
            { name: "Ice Cream", description: "Vanilla, chocolate, and strawberry flavors.", price: "$4.99" }
        ]
    };

    function loadMenu() {
        const appetizers = document.getElementById("appetizers");
        const mainCourse = document.getElementById("main-course");
        const desserts = document.getElementById("desserts");

        function populateMenuSection(sectionId, items) {
            const section = document.getElementById(sectionId);
            const ul = section.querySelector("ul");
            ul.innerHTML = '';
            items.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <h4>${item.name}</h4>
                    <p>${item.description}</p>
                    <span>${item.price}</span>
                `;
                ul.appendChild(li);
            });
        }

        populateMenuSection("appetizers", menuItems.appetizers);
        populateMenuSection("main-course", menuItems.mainCourse);
        populateMenuSection("desserts", menuItems.desserts);
    }

    loadMenu();
});
