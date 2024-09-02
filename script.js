document.addEventListener("DOMContentLoaded", function (event) {
	const result = document.getElementById('result');
	result.style.width = "40rem";
	result.style.margin = "0 auto";

	function showPosts() {
		
		fetch(`https://jsonplaceholder.typicode.com/posts`)
			.then(response => response.json())
			.then((data) => {
				data.forEach(item => {
					const title = document.createElement('h3');
					title.textContent = `Заголовок: ${item.title}`
					title.style.color = "red";
					result.appendChild(title);
					const text = document.createElement('p');
					text.textContent = ` Cтатья: ${item.body}`
					title.after(text);
				})
			})
			.catch((error) => {
               result.textContent = `Ошибка: ${error}`
               result.style.color = "red";
               result.style.marginTop = "16rem";
               result.style.fontSize = "1.6rem";
               result.style.textAlign = "center"
               
              })
	}
	
	showPosts();
})

