
//funcion scroll
$(function(){
	$("a").click(function(event) {
		if (this.hash !== "") {
			event.preventDefault();

			var gato = this.hash;

			$('html, body').animate({
			scrollTop: $(gato).offset().top
			}, 1200, function(){
			window.location.hash = gato;
		});
		} 
	});
});

//funcion popover
$(function () {
    $('[data-toggle="popover"]').popover()
    
    })