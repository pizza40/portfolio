//event when link clicked
$('.page-scroll').on('click', function(e){
    

    //take href value
    var href = $(this).attr('href');
    
    //catch related element
    var elementHref = $(href);
    
    $('body').animate({
        scrollTop: elementHref.offset.top - 50
    }, 1000, 'swing');
 
    e.preventDefault();

});