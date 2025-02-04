window.addEventListener("load",function(){
  let spaner = this.document.querySelector(".spaner");
  spaner.remove();
})

let list = document.querySelector("#list");
let navmenu = document.querySelector("#navmenu");


function mobileNavToogle() {
     document.querySelector('body').classList.toggle('mobile-nav-active');
     list.classList.toggle('bi-list');
     list.classList.toggle('bi-x');
   }

list.addEventListener("click",mobileNavToogle);

document.querySelectorAll('#navmenu a').forEach(navmenu => {
     navmenu.addEventListener('click', () => {
       if (document.querySelector('.mobile-nav-active')) {
         mobileNavToogle();
       }
     });
   });






















































//  /**
//    * Mobile nav toggle
//    */
//   // const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

//    function mobileNavToogle() {
//      document.querySelector('body').classList.toggle('mobile-nav-active');
//      mobileNavToggleBtn.classList.toggle('bi-list');
//      mobileNavToggleBtn.classList.toggle('bi-x');
//    }
//    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

//    /**
//     * Hide mobile nav on same-page/hash links
//     */
//    document.querySelectorAll('#navmenu a').forEach(navmenu => {
//      navmenu.addEventListener('click', () => {
//        if (document.querySelector('.mobile-nav-active')) {
//          mobileNavToogle();
//        }
//      });

//    });

