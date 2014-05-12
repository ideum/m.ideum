/* ----- Name Changer ------ */

var names = {
        46: {name: 'Platform 45 Drafting', img: 'img/drafting/drop-downs/photo_drafting_46.png'}, 
        55: {name: 'Platform 55 Drafting', img: 'img/drafting/drop-downs/photo_drafting_55.png'}, 
        65: {name: 'Platform 65 Drafting', img: 'img/drafting/drop-downs/photo_drafting_65.png'}
    };

$(document).ready(function(){
    $('.superSelect').bind('change', function(e){
        var which = parseInt(e.target.value);

        $('.number').text(which.toString());
        $('.tableName').text(names[which].name);
        $('.draftingImage').attr('src', names[which].img);

    });
})
