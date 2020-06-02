function date() {
	var week = new Array('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
	var maand = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');
	var vandaag = new Date();
	var dag = week[vandaag.getDay() - 1];
	var datumvandaag =
		'Today it is: ' +
		(dag == null ? 'Sunday' : dag) +
		' ' +
		vandaag.getDate() +
		' ' +
		maand[vandaag.getMonth()] +
		' ' +
		vandaag.getFullYear();
	document.getElementById('date').innerHTML = datumvandaag;
}
function startTime() {
	// initialiseer (maak variabelen aan)
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	//add een 0 voor elke minuut en seconde en uur wanner ze onder het getal 10 zijn
	h = checkTime(h);
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('time').innerHTML = h + ':' + m + ':' + s;
	//update elke 500 ms.
	setTimeout(startTime, 500);
}
function checkTime(i) {
	if (i < 10) {
		i = '0' + i;
	} // add zeros to numbers that are less then 10
	return i;
}
