let url = 'https://api.giphy.com/v1/gifs/random?api_key=QHlfoGUDh5HOBWOBvtK7FYluLTmJGoAg&tag=funny';
let div = document.querySelector("div")
let btn = document.querySelector("button")

let generateImage = () => {
    div.innerHTML = "Loading...";
    async function fetchData(url) {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error("Fetch failed:", error);
            throw error;
        }
    }

    function showImg(url) {
        div.innerHTML = "";
        let img = document.createElement("img")
        img.setAttribute("src", url);
        div.appendChild(img);
    }

    fetchData(url)
        .then(res => showImg(res.data.images["original"].url))
        .catch(err => console.error(err));
}

btn.addEventListener("click", generateImage)

generateImage();