var languages = [["Java",5],["HTML/CSS",5],["Javascript", 5],["SQL",5],["MongoDB",5],["PHP",4],["JQuery",4],["Bootstrap",4],["Python",3],["React.js",3],["Swift",3],["Kotlin",3],["C#",3],["Neo4j",3],["Powershell",2]];
var software = [["Windows",5],["Mac",5],["Linux",3],["Adobe Creative Suite",5],["Microsoft Office Suite",5],["Visual Studio",4],["XCode",3],["Android Studio",3],["ArcMap", 3],["GitHub",5]];

$(document).ready(function() {
	$(window).resize(function() {
		var bodyheight = $(this).height();
		$(".header").height(bodyheight);
		$("#about").height(bodyheight);
		$("#work").height(bodyheight);
	}).resize();
});
$(document).ready(function() {
	for(var i = 0; i < languages.length; i++) {
		var node = document.createElement("P");
		var txt = document.createTextNode(languages[i][0]);
		node.appendChild(txt);

		for(var j = 0; j < languages[i][1]; j++) {
			var img = document.createElement("IMG");
			img.src = "src/img/star.png";
			node.appendChild(img);
		}
		document.getElementById("languages-list").appendChild(node);
	}
	
		for(var i = 0; i < software.length; i++) {
		var node = document.createElement("P");
		var txt = document.createTextNode(languages[i][0]);
		node.appendChild(txt);

		for(var j = 0; j < languages[i][1]; j++) {
			var img = document.createElement("IMG");
			img.src = "src/img/star.png";
			node.appendChild(img);
		}
		document.getElementById("software-os-list").appendChild(node);
	}
});
$(document).ready(function() {
	function oneslideout() {
		$(".triangle1").css({"left":"200px", "top":"-180px", "opacity":1});
		$(".triangle1").animate({
			"left": "-200px",
			"top": "150px",
			"opacity": 0}, {
				duration: 18000,
				complete: oneslideout
			});
	}

	function fivefadeout() {
		$(".triangle5").stop(true,true).delay(8000).animate({
			"opacity":1}, {
				duration:9000, 
				complete:fivefadein
			});
	}
	function fivefadein() {
		$(".triangle5").animate({
			"opacity":0}, {
				duration:11000,
				complete: fivefadeout
			});
	}
	function twoslideout() {
		$(".triangle2").animate({
			"top": "700px"}, {
				duration:17000,
				complete: twoslidein
			});
	}
	function twoslidein() {
		$(".triangle2").animate({
			"top": 0}, {
				duration:17000,
				complete: twoslideout
			});
	}
	function threefadeout() {
		$(".triangle3").animate({
			"opacity": 0.25}, {
			duration: 6000,
			complete: threefadein
		});
	}
	function threefadein() {
		$(".triangle3").animate({
			"opacity": 1}, {
			duration: 7000,
			complete: threefadeout
		});
	}
	oneslideout();
	twoslideout();
	fivefadeout();
	threefadeout();
});

$("#nav-home").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".header").offset().top
    }, 600);
});
$("#nav-about").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#about").offset().top
    }, 600);
});
$("#nav-work").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#work").offset().top
    }, 600);
});