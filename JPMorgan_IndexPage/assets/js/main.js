 //Function to scroll to top of page on click of "Back to top"	
      function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      }
      
      var scroll = window.requestAnimationFrame ||  function(callback){ window.setTimeout(callback, 1000/60)};
      var elementsToShow = document.querySelectorAll('.show-on-scroll'); 
      
      function loop() {
      
        Array.prototype.forEach.call(elementsToShow, function(element){
          if (isElementInViewport(element)) {
            element.classList.add('is-visible');
          } 
        });
      
        scroll(loop);
      }
	  
      loop();
      
	  //To see if the element with class show-on-scroll is visible on browser screen or not
      function isElementInViewport(el) {
      if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
      }
      var rect = el.getBoundingClientRect();
      return (
        (rect.top <= 0
          && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
      );
      }