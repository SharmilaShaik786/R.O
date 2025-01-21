// Get product name from the URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get('product');

// Define product details
const productDetails = {
    "Product 1": {
        name: "100 LPH RO Capacity Water Purifier",
        description: "The 100 LPH (liters per hour) Reverse Osmosis (RO) water purifier is designed for medium to large-scale residential and commercial applications where clean, purified water is required in significant quantities. With its high capacity and advanced filtration technology, this RO system ensures that you have access to pure and safe drinking water at a consistent flow rate, making it ideal for use in homes, offices, schools, hospitals, and small businesses.",
        image: "pictures/CP1.jpeg",
        features: [
            "Multi-stage filtration: RO, UV, and TDS control for advanced purification and complete removal of contaminants.",
            "Retains essential minerals: The system ensures that vital minerals like calcium and magnesium are preserved, providing healthier and tastier water.",
            "High water purification capacity: Capable of purifying up to 100 liters of water per hour, ensuring a consistent supply of pure water.",
            "Compact and modern design: Space-saving, sleek design that fits perfectly in kitchens, offices, and small commercial spaces without compromising performance."
        ]
    },


    "Product 2": {
        name: "250 LPH RO Capacity Water Purifier",
        description: "The 250 LPH (liters per hour) Reverse Osmosis (RO) water purifier is designed for large-scale commercial and industrial applications. With its high capacity and advanced filtration technology, this RO system ensures a continuous supply of pure and safe drinking water, making it ideal for use in factories, hotels, restaurants, hospitals, and large offices.",
        image: "pictures/CP2.jpeg",
        features: [
            "Multi-stage filtration: RO, UV, and TDS control for advanced purification and complete removal of contaminants.",
            "Retains essential minerals: The system ensures that vital minerals like calcium and magnesium are preserved, providing healthier and tastier water.",
            "High water purification capacity: Capable of purifying up to 250 liters of water per hour, ensuring a consistent supply of pure water.",
            "Compact and modern design: Space-saving, sleek design that fits perfectly in commercial and industrial settings without compromising performance."
        ]
    },
    "Product 3": {
        name: "1000 LPH RO Capacity Water Purifier",
        description: "The 1000 LPH (liters per hour) Reverse Osmosis (RO) water purifier is designed for large-scale industrial and commercial needs. This high-capacity RO system ensures a continuous and high-flow supply of purified water, ideal for use in factories, large hotels, hospitals, universities, and other large enterprises where high volumes of water are required for consumption, processing, or other operations.",
        image: "pictures/CP3.jpeg",
        features: [
            "Multi-stage filtration: RO, UV, and TDS control for advanced purification and complete removal of contaminants.",
            "Retains essential minerals: The system ensures that vital minerals like calcium and magnesium are preserved, providing healthier and tastier water.",
            "High water purification capacity: Capable of purifying up to 1000 liters of water per hour, ensuring a consistent supply of pure water.",
            "Compact and modern design: Designed for large-scale industrial applications, the purifier is space-efficient and blends seamlessly into large commercial spaces."
        ]
    },
    "Product 4": {
        name: "SS 1000 LPH RO Capacity Water Purifier",
        description: "The SS 1000 LPH (liters per hour) Reverse Osmosis (RO) water purifier is designed for extremely high-demand commercial and industrial applications, providing continuous purification of water for large industries, municipalities, and other large-scale operations that require massive quantities of purified water.",
         image: "pictures/CP4.jpeg",
        features: [
            "Multi-stage filtration: RO, UV, and TDS control for advanced purification and complete removal of contaminants.",
            "Retains essential minerals: The system ensures that vital minerals like calcium and magnesium are preserved, providing healthier and tastier water.",
            "High water purification capacity: Capable of purifying up to 1000 liters of water per hour, ensuring a consistent supply of pure water.",
            "Compact and modern design: Designed for large-scale industrial applications, the purifier is space-efficient and blends seamlessly into large commercial spaces."
        ]
    },
    "Product 5": {
        name: "2000 LPH to 40000 LPH RO Capacity Water Purifier",
        description: "The 2000 LPH to 40000 LPH Reverse Osmosis (RO) water purifier is designed to meet the high demands of large-scale commercial, industrial, and municipal applications. With flexible capacity options ranging from 2000 to 40000 liters per hour, this RO system ensures continuous access to purified water, making it ideal for factories, hotels, hospitals, large offices, and other high-demand establishments. It provides the ideal solution for businesses that need a scalable and efficient water purification system.",
        image: "pictures/CP5.jpeg",
        features: [
            "Multi-stage filtration: RO, UV, and TDS control for advanced purification and complete removal of contaminants.",
            "Retains essential minerals: The system ensures that vital minerals like calcium and magnesium are preserved, providing healthier and tastier water.",
            "Scalable purification capacity: Capable of purifying between 2000 to 40000 liters of water per hour, ensuring a constant supply of pure water for large-scale needs.",
            "Compact and robust design: Space-efficient and durable design that fits perfectly in industrial and commercial settings, providing reliable performance even under high demand.",
            "High efficiency: Designed for continuous operation with minimal maintenance and maximum filtration performance."
        ]
    },
    "Product 6": {
        name: "5000 LPH RO Capacity Water Purifier",
        description: "The 5000 LPH (liters per hour) Reverse Osmosis (RO) water purifier is designed for very large-scale industrial and commercial purposes, providing a consistent, high-flow supply of purified water to meet the high demands of factories, large businesses, and public facilities.",
        image: "pictures/CP6.jpeg",
        features: [
            "Multi-stage filtration: RO, UV, and TDS control for advanced purification and complete removal of contaminants.",
            "Retains essential minerals: The system ensures vital minerals such as calcium and magnesium are retained, promoting healthier water.",
            "High water purification capacity: Capable of purifying up to 5000 liters of water per hour to meet the needs of large-scale operations.",
            "Industrial-grade performance: Designed for large-scale applications, ensuring uninterrupted purified water supply for high-volume use."
        ]
    },
    "Product 7": {
        name: "10000 LPH RO Capacity Water Purifier",
        description: "The 10000 LPH (liters per hour) Reverse Osmosis (RO) water purifier is designed for extremely high-demand commercial and industrial applications, providing continuous purification of water for large industries, municipalities, and other large-scale operations that require massive quantities of purified water.",
        image: "pictures/CP7.jpeg",
        features: [
            "Multi-stage filtration: RO, UV, and TDS control for advanced purification and complete removal of contaminants.",
            "Retains essential minerals: Essential minerals like calcium and magnesium are preserved, ensuring that water is both healthy and great-tasting.",
            "High water purification capacity: Capable of purifying up to 10000 liters of water per hour to meet the highest water demands.",
            "Heavy-duty industrial design: Engineered for the most demanding commercial and industrial environments, providing uninterrupted access to purified water."
        ]
    },

    "Product 8": {
        name: "10000 LPH RO Capacity Water Purifier",
        description: "The 10000 LPH (liters per hour) Reverse Osmosis (RO) water purifier is built for large-scale commercial and industrial applications. Designed to handle high-demand environments, it ensures the continuous supply of purified water in industries, municipalities, and large facilities, providing safe drinking water at a high flow rate.",
        image: "pictures/CP8.jpeg",
        features: [
            "Multi-stage filtration: RO, UV, and TDS control for advanced purification and complete removal of contaminants.",
            "Retains essential minerals: Preserves vital minerals, ensuring water remains healthy and great-tasting.",
            "High water purification capacity: Capable of purifying up to 20000 liters of water per hour, meeting the demands of large-scale operations.",
            "Heavy-duty industrial design: Built to withstand the most demanding commercial and industrial environments, offering a continuous supply of purified water."
        ]
    },
    "Product 9": {
        name: "20000 to 50000 LPH RO Capacity Water Purifier",
        description: "The 20000 to 50000 LPH Reverse Osmosis (RO) water purifier is engineered for large-scale commercial and industrial needs. This high-capacity purifier is capable of meeting massive water demands, providing continuous access to purified water for municipalities, large industries, factories, and large-scale facilities.",
        image: "pictures/CP9.jpeg",
        features: [
            "Multi-stage filtration: RO, UV, and TDS control for advanced purification and complete removal of contaminants.",
            "Retains essential minerals: Ensures the preservation of essential minerals like calcium and magnesium, providing healthier and tastier water.",
            "Extremely high purification capacity: Capable of purifying between 20000 and 50000 liters of water per hour to meet the highest water demands.",
            "Industrial-strength design: Designed to meet the needs of large industries and high-demand commercial applications, ensuring continuous and reliable purified water."
        ]
    }
};

    // "Product 10": {
    //     name: "Product 10",
    //     description: "Description for Product 10.",
    //     image: "C:/20VV1A1256/R.O website/main page/pictures/P4.jpeg"
    // },

    // "Product 11": {
    //     name: "Product 11",
    //     description: "Description for Product 11.",
    //     image: "C:/20VV1A1256/R.O website/main page/pictures/P8.jpeg"
    // },
    // "Product 12": {
    //     name: "Product 12",
    //     description: "Description for Product 12.",
    //     image: "C:/20VV1A1256/R.O website/main page/pictures/P9.jpeg"
    // },
    // "Product 13": {
    //     name: "Product 13",
    //     description: "Description for Product 13.",
    //     image: "C:/20VV1A1256/R.O website/main page/pictures/P10.jpeg"
    // },
    // "Product 14": {
    //     name: "Product 14",
    //     description: "Description for Product 14.",
    //     image: "C:/20VV1A1256/R.O website/main page/pictures/P11.jpeg"
    // },
    // "Product 15": {
    //     name: "Product 15",
    //     description: "Description for Product 15.",
    //     image: "C:/20VV1A1256/R.O website/main page/pictures/P12.jpeg"
    // }
// };

// Set the details for the selected product
if (productDetails[productName]) {
    document.getElementById("product-name").innerText = productDetails[productName].name;
    document.getElementById("product-image").src = productDetails[productName].image;
    document.getElementById("product-description").innerText = productDetails[productName].description;

    const featuresList = document.getElementById("product-features");
    featuresList.innerHTML = ""; // Clear any previous features
    if (productDetails[productName].features) {
        productDetails[productName].features.forEach(feature => {
            const li = document.createElement("li");
            li.innerText = feature;
            featuresList.appendChild(li);
        });
    }
} else {
    document.getElementById("product-name").innerText = "Product Not Found";
    document.getElementById("product-description").innerText = "Sorry, we could not find details for the selected product.";
}
