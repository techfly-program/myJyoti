
var aparted = false;

$("#open").click(function(){
	
	if(!aparted)
	{
		var typed = new Typed('.letter', {
			strings: ["^1000My lovely&nbsp;&nbsp;  wife jyoti ", "^1000Dear&nbsp;&nbsp;I feel something special for you ,my words is not enough for that,but although I put my heart in this",
			"Tumko dekha to sansho ko esa laga,Ye vahi hai jise tha talasha bahut ,shabd hairan hai vyakt kese karu,hoth kese khe ki love you so much.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;तुझे क्या पता कि मेरे दिल में,कितना प्यार है तेरे लिए || जो कर दू बया तो तुझे नींद से,नफरत हो जाए ||<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br><br><p style='float:right; display:block; width:110px;'></p>",
			"^1000&nbsp;&nbsp;chand chehare ko sb shayaron ne kha, me bhi kese kahu chand me daag hai. Dhudh me sindur mil jaye tab,tera chehra usi tarah bedaag hai ",
			"^1000&nbsp;Jitna bolu utna km h fir bhi few words more for you ....&nbsp;Dhup se tera chehra baachaunga me,sar me rakh lo mujhe audni ki tarah.. tum jo paro bano dev ban jaau me,veer ban jaau me tum jo saara bano.&nbsp&nbsp&nbspGar Isharon me de do ijaajt mujhe,gunguna lu tujhe shayari ki tarah &nbsp<br><br><br>&nbsp;&nbsp; Your J."],
			typeSpeed: 100,
			backSpeed: 50
		});
		
		$('#open').find("span").eq(0).css('background-position', "0 -150px");
		
		aparted = true;
		
		var music = document.getElementById('music2');		
		if (music.paused)
		{
			music.play();
			$('#music_btn2').css("opacity", "1"); 
		}
	}
	
});

function playPause() 
{
    var music = document.getElementById('music2');
    var music_btn = $('#music_btn2');
	
    if (music.paused)
	{
        music.play();
		music_btn.css("opacity", "1"); 
    }
    else
	{
        music.pause();
		music_btn.css("opacity", "0.2"); 
    }	
}


window.onload = function () 
{	

	var currentUrl = window.location.href;
	var firstIndex = currentUrl.indexOf("#");	
	if (firstIndex <= 0) window.location.href = currentUrl + "#contact";

	$('#music2').attr('src', bgmsrc);

	document.addEventListener('touchstart',function (event) { if(event.touches.length > 1) event.preventDefault(); });
	
	var lastTouchEnd = 0;
	
	document.addEventListener('touchend',function (event) {
		
		var now = (new Date()).getTime();
		if(now - lastTouchEnd <= 300) event.preventDefault();
		lastTouchEnd = now;
		
	}, false);
	
	document.addEventListener('gesturestart', function (event) { event.preventDefault(); });

	$('body').css('opacity', '1');
	$('#jsi-cherry-container').css('z-index', '-99');
	
}
