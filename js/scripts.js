
$( document ).ready(function() {
	$('#btnLoadMore').click(function() {
		$( ".notVisible" ).toggle( "slow")
		if ($("#btnLoadMore").hasClass("opened")) {
  			$("#btnLoadMore").removeClass('opened');
			$("#btnLoadMore").html('load more &#8739  &#8744');
		}

		else {

			$("#btnLoadMore").addClass('opened');
			$("#btnLoadMore").html('close &#8739 &#8743');

		}

	});
});
$( document ).ready(function() {
	$('.bxslider').bxSlider({
	  minSlides: 1,
	  maxSlides: 4,
	  slideWidth: 220,
	  slideMargin: 100,
	});
});
// $( document ).ready(function() {
// 	$("#btnLoadMore").click(function(){
// 		$("#btnLoadMore").html('Close');
// 		$("#btnLoadMore").addClass('opened');
// 		if("#btnLoadMore.opened"){
// 			$
// 			$("#btnLoadMore").html('load more &#8739  &#8744');
// 		}
// 	});
// });
