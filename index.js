var formArr = JSON.parse(localStorage.getItem("prodList")) || []

document.querySelector("#form").addEventListener("submit", adminFun)

function adminFun(event){
    event.preventDefault()
    // console.log(event)
    function test(){
        this.name = form.name.value 
        this.category = form.category.value
        this.image = form.image.value
        this.price = form.price.value
        this.gender = form.gender.value
        this.sold = form.sold.value
    }
    var myObj = new test()
    console.log(myObj)
    formArr.push(myObj)
    console.log(formArr)
    localStorage.setItem("prodList", JSON.stringify(formArr))
}