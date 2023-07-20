let products = JSON.parse(localStorage.getItem('product')) || []
const uiprinter = (products) =>{
    console.log(products);
    document.getElementById("uiprinter").innerHTML = "";
    products.map((product)=>{
        let img = document.createElement('img')
        img.src = product.img
        let name = document.createElement('h3')
        name.innerHTML = product.name
        let price = document.createElement('h3')
        price.innerHTML = product.price
        let category = document.createElement('h3')
        category.innerHTML = product.category
        let div = document.createElement('div')
        div.append(img, name, price, category)
        document.getElementById("uiprinter").append(div)
    })
}
uiprinter(products)
const productdata = (e) => {
    e.preventDefault();
    let product={
        img: document.getElementById("img").value,
        name: document.getElementById("title").value,
        price: document.getElementById("price").value,
        category: document.getElementById("category").value
    };
    console.log(products);
    products.push(product)
    localStorage.setItem("product",JSON.stringify(products));
    uiprinter(products)
}
document.getElementById("form").addEventListener("submit", productdata)