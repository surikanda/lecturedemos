let button = document.getElementById("button");
button.onclick = makeAsynchronousRequestToWebserver;



function createXmlHttpRequest() {
    let request;
    try { // Opera 8.0+, Firefox, Safari
        request = new XMLHttpRequest();
    } catch(someError) {
        try { // Internet Explorer Browser
            request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch(someError) {
            try {
                request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch(someError) {
                alert("Download a better browser");
            }
        }
    }
    return request;
}


function configureXmlHttpRequest(request) {
    request.onreadystatechange = function() {
        // request finished and response is ready
        if(request.readyState == 4) {
            updateDom(request);
        }
    }
    console.log("onreadystatechange calls the callback() function is = " + request.onreadystatechange)
    console.log("The readyState at this point is = " + request.readyState);
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


function makeAsynchronousRequestToWebserver() {
    let request = createXmlHttpRequest();
    configureXmlHttpRequest(request);
    request.open("GET", "https://www.msn.com/", false);
    let response = request.send(null);
    console.log(response);
}


async function makeAsynchronousRequestToWebserver() {
    let request = await createXmlHttpRequest();
    configureXmlHttpRequest(request);
    request.open("GET", "https://www.msn.com/" );
    let response = request.send(null);
    console.log(response);
}