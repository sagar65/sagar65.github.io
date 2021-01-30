$(function() {"use strict";
/*===========================scroll function start here====================*/
$(window).scroll(function(){
			var abc=$(this).scrollTop()
			 var position_holder = new Array();
			 var i=0 ; 
			 $('.anchorlink > a').each(function(){
				 position_holder[i] = $(this).attr('data-id');
				 i++;
			 });		 
			 var curr_pos_win = $(this).scrollTop() + $('.navigation').offset().top + $('.navigation').height() - $(window).scrollTop();			
			
			 for(i= (position_holder.length)-1; i>=0; i--)
			 {
			 	var off=$(position_holder[i]).offset().top;

				if( off < curr_pos_win)
				{  
					$('.anchorlink').each(function(){
						if($(this).find('>a').attr('data-id')== position_holder[i])
							{ var classCheck=$(this).attr('class');
								if(classCheck.indexOf("active")>-1){								
								}
								else{
								$('.anchorlink').removeClass('active');
								
								{$(this).addClass('active');}	  								
								}
							}
					 });			 	
					 break;
				}
			 }
		});
$(' a[data-id^="#"]').bind('click.smoothscroll',function (e) {
    e.preventDefault(); 
    var target = $(this).attr("data-id");
       var $target = $(target);
  var goto=parseInt($target.offset().top)-parseInt(0)
    $('html, body').stop().animate({
        'scrollTop': goto
    }, 500, 'swing', function () {     
    });
});
});