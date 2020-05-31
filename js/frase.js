var random= Math.random();
    var frase = ["El 7 a 0 no se olvida más","La vida por los colores","El único campeón de la ciudad "];   
    if (random >0 && random < 0.33){
            $(".frases").append("<p>"+frase[0]+"</p><br>")
        }else if(random >0.33 && random < 0.66){

            $(".frases").append("<p>"+frase[1]+"</p><br>")
        }else if (random >0.66 && random < 0.99) {
            $(".frases").append("<p>"+frase[2]+"</p><br>")
        }