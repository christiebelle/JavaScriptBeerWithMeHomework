const app = function(){

    const api = "https://api.punkapi.com/v2/beers";
    makeRequest(api, requestComplete);
};

window.addEventListener('load', app);

const makeRequest = function(api, callback){
  const request = new XMLHttpRequest();
  //open up a request.
  request.open("GET", api);
  //say what you want to do when we get a response.
  request.addEventListener("load", callback)
  //tell it to run.
  request.send();
};

const requestComplete = function(){
  if(this.status !== 200) return;
    const jsonString = this.responseText;
    const beers = JSON.parse(jsonString);
    displayBeers(beers);
};

const displayBeers = function(beers){
  const ul = document.querySelector("#beer-list");
  for(beer of beers){
    const li = document.createElement('li');
    const img = document.createElement('img');
    li.innerText = beer.name;
    img.src = beer.image_url;
    li.appendChild(img);
    ul.appendChild(li);
  };
};
