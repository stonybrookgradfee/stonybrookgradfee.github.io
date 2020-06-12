function makeSlider(){
	if (!(document.getElementById("admins").value == "choose")){
		var adminSalaries = {rick:318197, marisa:222800, kathy:414845, kristina:662516};
		var fees = 2248;

		var salary = adminSalaries[document.getElementById("admins").value];
		
		var slider = document.getElementById("slider");
		slider.max = salary;
		slider.value = salary;
		document.getElementById("cut").innerHTML = "<p><strong>Salary:</strong> $" + salary + "</p><p><strong>Dollars cut:</strong> $0</p><p><strong>Grad students' fees paid:</strong> 0</p>";
		slider.oninput = function (){
			document.getElementById("cut").innerHTML = "<p><strong>Salary:</strong> $" + this.value + "</p><p><strong>Dollars cut:</strong> $" + (salary - this.value) + "</p><p><strong>Grad students' fees paid:</strong> " + Math.round((salary - this.value) / fees) + "</p>";
		}
	} else {
		var slider = document.getElementById("slider");
		slider.max = 0;
		slider.value = 0;
		document.getElementById("cut").innerHTML = "";
	}
}