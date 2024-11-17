$(document).ready(function () {
    // LIMPIANDO LA PANTALLA
    $(".pantalla").text("")
    
    // EVENTO DEL CLICK DEL MOUSE EN LOS BOTONES 
    $(".boton").click(function (e) { 
        e.preventDefault();
        boton = $(this).text()
        pantalla = $(".pantalla").text()

        // console.log("Estas presionando un boton")
        
        if((boton >= 0 && boton <= 9) || boton=="."){
            // ! EVENTO DE NUMEROS
            if(pantalla == "0" && boton == 0){
            }else if((pantalla == "." || pantalla.indexOf(".") != -1) && boton == "."){
            }else{
                $(".pantalla").text(pantalla + boton)
            }
        }else{
            // ! EVENTO DE OPERACIONES
            if(boton == "C"){
                $(".pantalla").text("")
            }else if(boton == "DEL" &&  pantalla != ""){
                $(".pantalla").text(pantalla.slice(0, -1));
            }else if(boton == "=" && pantalla != ""){
                $(".pantalla").text(eval(pantalla))
            }else{
                $(".pantalla").text(pantalla+boton)
            }
        }
    });

    console.log(eval("2+2"))
});