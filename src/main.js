function displayTiles(data) {
    var categories = data.categories;
    var category = categories[0];
    var categoryItems = category.items;
    var postersDiv = document.getElementById("posters");
  
    for (var i = 0; i < categoryItems.length; i++) {
      var contentItem = categoryItems[i];
      var itemContainer = document.createElement("div");
      console.log(contentItem);
      var contentName = contentItem.name;
      var heading = document.createElement("h3");
      heading.innerHTML = contentName;
      itemContainer.appendChild(heading);
      var contentImg = document.createElement("img");
      contentImg.src = contentItem.covers[1].url;
      itemContainer.appendChild(contentImg);
      postersDiv.appendChild(itemContainer);
    }
  }
  
  var req = new XMLHttpRequest();
  req.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      var results = JSON.parse(req.response);
      displayTiles(results);
    }
  };
  req.open("GET", "src/apiData.json");
  req.setRequestHeader("Content-Type", "application/json");
  req.send();
  