
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
    apiKey = ' AIzaSyDOCjOI0pIspgmSsFHWMD-5C_JQkCeYOOI'; 
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
       
       var codServicio = getServicio(arreglo[0][0],servicios),
           url_f_iglesia = `${arreglo[0][1]}`,
           url_f_iglesia = `${arreglo[0][1]}`,
           url_f_Youtube = `${arreglo[0][2]}`,
           url_f_conexion = `${arreglo[0][3]}`,
           url_f_Zoom = `${arreglo[0][4]}`,
           url_img = `https://drive.google.com/uc?id=${ExtraerID(arreglo[0][5])}&export=download`,
           url_peticiones = `${arreglo[0][6]}`;

   
    function ExtraerID(Link) {
        var ID = Link.split("/");
        return ID[5];
    }

    
    
    function getServicio(Nombre_Servicio, servicios) {
      for (let index = 0; index < servicios.length; index++) {
        if (Nombre_Servicio == servicios[index]['nombre']) {
          return index;
        }
      }
    }
    
   
    // if((url_f_iglesia == 'undefined')||(url_f_iglesia=="")){
    //     console.log("url_f_iglesia no está definido");
    //   } else {
    //     console.log("url_f_iglesia está definido");
    //   }
    // if((url_f_Youtube == 'undefined')||(url_f_Youtube=="")){
    //     console.log("url_f_Youtube no está definido");
    //   } else {
    //     console.log("url_f_Youtube está definido");
    //   }
    // if((url_f_conexion == 'undefined')||(url_f_conexion=="")){
    //     console.log("url_f_conexion no está definido");
    //   } else {
    //     console.log("url_f_conexion está definido");
    //   }
    // if((url_f_Zoom == 'undefined')||(url_f_Zoom=="")){
    //     console.log("url_f_Zoom no está definido");
    //   } else {
    //     console.log("url_f_Zoom está definido");
    //   }

    //    console.log(url_img)
    if((url_img == 'undefined')||(url_img=="")){
        console.log("url_img no está definido");
      } else {
        console.log("url_img está definido");
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
            $("#btns").append(`<div class="msj-TransmOFF"><div class="versiculo"><q>Yo me alegré con los que me decían: A la casa de Jehová iremos.</q> <br>Salmos 122:1</div><div class="msj-N-live">No Hay Transmisiones en Vivo, <br> Visite nuestras Redes sociales</div><div class="redes"><a class="facebook" href="https://www.facebook.com/ibcunafamiliaconamor/" target="_blank"><i class="fab fa-facebook"></i></a><a class="youtube" href="https://youtube.com/channel/UCXrNOwQkYBa-r5XDE33y8CA" target="_blank"><i class="fab fa-youtube"></i></a></div><div class="oracion">Quieres que Oremos Por ti haz <a href="${url_peticiones}">clic Aquí</a></div></div>`);
           url_img = `https://drive.google.com/uc?id=${ExtraerID(arreglo[0][7])}&export=download`;
           
       }
               

       
       
       $("#url_f_iglesia").attr("href", url_f_iglesia);
       $("#url_f_Youtube").attr("href", url_f_Youtube);
       $("#url_f_conexion").attr("href", url_f_conexion);
       $("#url_f_Zoom").attr("href", url_f_Zoom);
       
       console.log(url_img)
       $("#img").attr("src", url_img);
   
       $("#servicio").text(servicios[codServicio]['nombre']);
       $("#Versiculo").append(servicios[codServicio]['hora']);
           



       setTimeout(refrescar, 30000);

       function refrescar(){
        //Actualiza la página
        location.reload();
      }






































































   }).catch(err=>{
     console.log(err);
   })
   } // fin funcion getLista()
    } // fin methods
    
    
   }) // fin instancia  
    
    
    
//    console.log(arreglo);
    
    
    
    
    
    
    
    
    
    

    
    
    




});