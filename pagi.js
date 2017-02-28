//jquery paginati
$(document).ready(function() {
	var lastAnimation = 0;
	var animationTime = 750;
	//Here you can set the time between two events listeners.
	var quietPeriod = 700;

	//You can set differents DOM elements wich contain your page, 
	//but keep in mind your scrolling elements have to be call by them IDs.
 	$('section').bind('mousewheel DOMMouseScroll', function(event){
		var page = '#' + $(this).attr('id');
		var nextPageId = $(page).next('section').attr('id');
		var prevPageId = $(page).prev('section').attr('id');
		var nextPage = '#' + nextPageId;
		var prevPage = '#' + prevPageId;

		//This set a timeout between scrolls to avoid multiple queued events.
		var timeNow = new Date().getTime();

		if(timeNow - lastAnimation < quietPeriod + animationTime) {
        event.preventDefault();
        return;
    	}
    	//-----------------------------------------

		else if((event.originalEvent.detail < 0 || event.originalEvent.wheelDelta > 0) && (prevPageId)) {
			lastAnimation = timeNow;
			//console.log("up");
			$('html, body').animate( { scrollTop: $(prevPage).offset().top }, animationTime );
			return false;
		}
		else if((event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0) && (nextPageId)) {
			lastAnimation = timeNow;
			//console.log("down");
			$('html, body').animate( { scrollTop: $(nextPage).offset().top}, animationTime );
			return false;
		}
		else {
			event.preventDefault();
			return;
		}
  });
});