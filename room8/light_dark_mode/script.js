   var clk = document.getElementById('btnViewMode');
   clk.addEventListener("click", viewModeChange);

   var body = document.getElementById("body")
   var img = document.getElementById("img")
   var btn = document.getElementsByClassName("btn")
function viewModeChange() {

	switch (clk.value) {
	
		case "light":
			clk.value = "dark";
			for (let i = 0; i < btn.length; i++) {
				btn[i].value = "dark";
			}
			img.src ="lmicon.jfif";
			body.style.backgroundColor  = "#4E545C";
			console.log("Dark mode!");
			break;
			
		case "dark":
			clk.value = "light";
			for (let i = 0; i < btn.length; i++) {
				btn[i].value = "light";
			}
			img.src="dmicon.jfif";
			body.style.backgroundColor = "aliceblue";
			console.log("Light mode!");
			break;
	
		default:
			console.log("Switch failed :(");
			break;
	}
}

localStorage.setItem("mode", value)