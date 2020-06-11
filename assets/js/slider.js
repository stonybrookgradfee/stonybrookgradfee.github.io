function makeSlider(){
	if (!(document.getElementById("admins").value == "choose")){
		var adminSalaries = {rick:318197, marisa:222800, kathy:414845, kristina:662516};
		var fees = 2248;

		var salary = adminSalaries[document.getElementById("admins").value];
		
		var slider = document.getElementById("slider");
		slider.max = salary;
		slider.value = salary;
		document.getElementById("cut").innerHTML = "<p>Salary: $" + salary + "</p><p>Dollars cut: $0</p><p>Grad students' fees paid: 0</p>";
		slider.oninput = function (){
			document.getElementById("cut").innerHTML = "<p>Salary: $" + this.value + "</p><p>Dollars cut: $" + (salary - this.value) + "</p><p>Grad students' fees paid: " + Math.round((salary - this.value) / fees) + "</p>";
		}
	} else {
		var slider = document.getElementById("slider");
		slider.max = 0;
		slider.value = 0;
		document.getElementById("cut").innerHTML = "";
	}
}