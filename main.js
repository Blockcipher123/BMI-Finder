var height = document.querySelector('#height').innerText;
var weight = document.querySelector('#weight').innerText;



function calculate(height,weight) {
	var new_height = document.querySelector('#height').value;
	var new_weight = document.querySelector('#weight').value;

	var sqr_height = new_height*new_height;
	var bmi = new_weight/sqr_height;
	var ans = Math.round(bmi*10)/10;
	// var fd = ans+' kg'
	var rem = document.querySelector('#ans').innerHTML = ans;

	let result = document.querySelector('#ans')


	if (isNaN(ans)){
		$('#ans').css('display','none');
		// console.log(fd);
	}else{
		// fd = rem+' kg/m2';
		$('#ans').css('display','initial');
		$('span').css('display','initial');
		// return rem;
		return rem;
		// console.log(rem);

	}

}

calculate(height,weight);


// console.log(rem);