

$(document).ready(function() {

    $('select').niceSelect();
    $("#date").mask("99 / 99 / 9999");
    
    

    $("input[value='male']").on('change', function (){
        
        if ($(this).prop('checked', true)) {
            $("label[for='male']").toggleClass('radiobuttons-list-item__label-active');
            $("label[for='female']").removeClass('radiobuttons-list-item__label-active');
            
        };

       
        
        
    });

    $("input[value='female']").on( 'change' , function(){
        
        if ($("input[value='female']").prop('checked', true)){
        
            $("label[for='female']").toggleClass('radiobuttons-list-item__label-active');
            $("label[for='male']").removeClass('radiobuttons-list-item__label-active');
        };

        

    });


});
