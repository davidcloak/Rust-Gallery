
let RustGallery;

$.getJSON("SeptemberSession.json", function(json) {
    console.log(json);
    RustGallery = json["Images"]
    RandImg()
});

$(document).ready(() => {
    
});

function RandImg(){
    var randNum = Math.floor(Math.random() * RustGallery.length)

    $('#imgCanvas').attr('src', RustGallery[randNum]["paintingPath"])
    $('#imgPainting').attr('src', RustGallery[randNum]["paintingPath"])

    setTimeout(function(){
        RandImg()
    }, 1000);
}