function generate(){
	const monthNames = ["January", "February", "March", "April", "May", "June",
	"July", "August", "September", "October", "November", "December"
	];
	dateElement=document.getElementById("date");
	ndays=+document.getElementById("ndays").value;
	date=new Date(dateElement.value);
	date.setDate(date.getDate() + 1);
	month=date.getMonth();
	tomorrow=new Date();
	var calendar = document.getElementById("calendar");
	while (calendar.firstChild) {
	    calendar.removeChild(calendar.firstChild);

	}
	calendar.insertAdjacentHTML('beforeend', '<div class="row"></div>')
	child=document.getElementById('calendar').lastChild;
	child.insertAdjacentHTML('beforeend', '<div class="col 2">'+monthNames[month]+"</div>");
	calendar.insertAdjacentHTML('beforeend', '<div class="row"></div>')
	generateCalendar(date);

	for(i=0;i<ndays;i++){

		month=date.getMonth();
		dateN=date.getDate();
		day=date.getDay();
		child=document.getElementById('calendar').lastChild;

		if(day==0||day==6){
			child.insertAdjacentHTML('beforeend', '<div class="col 2 orange lighten-4">'+dateN+"</div>");
		}else{
			child.insertAdjacentHTML('beforeend', '<div class="col 2 green accent-2">'+dateN+"</div>");
		}

		var d1 = document.getElementById('calendar');


		if(day==6){
			calendar.insertAdjacentHTML('beforeend', '<div class="row"></div>')
		}


		tomorrow.setDate(date.getDate() + 1);
		monthTomorrow=tomorrow.getMonth();
		if(monthTomorrow!=month) {
			calendar.insertAdjacentHTML('beforeend', '<div class="row"></div>')

			child=document.getElementById('calendar').lastChild;
			child.insertAdjacentHTML('beforeend', '<div class="col 2">'+monthNames[monthTomorrow]+"</div>");
			calendar.insertAdjacentHTML('beforeend', '<div class="row"></div>')
			generateCalendar(tomorrow);

		}
		date.setDate(date.getDate() +1);
	}
}


function generateCalendar(date){
	const DayN = ['S','M','T','W','T','F','S'];

	child=document.getElementById('calendar').lastChild;
	console.log(child);
	for(i=0;i<7;i++){
		calendar=document.getElementById('calendar');
		child.insertAdjacentHTML('beforeend', '<div class="col 2">'+DayN[i]+"</div>");
	}
	calendar.insertAdjacentHTML('beforeend', '<div class="row"></div>')
	week=(+date.getDay());
	if(week>0){

		for(j=0;j<week;j++){
			child=document.getElementById('calendar').lastChild;
		child.insertAdjacentHTML('beforeend', '<div class="col 2  grey lighten-5">'+'-' +"</div>");
		}

	}

}