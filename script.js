let mainimg = document.querySelectorAll(".mainimg > img");
let rightbox = document.querySelector(".light_box");
let closeleight = document.querySelector(".close");
let boximg = document.querySelector(".boximg");
let showimg = document.querySelector(".showimg");
let clickleft = document.querySelector(".clickleft");
let clickright = document.querySelector(".clickright");

let urlimg = [];
let coutindex = 0;

// get url image
for (let i = 0 ; i < mainimg.length ; i++) {
    urlimg[i] = mainimg[i].src;
}

// click image
for (let i of mainimg) {
    i.addEventListener("click",(event) => {
        rightbox.classList.add("addleightshow");
        let indeximg = Array.from(mainimg).indexOf(event.target);
        coutindex = indeximg;
        showimg.src = event.target.src;
    });
}

// click close right box
closeleight.addEventListener("click",() => {
    rightbox.classList.remove("addleightshow");
});

// click left
clickleft.addEventListener("click",() => {
    coutindex--;
    if (coutindex < 0) {
        coutindex = mainimg.length - 1;
    }
    showimg.src = urlimg[coutindex];
});

// click right
clickright.addEventListener("click",() => {
    coutindex++;
    if (coutindex > mainimg.length - 1) {
        coutindex = 0;
    }
    showimg.src = urlimg[coutindex];
});