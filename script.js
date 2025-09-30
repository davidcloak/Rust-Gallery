
let RustGallery;

// RustGallery = temp["Images"]

$(document).ready(() => {
    $.getJSON("SeptemberSession.json", function(json) {
        RustGallery = json["Images"]
        RandImg()
    });
    // RandImg()
});

function RandImg(){
    var randNum = Math.floor(Math.random() * RustGallery.length)

    $('#imgCanvas').attr('src', RustGallery[randNum]["canvasPath"])
    $('#imgCanvas').attr('style', 'height: 80vh;')

    $('#imgPainting').attr('src', RustGallery[randNum]["paintingPath"])
    $('#imgPainting').attr('style', `height: 70vh;`)


    setTimeout(function(){
        RandImg()
    }, 15000);
}