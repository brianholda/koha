$("form#loginform").hide();
$("<h3 class='text-right'><button type='button' class='btn btn-outline-secondary btn-sm guest-login-heading-button'>Guest Login</button></h3>").insertBefore("form#loginform");



$(".guest-login-heading-button").click(function () {
    $("form#loginform").toggle();
});

