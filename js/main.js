let toggleBtn = document.getElementById("navIcon");

let links = document.getElementById("small-screen-links");

toggleBtn.onclick = function () {
  
    links.classList.toggle("open");

};

document.addEventListener("click", (e) => {

    if(e.target !== toggleBtn && e.target !== links){

        if(links.classList.contains("open")){

            links.classList.toggle("open");

        }

    } 
});

links.onclick = function (e) {

    e.stopPropagation();

}
