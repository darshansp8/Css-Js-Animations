function textEffect(){
    var container = document.querySelector('.container');
    var text = document.querySelector('.text');
    var p = document.getElementById('para');
    var scrollValue = window.scrollY;
    console.log(scrollValue);
    p.setAttribute('style', 'transform: perspective(400px) rotateY(10deg) scale(.5);)');
    

    var lastScrollTop = 0;

   window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
      console.log('down');
   } else {
      console.log('up');
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);
    
}


window.addEventListener('scroll',textEffect);