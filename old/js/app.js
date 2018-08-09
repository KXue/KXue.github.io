$('.grid').isotope({
    // options

    itemSelector: '.grid-item',
    layoutMode: 'masonry',
    masonry: {
        columnWidth: 167,
    }
});
$('.filter-group').on( 'click','a', function() {
    var filterValue = $(this).attr('data-filter');
    $('.grid').isotope({ filter: filterValue });
});
