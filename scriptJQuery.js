$(window).ready(function(){
    
    $('#menuHaut ul li').each(function(i){
        
        $('#menuHaut ul li:eq('+i+')').mouseenter(function(){
            
            $('#menuHaut ul li a:eq('+i+')').stop(true,false).animate({
                'background-color': 'white',
                'color': 'black',
            },500);
            
            $('.sousMenu:eq('+i+')').stop(true,false).slideDown(500);
            
            $('#voile').stop(true,false).fadeIn(500);
            
        });

       
        $('#menuHaut ul li:eq('+i+')').mouseleave(function(){
            
            $('#menuHaut ul li a:eq('+i+')').css({
                'background-color':'black',
                'color':'white',
            });
            
            $('.sousMenu:eq('+i+')').stop(true,false).slideUp(500);
            
            $('#voile').stop(true,false).fadeOut(500);
            
        });

        
    });
    
});