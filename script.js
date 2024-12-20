const accessKey = "zEvVrMzy1tpNWz4scPMsvugucB0hX45FSsQ1ZAQqJ24";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResults = document.getElementById("search-results");
const searchBtn = document.getElementById("show-more-btn");


let keyword = "";
let page = 1;   

async function searchImages() {
  keyword = searchBox.value;
  const url =`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;

  const response = await fetch(url);
  const data = await response.json();

  const results = data.results;

  results.map((results => {
    const image = document.createElement("img");
    image.src = results.urls.regular;
    const imageLink = document.createElement("a");
    imageLink.href = results.links.html;
  }))

}


searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});