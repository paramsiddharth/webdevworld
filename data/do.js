const u = document.getElementById('time');

const y = () => {
	let a = new Date();
	u.innerHTML = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
}

setInterval(y,100);