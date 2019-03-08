var username="";

function send_message(message){

    var prevState = $("#container").html()
    if(prevState.length >7 )
    {
        prevState=prevState+"<br>";

    }
    $("#container").html(prevState+"<span class='current_message'>"+"<span class='bot'>ChatBot: </span>" +message)+"</span>";
    $(".current_message").hide();
    $(".current_message").delay(500).fadeIn();
    $(".current_message").removeClass("current_message");
}

function get_username()
{
    send_message("Whats your name");
}

function ai(message){
    if(username<7){
    username=message;
    send_message("Nice to meet you "+ username+".How are you ?");
    }
    if(message.indexOf("how are you")>=0){
         send_message("Thanks, I am good !");
    }

    if(message.indexOf("time")>=0){
        var date= new Date();

        var h=date.getHours();
        var m=date.getMinutes();
        send_message("Current time is "+h+":"+m);
   }


}
$(function(){

   get_username();

   $("#textbox").keypress(function(event){

       if(event.which==13){
           if($("#enter").prop("checked")){
               $("#send").click();
               event.preventDefault();
           }
       }


   });

   $("#send").click(function(){

       var username="<span class='username'>You:</span>";
       var newMessage=$("#textbox").val();
       
       $("#textbox").val("");
       var prevState = $("#container").html()
       

       if(prevState.length >7 )
       {
           prevState=prevState+"<br>";

       }
       $("#container").html(prevState+username+newMessage)
       
       $("#container").scrollTop($("#container").prop("scrollHeight"));

       ai(newMessage);

   });

});
