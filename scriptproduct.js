let product_Img = document.getElementById("product_Img");
let btn = document.getElementById("btn");

btn [0].onclick = function() {
    product_Img.src = "images/product 1.png";
    for (bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
};
btn [1].onclick = function() {
    product_Img.src = "images/product 2.png";
    for (bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
};