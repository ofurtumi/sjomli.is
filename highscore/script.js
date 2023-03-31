let fetch_data = async () => {
	let temp = await fetch(`https://greining-highscore.onrender.com`, {});
	return await temp.json();
};

async function main() {
	let data = await fetch_data();

	let main = document.querySelector("body");

	let html_string = "";

	console.log(data);

	for (const [i, score] of data.entries()) {
		html_string += `<section><h1>leikur nr: ${i}</h1>`;
		html_string += `<ol>`;
		score.forEach((player) => {
			if (player.includes("Random")) {
				html_string += `<li style="color: red">${player.substring(
					4,
					player.length - 5
				)}</li>`;
			} else {
				html_string += player;
			}
		});
		html_string += `</ol></section>`;
	}
	main.innerHTML = html_string;
}

main();
