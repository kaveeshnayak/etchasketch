let randomcolour=function()
{
    rndm=Math.floor(Math.random()*256)
    rndm1=Math.floor(Math.random()*256)
    rndm2=Math.floor(Math.random()*256)
    return('rgb('+rndm+','+rndm1+','+rndm2+')')
}
{if(1==1){
    let j=document.getElementById("sketchpad")
    while(j.lastChild){
        j.removeChild(j.lastChild)
        //j.lastChild=j.lastChild
    }
for(let i=0; i<8; i++){
    let x=document.querySelector("#sketchpad");
    let y=document.createElement("div");
    y.classList.add("eightparent");
    //y.textContent="hello";
    x.appendChild(y);
    console.log(y)
}
for(let i=0; i<8; i++){
    let x=document.querySelectorAll(".eightparent");
    let y=document.createElement("div");
    y.classList.add("eightchild");
    //y.textContent="hello";
    for(let j=0; j<x.length; j++){
        x[j].appendChild(y.cloneNode(true))
    }
}

let eightclick=document.querySelectorAll(".eightchild")
for(let u=0; u<eightclick.length; u++){
    eightclick[u].addEventListener("mouseover", function(e){
        eightclick[u].style.backgroundColor = randomcolour();
    })
}
}
}
document.getElementById("eight").addEventListener("click", function(e){
  
    eight();
    
})
document.getElementById("sixteen").addEventListener("click", function(e){
    sixteen();
    
})
document.getElementById("thirtytwo").addEventListener("click", function(e){
    thirtytwo();
    
})
document.getElementById("sixtyfour").addEventListener("click", function(e){
    sixtyfour();
    
})


let eight=function(){if(1==1){
    let j=document.getElementById("sketchpad")
    while(j.lastChild){
        j.removeChild(j.lastChild)
        //j.lastChild=j.lastChild
    }
for(let i=0; i<8; i++){
    let x=document.querySelector("#sketchpad");
    let y=document.createElement("div");
    y.classList.add("eightparent");
    //y.textContent="hello";
    x.appendChild(y);
    console.log(y)
}
for(let i=0; i<8; i++){
    let x=document.querySelectorAll(".eightparent");
    let y=document.createElement("div");
    y.classList.add("eightchild");
    //y.textContent="hello";
    for(let j=0; j<x.length; j++){
        x[j].appendChild(y.cloneNode(true))
    }
}
let eightclick=document.querySelectorAll(".eightchild")
for(let u=0; u<eightclick.length; u++){
    eightclick[u].addEventListener("mouseover", function(e){
        eightclick[u].style.backgroundColor = randomcolour();
    })
}
}
}
let sixteen=function(){if(1==1){
    let del=document.getElementById("sketchpad")
    while(del.lastChild){
        del.removeChild(del.lastChild)
    }
    for(let i=0; i<16; i++){
        let x=document.querySelector("#sketchpad");
        let y=document.createElement("div");
        y.classList.add("eightparent");
        //y.textContent="hello";
        x.appendChild(y);
        console.log(y)
    }
    for(let i=0; i<16; i++){
        let x=document.querySelectorAll(".eightparent");
        let y=document.createElement("div");
        y.classList.add("eightchild");
        //y.textContent="hello";
        for(let j=0; j<x.length; j++){
            x[j].appendChild(y.cloneNode(true))
        }
    }
    let eightclick=document.querySelectorAll(".eightchild")
    for(let u=0; u<eightclick.length; u++){
        eightclick[u].addEventListener("mouseover", function(e){
            eightclick[u].style.backgroundColor = randomcolour();
        })
    }
    }
    }
    let thirtytwo=function(){if(1==1){
        let j=document.getElementById("sketchpad")
        while(j.lastChild){
            j.removeChild(j.lastChild)
            //j.lastChild=j.lastChild
        }
    for(let i=0; i<32; i++){
        let x=document.querySelector("#sketchpad");
        let y=document.createElement("div");
        y.classList.add("eightparent");
        //y.textContent="hello";
        x.appendChild(y);
        console.log(y)
    }
    for(let i=0; i<32; i++){
        let x=document.querySelectorAll(".eightparent");
        let y=document.createElement("div");
        y.classList.add("eightchild");
        //y.textContent="hello";
        for(let j=0; j<x.length; j++){
            x[j].appendChild(y.cloneNode(true))
        }
    }
    let eightclick=document.querySelectorAll(".eightchild")
    for(let u=0; u<eightclick.length; u++){
        eightclick[u].addEventListener("mouseover", function(e){
            eightclick[u].style.backgroundColor = randomcolour();
        })
    }
    }
    }
    let sixtyfour=function(){if(1==1){
        let j=document.getElementById("sketchpad")
        while(j.lastChild){
            j.removeChild(j.lastChild)
            //j.lastChild=j.lastChild
        }
    for(let i=0; i<64; i++){
        let x=document.querySelector("#sketchpad");
        let y=document.createElement("div");
        y.classList.add("eightparent");
        //y.textContent="hello";
        x.appendChild(y);
        console.log(y)
    }
    for(let i=0; i<64; i++){
        let x=document.querySelectorAll(".eightparent");
        let y=document.createElement("div");
        y.classList.add("eightchild");
        //y.textContent="hello";
        for(let j=0; j<x.length; j++){
            x[j].appendChild(y.cloneNode(true))
        }
    }
    let eightclick=document.querySelectorAll(".eightchild")
    for(let u=0; u<eightclick.length; u++){
        eightclick[u].addEventListener("mouseover", function(e){
            eightclick[u].style.backgroundColor = randomcolour();
        })
    }
    }
    }
    
    