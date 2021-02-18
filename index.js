
$(document).ready(function () {
    ('use strict;')

     

    let servicios = [{ nombre: "Servicio de Oracion", hora: "6:00 PM" },
    { nombre: "Conexión Juvenil", hora: "5:00 PM" },
    { nombre: "Servicio Dominical", hora: "9:00 AM" },
    { nombre: "Escuela Dominical", hora: "11:00 AM" },
    { nombre: "Servicio Evangelístico", hora: "5:00 PM" },
    { nombre: "Club Bíblico", hora: "0:00 PM" }
    ];

    var codServicio = 1,
        url_f_iglesia = "",
        url_f_Youtube = "",
        url_f_conexion = "",
        url_f_Zoom = "",
        url_img = "img.jpeg",
        url_peticiones ="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAJe1h_NUM1pKME1QSTZYRFMzR0dEWEEwTERQRU5VWC4u";

 
    
    
            
            
            
      if ((url_f_iglesia!="") || (url_f_Youtube!="") || (url_f_conexion!="") || (url_f_Zoom!="")) {
                
                $("#btns").append('<div class="Transmision"><div class="row"><div id="En_vivo"><i class="bi bi-broadcast"></i> En Vivo</div><h5 id="servicio" class="card-title ">Card title</h5></div><p id="Versiculo" class="card-text"> <b>Hora </p><p id="Instruccion" class="card-text mb-3">Haz Click en cualquiera de los enlaces:</p></div>')
                
                if (url_f_iglesia!="") {
                    $("#btns").append('<a  id="url_f_iglesia" href=""  class="btn btn-primary w-100 mb-1"  > <i class="fab fa-facebook" style="margin-right: 5px; "></i>Página de la Iglesia</a><br>');
                }
                if (url_f_Youtube!="") {
                    $("#btns").append('<a  id="url_f_Youtube" href=""  class="btn btn-primary w-100 mb-1"><i class="fab fa-youtube" style="margin-right: 5px;"></i>Youtube</a><br>');
                }
                if (url_f_conexion!="") {
                    $("#btns").append('<a  id="url_f_conexion" href=""  class="btn btn-primary w-100 mb-1"><i class="fab fa-facebook" style="margin-right: 5px;"></i>Conexion Juvenil</a><br>');
                }
                if (url_f_Zoom!="") {
                    $("#btns").append('<a  id="url_f_Zoom" href=""  class="btn btn-primary w-100 mb-1">Zoom</a><br>');
                }
    
    
    } else { 
        $(".Transmision").css("visibility", "hidden");
         $("#btns").append(`<div class="msj-TransmOFF"><div class="versiculo"><q>Yo me alegré con los que me decían: A la casa de Jehová iremos.</q> <br>Salmos 122:1</div><div class="msj-N-live">No Hay Transmisiones en Vivo, <br> Visite nuestras Redes sociales</div><div class="redes"><a class="facebook" href="https://www.facebook.com/ibcunafamiliaconamor/" target="_blank"><i class="fab fa-facebook"></i></a><a class="youtube" href="https://youtube.com/channel/UCXrNOwQkYBa-r5XDE33y8CA" target="_blank"><i class="fab fa-youtube"></i></a></div><div class="oracion"><a href="${url_peticiones}">Quieres que Oremos Por ti haz clic</a></div></div>`);
        url_img = "Iglesia.jpeg";
        
    }
    
    
    $("#url_f_iglesia").attr("href", url_f_iglesia);
    $("#url_f_Youtube").attr("href", url_f_Youtube);
    $("#url_f_conexion").attr("href", url_f_conexion);
    $("#url_f_Zoom").attr("href", url_f_Zoom);
    

    $("#img").attr("src", url_img);

    $("#servicio").text(servicios[codServicio]['nombre']);
    $("#Versiculo").append(servicios[codServicio]['hora']);
        


});