var productDetails = JSON.parse(localStorage.getItem("prodList"))

console.log(productDetails)
document.querySelector("#counter").innerText = productDetails.length

displayData(productDetails)

function displayData(data){
    data.forEach(function(elem, index){
        // console.log(elem)
        var box = document.createElement("div")
        box.setAttribute("class", "product")

        var image = document.createElement("img")
        image.setAttribute("src", elem.image)

        var name = document.createElement("h3")
        name.innerText = elem.name

        var category = document.createElement("p")
        category.innerText = elem.category

        var gender = document.createElement("p")
        gender.innerText = elem.gender

        var price = document.createElement("h3")
        price.innerText = elem.price

        var sold = document.createElement("button")
        sold.setAttribute("id", "sold")
        sold.innerText = elem.sold
        sold.addEventListener("click", function(){
            soldFun(elem, index)
        })

        var remove = document.createElement("button")
        remove.setAttribute("id", "remove")
        remove.innerText = "Delete"
        remove.style.color = 'red'
        remove.addEventListener("click", function(){
            delt(elem, index)
        })

        box.append(image, name, category,gender,price,sold, remove)
        document.querySelector("#container").append(box)
    })
}
// console.log(productDetails)
function soldFun(elem,index){
    event.preventDefault()
    console.log(elem.sold, typeof elem.sold)
    // if(elem.sold == 'false'){
    //     document.querySelector("#sold").innerText = 'true'
    //     // local
    // }
    if(elem.sold == 'true'){
        document.querySelector("#sold").innerText = 'false'
        // elem.sold == 'false' 
        productDetails[index] == elem
        localStorage.setItem("prodList", JSON.stringify(productDetails))
    }
    else if(elem.sold == 'false'){
        document.querySelector("#sold").innerText = 'true'
        elem.sold == 'true'
        productDetails[index] == elem
        console.log(elem.sold, typeof elem.sold, document.querySelector("#sold").innerText)
        localStorage.setItem("prodList", JSON.stringify(productDetails))
    } 
}

function delt(elem, index){
    alert("This item will be removed")
    productDetails.splice(index, 1)
    console.log(productDetails)
    localStorage.setItem("prodList", JSON.stringify(productDetails))
    window.location.reload()
}