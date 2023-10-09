function validarFormulario(){
   var nombre;
   nombre = document.getElementById("nombre").value;
   console.log(nombre); 
   var apellido;
   apellido=document.getElementById("apellido").value;
   var telefono;
   telefono=document.getElementById("telefono").value;
   var fecha;
   fecha=document.getElementById("fecha").value;
   var horario;
   horario= document.getElementById("horario").value;
   var cantPersonas;
   cantPersonas = document.getElementById("cantPersonas").value;
   if(nombre.length>2){
      if(apellido.length>2){
         if(telefono>999999999 && telefono<=9999999999){
            if(fecha){
               if(horario){
                  if(cantPersonas){
                     console.log("ok")
                     return true;
                  }else{
                     console.log("falta cantidad de personas")
                  }
               }else{
                  console.log("falta horario")
            }
            }else{
               console.log("falta fecha")
            }
         }else{
            console.log("falta telefono correcto")
         }
      }else{
         console.log("falta apellido correcto")
      }
   }else{
      console.log("falta nombre correcto")
   }

}