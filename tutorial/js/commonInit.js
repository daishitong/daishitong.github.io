(function() {
var isMobile = isMobileDevice();
if($("#myNav").length > 0){
    if(isMobile){
        $("#myNav").hide();
    }
    else{
        $("#myNav").affix({
            offset: { 
                top: 125 
            }
        }); 
    }      
}

if(!isMobile){
    $("#side_div").show();
    $("#qrcode").qrcode({
        width:128,
        height:128,
        text:window.location.href,
    });
}
})();