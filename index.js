const menuBar = document.getElementById("menuBar")
const homeBtn = document.getElementById("homeBtn")
const productsBtn = document.getElementById("productsBtn")
const aboutUsBtn = document.getElementById("aboutUsBtn")
const allProductDiv = document.getElementById("allProductDiv")
const btnContainer = document.getElementById("btnContainer")
const coverBtn = document.getElementById("coverBtn")
const aboutImage = document.getElementById("aboutImage")
const contactImage = document.getElementById("contactImage")

let productList = [
    {
        name: "Rozer Basilizk",
        desc: "Customizable Wireless Gaming Mouse with RGB Lighting.",
        price: 49.89,
        imageUrl: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Rozer Blade 180",
        desc: "NVIDIA® GeForce RTX™ 40 Series 18” Laptop with 13th Gen Intel® Core™ i9 Processor (24-Core).",
        price: 4499.99,
        imageUrl: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Rozer Kiyo Pro Ultra Max",
        desc: "Ultra-large Sensor 4K Webcam for Content Creation",
        price: 299.99,
        imageUrl: "https://images.unsplash.com/photo-1593786352155-a8a3c04580b2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]

// Menu Bar Scroll Function
window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        menuBar.style.position = "fixed"
    } else {
        menuBar.style.position = "absolute"
    }
})

// Menu Button Click Function
homeBtn.addEventListener("click", function () {
    window.scrollTo(0, 0)
})

productsBtn.addEventListener("click", function () {
    window.scrollTo(0, 525)
})

aboutUsBtn.addEventListener("click", function () {
    window.scrollTo(0, 1275)
})

// Product Display Function
window.addEventListener("load", function () {
    displayProducts()
})

function displayProducts() {
    allProductDiv.innerHTML = ""

    for (let i = 0; i < productList.length; i++) {
        allProductDiv.innerHTML += `
        <div class="productDiv">
        <img src="${productList[i].imageUrl}"
        alt="product" class="classProductImage">
        <h1 class="classProductTitle">${productList[i].name}</h1>
        <p class="classProductSub">${productList[i].desc}</p>
        <p class="classProductPrice">$${productList[i].price}</p>
        </div>`
    }
}

// Width Adjustment
window.addEventListener("scroll", function () {
    if (window.innerWidth < 850) {

        allProductDiv.innerHTML = ""

        for (let i = 0; i < 2; i++) {
            allProductDiv.innerHTML += `
        <div class="productDiv">
        <img src="${productList[i].imageUrl}"
        alt="product" class="classProductImage">
        <h1 class="classProductTitle">${productList[i].name}</h1>
        <p class="classProductSub">${productList[i].desc}</p>
        <p class="classProductPrice">$${productList[i].price}</p>
        </div>`
        }

        btnContainer.innerHTML = `<button id="seeMore">-See More-</button>`

        aboutImage.style.width = "550px"
        aboutImage.style.height = "280px"
        contactImage.style.height = "280px"
        contactImage.style.width = "550px"

    } else {
        btnContainer.innerHTML = ""

        aboutImage.style.width = ""
        aboutImage.style.height = ""
        contactImage.style.height = ""
        contactImage.style.width = ""

        displayProducts()
    }
})

//See Products Function
coverBtn.addEventListener("click", function () {
    window.scrollTo(0, 525)
})