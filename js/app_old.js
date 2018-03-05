<<<<<<< HEAD:js/app.js
$('.grid').isotope({
    // options

    itemSelector: '.grid-item',
    layoutMode: 'masonry',
    masonry: {
        columnWidth: 162,
    }
=======
var hoverText = $("#hover-text");
function showHoverText(ev) {
	hoverText.removeClass("hidden");

};
function hideHoverText(ev){
	hoverText.addClass("hidden");
}
function filterPressed(ev){
	var filter = ev.delegateTarget.id;
	if(filter != "home"){
		$(".wrapper .card, .wrapper .card-stack").not(".always-on, .always-on .card").not("." + filter + ", ." + filter + " .card").addClass("hidden");
		$(".wrapper .card." + filter + ", .wrapper .card-stack." + filter + ", .wrapper .card-stack." + filter + " .card").removeClass("hidden");
	}
	else{
		$(".wrapper .card, .wrapper .card-stack, .wrapper .card-stack .card").removeClass("hidden")
	}
}
function cardStackPressed(ev){
	var target = $(ev.delegateTarget);
	var previous = target.parent().children(".selected")
	previous.removeClass("selected");
	target.toggleClass("selected");
}
function runThis(){
	// dBug($("span"));
	// $("span").hover(showHoverText, hideHoverText);
	$("nav.card-stack div.filter").click(filterPressed)
	$(".card-stack .card").click(cardStackPressed);
};
$(document).ready(function(){
	dBug("This is a log");
	runThis();
>>>>>>> 06325f89449d2bc65e8586b1718fe49ff9cedf37:js/app_old.js
});
