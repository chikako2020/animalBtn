'use strict';

{
    const btn = document.getElementById('btn');

    btn.addEventListener('click', () =>{
        const img = new Array();

        img[0] = "img0.png"
        img[1] = "img1.png"
        img[2] = "img2.png"
        img[3] = "img3.png"
        img[4] = "img4.png"
        img[5] = "img5.png"
        img[6] = "img6.png"
        img[7] = "img7.png"
        img[8] = "img8.png"
        img[9] = "img9.png"
        img[10] = "img10.png"
        img[11] = "img11.png"
        img[12] = "img12.png"
        img[13] = "img13.png"
        img[14] = "img14.png"
        img[15] = "img15.png"
        
        btn.style.backgroundImage = 
        `url(${img[Math.floor(Math.random() * img.length)]})`;
        btn.textContent = ""; 

    });
}
