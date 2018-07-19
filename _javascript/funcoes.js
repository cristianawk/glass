var quebrada = false;
    function mudaLampada(tipo) {
        if (!quebrada) {
            document.getElementById("luz").src = "_imagens/" + tipo + ".jpg";
            if (tipo == 'lampada-quebrada') {
                quebrada = true;
            }
        }
                
    }

    function mudaFoto(foto) {
        document.getElementById("icone").src = foto;
    }

    /* Relogio */
    function relogio() {
        var data = new Date();
        var days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"];

        var horas = data.getHours();
        var minutos = data.getMinutes();
        var segundos = data.getSeconds();
        var dia = data.getDate();
        var mes = data.getMonth();
        var ano = data.getFullYear();

        if(horas < 10){
            horas = "0"+horas;
        }
        if(minutos < 10){
            minutos = "0"+minutos;
        }
        if(segundos < 10){
            segundos = "0"+segundos;
        }


        document.getElementById("relogio").innerHTML= 
        days[data.getDay()]+", "+dia+"/"+mes+"/"+ano+" - "+horas+":"+minutos+":"+segundos;
    }
    /* Fim Relogio*/
