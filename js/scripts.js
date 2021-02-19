function getPapers(){
    var request = new XMLHttpRequest();
    request.open('GET', 'papers.txt', true);
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var type = request.getResponseHeader('Content-Type');
            if (type.indexOf("text") !== 1) {
                console.log(request.responseText);
                return request.responseText;
            }
        }
    }
}

window.onload = function() {
    getPapers();
};