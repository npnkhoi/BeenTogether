var start = new Date(2018, 11, 24, 18, 30, 0, 0);
function clock() {
	try {
		var cur, diff;
		
		var str = "";
		cur = new Date();
		diff = cur.getTime() - start.getTime();

		diff = Math.floor(diff/1000);
		second = diff % 60;
		diff = Math.floor(diff/60);
		minute = diff % 60;
		diff = Math.floor(diff/60);
		hour = diff % 24;
		diff = Math.floor(diff/24);
		day = diff;
		// console.log(day, hour, minute, second);

		str = plural(day, "day") + "\n" + plural(hour, "hour") 
		+ "\n" + plural(minute, "minute") + "\n" 
		+ plural(second, "second"); 
		// console.log(str);

		// console.log(document.getElementById("clock"));
		document.getElementById("clock").innerHTML = str;
		setTimeout(clock, 1000);
	}
	catch (err) {
		console.log(err.message);
	}
	function plural(num, unit) {
		if (num > 1) return num.toString() + " " + unit + "s";
		else return num.toString() + " " + unit;
	}
}

window.onload = clock();