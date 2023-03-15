$(document).ready(function(){
    $("#icon1").click(function(event){
    event.preventDefault();
    $("#icon1").toggle();
    $("#design").toggle();
    $("#designtitle").show();
    });

    //hiding
    $("p#design").click(function(event){
        event.preventDefault();
        $("#icon1").toggle();
        $("#design").toggle();
        $("#design").hide();
        });

                     //icon2
    $("#icon2").click(function(){
        $("#icon2").toggle();
        $("#develop").toggle();
        $("#developtitle").show();
    });
        //hiding
    $("p#develop").click(function(){
            $("#icon2").toggle();
            $("#develop").toggle();
            $("#develop").hide();
        });
                      //icon3
    $("#icon3").click(function(){
        $("#icon3").toggle();
        $("#product").toggle();
        $("#producttitle").show();
    });
    //hiding
    $("p#product").click(function(){
        $("#icon3").toggle();
        $("#product").toggle();
        $("#product").hide();
    });
});

//form validation
function validate(){
    var username=document.getElementById("name1").value;
    var email=document.getElementById("email1").value;
    var message=document.getElementById("messo").value;

    if(username==''){
        alert('enter your name');
        username.focus();
        return false;
        
    }else if(email==''){
        alert('enter your email address');
        email.focus();
        return false
    }else if(message==''){
        alert('enter your message')
        message.focus()
        return false;
        
    }else
    alert('Dear '+username+'\n  your message has been received.')
}