
var documents = [{
    "id": 0,
    "url": "https://joacosaralegui.ar/404.html",
    "title": "404",
    "body": "404 Page not found!Please use the search bar from the bottom left or visit our homepage! "
    }, {
    "id": 1,
    "url": "https://joacosaralegui.ar/about",
    "title": "Memoirs, a free minimalist Jekyll blogging theme with modern design",
    "body": "This website is a demonstration to see Memoirs Jekyll theme in action. The theme is compatible with Github pages, in fact even this demo itself is created with Github Pages and hosted with Github.  Get Memoirs for Jekyll → "
    }, {
    "id": 2,
    "url": "https://joacosaralegui.ar/contacto",
    "title": "Contacto",
    "body": "                                           Joaco Saralegui:         Acá empieza la primera mentira. Soy Ingeniero en Sistemas, hincha de Racing, amateur del arte y mochilero. Siempre estoy interesado en hacer amigos así que si algo de esto te gusto no dudes en escribirme.                                                                                                                                                                 "
    }, {
    "id": 3,
    "url": "https://joacosaralegui.ar/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 4,
    "url": "https://joacosaralegui.ar/contact",
    "title": "Contact",
    "body": "  Please send your message to Joaco. We will reply as soon as possible!   "
    }, {
    "id": 5,
    "url": "https://joacosaralegui.ar/",
    "title": "Home",
    "body": "                                                                                               Placeholder              :       Placeholder:                                                                     Escritos                            Recomendaciones                                                                                   Peliculas                                              21 Jan 2022        &lt;/span&gt;                        "
    }, {
    "id": 6,
    "url": "https://joacosaralegui.ar/escritos/",
    "title": "Escritos",
    "body": ""
    }, {
    "id": 7,
    "url": "https://joacosaralegui.ar/recomendaciones/",
    "title": "Recomendaciones",
    "body": ""
    }, {
    "id": 8,
    "url": "https://joacosaralegui.ar/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 9,
    "url": "https://joacosaralegui.ar/first/",
    "title": "Placeholder",
    "body": "2022/01/21 - Placeholder "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><small><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});