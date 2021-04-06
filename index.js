
$(document).ready(function () {
    ('use strict;')

    
    // const requestURL = '';
    // const request = new XMLHttpRequest();
    // request.open('GET', requestURL);
    // request.responseType = 'json';
    // request.send();

    // request.onload = function() {
    //     const Enlaces = request.response;
    //   }



// id del documento =  1EX5gZVdPyvSiV5ZGnJ0RGfxRDveRZntLYjc8ek6CuBU

// clave api =   AIzaSyDOCjOI0pIspgmSsFHWMD-5C_JQkCeYOOI
    


const vue = new Vue({
    el:'#app',
    data:{
     listaDatos : []
    },
    created(){
     this.getLista()
    },
    methods:{
     recargar(){
      console.log("recargando");
      this.getLista()
     },
   getLista(){
    // id de la hoja de calculo
    idSheets = '1EX5gZVdPyvSiV5ZGnJ0RGfxRDveRZntLYjc8ek6CuBU';
    //// nuestra      APIKey
  
    apiKey = 'AIzaSyDOCjOI0pIspgmSsFHWMD-5C_JQkCeYOOI'; 
    // rango de la hoja de calculo que queremos leer
    values = 'A2:AZ100';
   // fetch es un método nativo para hacer peticiones http
   // en el navegador 
    fetch("https://content-sheets.googleapis.com/v4/spreadsheets/" +   idSheets + "/values/A2:AZ100?access_token="+ apiKey +"&key="+  apiKey)
   .then((lista)=>{
     return lista.json()
   }).then((valores)=>{
       
    //    console.log(this.listaDatos = valores.values);
    var arreglo = []
       arreglo = valores.values;
    //   console.log(arreglo[0][0]);
    //    console.log(arreglo[0][1]);
    //    console.log(arreglo[0][2]);
    //    console.log(arreglo[0][3]);
    //    console.log(arreglo[0][4]);
    //    console.log(arreglo[0][5]);
       console.log(arreglo[0][6]);



       let servicios = [{ nombre: "Servicio de Oración", hora: "6:00 PM" },
          { nombre: "Conexión Juvenil", hora: "5:00 PM" },
          { nombre: "Servicio Dominical", hora: "9:00 AM" },
          { nombre: "Escuela Dominical", hora: "11:00 AM" },
          { nombre: "Servicio Evangelístico", hora: "5:00 PM" },
          { nombre: "Club Bíblico", hora: "0:00 PM" }
       ];
     

       String.prototype.capitalize = function() {
        return this.replace( /(^|\s)([a-z])/g , function(m,p1,p2){ return p1+p2.toUpperCase(); });
      };     
       
       var codServicio = getServicio(arreglo[0][0], servicios),
           url_f_iglesia = `${arreglo[0][1]}`,
           url_f_iglesia = `${arreglo[0][1]}`,
           url_f_Youtube = `${arreglo[0][2]}`,
           url_f_conexion = `${arreglo[0][3]}`,
           url_f_Zoom = `${arreglo[0][4]}`,
           url_img = `https://drive.google.com/uc?id=${ExtraerID(arreglo[0][5])}&export=download`,
           url_peticiones = `${arreglo[0][6]}`,
           url_f_Encuesta1 = `${arreglo[0][8]}`,
           IdEntryNombre = `${arreglo[0][9]}`,
           IdEntryCelular = `${arreglo[0][10]}`,
           IdEntryRuta = `${arreglo[0][11]}`,
           IdEntryTransporte = `${arreglo[0][12]}`;

           if (!localStorage.getItem("Datos")) {
            var Datos = { Nombres: "", Apellidos: "", Cel: "", Ruta: "", Transporte: "" };
          } else {
            Datos = JSON.parse(localStorage.getItem('Datos'));
            url_f_Encuesta1 = `${arreglo[0][8]}&entry.${IdEntryNombre}=${Datos.Nombres.trim().capitalize().replace(/ /g, "+")}+${Datos.Apellidos.trim().capitalize().replace(/ /g, "+")}&entry.${IdEntryCelular}=${Datos.Cel.trim()}&entry.${IdEntryRuta}=${Datos.Ruta.trim().capitalize().replace(/ /g, "+")}&entry.${IdEntryTransporte}=${Datos.Transporte.trim().replace(/ /g, "+")}`;
     }
     
    function ExtraerID(Link) {
        var ID = Link.split("/");
        return ID[5];
    }

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
     

    
    function getServicio(Nombre_Servicio, servicios) {
      for (let index = 0; index < servicios.length; index++) {
        if (Nombre_Servicio == servicios[index]['nombre']) {
          return index;
        }
      }
    }
    
   
  
    if((url_img == 'undefined')||(url_img=="")){
        console.log("url_img no está definido");
      } else {
        console.log("url_img está definido");
      }
               
       if (!localStorage.getItem("Datos")) {
        $("#ModificarDatos").css("visibility", "hidden");
       }

       
               
         if (!((url_f_iglesia == 'undefined')||(url_f_iglesia==""))||!((url_f_Youtube == 'undefined')||(url_f_Youtube==""))||!((url_f_conexion == 'undefined')||(url_f_conexion==""))||!((url_f_Zoom == 'undefined')||(url_f_Zoom==""))) {
                   
                   $("#btns").append('<div class="Transmision"><div class="row"><div id="En_vivo"><i class="bi bi-broadcast"></i> En Vivo</div><h5 id="servicio" class="card-title ">Card title</h5></div><p id="Versiculo" class="card-text"> <b>Hora </p><p id="Instruccion" class="card-text mb-3">Haz Click en cualquiera de los enlaces:</p></div>')
                   
                   if (!((url_f_iglesia == 'undefined')||(url_f_iglesia==""))) {
                       $("#btns").append('<a  id="url_f_iglesia" href=""  class="btn btn-primary w-100 mb-1"  > <i class="fab fa-facebook" style="margin-right: 5px; "></i>Página de la Iglesia</a><br>');
                   }
                   if (!((url_f_Youtube == 'undefined')||(url_f_Youtube==""))) {
                       $("#btns").append('<a  id="url_f_Youtube" href=""  class="btn btn-primary w-100 mb-1"><i class="fab fa-youtube" style="margin-right: 5px;"></i>Youtube</a><br>');
                   }
                   if (!((url_f_conexion == 'undefined')||(url_f_conexion==""))) {
                       $("#btns").append('<a  id="url_f_conexion" href=""  class="btn btn-primary w-100 mb-1"><i class="fab fa-facebook" style="margin-right: 5px;"></i>Conexion Juvenil</a><br>');
                   }
                   if (!((url_f_Zoom == 'undefined')||(url_f_Zoom==""))) {
                       $("#btns").append('<a  id="url_f_Zoom" href=""  class="btn btn-primary w-100 mb-1">Zoom</a><br>');
                   }
       
       
       } else { 
           $(".Transmision").css("visibility", "hidden");
            $("#btns").append(`<div class="msj-TransmOFF"><div class="versiculo"><q>Yo me alegré con los que me decían: A la casa de Jehová iremos.</q> <br>Salmos 122:1</div><div class="msj-N-live"><strong>${Datos.Nombres.capitalize()}</strong>, No Hay Transmisiones en Vivo, <br> Visite nuestras Redes sociales</div><div class="redes"><a class="facebook" href="https://www.facebook.com/ibcunafamiliaconamor/" target="_blank"><i class="fab fa-facebook"></i></a><a class="youtube" href="https://youtube.com/channel/UCXrNOwQkYBa-r5XDE33y8CA" target="_blank"><i class="fab fa-youtube"></i></a></div><div class="oracion">   <p>

            
          </div><p><a href="${url_peticiones}">Quieres que Oremos Por ti haz clic</a></p> </div></div>`);
           url_img = `https://drive.google.com/uc?id=${ExtraerID(arreglo[0][7])}&export=download`;
           
       }
               
       if (!((arreglo[0][8] == 'undefined')||(arreglo[0][8]==""))) {
         
         $("#btns").append(`<a  id="url_f_Encuesta1"   class="btn btn-primary w-100 mb-1">Llenar Encuesta</a></p>`)
    }
       

     $("#ModificarDatos").click( async ()=> {
       
         
         const { value: formValues } = await Swal.fire({
           title: 'Editar Datos Generales',
           html:
             `Agrega tus datos para optimizar el llenado de los formularios` +
             `<input  value="${Datos.Nombres}" type="text" id="swal-input1" placeholder="Escribe tu nombre" class="swal2-input">` +
             `<input  value="${Datos.Apellidos}" type="text" id="swal-input2" placeholder="Escribe tu apellido" class="swal2-input">` +
             `<input  value="${Datos.Cel}" type="text" id="swal-input3" placeholder="Celular" class="swal2-input">` +
             `<input  value="${Datos.Ruta}" type="text" id="swal-input4" placeholder="Escribe la ruta o colonia donde vive" class="swal2-input">` +
             `<select  type="text" id="swal-input5" class="form-select" aria-label="Default select example"><option value="${Datos.Transporte}" selected>${Datos.Transporte}</option><option value="Bus de la Iglesia">Bus de la Iglesia</option><option value="A Pie">A Pie</option><option value="Vehículo Personal">Vehículo Personal</option></selec>`,
           focusConfirm: false,
           showCloseButton: true,
           preConfirm: () => {
             if (($('#swal-input1').val() === "") || ($('#swal-input2').val() === "") || ($('#swal-input3').val() === "") || ($('#swal-input4').val() === "") || ($('#swal-input5').val() === "")) {
               Swal.showValidationMessage(
                 'Completa todos los campos'
               )
             }
  
             return [
               $('#swal-input1').val(),
               $('#swal-input2').val(),
               $('#swal-input3').val(),
               $('#swal-input4').val(),
               $('#swal-input5').val()
             ]
           }
         })
          
         if (formValues) {
             
           Datos.Nombres = $('#swal-input1').val();
           Datos.Apellidos = $('#swal-input2').val();
           Datos.Cel = $('#swal-input3').val();
           Datos.Ruta = $('#swal-input4').val();
           Datos.Transporte = $('#swal-input5').val();
           localStorage.setItem('Datos', JSON.stringify(Datos));
           Swal.fire({
             position: 'center',
             icon: 'success',
             title: $('#swal-input1').val().capitalize() + ', Se han Guardado sus Datos',
             showConfirmButton: false,
             timer: 3000
           })
           sleep(2000).then(() => { location.reload(); });
           
         }

     })


     $("#url_f_Encuesta1").click( async ()=> {
       if (!localStorage.getItem("Datos")) {
         
         const { value: formValues } = await Swal.fire({
           title: 'Datos Generales',
           html:
             'Agrega tus datos para optimizar el llenado de los formularios' +
             '<input type="text" id="swal-input1" placeholder="Escribe tu nombre" class="swal2-input">' +
             '<input type="text" id="swal-input2" placeholder="Escribe tu apellido" class="swal2-input">' +
             '<input type="text" id="swal-input3" placeholder="Celular" class="swal2-input">' +
             '<input type="text" id="swal-input4" placeholder="Escribe la ruta o colonia donde vive" class="swal2-input">' +
             '<select type="text" id="swal-input5" class="form-select" aria-label="Default select example"><option value="" selected>Seleccione el Transporte</option><option value="Bus de la Iglesia">Bus de la Iglesia</option><option value="A Pie">A Pie</option><option value="Vehículo Personal">Vehículo Personal</option></select>',
           focusConfirm: false,
           showCloseButton: true,
           preConfirm: () => {
             if (($('#swal-input1').val() === "") || ($('#swal-input2').val() === "") || ($('#swal-input3').val() === "") || ($('#swal-input4').val() === "") || ($('#swal-input5').val() === "")) {
               Swal.showValidationMessage(
                 'Completa todos los campos'
               )
             }
  
             return [
               $('#swal-input1').val(),
               $('#swal-input2').val(),
               $('#swal-input3').val(),
               $('#swal-input4').val(),
               $('#swal-input5').val()
             ]
           }
         })
          
         if (formValues) {
             
           Datos.Nombres = $('#swal-input1').val();
           Datos.Apellidos = $('#swal-input2').val();
           Datos.Cel = $('#swal-input3').val();
           Datos.Ruta = $('#swal-input4').val();
           Datos.Transporte = $('#swal-input5').val();
           localStorage.setItem('Datos', JSON.stringify(Datos));
           Swal.fire({
             position: 'center',
             icon: 'success',
             title: $('#swal-input1').val().capitalize() + ', Se han Guardado sus Datos',
             showConfirmButton: false,
             timer: 3000
           })
           url_f_Encuesta1 = `${arreglo[0][8]}&entry.${IdEntryNombre}=${Datos.Nombres.trim().capitalize().replace(/ /g, "+")}+${Datos.Apellidos.trim().capitalize().replace(/ /g, "+")}&entry.${IdEntryCelular}=${Datos.Cel.trim()}&entry.${IdEntryRuta}=${Datos.Ruta.trim().capitalize().replace(/ /g, "+")}&entry.${IdEntryTransporte}=${Datos.Transporte.trim().replace(/ /g, "+")}`;
           $("#url_f_Encuesta1").attr("href", url_f_Encuesta1);
           
           sleep(2000).then(() => { window.location = url_f_Encuesta1; });
           
         }
          
          
         
       } else {
         $("#url_f_Encuesta1").attr("href", url_f_Encuesta1);
         window.location = url_f_Encuesta1;
       }

      //  setTimeout(window.location = url_f_Encuesta1, 3000);
      
       
     })
     

    
     
 
       
       $("#url_f_iglesia").attr("href", url_f_iglesia);
       $("#url_f_Youtube").attr("href", url_f_Youtube);
       $("#url_f_conexion").attr("href", url_f_conexion);
       $("#url_f_Zoom").attr("href", url_f_Zoom);
 
       
       console.log(url_img)
       $("#img").attr("src", url_img);
   
       $("#servicio").text(servicios[codServicio]['nombre']);
       $("#Versiculo").append(servicios[codServicio]['hora']);
           



      //  setTimeout(refrescar, 30000);

      //  function refrescar(){
      //   //Actualiza la página
      //   location.reload();
      // }





   }).catch(err=>{
     console.log(err);
   })
   } // fin funcion getLista()
    } // fin methods
    
    
   }) // fin instancia  
    
    
    
//    console.log(arreglo);
    
    
    
    
    
    
    
    
    
    

    
    
    




});
