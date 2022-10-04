function update_session() {
    $.post( "api.php", { session: "1"},function(data){
        const json_response = data;
        const obj = JSON.parse(json_response);
        if (obj.response == "success") {
            $(".login_form").css("display","none");
            $(".nav_userinfo").css("display","block");
            $("#login").css("display","none");
            $(".nav_username").html(`Logged in as <b>${obj.username}</b>`);
            if (obj.admin == 1) $(".navlink#admin").css("display","block");
        } else {
            $(".login_form").css("display","flex");
            $(".nav_userinfo").css("display","none");
            $("#login").css("display","block");
            $(".nav_username").html(``);
            $(".navlink#admin").css("display","none");
        }
    });
}

$('.refresh_btn').on("click",function(){
    $.post( "api.php", { dif: $('#dif').val()},function(data){
        const json_response = data;
        const obj = JSON.parse(json_response);
        if (obj.response !== "success") return;
        $('.output_content').html("");
        Array.from(obj.rows).forEach(function(currVal,i){
            let index = i+1;
            $('.output_content').append(`${index}: ${currVal.description}<br><br>`);
        });
    });
});

$('.navlink').on("click",function(){
    Array.from($('.navlink')).forEach(function(currVal){
        $('.'+currVal.id+'_container').css("display","none");
    });
    $('.'+this.id+'_container').css("display","block");
});
$('.d_btn_container').on("click",function(){
    Array.from($('.d_btn_container')).forEach(function(currVal){
        $(currVal).removeClass("selected");
    });
    $(this).addClass("selected");
    $("#dif").val($(this).attr("data-value"));
});

$('.login_btn').on("click",function(){
    $.post( "api.php", { username: $('#username').val(), password: $('#password').val()},function(data){
        const json_response = data;
        const obj = JSON.parse(json_response);
        console.log(obj.response);
        if (obj.response == "success") {
            $(".login_container").css("display","none");
            $(".main_container").css("display","block");
            update_session();
            return;
        }
        $(".login_response").addClass("failure_response");
        $(".login_response").html("Our border patrol rejected your paper, check your email and password");
    });
});

$('.navlink#admin').on("click",function(){
    $.post( "api.php", { adminpage: ""},function(data){
        const json_response = data;
        const obj = JSON.parse(json_response);
        //$('.admin_container').html("");
        // Array.from(obj.rows).forEach(function(currVal){
        //     $('.admin_container').append(`<div>${currVal.description}</div>`);
        // });
    });
});

$(document).ready(function(){
    update_session();
});

$('.nav_userinfo').mouseover(function(){
    $('.logoutbtn').css("display","flex");
});
$('.nav_userinfo').on("click",function(){
    $('.logoutbtn').css("display","none");
});
$('.logoutbtn').on("click",function(){
    $.post( "api.php", { logout: ""},function(data){
        update_session();
    });
});

$('.strat_insert_btn').on("click",function(data){
    let strats = $('[name=strat_insert_text]').val().split('\n');
    let json_obj = JSON.stringify(strats);
    $('[name=strat_insert_text]').val('');
    $.post( "api.php", { insert_strats: json_obj},function(data){
        console.log(data);
    });
});