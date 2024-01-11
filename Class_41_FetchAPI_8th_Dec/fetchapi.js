



// FETCH
// https://dummyjson.com/products

const getDataUsingPromise = document.getElementById("getDataUsingPromise")

getDataUsingPromise.addEventListener("click",function(e){

    fetch("https://dummyjson.com/products")
    .then(function(response){
        return response.json()
    })
    .then(function(products){
        console.log(products);
        displayProducts(products)
    })
    .catch(function(err){
        console.log(err);
    })
})

const productsTable = document.getElementById("productsTable");
function displayProducts(data){
    data.products.forEach(function(product){
        let layout = `<tr>
                            <td>${product.title}</td>
                            <td>${product.category}</td>
                            <td>${product.price}</td>
                            <td>${product.brand}</td>
                            <td>

                            <img src="${product.thumbnail}" alt=${product.title}">
                            
                            </td>

                        </tr>`;
        
        productsTable.insertAdjacentHTML("beforeend",layout);
    })
}

// async await.....

const getDataUsingAsyncAwait = document.getElementById("getDataUsingAsyncAwait");
getDataUsingAsyncAwait.addEventListener("click",function(e){

    getProductsAsyncAwait();
})

async function getProductsAsyncAwait(){

    try{
        const response = await fetch("https://dummyjson.com/products")
        const products = await response.json();
        displayProducts(products);
    }

    catch(err)
    {
        console.log(err);
    }
}