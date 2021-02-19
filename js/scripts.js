function getPapers(){
    var request = new XMLHttpRequest();
    request.open('GET', 'papers.txt', true);
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var type = request.getResponseHeader('Content-Type');
            if (type.indexOf("text") !== 1) {
                return request.responseText;
            }
        }
    }
}

function populatePublications(){
    
    var publications = getPapers();
    publications = publications.split('\n\n');
    
    var publicationsSpace = document.getElementById("publications");
// Create an empty <tr> element and add it to the 1st position of the table:

    var publication;

    var i;
    for (i = 0; i < publications.length; i++) {
        publication = publications[i].split('\n');
        var h3 = document.createElement("H3");
        h3.innerHTML = publication[0];
        publicationsSpace.append(h3);
    }
}

window.onload = function() {
    populatePublications();
};