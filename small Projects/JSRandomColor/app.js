let btn=document.querySelector("button");


btn.addEventListener("click",function(){
    let h3=document.querySelector("h3");
    let randomc=randomcolor();
    h3.innerText=randomc;

    let div=document.querySelector("div");
    div.style.backgroundColor=randomc;
    console.log("Color UPdated");

})

function randomcolor(){
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);

    let color = `rgb(${r},${g},${b})`;
    return color;

}