var languages = [["Java",5],["HTML/CSS",5],["Javascript", 5],["SQL",5],["MongoDB",5],["PHP",4],["JQuery",4],["Bootstrap",4],["Python",3],["React.js",3],["Swift",3],["Kotlin",3],["C#",3],["Neo4j",3],["Powershell",2]];
var software = [["Windows",5],["Mac",5],["Linux",3],["Adobe Creative Suite",5],["Microsoft Office Suite",5],["Visual Studio",4],["XCode",3],["Android Studio",3],["ArcMap", 3],["GitHub",5]];

$(document).ready(function() {
	$(window).resize(function() {
		var bodyheight = $(this).height();
		$(".header").height(bodyheight);
	}).resize();
});
$(document).ready(function() {
	for(var i = 0; i < languages.length; i++) {
		var node = document.createElement("P");
		var txt = document.createTextNode(languages[i][0]);
		node.appendChild(txt);

		for(var j = 0; j < languages[i][1]; j++) {
			var img = document.createElement("IMG");
			img.src = "star.png";
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
			img.src = "star.png";
			node.appendChild(img);
		}
		document.getElementById("software-os-list").appendChild(node);
	}
});