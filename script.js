function handelContact(event){
    event.preventDefault();

const email =event.target.email.value;

const successContainer=document.getElementById("success-container");
successContainer.innerHTML='';
console.log(successContainer);
const namePeragraph = document.createElement('p');
namePeragraph.innerText="Subscribe Successfully Completed";

successContainer.appendChild(namePeragraph);
console.log(namePeragraph);
const showEmail=document.createElement('p');
showEmail.innerText=`Your Email Is : ${email}`;
successContainer.appendChild(showEmail);
}



function handelContact2(event){
    event.preventDefault();

const email =event.target.email.value;

const successContainer2=document.getElementById("success-container2");
successContainer2.innerHTML='';
const namePeragraph2 = document.createElement('p');
namePeragraph2.innerText="Email Successfully Sent";

successContainer2.appendChild(namePeragraph2);
}

const imageArry=[
    {
        url:"./images/main-section/products/gyro-sandwich.jpeg"
    },
    {
        url:"./images/main-section/products/Enchilade.jpeg"
    },
    {
        url:"./images/main-section/products/Green-Beans.jpeg"
    },
    {
        url:"./images/main-section/products/pizza.jpeg"
    },
    {
        url:"./images/main-section/products/Chicken-Pot-Pie.jpeg"
    },
    {
        url:"./images/main-section/products/Green-Salad.jpeg"
    },
];


function handelShowMoreProject(){
    const productItems=document.getElementById("product-items");
    // productItems.innerHTML='';
    const itemsDiv=document.createElement('div');
    console.log(productItems);
    for (const item of imageArry) {
        // console.log(item)
        const itemsDivImage=document.createElement('div');
        itemsDivImage.classList.add("product-item-card");
        itemsDivImage.innerHTML=`
        <img src="${item.url}" alt="">
        `
        console.log(itemsDivImage);
        productItems.appendChild(itemsDivImage);
    }
}


