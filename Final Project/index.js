var moods = [
"Happy",
"Turnt",
"Chill",
"Confident"
];

$('#playlist').click(function(){
	for (var i = 0; i < 4; i = i + 1) {
	$('#playlist').append('<p>' + moods[i] + '</p>');
	}
})



