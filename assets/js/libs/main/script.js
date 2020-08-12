$(document).ready(function()
{

    if ($('.text-slider').length == 1) 
    {
        const typed_strings = 'CEO DevFolio,Web Developer,Web Designer,Frontend Developer,Graphic Designer';
            var typed = new Typed('.text-slider', 
            {
                strings: typed_strings.split(','),
                typeSpeed: 80,
                loop: true,
                backDelay: 1100,
                backSpeed: 30
            });
        }

      
        $(window).on('scroll',function()
        {
            var pixels = 50; 
            if ($(window).scrollTop() > pixels) 
            {

               $('nav').removeClass('bg-dark');
               $('nav').addClass('bg-white');
               $('.nav-link').css('color','#0078ff')
               $('.navbar-brand').css('color','#0078ff')
               $('.back-to-top').fadeIn('slow');
               $('.navbar-b').css('padding-top','13px');
               $('.navbar-b').css('padding-bottom','13px');

            }
            else 
            {
                $('nav').addClass('bg-dark');
                $('nav').removeClass('bg-white');
                $('.nav-link').css('color','#FFF')
                $('.navbar-brand').css('color','#FFF')
                $('.back-to-top').fadeOut('slow');
                $('.navbar-b').css('padding-top','25.008px');
                $('.navbar-b').css('padding-bottom','25.008px');

            }     
            
            
            $('section').each(function()
            {   
               
               if($(window).scrollTop() > $(this).offset().top)
               {
                
                    const className = $(this).attr('class');
                    $('.nav-item a').removeClass('active2');
                    $('[data-target = ' + className + "]").addClass('active2');
                  
                   
                  
                   
   
               }
             
           });

        });

        $('.back-to-top').click(() =>
        {
            $('html, body').animate({scrollTop : 0},1500);
            
           
        });
      
          if ($('#preloader').length) 
          {
              $('#preloader').delay(500).fadeOut('slow', () =>
               {
                  $(this).remove();
                 
              });

              
          }


          $('.counter').counterUp({
            delay: 15,
            time: 2000
        });


        $('.nav-link').click(function()
        {   
        
            const className = $(this).attr('class');
            $('.nav-item a').removeClass('active2');
            $('[data-target = ' + className + "]").addClass('active2');
            $('html, body').animate({
                scrollTop: $('.' + $(this).attr('data-target')).offset().top - 50
            },1000);
          
        });

        $('.owl-carousel').owlCarousel({
            margin: 20,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                }
            }
        });
       
       
});
 

