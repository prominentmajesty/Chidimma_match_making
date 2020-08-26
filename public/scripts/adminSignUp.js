$(document).ready(function(){
    var admin_sign_Up_id = document.getElementById('admin_sign_Up');
    var signupForm = document.admin_sign_Up;
    var alert_success = document.getElementById('alert_success');
    alert_success.style.display = 'none';
    
    admin_sign_Up_id.addEventListener('submit', function(e){
        e.preventDefault()
       var get_Values = {
         username : document.getElementById('username').value,
         email : document.getElementById('email').value,
         password : document.getElementById('password').value,
         contact : document.getElementById('contact').value
       };
       $.ajax({
         method : 'POST',
         url : '/admin/sign_upmin',
         dataType : 'json',
         data : get_Values,
        statusCode : {
          404 : function(msg, status, jqXHR){
            console.log(status);
          },
          501 : function(msg, status, jqXHR){
            console.log(status);
          },
          200 : function(msg, status, jqXHR){
              console.log(status);
          }
        }

        }).done(function(msg, status, jqXHR){
            var content = document.createTextNode(jqXHR.responseJSON.msg);
            $('#alert_success').html('');
            alert_success.appendChild(content);
            alert_success.style.color = '#fffedb'
            alert_success.style.paddingBottom = '10px'
            alert_success.style.display = 'block';
            setTimeout(function(){
                $('#alert_success').fadeOut();
               },4000);
        }).fail(function(msg, status, jqXHR){
            var content = document.createTextNode(jqXHR.responseJSON.err_msg);
            console.log(content);
        });
    });
});