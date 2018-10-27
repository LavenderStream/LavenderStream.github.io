$(document).ready(function () {
    console.log("stay hungry , stay foolish . ");
    _layoutQRCode();
});


function _layoutQRCode() {
    var path = window.location.href;
    if (path.endsWith("/about/")) {
        var img = $("p img");
        img.css("width", 90);
        img.css("height", 90);
        img.css("margin", 0);
    }
}
