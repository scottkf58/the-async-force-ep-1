function requestHelper(link, div) {
  var newReq = new XMLHttpRequest();
  newReq.addEventListener("load", div);
  newReq.open("GET", link);
  newReq.send();
}


function personFour() {
  var personObject = JSON.parse(this.responseText);
  document.getElementById("person4Name").innerHTML = personObject.name;

  function homeRequest() {
  var homeWorldObject = JSON.parse(this.responseText);
  document.getElementById("person4HomeWorld").innerHTML = homeWorldObject.name;
  }
  requestHelper(personObject.homeworld, homeRequest);
}

function personFourteen() {
  var personObject = JSON.parse(this.responseText);
  document.getElementById("person14Name").innerHTML = personObject.name;

  function speciesRequest() {
    var speciesObject = JSON.parse(this.responseText);
    document.getElementById("person14Species").innerHTML = speciesObject.name;
  }
  requestHelper(personObject.species, speciesRequest);
}

requestHelper("http://swapi.co/api/people/4/", personFour);
requestHelper("http://swapi.co/api/people/14/", personFourteen);




var filmList = document.getElementById("filmList");

function getFilms(){
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener4);
  oReq.open("GET", "http://swapi.co/api/films/");
  oReq.send();
}

function reqListener4(){
  var response = JSON.parse(this.responseText);

  for(var i = 0, len = response.results.length; i < len; i++) {

    var filmContainer = document.createElement("li");
    filmContainer.className = "film";
    filmList.appendChild(filmContainer);

    var filmTitle = document.createElement("h2");
    filmTitle.innerHTML = response.results[i].title;
    filmContainer.appendChild(filmTitle);

    var planetHeading = document.createElement("h3");
    filmContainer.appendChild(planetHeading);

    var filmPlanetsContainer = document.createElement("ul");
    filmContainer.appendChild(filmPlanetsContainer);

    for(var p = 0; p < response.results[i].planets.length; p++){

      (function(myPlanets){

       var pReq = new XMLHttpRequest();
       pReq.addEventListener("load", function(){
        var pRes = JSON.parse(this.responseText);
        var planetListItemContainer = document.createElement("li");

        var planetTitleHeading = document.createElement("h4");
        planetTitleHeading.innerHTML = pRes.name;

        planetListItemContainer.appendChild(planetTitleHeading);
        myPlanets.appendChild(planetListItemContainer);

        });

        pReq.open("GET", response.results[i].planets[p]);
        pReq.send();

     })(filmPlanetsContainer);

    }
  }
}

getFilms();





