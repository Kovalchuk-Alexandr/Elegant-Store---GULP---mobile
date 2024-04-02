function tagline() {
   const tagline = document.querySelector(".tagline");
   const closeTaglineBtn = document.querySelector(".tagline__close");

   closeTaglineBtn.onclick = function () {
       tagline.remove();
   }; 
}

export default tagline;