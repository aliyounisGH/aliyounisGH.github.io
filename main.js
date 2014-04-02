var restaurants = [{"name":"Churchkey", "cuisine":"american", "style": "casual", "price":"$", "hours":"regular"},
                   {"name":"Ghana Cafe", "cuisine":"african", "style": "casual", "price":"$", "hours":"regular"},
                   {"name":"B Too", "cuisine":"asian", "style": "casual", "price":"$$", "hours":"regular"},
                   {"name":"Masa 14", "cuisine":"spanish", "style": "casual", "price":"$$", "hours":"late"},
                   {"name":"El Centro", "cuisine":"spanish", "style": "casual", "price":"$", "hours":"late"},
                   {"name":"Drafting Table", "cuisine":"american", "style": "casual", "price":"$", "hours":"regular"},
                   {"name":"Ghibellina", "cuisine":"italian", "style": "casual", "price":"$", "hours":"regular"},
                   {"name":"Diego", "cuisine":"spanish", "style": "casual", "price":"$", "hours":"regular"},
                   {"name":"Rice", "cuisine":"asian", "style": "casual", "price":"$", "hours":"regular"},
                   {"name":"Matchbox", "cuisine":"american", "style": "casual", "price":"$", "hours":"regular"},];

$('.restaurantFilter>select').on('change', filterRestaurant);
$('#displayAll').on('click', showAll);

function filterRestaurant(e) {
    e.preventDefault();
    $('#entries tr').fadeOut('fast');
    $('#entries [data-cuisine="' + $(this).val() + '"]').fadeIn('fast');
    $('#entries [data-style="' + $(this).val() + '"]').fadeIn('fast');
    $('#entries [data-price="' + $(this).val() + '"]').fadeIn('fast');
    $('#entries [data-hours="' + $(this).val() + '"]').fadeIn('fast');
    $('#entries [data-all="' + $(this).val() + '"]').fadeIn('fast');
}

function showAll(e) {
    e.preventDefault();
    $('tr').fadeIn('fast');
}

// $('nav ul li a').on('click', showTab);

// function showTab(e) {
//     var $clickedLink = $(this);
//     var $clickedTab
// }

$('nav ul li a').on('click', smoothScroll);

function smoothScroll(e) {
    e.preventDefault();
    $.scrollTo($(this).attr('href'), 800);
}

// $.scrollTo( 'li:eq(14)', 800 );
