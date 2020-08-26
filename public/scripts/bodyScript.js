/*$(document).ready(function(event){
    event.preventDefault;
    var getElementToShow = $('.dropdown-menu');
    var getHover = $('#hov');
    
    getHover.addEvetLis('mouseover',function(){
        getElementToShow.fadeIn();
    });
    getHover.on('mouseout',function(){
        getElementToShow.fadeOut();
    });
    
});*/
$('#year').text(new Date().getFullYear());
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});
$('#succesAlert').css('display','none');