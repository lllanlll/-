function snow() {
    var flake = $("<div>").css({
        "position": "absolute",
        "color": "#fff"
    }).html("❄");

    var documentWidth = $(document).width();

    var documentHieght = $(document).height();

    var millisec = 100;
    setInterval(function() {
        var startLeft = Math.random() * documentWidth;

        var endLeft = Math.random() * documentWidth;

        var flakeSize = 5 + 20 * Math.random();

        var durationTime = 4000 + 7000 * Math.random();

        var startOpacity = 0.8 + 0.2 * Math.random();

        var endOpacity = 0.3 + 0.7 * Math.random();

        flake.clone().appendTo($("body")).css({
            "left": startLeft,
            "opacity": startOpacity,
            "font-size": flakeSize,
            "top": "-25px",
        }).animate({
            "left": endLeft,
            "opacity": endOpacity,
            "top": documentHieght
        }, durationTime, function() {
            $(this).remove();
        });
    }, millisec);
};
snow();