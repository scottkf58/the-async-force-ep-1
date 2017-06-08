function requestHelper(link, listener) {
  var newReq = new XMLHttpRequest();
  newReq.addEventListener("load", listener);
  newReq.open("GET", link);
  newReq.send();
}


function personFour() {
  var personObject = JSON.parse(this.responseText);
  document.getElementById("person4Name").innerHTML = personObject.name;

}

requestHelper("http://swapi.co/api/people/4/", personFour);
