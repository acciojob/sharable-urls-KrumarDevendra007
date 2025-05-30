// your code here.



const updateUrl = () => {

const urlInput = document.getElementById("url");
const nameInput = document.getElementById("name").value;
const yearInput = document.getElementById("year").value;
	
urlInput.innerText = `https://localhost:8080/?name=${nameInput}&year=${yearInput}`
}
