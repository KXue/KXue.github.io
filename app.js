/**
 * @author Kevin
 */
var main = function() {
	$('div.tab').click(function (){
		var clickedTab = $('#'+this.getAttribute('id'));
		var currentTab = $('#'+$('div.selected')[0].getAttribute('id'));
		
		currentTab.toggleClass('selected');
		currentTab.toggleClass('unselected')
		clickedTab.toggleClass('selected');
		clickedTab.toggleClass('unselected');
		
		for(i=0; i<4; i++){
			if(clickedTab.hasClass('unselected-' + (i + 1))){
				currentTab.toggleClass('unselected-0');
				clickedTab.toggleClass('unselected-0');
				currentTab.toggleClass('unselected-' + (i + 1));
				clickedTab.toggleClass('unselected-' + (i + 1));
				break;
			}
		}
	});
}
$(document).ready(main);
// $(document).bind('touchmove', function(e) {
	// console.log(e);
	// e.preventDefault();
// });