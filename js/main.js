


// Menu Button

     const openButton =  document.getElementById('js-openButton');
     const mobilMenu = document.getElementById('js-mobilMenu');

     openButton.addEventListener('click' , OpenMenu);

     function OpenMenu(){
         mobilMenu.style.transform = 'translateY(0)';
         /* mobilMenu.classList.toggle('menu-active')
          openButton.classList.toggle('fa-caret-square-o-down')
         openButton.classList.add('fa-minus-square-o') */
         
        
         
     }



/* // ScrollTopp Button
    $(window).scroll(function(){
        if($(this).scrollTop() > 150)
            $(".gotopbtn").addClass("active");
        else
        $(".gotopbtn").removeClass("active");    
    });
    $('.gotopbtn').click(function(){
        $("html, body").animate({scrollTop:0})
    }); */