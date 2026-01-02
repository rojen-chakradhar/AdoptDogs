let loader = document.querySelector("#loader");
setTimeout(() => {
	loader.style.top = "-100dvh";
}, 1000);

function show() {
	let overlay =  document.querySelector("#overlay");
	let notification =  document.querySelector("#notification");
	overlay.style.display = "block";
	notification.style.display = "flex";
}

function hide() {
	let overlay =  document.querySelector("#overlay");
	let notification =  document.querySelector("#notification");
	overlay.style.display = "none";
	notification.style.display = "none";
}

function edit() {
	let editPage =  document.querySelector("#profile-edit");
	let showPage =  document.querySelector("#profile-show");
	editPage.style.display = "flex";
	showPage.style.display = "none";
}

function back() {
	let editPage =  document.querySelector("#profile-edit");
	let showPage =  document.querySelector("#profile-show");
	editPage.style.display = "none";
	showPage.style.display = "flex";
}

function save() {
	let toast = document.querySelector("#toast");
	back();
	setTimeout(() => {
		toast.style.right = "10px";
	}, 500);
	setTimeout(() => {
		toast.style.right = "-500px";
	}, 3000);
}