document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.getElementById('nav-menu');

    menuIcon.onclick = function(event) {
        event.stopPropagation();
        navMenu.classList.toggle('active'); 
    };

    document.addEventListener('click', function(event) {
        if (!navMenu.contains(event.target) && !menuIcon.contains(event.target)) {
            navMenu.classList.remove('active'); 
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const xbutton = document.getElementById('xbutton');
    const xbuttonImage = document.getElementById('xbutton-image');
    const xbuttonClose = document.getElementById('xbutton-close');

    document.querySelectorAll('.projects a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            xbuttonImage.src = e.currentTarget.href;
            xbutton.style.display = 'flex';
        });
    });

    xbuttonClose.addEventListener('click', () => {
        xbutton.style.display = 'none';
    });

    xbutton.addEventListener('click', (e) => {
        if (e.target === xbutton) {
            xbutton.style.display = 'none';
        }
    });
});
( function($) {
  
    $(document).ready(function() {
      
      var s           = $('.slider'),
          sWrapper    = s.find('.slider-wrapper'),
          sItem       = s.find('.slide'),
          btn         = s.find('.slider-link'),
          sWidth      = sItem.width(),
          sCount      = sItem.length,
          slide_date  = s.find('.Skill'),
          slide_title = s.find('.Skill-abbr'),
          slide_text  = s.find('.Skill-description'),
          slide_image = s.find('.slide-image img'),
          sTotalWidth = sCount * sWidth;
      
      sWrapper.css('width', sTotalWidth);
      sWrapper.css('width', sTotalWidth);
      
      var clickCount  = 0;
      
      btn.on('click', function(e) {
        e.preventDefault();
  
        if( $(this).hasClass('next') ) {
          
          ( clickCount < ( sCount - 1 ) ) ? clickCount++ : clickCount = 0;
        } else if ( $(this).hasClass('prev') ) {
          
          ( clickCount > 0 ) ? clickCount-- : ( clickCount = sCount - 1 );
        }
        TweenMax.to(sWrapper, 0.4, {x: '-' + ( sWidth * clickCount ) })
  
  
        //ANIMATIONS FOR CONTENRS PIS
  
        var fromProperties = {autoAlpha:0, x:'-50', y:'-10'};
        var toProperties = {autoAlpha:0.8, x:'0', y:'0'};
  
        TweenLite.fromTo(slide_image, 1, {autoAlpha:0, y:'40'}, {autoAlpha:1, y:'0'});
        TweenLite.fromTo(slide_date, 0.4, fromProperties, toProperties);
        TweenLite.fromTo(slide_title, 0.6, fromProperties, toProperties);
        TweenLite.fromTo(slide_text, 0.8, fromProperties, toProperties);
        TweenLite.fromTo(slide_more, 1, fromProperties, toProperties);
  
      });
            
    });
  })(jQuery);
  
  $('.overlay').addClass('overlay-blue');