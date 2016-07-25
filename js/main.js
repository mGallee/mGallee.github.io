$(function () {
	setFullPage();
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