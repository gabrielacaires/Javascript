/*JQuery is a javascript library

How to include it in your file:
	- Download the library from the JQuery website and put the file in the same folder as your html files
	- In the HTML file add the library using script tags, as listed bellow:
			<script src="jquery-2.2.1.min.js"></script>
	- To check if it worked, type jQuery into the console

Document ready: ensures your page will be fully loaded before running code on it*/
$(document).ready(function(){
	/*code you want to run*/

})

/*Anonymous function can be:
	- An argument to a function
			$(document).ready(function(){})
	- Returned by a function
	- Assigned to a variable

And they are often used as callbacks (functions that are run after some other code is done)
*/

/* ANIMATIONS*/

/*HIDE and SHOW - syntax: $("element").hide(duration in miliseconds)*/
$("body").hide();
$("body").show();

/*FADE OUT and FADE IN - syntax: $("element").fadeOut(duration in miliseconds)*/
$("#header").fadeOut(500);
$("#header").fadeIn(500);

/*SLIDE UP and SLIDE DOWN - syntax: $("element").slideUp(duration in miliseconds)*/
$(".text").slideUp(1000);
$(".text").slideDown(2000);

/*ANIMATE - syntax: $("element").animate({arguments}, duration in miliseconds, callback)*/
$(".box").animate({
	width: "100%";
	opacity: .5;
}, 2000, function(){
	$("body").slideUp(1000);
})

/*In the example above, the box will enlarge to width of 100% and fade to .5 opacity, during 2 seconds.
AFTER that is done, it will call the anonymous functions that slides up the body
*/

/*Some animations can be fired by an event, such as a CLICK.*/
$("button").click(
	function(){
		$(".sidebar").hide();
	}
)	

/*Adding CSS properties*/

/*To get CSS properties use:*/
	$("element").css("fontSize");

/*To set CSS properties use:*/
	$("element").css("fontSize","100px");
	$("element").css({
		fontSize: 100px,
		color: red
	});

