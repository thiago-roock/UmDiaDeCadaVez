jQuery(".modoWhite").hide();
var xx = "corBranca";
jQuery("#modoWhite").click(function () {
    mudandoCor();
})
jQuery("#modoDark").click(function () {
    mudandoCor();
})
function mudandoCor() {
    if (xx == "corBranca") {
        jQuery("#corpo").addClass("bg-dark text-light");
        jQuery("#rodapeT").removeClass("text-dark");
        xx = "corPreta";
        jQuery(".modoDark").hide();
        jQuery(".modoWhite").show();

    } else {
        jQuery("#corpo").removeClass("bg-dark text-light");
        jQuery("#rodapeT").addClass("text-dark");
        xx = "corBranca";
        jQuery(".modoDark").show();
        jQuery(".modoWhite").hide();
    }
}