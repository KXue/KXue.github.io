//note to self: use JSON.parse()
//source: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
var baseURL = "https://api.github.com"; //base URL used for all github API related GET requests
$(document).ready(function(){
	dBug("This is a log");
	runThis();
});
function dBug(data){
	console.log(data)
};
var runThis = function() {
	resizeStack();
	setTimeout(function() { // Waiting for transition to 
		$('.grid').isotope({
			// options
			itemSelector: '.grid-item',
			layoutMode: 'fitRows'
		});
		applyLoaded();
	}, 300);
	$('.equation.overlay').click(function(e){
		openInfo('#profile-info');
	});
	$('#snakesteroids .overlay').click(function(e){
		openInfo('#snakesteroids-info');
	});
	$('#overpopulate .overlay').click(function(e){
		openInfo('#overpopulate-info');
	});
	$('#crysis .overlay').click(function(e){
		openInfo('#crysis-info');
	});
	$('#help').click(function(e){
		openInfo('#help-info');
	});
	$('#info-div-wrapper, .back-button').click(function(e){
		hideInfo();
	});
	$('li.home').click(function(){
		dBug($('.grid'));
		$('.grid').isotope({ filter: '*' });
	})
	$('li.about').click(function(){
		dBug($('.grid'));
		$('.grid').isotope({ filter: '.about' });
	})
	$('li.games').click(function(){
		$('.grid').isotope({ filter: '.games' });
	})
	$('li.docs').click(function(){
		$('.grid').isotope({ filter: '.docs' });
	})
	$('li.contact').click(function(){
		$('.grid').isotope({ filter: '.contact' });
	})

 	/*for(var i = 0; i < 10; i++){
 		$('#wrapper').get(0).innerHTML += createCard('Yi Fei Xue' + i,
 	 		'Description', 
 	 		'background: url(../assets/images/01-cat-wants-to-tell-you-laptop.jpg) 50% 50% no-repeat; background-size: 150%;',
 	 		'assets/images/faceIcon_purpleBG.png',
 	 		'assets/images/faceIcon_purpleBG.png');
 	}
 	httpGetAsync(baseURL + "/repos/kxue/CLRT/readme", addReadme);  //poll github API for CLRT readme file
 	httpGetAsync(baseURL + "/users/kxue", addAvatarImage);//Fetch my user data from girhub API
 	*/
}
//$grid.isotope({ filter: '*' });

var openInfo = function(elementId){
	$(elementId + ', #info-div-wrapper').addClass('showing');
}

var hideInfo = function(){
	var visibleInfo = $('.info-div').filter(function() {
   		return ($(this).hasClass('showing'));
	});
	visibleInfo.removeClass('showing');
	$('#info-div-wrapper').removeClass('showing');
}

var resizeStack = function(){
	var vertOffset = 30
	var cards = $('.card-stack .card:not(:last-child)');
	for(var i = 0; i < cards.length; ++i){
		var card = cards[i];
		card.style.marginBottom = (card.clientHeight * -1 + vertOffset) + 'px';
	}
}

var applyLoaded = function(){
	$('.card-stack .card, .interactive').addClass('loaded');;
}

//simple callback function
var addReadme = function(retVal){
	var readme = JSON.parse(retVal);
	var paragraph = document.createElement("p");
	paragraph.innerHTML = b64_to_utf8(readme.content);
	document.getElementById("asdf").appendChild(paragraph);
}

var addAvatarImage = function(retVal){
	var user = JSON.parse(retVal);
	var avatarImage = document.createElement("img");
	avatarImage.src = user.avatar_url;
	document.getElementById("asdf").appendChild(avatarImage);
}

//http://stackoverflow.com/questions/30106476/using-javascripts-atob-to-decode-base64-doesnt-properly-decode-utf-8-strings
function b64_to_utf8( str ) {
    return decodeURIComponent(escape(window.atob( str )));
}

//copied from Stack overflow: http://stackoverflow.com/questions/247483/http-get-request-in-javascript
function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

function createCard(title, description, mainImageBG, iconImage, subIconImage){
	if(typeof subIconImage !== 'undefined'){
		return '<div class="card">' +
		'<div class=content-img style="' + mainImageBG + '">' +
		'<img src="' + iconImage + '" class="type-icon"/>' +
		'<img src="' + subIconImage + '" class="secondary type-icon"/>' +
		'</div>' + 
		'<h1>' +
		title +
		'</h1>' +
		'<p>' +
		description +
		'</p>'+
		'</div>';
	}
	else{
		return '<div class="card">' +
		'<div class=content-img style="' + mainImageBG + '">' +
		'<img src="' + iconImage + '" class="type-icon"/>' +
		'</div>' + 
		'<h1>' +
		title +
		'</h1>' +
		'<p>' +
		description +
		'</p>'+
		'</div>';
	}
}
