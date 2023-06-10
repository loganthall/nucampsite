//Activates Document Ready
$(function () {

    //Photo Carousel Play/Pause Toggle
    $(".carousel").carousel({ interval: 2000, pause: "false" });
    $("#carouselButton").on("click", function () {
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });

    //Reserve Button Modal Activate
    $("#reserveButton").on("click", function () {
        $("#reserveModal").modal();
    });

    //Login Modal Activate
    $("#loginButton").on("click", function () {
        $("#loginModal").modal();
    });

}); //Ends Document Ready
