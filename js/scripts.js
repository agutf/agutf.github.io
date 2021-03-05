function getPapers(){
    var request = new XMLHttpRequest();
    request.open('GET', 'papers.txt', true);
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var type = request.getResponseHeader('Content-Type');
            if (type.indexOf("text") !== 1) {

                publications = request.responseText.split('\n\n');
    
                var publicationsSpace = document.getElementById("publications");

                var publication;

                var i;
                for (i = publications.length - 1; i >=0; i--) {
                    publication = publications[i].split('\n');

                    var publicationTitle = document.createElement("H4");
                    var publicationAuthors = document.createElement("p");
                    var publicationDOI = document.createElement("a");

                    publicationDOI.setAttribute("href", publication[2]);
                    publicationDOI.setAttribute("target", "_blank")

                    publicationDOI.innerHTML = "&#8594; " + publication[0];
                    
                    publicationTitle.append(publicationDOI);
                    publicationAuthors.innerHTML = publication[1];

                    publicationsSpace.append(publicationTitle);
                    publicationsSpace.append(publicationAuthors);
                }
            }
        }
    }
}

window.onload = function() {
    getPapers();
};