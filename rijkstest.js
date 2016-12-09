// search the collection using a JSON call
      function search(query) {
        return $.getJSON("https://www.rijksmuseum.nl/api/nl/collection?q=Q&key=eBvLLJik&format=json".replace("Q", query));
      }


var searchBtn = document.getElementById("search");
searchBtn.addEventListener("click", doSearch);

var resultD = document.getElementById("result");
var searchField = document.getElementById("query");

function doSearch() {
    resultD.innerHTML = "";
    var searchString = searchField.value;
    if (searchString !== "") {
         search(searchString).done(function(data) {
            for (let artObj in data.artObjects) {
                var rImg = document.createElement("img");
                rImg.src = data.artObjects[artObj].webImage.url;
                resultD.appendChild(rImg);
                resultD.innerHTML += data.artObjects[artObj].title;
                resultD.innerHTML += "<br>&nbsp;<br>&nbsp;<br>&nbsp;<br>";
            }
        });
    }
}