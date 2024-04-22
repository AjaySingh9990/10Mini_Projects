const imageContainer=document.querySelector(".image-container");
const prevEle=document.getElementById("prev");
const nextEle=document.getElementById("next");
// variable to change angle by +45 or -45
let x=0
prevEle.addEventListener("click",()=>{
     x=x+45;
    //  function to update Gallary
    updateGallery();
});

nextEle.addEventListener("click",()=>{
    x=x-45;
    updateGallery();
// imageContainer.style.transform=`perspective(1500px) rotateY(${x}deg)`;
});

function updateGallery(){
    imageContainer.style.transform=`perspective(1000px) rotateY(${x}deg)`;
}