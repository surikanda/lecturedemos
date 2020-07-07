let button = document.getElementById("button");
button.onclick = makeAsynchronousRequestToWebserver("https://www.msn.com/", updateDom);

function makeAsynchronousRequestToWebserver(url, callback) { // can pass in more args
  let request = new XMLHttpRequest();
  request.callback = callback;
  //request.arguments = Array.prototype.slice.call(arguments, 2);
  request.onload = function() {
    this.callback.apply(this, this.arguments); 
  }
  request.onerror = function() { 
    console.error(this.statusText); 
  };
  request.open("GET", url, true);
  request.send(null);
}


function updateDom(request) {
    let someValue1;
    let someValue2;
    let someValue3;
    if(request == someValue1) {
        document.writeln("manipulation 1")
    }

    if(request == someValue2) {
        document.writeln("manipulation 2")
    }

    if(request == someValue3) {
        document.writeln("manipulation 2")
    }
}


