let urlBasic = "https://animechan.xyz/api/random";
let blockQuote = document.querySelector(".blockquote");
let changeQuote = document.querySelector(".change__quote")
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (response.status === 404) {
      throw new Error("Page not found");
    } else if (response.status === 500) {
      throw new Error("Server error");
    } else if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    printData(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData(urlBasic)

function printData(url) {
  let { anime, character, quote } = url;
  blockQuote.innerHTML = `
    <h1>${quote}</h1>
   <h4>&mdash;${character}<br><em>Anime: ${anime}</em></h4>
    `;
}
changeQuote.addEventListener("click",()=>{
    fetchData(urlBasic)
})