const searchInput = document.getElementById("searchInput");
const propertyType = document.getElementById("propertyType");
const propertyGrid = document.getElementById("propertyGrid");
const noResults = document.getElementById("noResults");


/* SEARCH PROPERTIES */

function searchProperties() {

    const searchText = searchInput.value.toLowerCase().trim();
    const selectedType = propertyType.value;

    const properties = document.querySelectorAll(".property-card");

    let found = 0;

    properties.forEach(property => {

        const name =
            property.dataset.name.toLowerCase();

        const location =
            property.dataset.location.toLowerCase();

        const type =
            property.dataset.type.toLowerCase();

        const matchesSearch =
            name.includes(searchText) ||
            location.includes(searchText);

        const matchesType =
            selectedType === "all" ||
            type === selectedType;

        if (matchesSearch && matchesType) {

            property.style.display = "block";
            found++;

        } else {

            property.style.display = "none";

        }

    });


    if (found === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }
}


/* LIVE SEARCH */

searchInput.addEventListener("input", searchProperties);

propertyType.addEventListener("change", searchProperties);


/* PROPERTY DETAILS */

function showProperty(
    title,
    location,
    price,
    details,
    description
) {

    document.getElementById("modalTitle").textContent = title;

    document.getElementById("modalLocation").textContent =
        "📍 " + location;

    document.getElementById("modalPrice").textContent =
        price;

    document.getElementById("modalDetails").textContent =
        details;

    document.getElementById("modalDescription").textContent =
        description;


    /*
       Use a different high-resolution image
       for the property details.
    */

    const images = {

        "Modern Luxury Duplex":
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=90",

        "Premium Family Villa":
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=90",

        "Luxury City Apartment":
        "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=90",

        "Executive Mansion":
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=90",

        "Modern Estate Villa":
        "https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=1600&q=90",

        "Luxury Penthouse":
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=90",

        "Contemporary Family Home":
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=90",

        "Garden Villa":
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=90",

        "Urban Residence":
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=90",

        "Premium Smart Home":
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=90",

        "Luxury Family Residence":
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=90",

        "Exclusive Residence":
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=90"

    };


    document.getElementById("modalImage").src =
        images[title];


    document.getElementById("propertyModal").style.display =
        "block";

    document.body.style.overflow = "hidden";
}


/* CLOSE PROPERTY */

function closeProperty() {

    document.getElementById("propertyModal").style.display =
        "none";

    document.body.style.overflow = "auto";
}


/* CLOSE WHEN CLICKING OUTSIDE */

document.getElementById("propertyModal").addEventListener(
    "click",
    function(event) {

        if (event.target === this) {
            closeProperty();
        }

    }
);


/* CLOSE WITH ESCAPE */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {
            closeProperty();
        }

    }
);
