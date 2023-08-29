const cursor = document.getElementById('cursor');

let tmrId = null ;

addEventListener('mousemove',(eventData)=>{
    if(tmrId){
        clearTimeout(tmrId);
        tmrId=null ;
    }
    cursor.style.opacity = 0.88 ;
 
    
    cursor.style.left = eventData.pageX + 'px' ;
    cursor.style.top = eventData.pageY + 'px' ;

    tmrId = setTimeout(() => {
        cursor.style.opacity = 0 ;
    }, 3000);
    
    
});


document.body.addEventListener("mouseleave",()=>{
    cursor.style.opacity = 0 ;

});

document.body.addEventListener('mouseenter',()=>{
    cursor.style.opacity = 0.88 ;

});

// let x = 0 ;

//  const timerId1 = setInterval(()=>{
//     console.log('set Intervel timer' + x++)
// },500);
 

// const btnStopTimer = document.querySelector("#btnStopTimer1");

// btnStopTimer.addEventListener('click',()=>{
//     clearInterval(timerId1);
// }); 



// const timerId1 = setTimeout(() => {
//     console.log('time out executed');
// },3500);
 

// const btnStopTimer = document.querySelector("#btnStopTimer1");

// btnStopTimer.addEventListener('click',()=>{
//     clearTimeout(timerId1);
//     console.log('Timeout Stopped');
// });




