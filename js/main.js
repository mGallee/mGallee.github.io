$(function () {
	setFullPage();

	new Image().src="/img/winston-earth.jpg";
	new Image().src="/img/tracer-close.jpg";
	new Image().src="/img/widowmaker-close.jpg";
	new Image().src="/img/solder-close.jpg";
	new Image().src="/img/mercy-close.jpg";
	new Image().src="/img/dva-close.jpg";

	var i=1;
	setInterval(function(){
		if(i > 6){
			i=1;
		}
		$('.section-first').attr('data-background', i)
		i++;
	}, 8000);

});

$(window).resize(function() {
	setFullPage();
});

function setFullPage(){
	$('.section-first').height($(window).height());
}