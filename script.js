
const favMeals = [];
let prod;


async function addToFav(id){
    let product = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    product = await product.json();
    product = product.meals[0];
    console.log(product);
    favMeals.push(product);
    console.log(alert(`${product["strMeal"]} is added to favourites.`));
}

function displayFavourite(){
    document.getElementById("products").innerHTML = "";
    if(favMeals.length <= 0){
        let prod = document.createElement('p');
        prod.textContent = `No Favourites Added`;
        document.querySelector('.products').append(prod);

    }else{
        for(let i of favMeals){
            let prod = document.createElement('div');
            prod.classList.add('main_div');
            prod.innerHTML = `<div class="product" style = "height:400px; " id=${i.idMeal}>
            <div class="img_con">
            <img src=${i.strMealThumb} style = "height:200px; width:300px;" id="0"></img>
            </div>  
            <div class="card_footer">
            <h3>${i.strMeal}</h3>
            <p>Category: ${i.strCategory}</p>
            <button class="addToFavBtn" onclick ="moreDetail(${i.idMeal})">More Details</button>
            </div>
        </div>`
          document.querySelector('.products').append(prod);
        }
    }
    
}

async function moreDetailPage(id){
    document.getElementById("products").innerHTML = "";
    let product = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    product = await product.json();
    let i = product.meals[0];
    console.log(product);
    // for(let i of favMeals){
        let prod = document.createElement('div');
        prod.classList.add('main_div');
        prod.innerHTML = `<div class="product" style = "height:100%; width:100%;" id=${i.idMeal}>
        <div class="img_con">
        <img class="img_center" src=${i.strMealThumb} style = "height:200px; width:300px;" id="0"></img>
        </div>  
        <div class="card_footer">
        <h3>${i.strMeal}</h3>
        <p>Category: ${i.strCategory}</p>
        <p>Instructions: ${i.strInstructions}</p>
        </div>
    </div>`
      document.querySelector('.products').append(prod);
    // }
}

async function populateProduct(){
    let mealName = document.getElementById('search').value;
    let product = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`);
    product = await product.json();
    console.log(product);
    product = product.meals;
    for(let i of product){
        let prod = document.createElement('div');
        prod.classList.add('main_div');
        prod.innerHTML = `<div class="product" style = "height: 100%;" id=${i.idMeal}>
        <div class="img_con">
        <img src=${i.strMealThumb} style = "height:200px; width:300px;" id="0"></img>
        </div>  
        <div class="card_footer">
        <h3>${i.strMeal}</h3>
        <p>Category: ${i.strCategory}</p>
        <button class="addToFavBtn" onclick ="addToFav(${i.idMeal})">Add to Favourite</button><br>
        <button class="addToFavBtn" onclick ="moreDetailPage(${i.idMeal})">More Details</button>
        </div>
    </div>`
      document.querySelector('.products').append(prod);
      
    }
}
    // populateProduct();

// async function prevImage(data){
//     const prevBtn = document.getElementById(id);
//     const img = prevBtn.querySelector('img');
//     let img_id = img.getAttribute('id');
//     // const res = await fetch('https://dummyjson.com/products');
//     // const result = await res.json();
//     // const images = result.products[id-1].images;
//     // if(img_id==0){
//     //     img_id = images.length -1;
//     // }
//     // else{
//     //     img_id--;
//     // }
//     img.setAttribute('src',data[strMealThumb]);
//     img.setAttribute('id',data[idMeal]);
// }
// async function nextBtn(id){
//     const prevBtn = document.getElementById(id);
//     const img = prevBtn.querySelector('img');
//     let img_id = img.getAttribute('id');
//     const res = await fetch('https://dummyjson.com/products');
//     const result = await res.json();
//     const images = result.products[id-1].images;
//     if(img_id==images.length-1){
//         img_id = 0;
//     }
//     else{
//         img_id++;
//     }
//     img.setAttribute('src',images[img_id]);
//     img.setAttribute('id',img_id);
// }