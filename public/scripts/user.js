$('.slider').slick({
    infinite: true,
    slideToShow: 3,
    slideToScroll: 3
  });
  // Video Play
  $(function () {
    // Auto play modal video
    /*
    https://www.youtube.com/watch?v=7y7xlVo4Iio&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7&index=31 ===> Site for downloading progressive web app videos by Net Ninja
    (?=.*[a-z])	The string must contain at least 1 lowercase alphabetical character
    (?=.*[A-Z])	The string must contain at least 1 uppercase alphabetical character
    (?=.*[0-9])	The string must contain at least 1 numeric character
    (?=.*[!@#$%^&*])	The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict
    (?=.{8,})	The string must be eight characters or longer
     */
    //var regexForSurName = /^(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d@$!%*#?&]{8,}$/;  this regex is explained above
    //http://regexlib.com/DisplayPatterns.aspx?cattabindex=4&categoryId=5  -------> SITE FOR DATE AND TIME REGULAR EXPRESSION
    $(".video").click(function () {
      var theModal = $(this).data("target"),
        videoSRC = $(this).attr("data-video"),
        videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
      $(theModal + ' iframe').attr('src', videoSRCauto);
      $(theModal + ' button.close').click(function () {
        $(theModal + ' iframe').attr('src', videoSRC);
      });
    });
  });
 $(document).ready(function(){
   var surName = document.getElementById('surname');
   var firstName = document.getElementById('firstname');
   var email  = document.getElementById('email');
   var password = document.getElementById('password');
   var contact = document.getElementById('contact');
   var dateofbirth = document.getElementById('dateofbirth');
   var forProffessional = document.getElementById('forProffession');
   var forSkills = document.getElementById('forSkills');
   var customFile  = document.getElementById('customFile');
   var buttonClick = document.getElementById('loginbtn');
   var formContent = document.getElementById('formContent');
   var customFileLabel = document.getElementById("customFileLabel");
   const signupForm = document.formContent;
   var regexForEmail = /^([a-z\d]{2,})@([a-z]{2,7})\.([a-z]{2,3})(\.[a-z]{2,3})?/;
   var regexForPassword = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d@$!%*#?&]{8,}$/;
   var regexForContact = /^[\d]{9,11}$/;
   var regexForDate = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
   var regexForImage = /^([a-zA-Z\d\_-]{1,})\.(gif|GIF|jpe?g|JPG?G|tiff|TIFF|png|PNG|webp|bmp)$/;
   var alertID = document.getElementById('alertID');
  var succesAlert = document.getElementById('succesAlert');
   var loginEmail = document.getElementById('loginEmail');
   var loginPassword = document.getElementById('loginPassword');
   const loginAlert = document.getElementById('loginAlert');
   var loginForm = document.loginForm;
   const formForLogin = document.getElementById('loginForm');
   $('#loginAlert').css('display','none');
   $('#alertID').css('display','none');
   $('#succesAlert').css('display','none');
   function loadSkills(forProffession){
     $('#forSkills option:not(:first)').remove();
     var url = `/proffession/${forProffession}.json`;
     $.getJSON(url, function(data){
       for(var prop in data){
         var skl = document.createElement('option');
         skl.innerHTML = data[prop];
         forSkills.appendChild(skl);
       }
     });
   }
   $('#loadDatePicker').datepicker({
    format : "dd/mm/yyyy",
    autoclose : true
});

// SurName
  /*surName.addEventListener('pointerenter', function(){
    $(this).tooltip({title : "Enter Your SurName e.g Odoemene"
    });
  });
  surName.addEventListener('pointerleave', function(){
    $(this).tooltip('dispose');
  });*/
  
  surName.addEventListener('keyup', function(e){
    if(!/^[a-zA-Z0-9\.\_-\s]{1,}$/.test(e.target.value)){
      e.target.classList.remove('is-valid');
      e.target.classList.add('is-invalid');
      e.target.style.borderColor = 'red';
    }else{
      e.target.classList.remove('is-invalid');
      e.target.classList.add('is-valid');
      e.target.style.borderColor = '#36cc36';
    }
  });

  $('#surname').change(function(e){
  if(!/^[a-zA-Z0-9\.\_-\s]{1,}$/.test(e.target.value)){
    e.target.classList.remove('is-valid');
    e.target.classList.add('is-invalid');
    e.target.style.borderColor = 'red';
  }else{
    e.target.classList.remove('is-invalid');
    e.target.classList.add('is-valid');
    e.target.style.borderColor = '#36cc36';
  }
});

  //firstName

  /*firstName.addEventListener('pointerenter', function(){
    $(this).tooltip({title : "Enter Your First Name e.g Augustine"
    });
  });
  firstName.addEventListener('pointerleave', function(){
    $(this).tooltip('dispose');
  });*/

  firstName.addEventListener('keyup', function(e){
    if(!/^[a-zA-Z0-9\.\_-\s]{1,}$/.test(e.target.value)){
      e.target.classList.remove('is-valid');
      e.target.classList.add('is-invalid');
      e.target.style.borderColor = 'red';
    }else{
      e.target.classList.remove('is-invalid');
      e.target.classList.add('is-valid');
      e.target.style.borderColor = '#36cc36';
    }
  });

  $('#firstname').change(function(e){
    if(!/^[a-zA-Z0-9\.\_-\s]{1,}$/.test(e.target.value)){
      e.target.classList.remove('is-valid');
      e.target.classList.add('is-invalid');
      e.target.style.borderColor = 'red';
    }else{
      e.target.classList.remove('is-invalid');
      e.target.classList.add('is-valid');
      e.target.style.borderColor = '#36cc36';
    }
  });

  //email
  email.addEventListener('keyup', function(e){
    /*$(this).tooltip({
      title : "Enter Your email e.g ugoform@yahoo.com"
    });*/
    if(!regexForEmail.test(e.target.value)){
      e.target.classList.remove('is-valid');
      e.target.classList.add('is-invalid');
      email.style.borderColor = 'red';
    }else{
      e.target.classList.remove('is-invalid');
      e.target.classList.add('is-valid');
      email.style.borderColor = '#36cc36';
    }
  });

  $('#email').change(function(e){
    if(!regexForEmail.test(e.target.value)){
      e.target.classList.remove('is-valid');
      e.target.classList.add('is-invalid');
      e.target.style.borderColor = 'red';
    }else{
      e.target.classList.remove('is-invalid');
      e.target.classList.add('is-valid');
      e.target.style.borderColor = '#36cc36';
    }
  });
 /* email.addEventListener('pointerenter', function(){
    $(this).tooltip({title : "Enter Your Email e.g Odoemene@gmail.com"
    });
  });
  email.addEventListener('pointerleave', function(){
    $(this).tooltip('dispose');
  });*/

  //password
  password.addEventListener('keyup', function(e){
    if(!regexForPassword.test(e.target.value)){
      e.target.classList.remove('is-valid');
      e.target.classList.add('is-invalid');
      password.style.borderColor = 'red';
    }else{
      e.target.classList.remove('is-invalid');
      e.target.classList.add('is-valid');
      password.style.borderColor = '#36cc36';
    };
  });
  /*password.addEventListener('pointerenter', function(){
    $(this).tooltip({title : "Enter Your password: password must contain at least an upper or lower case leter, at least a number, one or more special characters and must not be less than 8"
    });
  });
  password.addEventListener('pointerleave', function(){
    $(this).tooltip('dispose');
  });*/

  //contact
  contact.addEventListener('keyup', function(e){
    if(!regexForContact.test(e.target.value)){
      e.target.classList.remove('is-valid');
      e.target.classList.add('is-invalid');
      contact.style.borderColor = 'red';
    }else{
      e.target.classList.remove('is-invalid');
      e.target.classList.add('is-valid');
      contact.style.borderColor = '#36cc36';
    }
  });

  $('#contact').change(function(e){
    if(!/^[a-zA-Z0-9\.\_-\s]{1,}$/.test(e.target.value)){
      e.target.classList.remove('is-valid');
      e.target.classList.add('is-invalid');
      e.target.style.borderColor = 'red';
    }else{
      e.target.classList.remove('is-invalid');
      e.target.classList.add('is-valid');
      e.target.style.borderColor = '#36cc36';
    }
  });

  /*contact.addEventListener('pointerenter', function(){
    $(this).tooltip({title : "Enter Your phone Number e.g 08035420791"
    });
  });
  contact.addEventListener('pointerleave', function(){
    $(this).tooltip('dispose');
  });*/

  //dateOfBirth
  dateofbirth.addEventListener('keyup', function(e){
    if(!regexForDate.test(e.target.value)){
      e.target.classList.remove('is-valid');
      e.target.classList.add('is-invalid');
      dateofbirth.style.borderColor = 'red';
    }else{
      e.target.classList.remove('is-invalid');
      e.target.classList.add('is-valid');
      dateofbirth.style.borderColor = '#36cc36';
    }
  });
  $('#dateofbirth').change(function(event){
    if (!regexForDate.test(event.target.value)){
         event.target.classList.remove('is-valid');
         event.target.classList.add('is-invalid');
         dateofbirth.style.borderColor = 'red';
    }else{
      event.target.classList.remove('is-invalid');
      event.target.classList.add('is-valid');
      dateofbirth.style.borderColor = '#36cc36';
    }
});
/*dateofbirth.addEventListener('pointerenter', function(){
  $(this).tooltip({title : "Enter Your Date Of Birth e.g 30/10/2020"
  });
});
dateofbirth.addEventListener('pointerleave', function(){
  $(this).tooltip('dispose');
});*/
  $('#customFile').change(function(event){

    if(!regexForImage.test(event.target.files[0].name)){
      customFile.classList.remove('is-valid');
      customFile.classList.add('is-invalid');
      customFile.style.borderColor = 'red';
    }else{
      customFile.classList.remove('is-invalid');
      customFile.classList.add('is-valid');
      customFile.style.borderColor = '#36cc36';
    }
});

$('#forProffession').change(function(event){
  loadSkills(event.target.value);
  if(!/^[a-zA-Z0-9\_-]{1,}$/.test(event.target.value)){
    event.target.classList.remove('is-valid');
    event.target.classList.add('is-invalid');
    event.target.style.borderColor = 'red';
  }else{
    event.target.classList.remove('is-invalid');
    event.target.classList.add('is-valid');
    event.target.style.borderColor = '#36cc36';
  }
});

$('#forSkills').change(function(event){
  if(!/^[a-zA-Z0-9\s\_-]{1,}$/.test(event.target.value)){
    event.target.classList.remove('is-valid');
    event.target.classList.add('is-invalid');
    event.target.style.borderColor = 'red';
  }else{
    event.target.classList.remove('is-invalid');
    event.target.classList.add('is-valid');
    event.target.style.borderColor = '#36cc36';
  }
});

  //forProFessional
  /*forProffessional.addEventListener('pointerenter', function(){
    $(this).tooltip({title : "Choose A Proffession"
    });
  });
  forProffessional.addEventListener('pointerleave', function(){
    $(this).tooltip('dispose');
  });*/
  
  //forSkills
  /*forSkills.addEventListener('pointerenter', function(){
    $(this).tooltip({title : "Choose A Skill"
    });
  });
  forSkills.addEventListener('pointerleave', function(){
    $(this).tooltip('dispose');
  });*/

  //customFile
  
  /*customFile.addEventListener('pointerenter', function(){
    $(this).tooltip({title : "select an image file: Image File should be in the following format only'.jpg/jpeg, .png, .gif, .tiff, .webp, .bmp'"
    });
  });
  customFile.addEventListener('pointerleave', function(){
    $(this).tooltip('dispose');
  });
  loginEmail.addEventListener('pointerenter', function(){
    $(this).tooltip({title : "Enter Your Email Adress"});
  });
  loginEmail.addEventListener('pointerleave', function(){
    $(this).tooltip('dispose');
  });
  loginPassword.addEventListener('pointerenter', function(){
    $(this).tooltip({title : "Enter Your Password"});
  });
  loginPassword.addEventListener('pointerleaves', function(){
    $(this).tooltip('dispose');
  });*/

function validateEmail(emailValue){
  if(!regexForEmail.test(emailValue)){
    var content = document.createTextNode('Wrong Email Adress !! Please Put A Correct Email');
    alertID.appendChild(content);
    alertID.style.display = 'block';
    email.classList.remove('is-valid');
    email.classList.add('is-invalid');
    email.style.borderColor = 'red';
    setTimeout(function(){
      $('#alertID').html('');
      $('#alertID').fadeOut();
    },20000);
    email.focus();
    return false;
  }else{
    email.classList.remove('is-invalid');
    email.classList.add('is-valid');
    email.style.borderColor = '#36cc36';
    email.blur();
    return true;
  }
}

function validatePassword(passwordValue){
if(!regexForPassword.test(passwordValue)){
  var content = document.createTextNode('Wrong password Partern !! Please Ensure That Your Password Matches The Password Partern Given');
  alertID.appendChild(content);
  alertID.style.display = 'block';
  password.classList.remove('is-valid');
  password.classList.add('is-invalid');
  password.style.borderColor = 'red';
  setTimeout(function(){
    $('#alertID').html('');
    $('#alertID').fadeOut();
  },20000);
  password.focus();
  return false;
}else{
  password.classList.remove('is-invalid');
  password.classList.add('is-valid');
  password.style.borderColor = '#36cc36';
  password.blur();
  return true;  
    }
  }

  function validateContact(contactValue){
    if(!regexForContact.test(contactValue)){
      var content = document.createTextNode('Wrong Phone Number !! Please Ensure That Your Phone Number Matches The Phone Number Partern Given');
      alertID.appendChild(content);
      alertID.style.display = 'block';
      contact.classList.remove('is-valid');
      contact.classList.add('is-invalid');
      contact.style.borderColor = 'red';
      setTimeout(function(){
        $('#alertID').html('');
        $('#alertID').fadeOut();
      },20000);
      contact.focus();
      return false;
    }else{
      contact.classList.remove('is-invalid');
      contact.classList.add('is-valid');
      contact.style.borderColor = '#36cc36';
      password.blur();
      return true;
    }
  }

  function validateDateOfBirth(dateValue){
    if(!regexForDate.test(dateValue)){
      var content = document.createTextNode('Invalid Date Format !! Enter A Valid Date Formate');
      alertID.appendChild(content);
      alertID.style.display = 'block';
      dateofbirth.classList.remove('is-valid');
      dateofbirth.classList.add('is-invalid');
      dateofbirth.style.borderColor ='red';
      setTimeout(function(){
        $('#alertID').html('');
        $('#alertID').fadeOut();
      },20000);
      dateofbirth.focus();
      return false;
    }else{
      dateofbirth.classList.remove('is-invalid');
      dateofbirth.classList.add('is-valid');
      dateofbirth.style.borderColor = '#36cc36';
      dateofbirth.blur();
      return true;
    }
  }

  function validateCustomFile(e){
    if(!regexForImage.test(e)){
      var content = document.createTextNode('Invalid File Selected !! Please Select An Immage File');
      alertID.appendChild(content);
      alertID.style.display = 'block';
      customFile.classList.remove('is-valid');
      customFile.classList.add('is-invalid');
      customFile.style.borderColor = 'red';
      setTimeout(function(){
        $('#alertID').html('');
        $('#alertID').fadeOut();
      },20000);
      console.log(e);
      return false;
    }else{
      customFile.classList.remove('is-invalid');
      customFile.classList.add('is-valid');
      customFile.style.borderColor = '#36cc36';
      console.log(e);
      return true;
    }
  }

function checkIfSurNameIsEmpty(){
  if(surName.value === '' || surName.value.trim() === ''){
    var content = document.createTextNode('Empty TextField !! Please Provide Your SurName');
    alertID.appendChild(content);
    alertID.style.display = 'block';
    surName.classList.remove('is-valid');
    surName.classList.add('is-invalid');
    surName.style.borderColor = 'red';
    setTimeout(function(){
      $('#alertID').html('');
      $('#alertID').fadeOut();
    },20000);
    surName.focus();
    return false;
  }else{
    surName.classList.remove('is-invalid');
    surName.classList.add('is-valid');
    surName.style.borderColor = '#36cc36';
    surName.blur();
    return true;
  }
}

function chckIfFirstNameIsEmpty(){
  if(firstName.value === '' || firstName.value.trim() === ''){
    var content = document.createTextNode('Empty TextField !! Please Provide Your First Name');
    alertID.appendChild(content);
    alertID.style.display = 'block';
    firstName.classList.remove('is-valid');
    firstName.classList.add('is-invalid');
    firstName.style.borderColor = 'red';
    setTimeout(function(){
      $('#alertID').html('');
      $('#alertID').fadeOut();
    },20000);
    firstName.focus();
    return false;
  }else{
    firstName.classList.remove('is-invalid');
    firstName.classList.add('is-valid');
    firstName.style.borderColor = '#36cc36';
    firstName.blur();
    return true
  }
}

function checkIfEmailIsEmpty(){
 if(email.value === '' || email.value.trim() === ''){
    var content = document.createTextNode('Empty TextField !! Please Provide Yor Email Adress');
    alertID.appendChild(content);
    alertID.style.display = 'block';
    email.classList.remove('is-valid');
    email.classList.add('is-invalid');
    email.style.borderColor = 'red';
    setTimeout(function(){
      $('#alertID').html('');
      $('#alertID').fadeOut();
    },20000);
    email.focus();
    return false;
 } else{
   email.classList.remove('is-invalid');
   email.classList.add('is-valid');
   email.style.borderColor = '#36cc36';
   email.blur();
   return true;
 }
}

function checkIfPasswordIsEmpty(){
  if(password.value === '' || password.value.trim() === ''){
     var content = document.createTextNode('Empty TextField !! Please Provide Yor Email Adress');
     alertID.appendChild(content);
     alertID.style.display = 'block';
     password.classList.remove('is-valid');
     password.classList.add('is-invalid');
     password.style.borderColor = 'red';
     setTimeout(function(){
       $('#alertID').html('');
       $('#alertID').fadeOut();
     },20000);
     password.focus();
     return false;
  } else{
    password.classList.remove('is-invalid');
    password.classList.add('is-valid');
    firstName.style.borderColor = '#36cc36';
    password.blur();
    return true;
  }
 }

 function checkIfContactIsEmpty(){
  if(contact.value === '' || contact.value.trim() === ''){
     var content = document.createTextNode('Empty Field !! Please Provide Your Contact');
     alertID.appendChild(content);
     alertID.style.display = 'block';
     contact.classList.remove('is-valid');
     contact.classList.add('is-invalid');
     contact.style.borderColor = 'red';
     setTimeout(function(){
       $('#alertID').html('');
       $('#alertID').fadeOut();
     },20000);
     contact.focus();
     return false;
  } else{
    contact.classList.remove('is-invalid');
    contact.classList.add('is-valid');
    contact.style.borderColor = '#36cc36';
    contact.blur();
    return true;
  }
 }

 function checkIfDateOfBirthIsEmpty(){
  if(dateofbirth.value === '' || dateofbirth.value.trim() === ''){
     var content = document.createTextNode('Empty Field !! Please rovide Your Date Of Birth ');
     alertID.appendChild(content);
     alertID.style.display = 'block';
     dateofbirth.classList.remove('is-valid');
     dateofbirth.classList.add('is-invalid');
     dateofbirth.style.borderColor = 'red';
     setTimeout(function(){
       $('#alertID').html('');
       $('#alertID').fadeOut();
     },20000);
     dateofbirth.focus();
     return false;
  } else{
    dateofbirth.classList.remove('is-invalid');
    dateofbirth.classList.add('is-valid');
    dateofbirth.style.borderColor = '#36cc36';
    dateofbirth.blur();
    return true;
  }
 }

 function checkIfProffessiontIsEmpty(){
  if(forProffessional.value === '' || forProffessional.value.trim() === ''){
     var content = document.createTextNode('Empty Field !! Please Provide Your Proffession');
     alertID.appendChild(content);
     alertID.style.display = 'block';
     forProffessional.classList.remove('is-valid');
     forProffessional.classList.add('is-invalid');
     forProffessional.style.borderColor = 'red';
     setTimeout(function(){
       $('#alertID').html('');
       $('#alertID').fadeOut();
     },20000);
     dateofbirth.focus();
     return false;
  } else{
    forProffessional.classList.remove('is-invalid');
    forProffessional.classList.add('is-valid');
    forProffessional.style.borderColor = '#36cc36';
    forProffessional.blur();
    return true;
  }
 }

 function checkIfSkillsIsEmpty(){
  if(forSkills.value === '' || forSkills.value.trim() === ''){
     var content = document.createTextNode('Empty Field !! Please Provide Yor Skills');
     alertID.appendChild(content);
     alertID.style.display = 'block';
     forSkills.classList.remove('is-valid');
     forSkills.classList.add('is-invalid');
     forSkills.style.borderColor = 'red';
     setTimeout(function(){
       $('#alertID').html('');
       $('#alertID').fadeOut();
     },20000);
     forSkills.focus();
     return false;
  } else{
    forSkills.classList.remove('is-invalid');
    forSkills.classList.add('is-valid');
    forSkills.style.borderColor = '#36cc36';
    forSkills.blur();
    return true;
  }
 }

 function checkIfCustiomFileIsEmpty(){
  if(customFile.value === '' || customFile.value.trim() === ''){
     var content = document.createTextNode('No File Selected !! Please Select An Image File');
     alertID.appendChild(content);
     alertID.style.display = 'block';
     customFile.classList.remove('is-valid');
     customFile.classList.add('is-invalid');
     customFile.style.borderColor = 'red';
     setTimeout(function(){
       $('#alertID').html('');
       $('#alertID').fadeOut();
     },20000);
     return false;
  } else{
    customFile.classList.remove('is-invalid');
    customFile.classList.add('is-valid');
    customFile.style.borderColor = '#36cc36';
    return true;
  }
 }

 /*function checkIfLoginEmailFieldIsEmpty(){
   if(loginEmail.value === '' || loginEmail.value.trim() === ''){
     loginEmail.classList.add('is-invalid');
     loginEmail.style.borderColor = 'red';
     loginEmail.focus();
      const content = document.createTextNode('Email Textfield is empty !! Please Your Email Address');
      loginAlert.appendChild(content);
      loginAlert.style.display = 'block';
      setTimeout(function(){
        $('#loginAlert').html('');
        $('#loginAlert').fadeOut();
      }, 30000);
      return false;
   }else{
    loginEmail.classList.remove('is-invalid');
    loginEmail.style.borderColor = '#ced4da';
    return true;
   }
 }*/
 /*function checkIfLoginPasswordIsEmpty(){
  if(loginPassword.value === '' || loginPassword.value.trim() === ''){
    loginPassword.classList.add('is-invalid');
    loginPassword.style.borderColor = 'red';
    loginPassword.focus();
     const content = document.createTextNode('Email Textfield is empty !! Please Enter Your Password');
     loginAlert.appendChild(content);
     loginAlert.style.display = 'block';
     setTimeout(function(){
       $('#loginAlert').html('');
       $('#loginAlert').fadeOut();
     }, 30000);
     return false;
  }else{
   loginPassword.classList.remove('is-invalid');
   loginPassword.style.borderColor = '#ced4da';
   return true;
  }
 }*/ 

 function uploadToServer(){
  var formData = new FormData(signupForm);
   $.ajax({
     method : 'POST',
     url : '/postData',
     processData : false,
     contentType : false,
     data : formData,
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
     //signupForm.reset();
     console.log(jqXHR.responseJSON.user);
    document.body.scrollTop = document.documentElement.scrollTop = 0;
     var content = document.createTextNode('Registration Was Successful !!');
     succesAlert.appendChild(content);
     succesAlert.style.display = 'block';
     setTimeout(function(){
      window.location.href = '/';
     },3800);
     
   }).fail(function(jqXHR, status){
    var content = document.createTextNode(jqXHR.responseJSON.msg);
    alertID.appendChild(content);
    alertID.style.display = 'block';
    email.classList.remove('is-valid');
    email.classList.add('is-invalid');
    email.style.borderColor = 'red';
    setTimeout(function(){
      $('#alertID').html('');
      $('#alertID').fadeOut();
    },20000, email.focus());
    console.log(status);
   });
 }

 $(window).keydown(function(event){
  if(event.keyCode == 13) {
    event.preventDefault();
    return false;
  }
});

/*function loginUser(){
  const email = loginForm.email;
  const password = loginForm.password;  
  $.ajax({
    method : 'POST',
     url : '/postLoginData',
     dataType : 'json',
     data : {
      email : email.value,
      password : password.value
    },
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
      window.location.href = '/admin/admindashboard';
      console.log('login successful')
  }).fail(function(msg, status, jqXHR){
      if(jqXHR.status === 404){
        console.log('incorrect credential');
      }else{
        console.log('login failed !!');
      }
  });
}

formForLogin.addEventListener('submit', function(e){
  e.preventDefault();
  loginUser();
});*/
/*$(document).keydown(function(objEvent) {
  if (objEvent.keyCode == 32) { 
      objEvent.preventDefault();
      return;
  }
})*/
/*function loginRequest(){
  //var loginFormData = new FormData(loginForm);
  var loginFormData = {
      email : loginEmail.value,
      password : loginPassword.value
  }
  $.ajax({
    method : 'POST',
    url : '/postLoginData',
   // processData : false,
    dataType : 'json',
    data : loginFormData,
    success : function(user){
        window.location.href = user;
    }, error : function(e){
      console.log(e);
    }
  });
}*/
 formContent.addEventListener('submit', function(e){
   e.preventDefault();
  if(checkIfSurNameIsEmpty() && chckIfFirstNameIsEmpty() && checkIfEmailIsEmpty() && checkIfPasswordIsEmpty() && checkIfContactIsEmpty() && checkIfDateOfBirthIsEmpty() && checkIfProffessiontIsEmpty() && checkIfSkillsIsEmpty() && checkIfCustiomFileIsEmpty()){  
    if(validateEmail(email.value) && validatePassword(password.value) && validateContact(contact.value) && validateDateOfBirth(dateofbirth.value) && validateCustomFile(customFile.files.item(0).name)){
      uploadToServer();
    }
  }
 });

 /*buttonClick.addEventListener('click', function(e){
  e.preventDefault();
  if(checkIfLoginEmailFieldIsEmpty() && checkIfLoginPasswordIsEmpty()){
    loginRequest();
  }
 });
 loginForm.addEventListener('submit', function(e){
   e.preventDefault();
   if(checkIfLoginEmailFieldIsEmpty() && checkIfLoginPasswordIsEmpty()){
     //loginRequest();
   } 
 });
 /* buttonClick.addEventListener('click', function(e){
    e.preventDefault();
    if(checkIfSurNameIsEmpty() && chckIfFirstNameIsEmpty() && checkIfEmailIsEmpty() && checkIfPasswordIsEmpty() && checkIfContactIsEmpty() && checkIfDateOfBirthIsEmpty() && checkIfProffessiontIsEmpty() && checkIfSkillsIsEmpty() && checkIfCustiomFileIsEmpty()){  
      if(validateEmail(email.value) && validatePassword(password.value) && validateContact(contact.value) && validateDateOfBirth(dateofbirth.value) && validateCustomFile(customFile.files.item(0).name)){
        uploadToServer();
      }
    }
  });*/

 /* $(document).on('keypress', function(e){
    if(e.keyCode === 13){
    formContent.addEventListener('submit', function(e){
   e.preventDefault();
  if(checkIfSurNameIsEmpty() && chckIfFirstNameIsEmpty() && checkIfEmailIsEmpty() && checkIfPasswordIsEmpty() && checkIfContactIsEmpty() && checkIfDateOfBirthIsEmpty() && checkIfProffessiontIsEmpty() && checkIfSkillsIsEmpty() && checkIfCustiomFileIsEmpty()){  
    if(validateEmail(email.value) && validatePassword(password.value) && validateContact(contact.value) && validateDateOfBirth(dateofbirth.value) && validateCustomFile(customFile.files.item(0).name)){
      uploadToServer();
    }
  }
 });
    }
  });*/
});