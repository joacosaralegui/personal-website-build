
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
    "body": "                                                                                               風立ちぬ / Se levanta el viento (Hayao Miyazaki)              :        “Airplanes are beautiful, cursed dreams”— Caproni:                                                                     Recomendaciones                                                                                   Peliculas                                              23 Jan 2022        &lt;/span&gt;                                                                                                                   Placeholder              :       Placeholder text for my first postMore text:                                                                     Escritos                            Recomendaciones                                                                                   Peliculas                                              21 Jan 2022        &lt;/span&gt;                        "
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
    "url": "https://joacosaralegui.ar/the-wind-rises/",
    "title": "風立ちぬ / Se levanta el viento (Hayao Miyazaki)",
    "body": "2022/01/23 -  “Airplanes are beautiful, cursed dreams”— Caproni El sueño de un chico que se mantiene inocente y esperanzado en una película que usa la muerte como telón para pintar. Los aviones de guerra, las enfermendades incurables, los desastres naturales, los accidentes, todos acechan desde el fondo; sobran sucesos oscuros y preguntas morales super dificiles y aún así lo que me habla de esta película aparentemente no tiene nada que ver con eso. De chico amaba cuando familiares o amigos venían a dormir porque podía dormir en el colchón. Me gustaba andar en patas a las corridas por la casa, saltar la escalera y trepar las barandas y armar fuertes con almohadones y sabanas en los sillones. Cuando estaba aburrido armaba aviones de papel con las hojas del cuaderno del colegio, o sacaba los playmobil al patio y armaba ciudades e historias. Y de todas estas cosas me acuerdo, pero lo que no puedo es revivir el sentimiento de aventura, el asombro y la sorpresa de cada descubrimiento, la inocencia con la que me enamoraba de mis compañeras o los juegos que inventabamos con mis amigos. La vida te saca eso en algún momento, quieras o no.  Jiro, el personaje principal de esta peli, parece nunca vivir ese quiebre. El sueño de hacer aviones es el cordón que guía su vida y a pesar de los eventos trágicos que suceden a su alrededor, él nunca cambia. Su sueño sigue siendo su sueño hasta el final y todo lo demás es secundario. Jiro contempla la guerra, la pobreza y el amor y se involucra con todos, pero aún así uno no puede dejar de tener la impresión de que todo eso carece de importancia comparado con su trabajo. Jiro guarda en una burbuja de inocencia su sueño infantil en un mundo de adultos en guerra, y la sigue hasta el final. La fotogorafía de la película es hermosa, los colores, la animación, lo de siempre con Studio Ghibli. Después hay escenas que son simplemente perlitas. El encuentro con Naoko en el tren, o el momento donde los agarra la lluvia en el campo, que querés que te diga, soy un sensible.  Leí por algun lado que Miyazaki se sentía representado por Jiro. Quizás el hacer películas es algo que no puede abandonar y que le costó muchas cosas en su vida. Quizás a eso se refiere cuando habla de sueños hermosos, pero malditos. Al final eso es lo que más me llevo de la película: la idea que hay cosas que pueden ser nobles, inocentes y hermosas y a la vez terribles y destructivas, y ver así la vida es quizás la manera más honesta. Ese es el mejor resumen que puedo hacer: es una película honesta, hermosa y sencilla y en algunos momentos, difícil.  “Tell me Japanese Boy. Is the wind still rising?” — Caproni "
    }, {
    "id": 10,
    "url": "https://joacosaralegui.ar/first/",
    "title": "Placeholder",
    "body": "2022/01/21 - Placeholder text for my first post More text "
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