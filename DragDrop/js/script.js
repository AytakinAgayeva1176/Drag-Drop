$(document).on("click" , ".modal , .start" , function(){
    $(".modal , .start").hide();
})


$(function () {

    $(".finish").hide();
    $('.figure li').draggable({
        cursor: 'grab',
        revert: 'invalid',
        stop: function () {            
            if ($(".figure li").length == 0) {                
                $(".figure").hide();
                $(".finish").css("visibility", "visible");
                $(".finish").show("scale");               
            }
        }
    })

    

    $('#circle').droppable({
        accept: ".circle",
        drop: function (event, ui) {            
            $('#circle').append(ui.draggable.css({
                top: 0,
                left: 0,
            }))
            $(ui.draggable).draggable('option', 'disabled', true);
        }
    })

    $('#square').droppable({
        accept: ".square",
        drop: function (event, ui) {
            $('#square').append(ui.draggable.css({
                top: 0,
                left: 0,
            }))
        }
    })

    $('#triangle').droppable({
        accept: ".triangle",
        drop: function (event, ui) {           
            $('#triangle').append(ui.draggable.css({
                top: 0,
                left: -40,
            }))
        }
    })

    $("#heart").droppable({
        accept: ".heart",
        drop: function (event, ui) {
            if ($(".figure li").length == 0) {
                $(".figure").hide();

                console.log("sdfghjn");

            }
            $('#heart').append(ui.draggable.css({
                top: 0,
                left: 0,

            }))
        }
    })


})


