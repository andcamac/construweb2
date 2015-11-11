$(document).ready(function(){


	
	$.getJSON("/json/json/assets/json/news.json",function(data){


		
		$.each(data.news,function(key,val){
		
		$('#title').append('<li>' + val.titles + "</li>");
		
		$('#date').append('<li>' + val.date + '</li>');

		$('#description').append('<li>' + val.description + '</li>');

		$('#image').append("<img src=" + val.image + " >");


		});



	



	});	







	


$(document).ready(function(date){

var date = new Date();
var n = date.toDateString();
var time = date.toLocaleTimeString();

document.getElementById('fecha').innerHTML = n + ' ' + time;
});






});




	


