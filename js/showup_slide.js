    $(window).scroll(function(){
      $(".slideanim").each(function(){
        var pos = $(this).offset().top; //pos에다가 이 화면에 top에 고정값을 넣음.
        var winTop = $(window).scrollTop();//winTop에다 스크롤했을때 top값을 넣음.
        if(pos < winTop + 700){ //pos와 winTop에 높이 비교.
        $(this).addClass("slide"); //그 후 class slide를 호출.
        }
      });
    });