let btn = document.querySelector(".btn"),
    elem = document.querySelector(".box");
    elem2 = document.querySelector(".box2");

function myAnimation() {
    let pos = 0;
    let pos2 = 260;
    let diriction = 0;

    let id = setInterval(frame, 10);
    let id2 = setInterval(frame, 10);
    function frame() {
        if (pos == 300){
            diriction = 1;
        }else if(pos == 0){
            diriction = 0;
        }
        if(diriction == 0){
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";

            pos2--;
            elem2.style.top = pos2 + "px";
            elem2.style.left = pos + "px";
        }else{
            pos--;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";

            pos2++;
            elem2.style.top = pos2 + "px";
            elem2.style.left = pos + "px";
        }
    }
}

btn.addEventListener("click", myAnimation);