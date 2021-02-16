
$(document).ready(function () {
    ('use strict;')

    let servicios = [{ nombre: "Servicio de Oracion", hora: "6:00 PM" },
    { nombre: "Conexión Juvenil", hora: "5:00 PM" },
    { nombre: "Servicio Dominical", hora: "9:00 AM" },
    { nombre: "Escuela Dominical", hora: "11:00 AM" },
    { nombre: "Servicio Evangelístico", hora: "5:00 PM" },
    { nombre: "Club Bíblico", hora: "0:00 PM" }
    ];

    var codServicio = 4,
        url_f_iglesia = "https://fb.watch/3FpgksFjtJ/",
        url_f_Youtube = "https://youtu.be/xXLxQWiN0gY",
        url_f_conexion = "",
        url_f_Zoom = "",
        url_img = "img.jpeg"

        btn_f_iglesia = 1,
        btn_f_Youtube = 1,
        btn_f_conexion = 0,
        btn_f_Zoom = 0;
    
    if (btn_f_iglesia) {
        $("#btns").append('<a  id="url_f_iglesia" href=""  class="btn btn-primary w-100 mb-1"  > <i class="fab fa-facebook" style="margin-right: 5px; "></i>Página de la Iglesia</a><br>');
    }
    if (btn_f_Youtube) {
        $("#btns").append('<a  id="url_f_Youtube" href=""  class="btn btn-primary w-100 mb-1"><i class="fab fa-youtube" style="margin-right: 5px;"></i>Youtube</a><br>');
    }
    if (btn_f_conexion) {
        $("#btns").append('<a  id="url_f_conexion" href=""  class="btn btn-primary w-100 mb-1"><i class="fab fa-facebook" style="margin-right: 5px;"></i>Página de Conexion</a><br>');
    }
    if (btn_f_Zoom) {
        $("#btns").append('<a  id="url_f_Zoom" href=""  class="btn btn-primary w-100 mb-1">Zoom</a><br>');
    }
    

    
    $("#url_f_iglesia").attr("href", url_f_iglesia);
    $("#url_f_Youtube").attr("href", url_f_Youtube);
    $("#url_f_conexion").attr("href", url_f_conexion);
    $("#url_f_Zoom").attr("href", url_f_Zoom);
    

    $("#img").attr("src", url_img);

    $("#servicio").text(servicios[codServicio]['nombre']);
    $("#Versiculo").append(servicios[codServicio]['hora']);
        


});