const navEmail = document.querySelector('.navbar-email');
const iconMobileMenu = document.querySelector('.menuHamIcon');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const cardsContainer = document.querySelector('.cards-container');

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

navEmail.addEventListener('click', toogleDesktopMenu);
iconMobileMenu.addEventListener('click', toogleMobileMenu);
shoppingCart.addEventListener('click', toogleAsideCart);

function toogleDesktopMenu(){
    const isAsideCLosed = aside.classList.contains('inactive');
    
    if (!isAsideCLosed) {
        aside.classList.add('inactive')
    }
    
    desktopMenu.classList.toggle('inactive');
}

function toogleMobileMenu(){
    const isAsideCLosed = aside.classList.contains('inactive');
    
    if (!isAsideCLosed) {
        aside.classList.add('inactive')
    }
    
    mobileMenu.classList.toggle('inactive');
}

function  toogleAsideCart(){    
    
    const isMobileMenuCLosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuCLosed = desktopMenu.classList.contains('inactive');
    
    if (!isMobileMenuCLosed) {
        mobileMenu.classList.add('inactive')
    }
    
    if (!isDesktopMenuCLosed) {
        desktopMenu.classList.add('inactive')
    }
    
    aside.classList.toggle('inactive');
}

function renderList (arr){
    for (product of arr){
        //Div Product Card
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        //ImgProduct
        const productImg = document.createElement('img');
        productImg.classList.add('product-img');
        productImg.setAttribute('src',product.image)
        productImg.setAttribute('alt','product img')
    
        //Div Product Info
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        //Div
        const productDiv = document.createElement('div');
    
        //Price
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        //Name
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        //Closing tag Div and making appendChilds
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productName);
    
        //Figure
        const productFigure = document.createElement('figure');
    
        //Figure Img
        const productFigureImg = document.createElement ('img');
        productFigureImg.setAttribute('src', './assets/icons/bt_add_to_cart.svg');
        productFigureImg.setAttribute('alt','Add to cart Button');
        
        //Closing tag Figure and making appendChilds
        productFigure.appendChild(productFigureImg);
    
        //Closing tag productInfo and making appendChilds
        productInfo.appendChild(productDiv);
        productInfo.appendChild(productFigure);
    
        //Closing tag productCard and making appendChilds
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);    
    
        //Closing tag cardsContainer
        cardsContainer.appendChild(productCard);
    }
}

const productList=[];

productList.push({
    name : 'Burger',
    price :120,
    image : 'https://images.pexels.com/photos/580612/pexels-photo-580612.jpeg'
})

productList.push({
    name : 'Pizza',
    price :100,
    image : 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="product-img'
})

productList.push({
    name : 'Hotdog',
    price :110,
    image : 'https://images.pexels.com/photos/3023479/pexels-photo-3023479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

productList.push({
    name : 'Wings',
    price :140,
    image : 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

productList.push({
    name : 'Burger',
    price :120,
    image : 'https://images.pexels.com/photos/580612/pexels-photo-580612.jpeg'
})

productList.push({
    name : 'Pizza',
    price :100,
    image : 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="product-img'
})

productList.push({
    name : 'Hotdog',
    price :110,
    image : 'https://images.pexels.com/photos/3023479/pexels-photo-3023479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

productList.push({
    name : 'Wings',
    price :140,
    image : 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

renderList(productList);

