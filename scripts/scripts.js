function ejecutarAccion(ref, bomba, formId,light){
 /*var form = $(ref).parent();
 var hval = form.find('type[hidden]').val();
 var fid = form.attr('id');
 */
 regarBomba(bomba, formId, light);

}

function regarBomba(bomba, formId, light){
  let x = document.getElementById(bomba);
  //console.log(x.value);
  if (x.value==1) {
    document.getElementById(bomba).value=0;
  }
  else {
    document.getElementById(bomba).value=1;
  }
  //console.log(x.value);
  //console.log($("#"+formId).serialize());

  var data = $("#"+formId).serialize();
  //https://serverregistrodatos.000webhostapp.com/
  $.post("updatesettings.php",
    data,
    function(result){
      console.log(result);
      //console.alert(result);
      reRenderPageWithPhpEcho( result , light );
    }
  );
  //window.location.reload();
}


function reRenderPageWithPhpEcho(echoJson,light){
  let data = JSON.parse(echoJson);
console.log(light);
for(var i = 0; i < data.length; i++) {
    var obj = data[i];

if(obj.variable=="bomba1"){
     console.log(obj.valor);
     var divElement = document.getElementById( light );
 if(obj.valor == 1){
                       console.log("Bomba prendida");
                       divElement.style.backgroundColor = '#a5d6a7';
                      }
                      else {
                       divElement.style.backgroundColor = '#e57373';
                       console.log("Bomba apagada");
                      }
}

}



}

/*
$("#formbomba1").submit( function() {
  return false;
});
*/
