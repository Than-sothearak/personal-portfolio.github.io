
import './home.css';


import React, { useEffect, useRef} from 'react'

const Home = () => {
  /**@type {HTMLCanvasElement} */
  const ref = useRef(null);
  
  useEffect (() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    const canvasHeight = canvas.width = 800;
    const canvasWeight = canvas.height = 1000;
    const numOfBatterfly = 3;
    const batterflyArray = [];

    const batterflyImageL = new Image() ;
    batterflyImageL.src = "./images/batterflyer1.png";
    const batterflyImageR = new Image();
    batterflyImageR.src = './images/batterflyerR.png'
    let gameFrame = 0;

   

    class Batterfly {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speed = Math.random() * 0.07-0.03;
        this.spriteWidth = 103;
        this.spriteHeight = 142;
        this.width = this.spriteWidth  /2;
        this.height = this.spriteHeight /1;
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 11+9 );
        this.angle = 0;
      }
      
      update () {
        this.x += this.speed;
        this.y += this.speed;
        if (gameFrame % this.flapSpeed === 0) {
          this.frame > 4 ? this.frame = 0 : this.frame++;
        }
       
      }
      draw () {
        // ctx.strokeRect(this.x, this.y, this.width, this.height);
        if (this.speed < 0) {
          ctx.drawImage (batterflyImageL, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
        } else {
          ctx.drawImage (batterflyImageR, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
        }
      }
    };
   
    for (let i = 0 ; i < numOfBatterfly; i++) {
       batterflyArray.push(new Batterfly());
    }

    

    function animate () {
         ctx.clearRect(0, 0, canvasHeight, canvasWeight);
         
         batterflyArray.forEach( batterfly => {
            batterfly.update();
            batterfly.draw();
         });
         gameFrame++;
         requestAnimationFrame(animate);
    }
    animate();
  })
  
  
  
  return (
    <div className='container'>
      
      <div className='main-body'>
      <canvas ref={ref} id='canvas1'>  
      </canvas>
       <div className='text-container'>
          <h1>Hi I'm Sothearak</h1>
          <p>I am a Grpahich Desgner and Web Developer</p>
       </div>
     </div>
    </div> 
   );
}
 export default Home;