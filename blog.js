$("#addText").on('click', main);
$(document).on('click', '.delete', erase);

function main(e) {
    e.preventDefault();
    var textToAdd = $('#uniqueTextInput').val();
    console.log(textToAdd);

    $('#blogItems').append('<li> &#9834; <label> ' +textToAdd+' </label> <a class="delete" href="#">&times;</a> </li>');
    $('#uniqueTextInput').val('');
}

function erase(evt) {
    evt.preventDefault();
    $(this).parent().remove();
}

