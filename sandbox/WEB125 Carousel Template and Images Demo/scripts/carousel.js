// Activate Carousel
$("#carousel").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
    $("#carousel").carousel(1);
});

// Enable Carousel Controls
$(".left").click(function(){
    $("#carousel").carousel("prev");
});