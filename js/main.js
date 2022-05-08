// ScrollTopp Butto


    $(window).scroll(function(){
        if($(this).scrollTop() > 150)
            $(".gotopbtn").addClass("active");
        else
        $(".gotopbtn").removeClass("active");    
    });
    $('.gotopbtn').click(function(){
        $("html, body").animate({scrollTop:0})
    }); 


// Menu Button

     const openButton =  document.getElementById('js-openButton');
     const minusButton = document.getElementById('js-minusButton');
     const mobilMenu = document.getElementById('js-mobilMenu');
     

     //Open Menu
     openButton.addEventListener('click' , OpenMenu);

     function OpenMenu(){
        openButton.style.display ='none';
        minusButton.style.display = 'block'; 
        mobilMenu.style.opacity = '1';
     }


     //Close Button
     minusButton.addEventListener('click', closeMenu);

     function closeMenu(){
        openButton.style.display ='block';
        minusButton.style.display = 'none'; 
        mobilMenu.style.opacity = '0';
     }



 