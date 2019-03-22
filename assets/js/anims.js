$('div.header').ready(function(){
    onLoadAnimations();
});

function onLoadAnimations(){
    let a = document.querySelectorAll('#reveal');
    let b = document.querySelectorAll('#reveal img');
    let c = document.querySelectorAll('#reveal h1');
    let arrow = document.querySelectorAll('#down-arrow');

    if(arrow.length > 0){
        for(let i = 0; i < arrow.length; i++){
            arrow[i].style.opacity = "1";
            if(window.innerWidth > 1024){
                arrow[i].style.bottom = "40px";
            }else{
                arrow[i].style.bottom = "10vh";
            }
        }
    }

    if(a.length > 0){
        for(let i = 0; i < a.length; i++){
            a[i].style.width = "100vw";
            a[i].style.height = "100vw";
            a[i].style.backgroundColor = "#ecf0f100";
        }
    }

    if(b.length > 0){
        for(let i = 0; i < b.length; i++){
            b[i].style.opacity = "1";
            b[i].style.bottom = "0";
        }
    }
    
    if(c.length > 0){
        for(let i = 0; i < c.length; i++){
            c[i].style.opacity = "1";
            c[i].style.bottom = "0";
        }
    }

}