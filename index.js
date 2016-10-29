var moods = [
"Happy",
"Turnt",
"Chill",
"Confident"
];

$('.navbar-right').click(function(){
	for (var i = 0; i < 4; i = i + 1) {
	$('#playlist').append('<p>' + moods[i] + '</p>');
	}
})


