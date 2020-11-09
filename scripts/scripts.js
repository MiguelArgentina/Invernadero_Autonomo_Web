function ejecutarAccion(ref, bomba, formId){
 /*var form = $(ref).parent();
 var hval = form.find('type[hidden]').val();
 var fid = form.attr('id');
 */
 regarBomba(bomba, formId);

}

function regarBomba(bomba, formId){
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
    function(info){
      console.log(info);
      $("#result").html(info);
    }
  );
}

/*
$("#formbomba1").submit( function() {
  return false;
});*/
