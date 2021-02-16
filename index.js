
$(document).ready(function () {
    ('use strict;')

    let servicios = [{ nombre: "Servicio de Oracion", hora: "6:00 PM" },
                     { nombre: "Conexión Juvenil", hora: "5:00 PM" },
                     { nombre: "Servicio Dominical", hora: "9:00 AM" },
                     { nombre: "Escuela Dominical", hora: "11:00 AM" },
                     { nombre: "Servicio Evangelístico", hora: "5:00 PM" },
                     { nombre: "Club Bíblico", hora: "0:00 PM" }
    ];

    var codServicio = 2,
        url_f_iglesia = "https://fb.watch/3FpgksFjtJ/",
        url_f_Youtube = "https://youtu.be/xXLxQWiN0gY",
        url_f_conexion = "",
        url_f_Zoom = "",
        url_img = "img.jpeg";
    
        
        $("#url_f_iglesia").css("visibility","visible");
        // $("#url_f_conexion").css("visibility","visible");
        $("#url_f_Youtube").css("visibility","visible");
        // $("#url_f_Zoom").css("visibility","visible");
    

        $("#img").attr("src", url_img);

        $("#servicio").text(servicios[codServicio]['nombre']);
        $("#Versiculo").append(servicios[codServicio]['hora']);
        
        $("#url_f_iglesia").attr("href", url_f_iglesia);
        $("#url_f_conexion").attr("href", url_f_conexion);
        $("#url_f_Youtube").attr("href", url_f_Youtube);
        $("#url_f_Zoom").attr("href", url_f_Zoom);
    


})