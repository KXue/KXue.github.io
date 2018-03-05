var hoverText = $("#hover-text");
function showHoverText(ev) {
	hoverText.removeClass("hidden").addClass("shown");

};
function hideHoverText(ev){
	hoverText.removeClass("shown").addClass("hidden");
}
function filterPressed(ev){
	var filter = ev.delegateTarget.id;
	if(filter != "home"){
		$(".wrapper .card, .wrapper .card-stack").not(".always-on, .always-on .card").not("." + filter + ", ." + filter + " .card").removeClass("shown").addClass("hidden");
		$(".wrapper .card." + filter + ", .wrapper .card-stack." + filter + ", .wrapper .card-stack." + filter + " .card").removeClass("hidden").addClass("shown");
	}
	else{
		$(".wrapper .card, .wrapper .card-stack, .wrapper .card-stack .card").removeClass("hidden").addClass("shown");
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
	runThis();
});
function dBug(data){
	console.log(data);
};