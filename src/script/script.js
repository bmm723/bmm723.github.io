var nasa = ["Powershell","mongodb","html","css","javascript","python","microsoft access"];
var cad = ["Jira","Confluence","mattermost","wordpress","photoshop","html","css","javascript","java"]
var rit=["Java","HTML","CSS","JavaScript","jQuery","SQL","MongoDB","Neo4j","C#","Python","Swift","Kotlin","Angular.JS","React.JS"];
var workflow=["C#","SQL","ASP.NET","jQuery","Chart.js","Semantic-UI","formBuilder", "UI Design","Wireframes","API Design","User Roles","Front end","back end"];
var asmara=["MongoDB","Python Flask","Plotly","Security plan","Accessibility","Database Design","Database development","UI Design","Customer interaction"];
/*
	Resize main topic boxes to screen height
*/
$(document).ready(function() {
	$(window).resize(function() {
		var bodyheight = $(this).height();
		$(".header").height(bodyheight);
		$("#about").height(bodyheight);
		$("#work").height(bodyheight);
		$("#projects").height(bodyheight);
	}).resize();
	/*
		Add work and education arrays to page
	*/
	for(var i = 0; i < nasa.length; i++) {
		var node = document.createElement("span");
		var txt = document.createTextNode(nasa[i]);
		node.appendChild(txt);
		node.className="skill";

		document.getElementById("nasa").appendChild(node);
	}
	for(var i = 0; i < nasa.length; i++) {
		var node = document.createElement("span");
		var txt = document.createTextNode(cad[i]);
		node.appendChild(txt);
		node.className="skill";

		document.getElementById("cad").appendChild(node);
	}
	for(var i = 0; i < rit.length; i++) {
		var node = document.createElement("span");
		var txt = document.createTextNode(rit[i]);
		node.appendChild(txt);
		node.className="skill";

		document.getElementById("rit").appendChild(node);
	}
	for(var i = 0; i < asmara.length; i++) {
		var node = document.createElement("span");
		var txt = document.createTextNode(asmara[i]);
		node.appendChild(txt);
		node.className="skill";

		document.getElementById("asmara").appendChild(node);
	}
	for(var i = 0; i < workflow.length; i++) {
		var node = document.createElement("span");
		var txt = document.createTextNode(workflow[i]);
		node.appendChild(txt);
		node.className="skill";

		document.getElementById("workflow").appendChild(node);
	}
	
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
    }, 500);
});
$("#nav-about").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#about").offset().top
    }, 500);
});
$("#nav-work").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#work").offset().top
    }, 500);
});
$("#nav-projects").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#projects").offset().top
    }, 500);
});