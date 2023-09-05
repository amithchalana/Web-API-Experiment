


const boxElm = document.querySelector('#box');

let x = 0 ;
let right = true ;

setInterval(() => {
    const y = window.innerHeight/2 + Math.sin(x/180)*500 ;
    boxElm.style.left = `${x}px` ;
    boxElm.style.top = `${y}px`
    
    x += right ? 1 : -1 ;

    if(x >= window.innerWidth-80){
        right = false;
    }else if(x <= 0 ) {
        right  = true;
    }
    
}, 1);







// boxElm.style.top = `${innerHeight-80}px`; 

// let maxH =innerHeight-80 ;
// let topH = 0 ;
// let botH = maxH ;

// const timerId = setInterval(() => {
//     if(topH >= maxH){
//         botH -= 1 ;
//         boxElm.style.top = `${botH}px` ;
//         if(botH <= 0){
//             topH = 0;
//         }

//     }else{
//         topH += 1; 
//         boxElm.style.top = `${topH}px` ;

//         if(topH >= maxH){
//             botH = maxH;
//         }
//     }
    
    
// }, 1);

