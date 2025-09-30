
let Helper;

$.getJSON("test.json", function(json) {
    console.log(json); // this will show the info it in firebug console
    Helper = json
    RandImg()
});

$(document).ready(() => {
    
});

function RandImg(){
    $('#Testing').attr('src', Helper[Math.floor(Math.random() * Helper.length)]["paintingPath"])
    setTimeout(function(){
        RandImg()
    }, 1000);
}