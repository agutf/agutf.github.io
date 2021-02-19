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
                for (i = 0; i < publications.length; i++) {
                    publication = publications[i].split('\n');
                    var h3 = document.createElement("H3");
                    h3.innerHTML = publication[0];
                    publicationsSpace.append(h3);
                }
            }
        }
    }
}

window.onload = function() {
    getPapers();
};