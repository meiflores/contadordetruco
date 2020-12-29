$(document).ready(function () {

    /* Boton iniciar me cambia de pantalla y asigna los nombres de los equipos*/

    var nombreEquipo1;
    var nombreEquipo2;

    $('#botonInicio input').on('click', function () {
        nombreEquipo1 = $('#equipo1 .inputEquipo').val();
        if (nombreEquipo1 == '') {
            nombreEquipo1 = 'Equipo 1'
        }
        $('#div1Izquierdo .nombreEquipo p').text(nombreEquipo1);
        nombreEquipo2 = $('#equipo2 .inputEquipo').val();
        if (nombreEquipo2 == '') {
            nombreEquipo2 = 'Equipo 2'
        }
        $('#div1Derecho .nombreEquipo p').text(nombreEquipo2);
        $('#pantallaPartida').show();
        $('#pantallaInicio').hide();
    })

    /* Botones a 24/30 establecen el tipo de partida y cambian el texto en pantalla partida*/

    var puntajeMaximo = 30;

    $('#botonA24').on('click', function () {
        $('#botonA24').removeClass('botonInactivo manito').addClass('botonActivo');
        $('#botonA30').removeClass('botonActivo').addClass('botonInactivo manito');
        $('#div4 p').text('PARTIDA A 24 PUNTOS');
        puntajeMaximo = 24;
    })

    $('#botonA30').on('click', function () {
        $('#botonA30').removeClass('botonInactivo manito').addClass('botonActivo');
        $('#botonA24').removeClass('botonActivo').addClass('botonInactivo manito');
        $('#div4 p').text('PARTIDA A 30 PUNTOS');
        puntajeMaximo = 30;
    })

    /* Botones clásico/galactico establecen estilo de partida */

    var estiloPartida = 'Clásica';

    $('#botonClasico').on('click', function () {
        $('#botonClasico').removeClass('botonInactivo manito').addClass('botonActivo');
        $('#botonGalactico').removeClass('botonActivo').addClass('botonInactivo manito');
        estiloPartida = 'Clásica';
        $('#pantallaPartida').removeClass('estiloGalactico');
        $('#div2').css('background-color', '#68A597');
        $('#div3').css('background-color', '#68A597');
        $('#div4').css('background-color', '#C46970');
        $('.botonMas, .botonMenos').css('background-color', '#C46970').css('color', '#DCE398');
        $('#div1, #div5').css('background-color', '#F9C2B3').css('color', '#000000');
        $('#botonFin input').css({
            'background-color': '#68A597',
            'border': 'none',
            'color': '#DCE398',

        })
    })

    $('#botonGalactico').on('click', function () {
        $('#botonGalactico').removeClass('botonInactivo manito').addClass('botonActivo');
        $('#botonClasico').removeClass('botonActivo').addClass('botonInactivo manito');
        $('#pantallaPartida').addClass('estiloGalactico');
        $('#div2').css('background-color', 'transparent');
        $('#div3').css('background-color', 'transparent');
        estiloPartida = 'Galáctica';
        $('#div4, .botonMas, .botonMenos').css('background-color', '#FFE81F').css('color', '#000000');
        $('#div1, #div5').css('background-color', '#000000').css('color', '#FFE81F');
        $('#botonFin input').css({
            'background-color': '#000000',
            'border': 'solid 2px #FFE81F',
            'color': '#FFE81F',
        });
        $('#div1').addClass('iluminacionGalactica');



    })


    /* Boton + me suma de a un punto entre 0 y 24/30 dependiendo de la partida seleccionada*/

    var puntajeEquipo1 = 0;
    var puntajeEquipo2 = 0;

    $('#div1Izquierdo .cambioDePuntos .botonMas').on('click', function () {
        if (puntajeEquipo1 < puntajeMaximo) {
            puntajeEquipo1++;
            $('#div5 #puntajeIzquierdo p').text(puntajeEquipo1);
            mostrarFosforos('equipo1');
        }

    })

    $('#div1Izquierdo .cambioDePuntos .botonMenos').on('click', function () {
        if (puntajeEquipo1 > 0) {
            puntajeEquipo1--;
            $('#div5 #puntajeIzquierdo p').text(puntajeEquipo1);
            mostrarFosforos('equipo1')
        }

    })

    $('#div1Derecho .cambioDePuntos .botonMas').on('click', function () {
        if (puntajeEquipo2 < puntajeMaximo) {
            puntajeEquipo2++;
            $('#div5 #puntajeDerecho p').text(puntajeEquipo2);
            mostrarFosforos('equipo2');
        }

    })

    $('#div1Derecho .cambioDePuntos .botonMenos').on('click', function () {
        if (puntajeEquipo2 > 0) {
            puntajeEquipo2--;
            $('#div5 #puntajeDerecho p').text(puntajeEquipo2);
            mostrarFosforos('equipo2');
        }

    })


    /* Mostrar fósforos de acuerdo a los puntos*/
    function mostrarFosforos(equipo) {
        var puntajeEquipo;
        var indicadorEquipo;
        var rutaImagen;


        if (estiloPartida == 'Clásica') {
            rutaImagen = 'img/fosforos/';
        } else {
            rutaImagen = 'img/lightSabers/';
        }

        if (equipo == 'equipo1') {
            puntajeEquipo = puntajeEquipo1;
            indicadorEquipo = 1;
        } else {
            puntajeEquipo = puntajeEquipo2;
            indicadorEquipo = 2;
        }
        switch (puntajeEquipo) {
            case 0:
                $('#f1c' + indicadorEquipo).attr('src', rutaImagen + '0.png')
                break;
            case 1:
                $('#f1c' + indicadorEquipo).attr('src', rutaImagen + '1.png')
                break;
            case 2:
                $('#f1c' + indicadorEquipo).attr('src', rutaImagen + '2.png')
                break;
            case 3:
                $('#f1c' + indicadorEquipo).attr('src', rutaImagen + '3.png')
                break;
            case 4:
                $('#f1c' + indicadorEquipo).attr('src', rutaImagen + '4.png')
                break;
            case 5:
                $('#f1c' + indicadorEquipo).attr('src', rutaImagen + '5.png')
                $('#f2c' + indicadorEquipo).attr('src', rutaImagen + '0.png')
                break;
            case 6:
                $('#f2c' + indicadorEquipo).attr('src', rutaImagen + '1.png')
                break;
            case 7:
                $('#f2c' + indicadorEquipo).attr('src', rutaImagen + '2.png')
                break;
            case 8:
                $('#f2c' + indicadorEquipo).attr('src', rutaImagen + '3.png')
                break;
            case 9:
                $('#f2c' + indicadorEquipo).attr('src', rutaImagen + '4.png')
                break;
            case 10:
                $('#f2c' + indicadorEquipo).attr('src', rutaImagen + '5.png')
                $('#f3c' + indicadorEquipo).attr('src', rutaImagen + '0.png')
                break;
            case 11:
                $('#f3c' + indicadorEquipo).attr('src', rutaImagen + '1.png')
                break;
            case 12:
                $('#f3c' + indicadorEquipo).attr('src', rutaImagen + '2.png')
                break;
            case 13:
                $('#f3c' + indicadorEquipo).attr('src', rutaImagen + '3.png')
                break;
            case 14:
                $('#f3c' + indicadorEquipo).attr('src', rutaImagen + '4.png')
                break;
            case 15:
                $('#f3c' + indicadorEquipo).attr('src', rutaImagen + '5.png')
                $('#f4c' + indicadorEquipo).attr('src', rutaImagen + '0.png')
                break;
            case 16:
                $('#f4c' + indicadorEquipo).attr('src', rutaImagen + '1.png')
                break;
            case 17:
                $('#f4c' + indicadorEquipo).attr('src', rutaImagen + '2.png')
                break;
            case 18:
                $('#f4c' + indicadorEquipo).attr('src', rutaImagen + '3.png')
                break;
            case 19:
                $('#f4c' + indicadorEquipo).attr('src', rutaImagen + '4.png')
                break;
            case 20:
                $('#f4c' + indicadorEquipo).attr('src', rutaImagen + '5.png')
                $('#f5c' + indicadorEquipo).attr('src', rutaImagen + '0.png')
                break;
            case 21:
                $('#f5c' + indicadorEquipo).attr('src', rutaImagen + '1.png')
                break;
            case 22:
                $('#f5c' + indicadorEquipo).attr('src', rutaImagen + '2.png')
                break;
            case 23:
                $('#f5c' + indicadorEquipo).attr('src', rutaImagen + '3.png')
                break;
            case 24:
                $('#f5c' + indicadorEquipo).attr('src', rutaImagen + '4.png')
                break;
            case 25:
                $('#f5c' + indicadorEquipo).attr('src', rutaImagen + '5.png')
                $('#f6c' + indicadorEquipo).attr('src', rutaImagen + '0.png')
                break;
            case 26:
                $('#f6c' + indicadorEquipo).attr('src', rutaImagen + '1.png')
                break;
            case 27:
                $('#f6c' + indicadorEquipo).attr('src', rutaImagen + '2.png')
                break;
            case 28:
                $('#f6c' + indicadorEquipo).attr('src', rutaImagen + '3.png')
                break;
            case 29:
                $('#f6c' + indicadorEquipo).attr('src', rutaImagen + '4.png')
                break;
            case 30:
                $('#f6c' + indicadorEquipo).attr('src', rutaImagen + '5.png')
                break;

        }
    }


    /* Boton fin baja la opacidad y abre una ventana con opción reiniciar 
    o nueva partida*/

    $('#botonFin').on('click', function () {
        $('#pantallaFin').css('display', 'flex');
    })

    /* Boton reiniciar partida vuelve a la pantalla partida y pone los valores en 0*/

    $('#reiniciarPartida').on('click', function () {
        $('#pantallaFin').hide();
        puntajeEquipo1 = 0;
        puntajeEquipo2 = 0;
        $('#div5 #puntajeIzquierdo p').text(puntajeEquipo1);
        $('#div5 #puntajeDerecho p').text(puntajeEquipo2);
        $('#div2 img, #div3 img').attr('src', 'img/fosforos/0.png');


    })

    /* Boton nueva partida me lleva a la pantalla de inicio*/

    $('#nuevaPartida').on('click', function () {
        $('#pantallaFin').hide();
        $('#pantallaPartida').hide();
        puntajeEquipo1 = 0;
        puntajeEquipo2 = 0;
        $('#div5 #puntajeIzquierdo p').text(puntajeEquipo1);
        $('#div5 #puntajeDerecho p').text(puntajeEquipo2);
        $('#div2 img, #div3 img').attr('src', 'img/fosforos/0.png');
        $('#pantallaInicio').show();
        $('#equipo1 .inputEquipo').val('');
        $('#equipo2 .inputEquipo').val('');

    })

});