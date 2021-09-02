

$(document).ready(function(){
  
    $('#res-menu').click(function(){
      if($(this).is(":checked")){
        $('body').css('overflow','hidden');
      }else {
        $('body').css('overflow','visible');
      }
    });
    
  });
