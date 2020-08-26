
$(document).ready(function() {
    //$('#succesAlert').css('display','none');
    var photoGalery = document.getElementById('forRight');
    var adminUsers = document.getElementById('users');
    var forOpeningPdf = document.getElementById('forOpeningPdf');
   // var tokenTextField = document.getElementById('tokenTextField');
    
    adminUsers.style.display = 'none';
    forOpeningPdf.style.display = 'none';
    for_Opening_Video.style.display = 'none';

    $('#dashboardLabel').on('click', function(){
        photoGalery.style.display = 'block';
        adminUsers.style.display = 'none';
        forOpeningPdf.style.display = 'none';
    });

    $('#userLabel').on('click', function(){
        adminUsers.style.display = 'block';
        photoGalery.style.display = 'none';
        forOpeningPdf.style.display = 'none';
        for_Opening_Video.style.display = 'none';
    });

    $('#pdfLabel').on('click', function(){
        forOpeningPdf.style.display = 'block';
        adminUsers.style.display = 'none';
        photoGalery.style.display = 'none';
        for_Opening_Video.style.display = 'none';
    });

    $('#videoLabel').on('click', function(){
        adminUsers.style.display = 'none';
        photoGalery.style.display = 'none';
        for_Opening_Video.style.display = 'block';
        forOpeningPdf.style.display = 'none';
    });

    /*logoutLabel.addEventListener('click', function(e){
        e.preventDefault();
        var token = {
            tokenValue : tokenTextField.value 
        }
        alert('Value : ' + token.tokenValue);
         $.ajax({
            method : 'POST',
            url : '/index/logout',
            dataType : 'json',
            data : token
        });
    });*/
});
