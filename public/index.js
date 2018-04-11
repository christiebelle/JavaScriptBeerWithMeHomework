const app = function(){

    const api = "https://api.punkapi.com/v2/beers";
    makeRequest(api, requestComplete);
};

window.addEventListener('load', app);
