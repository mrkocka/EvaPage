// ScrollTopp Button
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
     let OpenButton =  document.getElementById("js-OpenButton");

     OpenButton.addEventListener("click" , OpenMenu);

     function OpenMenu(){
         OpenButton.classList.toggle('fa-caret-square-o-down')
         OpenButton.classList.add('fa-minus-square-o')
         
     }