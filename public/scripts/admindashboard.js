/*var ugo = [
    ugo,uche,ben,containerformat
]
var combination = ugo(0) + "and" + ugo(2);*/
$(document).ready(function(){
    
    var matchUsers = document.getElementById('matchUsers');
    var viewUser = document.getElementById('viewUser')
    var deleteUsers = document.getElementById('deleteUsers');
    var adminSettings = document.getElementById('adminSettings');
    var loadPdf = document.getElementById('loadPdf');
    var loadVideo = document.getElementById('loadVideo');
    var openPdf = document.getElementById('openPdf');
    var openVideo = document.getElementById('openVideo');
    var btb = document.getElementById('btb');
    var inputForPdfUpload = document.getElementById('inputForPdfUpload');
    var customFile = document.getElementById('customFile');
    var pdf_Input_Label = document.getElementById('pdf_Input_Label');
    var pdfbuttonUpload =  document.getElementById('pdfbuttonUpload');
    var first = document.querySelectorAll('.first');
    var file_Input_Label = document.getElementById('file_Input_Label');
    var pdf_success_alart =  document.getElementById('pdf_success_alart');
    var formPdfUpload = document.getElementById('formPdfUpload');
    //var hide_Field = document.getElementById('hide_Field');
    //var hide_file_name = document.getElementById('hide_file_name');
    var video_image_upload = document.getElementById('video_image_upload');
    var input_Address = document.getElementById('input_Address');
    var custom_File_for_vedio = document.getElementById('custom_File_for_vedio');
    var custom_File_for_vedio_image = document.getElementById('custom_File_for_vedio_image');
    var err_msg_4_vedio_address = document.getElementById('err_msg_4_vedio_address');
    var err_msg_4_vedio_file = document.getElementById('err_msg_4_vedio_file');
    var err_msg_4_vedio_image = document.getElementById('err_msg_4_vedio_image'); 
    var form_submit = document.formPdfUpload;
    var form_Video_Upload = document.getElementById('form_Video_Upload');
    var form_Video_image_Upload = document.getElementById('form_Video_image_Upload');
    var video_parent = document.getElementById('video_parent');
    var search_input = document.getElementById('search_text_input');
    var vedio_upload_form_ = document.form_Video_Upload;
    var vedio_image_upload_form_ = document.form_Video_image_Upload;
    var match_list = document.getElementById('match_list');
    var spiner_icon = document.get
    var Array_storage;

    //hide_Field.style.display = 'none';
    //hide_file_name.style.display = 'none';
    video_image_upload.style.display = 'none';
    err_msg_4_vedio_address.style.display = 'none';
    err_msg_4_vedio_file.style.display = 'none';
    err_msg_4_vedio_image.style.display = 'none'; 
    $('.ldio-bcdqnk8e6d').css('display', 'none');   

    var matched = [];
    pdf_Input_Label.style.display = 'none';
    file_Input_Label.style.display = 'none';
    pdf_success_alart.style.display = 'none'
    var regex_for_file = /^([a-zA-z\d\_-\s]{1,})\.(pdf|PDF|mp4|MP4)$/;
    var regex_for_vedio_file = /^([a-zA-z\d\_-\s]{1,})\.(mp4|MP4)$/
    var regex_for_vedio_image_file = /^([a-zA-z\d\_-\s]{1,})\.(jpe?g|JPE?G|png|PNG|gif|GIF)$/
    
    $('#deleteUserWithID').css('display','none');
    $('#show-matched-users').css('display','none');
    $('#forUploadingPdf').css('display','none');
    $('#forUploadingVideo').css('display','none');
    $('#forOpeningPdf').css('display','none');
    $('#for_Opening_Video').css('display','none');
    $('#forAdminSetting').css('display','none');

    matchUsers.addEventListener('click', function(){
        $('#deleteUserWithID').css('display','none')
        $('#show-matched-users').css('display','none');
        $('#forUploadingPdf').css('display','none');
        $('#forUploadingVideo').css('display','none');
        $('#forOpeningPdf').css('display','none');
        $('#for_Opening_Video').css('display','none');
        $('#forAdminSetting').css('display','none');
        $('#containerformat').css('display','block');
    });

    deleteUsers.addEventListener('click', function(){
        $('#show-matched-users').css('display','none');
        $('#forUploadingPdf').css('display','none');
        $('#forUploadingVideo').css('display','none');
        $('#forOpeningPdf').css('display','none');
        $('#for_Opening_Video').css('display','none');
        $('#forAdminSetting').css('display','none');
        $('#containerformat').css('display','none');
        $('#deleteUserWithID').css('display','block');
    });

    adminSettings.addEventListener('click', function(){
        $('#deleteUserWithID').css('display','none');
        $('#show-matched-users').css('display','none');
        $('#forUploadingPdf').css('display','none');
        $('#forUploadingVideo').css('display','none');
        $('#forOpeningPdf').css('display','none');
        $('#for_Opening_Video').css('display','none');
        $('#containerformat').css('display','none');
        $('#forAdminSetting').css('display','block');
    });

    loadPdf.addEventListener('click', function(){
        $('#deleteUserWithID').css('display','none');
        $('#show-matched-users').css('display','none');
        $('#forUploadingVideo').css('display','none');
        $('#forOpeningPdf').css('display','none');
        $('#for_Opening_Video').css('display','none');
        $('#containerformat').css('display','none');
        $('#forAdminSetting').css('display','none');
        $('#forUploadingPdf').css('display','block');
    });

    loadVideo.addEventListener('click', function(){
        $('#deleteUserWithID').css('display','none');
        $('#containerformat').css('display','none');
        $('#forUploadingPdf').css('display','none');
        $('#forOpeningPdf').css('display','none');
        $('#for_Opening_Video').css('display','none');
        $('#forAdminSetting').css('display','none');
        $('#show-matched-users').css('display','none');
        $('#forUploadingVideo').css('display','block');
    });

    openPdf.addEventListener('click', function(){
        $('#deleteUserWithID').css('display','none');
        $('#containerformat').css('display','none');
        $('#forUploadingPdf').css('display','none');
        $('#for_Opening_Video').css('display','none');
        $('#forAdminSetting').css('display','none');
        $('#show-matched-users').css('display','none');
        $('#forUploadingVideo').css('display','none');
        $('#forOpeningPdf').css('display','block');
    });

    openVideo.addEventListener('click', function(){
        $('#deleteUserWithID').css('display','none');
        $('#containerformat').css('display','none');
        $('#forUploadingPdf').css('display','none');
        $('#forAdminSetting').css('display','none');
        $('#show-matched-users').css('display','none');
        $('#forUploadingVideo').css('display','none');
        $('#forOpeningPdf').css('display','none');
        $('#for_Opening_Video').css('display','block');
    });

    viewUser.addEventListener('click',function(){
        $('#deleteUserWithID').css('display','none');
        $('#containerformat').css('display','none');
        $('#forUploadingPdf').css('display','none');
        $('#forUploadingVideo').css('display','none');
        $('#forOpeningPdf').css('display','none');
        $('#for_Opening_Video').css('display','none');
        $('#forAdminSetting').css('display','none');
        $('#show-matched-users').css('display','block');
    });

      /*  $.ajax({
            method : 'GET',
            url : '/admin/retrieveData',
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
        }).done(function(data){
            console.log(data);
            (function(return_result){
                $('#load_pdf').wrapAll('\
                    <div class = "col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 pdf_vertical">\
                        <div class = "pdf_img_holder">\
                            <img src = "/uploads/' + return_result.title + '">\
                        </div>\
                        <div class = "file_title">\
                          <h5 class = "file_title_p">'+ return_result.title +' </h5>\
                        </div>\
                        <a href = "/pdf/'+ return_result.fileName +'" target="_blank" type="application/pdf"><h5>'+ return_result.fileName +'</h5></a>\
                    </div>\
                ');
            });

        }).fail(function(err){
            console(err);
        });*/

    $('#search_text_input').autocomplete({
        source: function(req, res){
            $('.ldio-bcdqnk8e6d').show(); 
            $.ajax({
                url : "autocomplete/",
                dataType:"jsonp",
                type: "GET",
                data:req,
                success: function(data){
                    setTimeout(function(){
                        $('.ldio-bcdqnk8e6d').hide(); 
                        res(data);  
                    }, 3000);
                },
                error:function(err){
                    setTimeout(function(){
                        $('.ldio-bcdqnk8e6d').hide();
                    }, 3000);
                    console.log(err,status);
                }
            });  
        },
        minLength : 1,
        /*you can use select or search*/ 
        search : function(event, ui){
            if(ui.item){
                $('#search_text_input').text(ui.item.label);
            }    
        },
        response: function(event, ui){
            if (!ui.content.length) {
                var noResult = { value:"",label:"No results found" };
                ui.content.push(noResult);
            }
        }
    });

    function ext_manupulator(img_ext){
        const new_string = '.JPG'
        let ext_string = img_ext.slice(0,-4);
        return ext_string + new_string;
    } 

    function server_search_function(){
        var search_value = {server_value : document.getElementById('search_text_input').value}
        $.ajax({
            method : 'POST',
            url : '/admin/search_on_event',
            data : search_value,
            success : function(data){
                console.log(data);
                var html = '<div class = "col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 data_">\
                    <div class = "wrap_video">\
                        <video class="vid_eo" src="/video/' + data.fileName +'" poster="/video/video_images/'+ ext_manupulator(data.fileImage) +'" target="_blank" controls></video>\
                    </div>\
                 </div>'
               var html_data__ =  document.getElementById('data__');
               html_data__.innerHTML = html;
                $('#for_Opening_Video').css('display','none');
            },
            error : function(err){
                console.log(err);
            }
        });
    }

    document.getElementById('search_text_input').addEventListener('keyup', function(e){
        if(e.target.value ===''){
            $('.data__').css('display', 'none');
            $('#for_Opening_Video').css('display', 'block');
        }else{
            $('#data__').css('display','block');
        }
    });

    document.getElementById('search_button').addEventListener('click',function(e){
        e.preventDefault();
        if($('#search_text_input').val().length > 0){
            server_search_function();
        }
    });

    $(document).keyup(function(e){
        e.preventDefault();
        if($("#search_text_input").val().length > 0 && e.key == "Enter"){
            server_search_function();
        }
    });

    $('div').on('click', '.form-check-input', function(){
            var ID = ($(this).closest('.ulForList').children('.ID').text().slice(5));
            var email = ($(this).closest('.ulForList').children('.email').text().slice(8));
            var contact = ($(this).closest('.ulForList').children('.contact').text().slice(10));
            var proffession = ($(this).closest('.ulForList').children('.proffession').text().slice(14));
            var skills = ($(this).closest('.ulForList').children('.skills').text().slice(8));
            //var form_check_label = ($(this).closest('.form-check').children('.form-check-label'));

            if(this.checked) {
            //console.log(ID);
            ($(this).closest('.form-check').children('.form-check-label')).text('');
            var content = document.createTextNode('remove me');
              ($(this).closest('.form-check').children('.form-check-label')).append(content);
              ($(this).closest('.form-check').children('.form-check-label')).css('color','red');
      
              matched.push({
                    ID : ID,
                    email :email, 
                    contact : contact,
                    proffession : proffession,
                    skills : skills 
                });  
                // var getIndex = match
                console.log(matched);        
            
            } else {
                
           matched.pop();
           console.log(matched);
            
            ($(this).closest('.form-check').children('.form-check-label')).text('');
            var content2 = document.createTextNode('select me');
            ($(this).closest('.form-check').children('.form-check-label')).append(content2);
            ($(this).closest('.form-check').children('.form-check-label')).css('color','black') 
            
        }
    });

    btb.addEventListener('click', function(e){
        e.preventDefault();
        
        if(matched.length < 27 || matched.length > 27){
            alert('Not more or less than three persons can be matched !!');
            
        }else{
        
           var getID = matched[0].ID + ", " + matched[10].ID + ", " + matched[20].ID;
           var getEmail = matched[0].email + ", " + matched[10].email + ", " + matched[20].email;
           var getSkills = matched[0].skills + ", " + matched[10].skills + ", " + matched[20].skills;
           var getContact = matched[0].contact + ", " + matched[10].contact + ", " + matched[20].contact;
           var getProffession = matched[0].proffession + ", " + matched[10].proffession + ", " + matched[20].proffession;
           
           console.log(getID);
            console.log(getEmail);
            console.log(getSkills);
            console.log(getContact);
            console.log(getProffession);
             
            var loadData = {
                userID : getID,
                userEmail : getEmail,
                userSkills : getSkills,
                userContact : getContact,
                userProffession : getProffession
            }

            $.ajax({
                method : 'POST',
                url : '/admin/postMatched',
                dataTyped : 'json',
                data : loadData,
                statusCode : {
                    406 : function(msg,status,jqXHR){
                        console.log(status);
                    },
                    501 : function(msg, status, jqXHR){
                        console.log(status);
                    }, 
                    200 : function(msg,status, jqXHR){
                        console.log(status);
                    }
                }
            }).done(function(msg, status,jqXHR){
                var matches = document.querySelectorAll("input.form-check-input");
                var labels = document.querySelectorAll('label.form-check-label');
                for(i = 0; i < matches.length; i++){
                   matches[i].checked = false;
               }
               for(j = 0; j < labels.length; j++){
                labels[j].innerHTML = '';
                labels[j].innerHTML = 'add me';
                labels[j].style.color = 'black';
               }

               while(matched.length > 0){
                   matched.pop();
               }
               alert('Successfuly matched !!');

            }).fail(function(msg, status, jqXHR){

            });
            
        }
    });
    $('div').on('mouseenter', '.formatThis', function(){
        var forBtnDanger =  ($(this).find('.forBtnDanger'));
        forBtnDanger.css('display','inline');
    });
    $('div').on('mouseleave', '.formatThis', function(){
        var disappear = ($(this).find('.forBtnDanger'));
        disappear.css('display','none');
    });
    $('div').on('mouseenter', '#video_parent', function(){
        var remove_video = ($(this).find('#remove_video'));
        remove_video.css('display', 'block');
    });
    $('div').on('mouseleave', '#video_parent', function(){
       var disapear = ($(this).find('#remove_video'));
       disapear.css('display','none'); 
    });
    $('div').on('click', '#btn-outline-danger', function(){
        var id = ($(this).val());  
        $.ajax({
            method : 'DELETE',
            url : '/admin/getrequest' + id,
            statusCode : {
                400 : function(msg, status, jqXHR){
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
            console.log(msg);
        }).fail(function(msg, status, jqXHR){
            console.log(msg);
        }); 
    });

    $('.viddeo_vertical button').on('click', function(){
        var get_file_name = $(this).closest('.viddeo_vertical').children('.get_file_name').text();
        var get_file_Image = $(this).closest('.viddeo_vertical').children('.get_file_Image').text();
        var id = ($(this).val());
        var doc = {
            get_file_name : get_file_name,
            get_file_Image : get_file_Image
        };
        $.ajax({
            method : 'DELETE',
            url : '/admin/delete_video' + id,
            data : doc ,
            statusCode : {
                400 : function(msg, status, jqXHR){
                    console.log(status);
                },
                500 : function(msg, status, jqXHR){
                    console.log(status);
                },
                200 : function(msg, status, jqXHR){
                    console.log(status)
                }
            }
        }).done(function(msg, status, jqXHR){
            console.log(jqXHR.responseJSON.msg);
        }).fail(function(msg, status, jqXHR){
            console.log(jqXHR.responseJSON.msg);
            console.log('get')
        });
        $(this).parent().remove();
    });

    $('.remove_document button').on('click', function(){
        var parent = $(this).closest('.remove_document');
        var id = ($(this).val());
        var input_value = parent.find('#hide_Field').text();
        var file_name = parent.find('.hide_file_name').text();

        $.ajax({
        method : 'DELETE',
        url : '/admin/delete_pdf',
        data : {
            get_id : id,
            get_input_value : input_value,
            get_file_name : file_name
        }, 
        statusCode : {
            400 : function(msg, status, jqXHR){
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
        console.log(jqXHR.responseJSON.msg);
        
        }).fail(function(msg, status, jqXHR){
            console.log(jqXHR.responseJSON.msg);
        });
        $(this).parent().parent().remove();
    });

    $('#customFile').change(function(event){
        if(!regex_for_file.test(event.target.files[0].name)){
            event.target.classList.remove('is-valid');
            event.target.classList.add('is-invalid');
        }else{
            event.target.classList.remove('is-invalid');
            event.target.classList.add('is-valid');
        }
    });

   function validate_Input_For_Upload(){
        if(inputForPdfUpload.value === '' || inputForPdfUpload.value.trim() === ''){
            inputForPdfUpload.classList.remove('is-valid');
            inputForPdfUpload.classList.add('is-invalid');
            pdf_Input_Label.style.color = 'red';
            pdf_Input_Label.style.display = 'block';
            setTimeout(function(){
                pdf_Input_Label.style.display = 'none';
                pdf_Input_Label.style.color = 'black';
            },5000);
            inputForPdfUpload.focus();
            return false;
        }else{
            inputForPdfUpload.classList.remove('is-invalid');
            inputForPdfUpload.classList.add('is-valid');
            inputForPdfUpload.blur();
            return true;
        }
    }

    function check_for_empty_custom_file(){
        if(customFile.value === '' || customFile.value.trim() === ''){
            customFile.classList.remove('is-valid');
            customFile.classList.add('is-invalid');
            $('#file_Input_Label').css('color','red');
            $('#file_Input_Label').html('Empty field please select a file !!');
            file_Input_Label.style.display = 'block';
            setTimeout(function(){
                $('#file_Input_Label').css('display','none');
                $('#file_Input_Label').css('color','black');
                $('#file_Input_Label').html('')
            }, 5000);
            return false;
        }else{
            customFile.classList.remove('is-invalid');
            customFile.classList.add('is-valid');
            return true;
        }
    }

    function validate_file_input_upload(e){
        if(!regex_for_file.test(e)){
            customFile.classList.remove('is-valid');
            customFile.classList.add('is-invalid');
            $('#file_Input_Label').html('Invalid file.. please select only pdf files !!');
            $('#file_Input_Label').css('color','red');
            file_Input_Label.style.display = 'block';
            setTimeout(function(){
                $('#file_Input_Label').css('display','none');
                $('#file_Input_Label').css('color','black');
                $('#file_Input_Label').html('');
            }, 5000);
            return false;
        }else{
            customFile.classList.remove('is-invalid');
            customFile.classList.add('is-valid');
            return true;
        }
    }

    form_submit.addEventListener('submit', function(e){
        e.preventDefault();
        if(validate_Input_For_Upload()  && check_for_empty_custom_file()){
            if(validate_file_input_upload(customFile.files.item(0).name)){
                var pdf_form = document.formPdfUpload;
                var form_Data = new FormData(pdf_form);
                $.ajax({
                    method : 'POST',
                    url : '/admin/pdf',
                    processData : false,
                    contentType : false,
                    data : form_Data,
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
                    pdf_success_alart.appendChild(content);
                    $('#pdf_success_alart').css('display','block');
                  
                    setTimeout(function(){
                       $('#pdf_success_alart').css('display', 'none');
                       $('#pdf_success_alart').html('');
                   },5000);

                   formPdfUpload.reset();
                   inputForPdfUpload.classList.remove('is-valid');
                   var customFile = document.getElementById('customFile');
                   customFile.classList.remove('is-valid');
                    /*$.each(data,function(i,return_result){
                        $('#load_pdf').wrapAll('\
                            <div class = "col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 pdf_vertical">\
                                <div class = "pdf_img_holder">\
                                    <img src = "/uploads/' + return_result.title + '">\
                                </div>\
                                <div class = "file_title">\
                                    <h5 class = "file_title_p">'+ return_result.title +' </h5>\
                                </div>\
                                <a href = "/pdf/'+ return_result.fileName +'" target="_blank" type="application/pdf"><h5>CGP</h5></a>\
                            </div>\
                        ');
                    });*/
                }).fail(function(jqXHR, status){
                    console.log(jqXHR);
                });
            }
        }
    });
    function check_for_vedio_empty_input_Address(){
        if(input_Address.value === '' || input_Address.value.trim() === ''){
            input_Address.classList.remove('is-valid');
            input_Address.classList.add('is-invalid');
            input_Address.style.borderColor = 'red';
            $('#err_msg_4_vedio_address').css('color','red');
            $('#err_msg_4_vedio_address').html('Empty Textfield !! Please Provide The Name of Your Vedio');
            $('#err_msg_4_vedio_address').css('display','block');
            setTimeout(function(){
                $('#err_msg_4_vedio_address').fadeOut();
                $('#err_msg_4_vedio_address').html('');
            }, 4000);
            input_Address.focus(); 
            return false; 
        }else{
            input_Address.classList.remove('is-invalid');
            input_Address.classList.add('is-valid');
            input_Address.style.borderColor = '#36cc36';
            input_Address.blur();
            return true;
        }
    }
    function check_for_empty_vedio_custom_file(){
        if(custom_File_for_vedio.value === '' || custom_File_for_vedio.value.trim() === ''){
            custom_File_for_vedio.classList.remove('is-valid');
            custom_File_for_vedio.classList.add('is-invalid');
            custom_File_for_vedio.style.borderColor = 'red';
            $('#err_msg_4_vedio_file').css('color','red');
            $('#err_msg_4_vedio_file').html('No file selected !! Please select a vedio file');
            $('#err_msg_4_vedio_file').css('display', 'block');
            setTimeout(function(){
                $('#err_msg_4_vedio_file').fadeOut();
                $('#err_msg_4_vedio_file').html('');
            },4000);
            return false;
        }else{
            custom_File_for_vedio.classList.remove('is-invalid');
            custom_File_for_vedio.classList.add('is-valid');
            custom_File_for_vedio.style.borderColor = '#36cc36';
            return true;
        }
    }

    function check_for_empty_image_custom_file(){
        if(custom_File_for_vedio.value === '' || custom_File_for_vedio.value.trim() === ''){
            custom_File_for_vedio_image.classList.remove('is-valid');
            custom_File_for_vedio_image.classList.add('is-invalid');
            custom_File_for_vedio_image.style.borderColor = 'red';
            $('#err_msg_4_vedio_image').css('color','red');
            $('#err_msg_4_vedio_image').html('No file selected !! Please select a vedio file');
            $('#err_msg_4_vedio_image').css('display', 'block');
            setTimeout(function(){
                $('#err_msg_4_vedio_image').fadeOut();
                $('#err_msg_4_vedio_image').html('');
            },4000);
            return false;
        }else{
            custom_File_for_vedio_image.classList.remove('is-invalid');
            custom_File_for_vedio_image.classList.add('is-valid');
            custom_File_for_vedio_image.style.borderColor = '#36cc36';
            return true;
        }
    }

    function validate_vedio_file_input(e){
        if(!regex_for_vedio_file.test(e)){
            custom_File_for_vedio.classList.remove('is-valid');
            custom_File_for_vedio.classList.add('is-invalid');
            custom_File_for_vedio.style.borderColor = 'red';
            $('#err_msg_4_vedio_file').html('Invalid vedio file !! please select a valid vedio to upload.');
            $('#err_msg_4_vedio_file').css('color', 'red'); 
            $('#err_msg_4_vedio_file').css('display', 'block'); 
            setTimeout(function(){
                $('#err_msg_4_vedio_file').fadeOut();
                $('#err_msg_4_vedio_file').html('');
            },4000);
            return false;
        }else{
            custom_File_for_vedio.classList.remove('is-invalid');
            custom_File_for_vedio.classList.add('is-valid');
            custom_File_for_vedio.style.borderColor = '#36cc36';
            return true
        }
    }

    function validate_vedio_image_file_input(e){
        if(!regex_for_vedio_image_file.test(e)){
            custom_File_for_vedio_image.classList.remove('is-valid');
            custom_File_for_vedio_image.classList.add('is-invalid');
            custom_File_for_vedio_image.style.borderColor = 'red';
            $('#err_msg_4_vedio_image').html('Invalid vedio file !! please select a valid vedio to upload.');
            $('#err_msg_4_vedio_image').css('color', 'red'); 
            $('#err_msg_4_vedio_image').css('display', 'block'); 
            setTimeout(function(){
                $('#err_msg_4_vedio_image').fadeOut();
                $('#err_msg_4_vedio_image').html('');
            },4000);
            return false;
        }else{
            custom_File_for_vedio_image.classList.remove('is-invalid');
            custom_File_for_vedio_image.classList.add('is-valid');
            custom_File_for_vedio_image.style.borderColor = '#36cc36';
            return true
        }
    }

    form_Video_Upload.addEventListener('submit', function(e){
        e.preventDefault();
       if(check_for_vedio_empty_input_Address() && check_for_empty_vedio_custom_file()){
           if(validate_vedio_file_input(custom_File_for_vedio.files.item(0).name)){
                var formData = new FormData(vedio_upload_form_); 
                $.ajax({
                    method : 'POST',
                    url : '/admin/vedio_upload',
                    processData : false,
                    contentType : false,
                    data : formData,
                    statusCode : {
                        400 : function(msg, status, jqXHR){
                            console.log(status);
                        },
                        501 : function(msg,status,jqXHR){
                            console.log(status); 
                        },
                        200 : function(msg,status,jqXHR){
                            console.log(status);
                        } 
                    }
                }).done(function(msg, status, jqXHR){
                    alert(jqXHR.responseJSON.msg);
                    $('#video_image_upload').slideDown(400);
                    $('#videobuttonUpload').attr('disabled', true);
                    $('#videobuttonUpload').css('cursor','not-allowed');
                }).fail(function(msg, status, jqXHR){
                    console.log(jqXHR.responseJSON.err);
                });
            }
       }
    });

    form_Video_image_Upload.addEventListener('submit', function(e){
        e.preventDefault();
        if(check_for_empty_image_custom_file()){
            if(validate_vedio_image_file_input(custom_File_for_vedio_image.files.item(0).name)){
                var formData = new FormData(vedio_image_upload_form_);
                $.ajax({
                    method : 'POST',
                    url : '/admin/vedio_image_upload',
                    processData : false,
                    contentType : false,
                    data : formData,
                    statusCode : {
                        400 : function(msg, status, jqXHR){
                            console.log(status);
                        },
                        501 : function(msg, status, jqXHR){
                            console.log(status);
                        }
                    }
                }).done(function(msg, status, jqXHR){
                    alert(jqXHR.responseJSON.msg);
                    $('#videobuttonUpload').attr('disabled', false);
                    $('#videobuttonUpload').css('cursor','pointer');
                    $('#video_image_upload').slideUp(400);
                }).fail(function(msg, status, jqXHR){
                    console.log(jqXHR.responseJSON.err);
                });
                
            }
        }
    });
  /*  function formater(){
        var extn = /^([a-zA-z\d\_\s\-\.]{1,})$/;
        var file_extn_1 = ".JPG";
        var file_extn_2 = ".jpg";
        var file_extn_3 = ".jpeg";
        var file_extn_4 = ".JPEG";
        var file_extn_5 = ".PNG";
        var file_extn_6 = ".png";
        var file_extn_7 = ".gif";
        var file_extn_8 = ".GIF";
        if(!(extn.test(file_extn_1) || extn.test(file_extn_2) || extn.test(file_extn_3) || extn.test(file_extn_4) || extn.test(file_extn_5) || extn.test(file_extn_6) || extn.test(file_extn_7) || extn.test(file_extn_8))){
            console.log('Your Regex Did Not Match');
        }else{
            return file_extn_1 || file_extn_2 || file_extn_3 || file_extn_4 || file_extn_5 || file_extn_6 || file_extn_7 || file_extn_8;
        }
    }
    $.ajax({
        method : 'GET',
        url : '/admin/videos',
        success : function(videos_mp4){
            console.log(videos_mp4);
            var file_extn = ".jpg";
            videos_mp4.videos_mp4.forEach(return_result => {
                $('#open_vedio').append('\
                <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 viddeo_vertical">\
                    <div class="wrapper">\
                        <video src="/video/'+ return_result.fileName +'" controls></video>\
                    </div>\
                </div>\
                ');
            });
        },
        failure : function(err){
            console.log(err);
        }
    });*/

    /*document.getElementById('search_text_input').addEventListener('keyup', function(event){
        event.preventDefault();
        if(event.keyCode === 13){
            document.getElementById('search_button').click();
        }
    });
     success : function(data){
                console.log(data);
                var html = '<div class = "col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 data_">\
                    <div class = "wrap_video">\
                        <video class="vid_eo" src="/video/' + data.fileName +'" poster="/video/video_images/'+ ext_manupulator(data.fileImage) +'" target="_blank" controls></video>\
                    </div>\
                </div>';
                document.getElementById('for_Opening_Video').append(html);
    */

});