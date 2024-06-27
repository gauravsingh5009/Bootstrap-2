{/* <script> */}
        $(function(){

            $(".tab").click(function(e){
                e.preventDefault();
                $(".tab").removeClass("active")
                $(this).addClass("active");

                if($(this).text()=="ALL"){
                    $(".all").fadeIn();
                    
                }
                else if($(this).text()=="APP"){
                    $(".app").fadeIn();
                    $(".card,.web").fadeOut(0);
                }
                else if($(this).text()=="CARD"){
                    $(".card").fadeIn();
                    $(".app, .web").fadeOut(0);
                }
                else if($(this).text()=="WEB"){
                    $(".web").fadeIn();
                    $(".app, .card").fadeOut(0);
                }
            });


            AOS.init();
        });
    {/* </script> */}