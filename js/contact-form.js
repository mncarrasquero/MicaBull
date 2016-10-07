/* ---------------------------------------------
 Contact form
 --------------------------------------------- */
 $(document).ready(function(){
    $("#submit-join").click(function(){

        var btn = $(this);
        //get input field values
        var user_emailJoin = $('input[name=subscribe]').val();     

        
        
        //simple validation at client's end
        //we simply change border color to red if empty field using .css()
        var proceed = true;

        if (user_emailJoin == "") {
            $('input[name=subscribe]').css('border-color', '#e41919');
            proceed = false;
        }
        
        //everything looks good! proceed...
        if (proceed) {
            //data to be sent to server
            post_data = {

                'user_emailJoin': user_emailJoin,

            };
            console.log(post_data);
            var btnText = btn.html();
            if(!btn.hasClass('fa-spin'))
                btn.prepend('<i class="fa fa-refresh fa-spin"></i> ');
            //Ajax post data to server
            $.post('join.php', post_data, function(response){

                console.log(response);
                //load json data from server and output message     
                if (response.status == 'error') {
                   output = '<div class="error">' + response.text + '</div>';
               }
               else {

                output = '<div class="success">' + response.text + '</div>';
                    //reset values in all input fields
                    $('input[name=subscribe]').val('');                 
                }
                
                btn.html(btnText);
                $("#send-result").hide().html(output).slideDown();
            }, 'json');
            
        }
        
        return false;
    });
    
    //reset previously set border colors and hide all message on .keyup()
    $("#contact-form input, #contact-form textarea").keyup(function(){
        $("#contact-form input, #contact-form textarea").css('border-color', '');
        $("#send-result").slideUp();
    });
    
});




 $(document).ready(function(){
    $("#submit-message").click(function(){

        var btn = $(this);
        //get input field values
        var user_name = $('input[name=name]').val();
        var user_email = $('input[name=email]').val();
        
        var user_phone = $('input[name=phone]').val();
        var user_message = $('textarea[name=message]').val();


        
        
        //simple validation at client's end
        //we simply change border color to red if empty field using .css()
        var proceed = true;
        if (user_name == "") {
            $('input[name=name]').css('border-color', '#e41919');
            proceed = false;
        }
        if (user_email == "") {
            $('input[name=email]').css('border-color', '#e41919');
            proceed = false;
        }
        
        if (user_message == "") {
            $('textarea[name=message]').css('border-color', '#e41919');
            proceed = false;
        }

        //everything looks good! proceed...
        if (proceed) {
            //data to be sent to server
            post_data = {
                'userName': user_name,
                
                'userEmail': user_email,
                'userMessage': user_message,
                'userPhone': user_phone
            };
            console.log(post_data);
            var btnText = btn.html();
            if(!btn.hasClass('fa-spin'))
                btn.prepend('<i class="fa fa-refresh fa-spin"></i> ');
            //Ajax post data to server
            $.post('contact_me.php', post_data, function(response){

                console.log(response);
                //load json data from server and output message     
                if (response.status == 'error') {
                   output = '<div class="error">' + response.text + '</div>';
               }
               else {

                output = '<div class="success">' + response.text + '</div>';

                    //reset values in all input fields
                    $('#contact-form input').val('');
                    $('#contact-form textarea').val('');
                }
                
                btn.html(btnText);
                $("#send-result").hide().html(output).slideDown();
            }, 'json');
            
        }
        
        return false;
    });
    
    //reset previously set border colors and hide all message on .keyup()
    $("#contact-form input, #contact-form textarea").keyup(function(){
        $("#contact-form input, #contact-form textarea").css('border-color', '');
        $("#send-result").slideUp();
    });
    
});
