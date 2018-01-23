function generate(){
	dateElement=document.getElementById("date");
	date=new Date(dateElement.value);
	date.setDate(date.getDate() + 1);
	document.getElementById("demo").innerHTML=+date.getDate()
}