// const boxElm = document.getElementById('box');


const vw = innerWidth-50;
const vh = innerHeight-50 ; 



class Box {
    #dx ;
    #dy ;
    #elm;

    constructor(){
        this.#elm = document.createElement('div');
        document.body.append(this.#elm);
        this.#elm.classList.add('boxEl');
        this.#elm.style.left = `${ Math.random()* vw}px`;
        this.#elm.style.top = `${Math.random() * vh}px` ;
        this.#dx = Math.random()*8 *(Math.random() < 0.5 ? -1 : 1) ;
        this.#dy = Math.random()*8 *(Math.random() < 0.5 ? -1 : 1) ;


        const red = Math.floor(Math.random()*256);
        const green = Math.floor(Math.random()*256);
        const blue = Math.floor(Math.random()*256);
        const alfa = Math.floor(Math.random()*256);

        this.#elm.style.backgroundColor = `rgba(${red},${green},${blue},${alfa})`;
        this.#elm.style.borderRadius = `${Math.random() * 100}%` ;


    }

    move(){
        if(this.#elm.offsetLeft >= vw || this.#elm.offsetLeft <= 0){
            this.#dx = -this.#dx ;
        }
        if(this.#elm.offsetTop >= vh || this.#elm.offsetTop <= 0){
            this.#dy = -this.#dy ;
        }

        this.#elm.style.left = `${this.#elm.offsetLeft + this.#dx}px` ;
        this.#elm.style.top = `${this.#elm.offsetTop + this.#dy}px`  ;  
    }

    checkCollisionWithCursor(){
        const cursorRect = cursor.getBoundingClientRect();
        const boxReact = this.#elm.getBoundingClientRect();
        if(
            cursorRect.top < boxReact.bottom &&
            cursorRect.bottom > boxReact.top &&
            cursorRect.right > boxReact.left && 
            cursorRect.left < boxReact.right
            
        ){
            this.#dx = -this.#dx ;
            this.#dy = -this.#dy ;
        }
    }

}

/* create element in js  */

// const boxElm = document.createElement('div');
// document.body.append(boxElm);
// boxElm.classList.add('boxEl');


// const testButton = document.createElement('button');
// document.body.append(testButton);
// testButton.innerText = 'test button new ';
// testButton.style.backgroundColor = 'blue';
// testButton.classList.add('btn');


// const vw = innerWidth-boxElm.offsetWidth;
// const vh = innerHeight-boxElm.offsetHeight ; 


// boxElm.style.left = `${ Math.random()* vw}px`;
// boxElm.style.top = `${Math.random() * vh}px` ;

// let dx = 5 ;
// let dy = 5 ;

// const box1 = new Box();
// const box2 = new Box();
// const box3 = new Box();

const boxList = [];

for(let i=0 ;i < 50; i++){
    boxList.push(new Box());
}
 

setInterval(()=>{

    boxList.forEach(element => {
        element.move();
        element.checkCollisionWithCursor();
    });
    // box1.move();
    // box2.move();
    // box3.move(); 

    // if(boxElm.offsetLeft >= vw || boxElm.offsetLeft <= 0){
    //     dx = -dx ;
    // }
    // if(boxElm.offsetTop >= vh || boxElm.offsetTop <= 0){
    //     dy = -dy ;
    // }
    // boxElm.style.left = `${boxElm.offsetLeft + dx}px` ;
    // boxElm.style.top = `${boxElm.offsetTop + dy}px`  ;
    
},1); 