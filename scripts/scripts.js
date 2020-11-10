function loadParametersOnDom() {
  $.get("pulldata.php",{},function(result) {
                                            console.log("pullData:");
                                            console.log(result);
                                            reRenderPageWithPhpEcho(result);
                                            }
  );

  $.get("pullsettings.php",{},function(result) {
                                            console.log("pullSettings:");
                                            console.log(result);
                                            reRenderPageWithPhpEcho(result);
                                            }
  );


}




function ejecutarAccion(ref, bomba, formId, light) {
  /*var form = $(ref).parent();
  var hval = form.find('type[hidden]').val();
  var fid = form.attr('id');
  */
  regarBomba(bomba, formId);

}

function regarBomba(bomba, formId) {
  let x = document.getElementById(bomba);
  //console.log(x.value);
  if (x.value == 1) {
    document.getElementById(bomba).value = 0;
  } else {
    document.getElementById(bomba).value = 1;
  }
  //console.log(x.value);
  //console.log($("#"+formId).serialize());

  var data = $("#" + formId).serialize();
  //https://serverregistrodatos.000webhostapp.com/
  $.post("updatesettings.php",
    data,
    function(result) {
      console.log(result);
      //console.alert(result);
      reRenderPageWithPhpEcho(result);
    }
  );
  //window.location.reload();
}


function reRenderPageWithPhpEcho(echoJson) {
  let data = JSON.parse(echoJson);
  for (var i = 0; i < data.length; i++) {
    var obj = data[i];

    switch (obj.variable) {
      case 'bomba1':
        if (existsInDom('lightbomba1')) {
          var divElement = document.getElementById('lightbomba1');
          if (obj.valor == 1) {
            divElement.style.backgroundColor = '#a5d6a7';
            document.getElementById("regarbomba1").className = "button button-off";
          } else {
            divElement.style.backgroundColor = '#e57373';
            document.getElementById("regarbomba1").className = "button button-on";
          }
        }
        break;

      case 'bomba2':
        if (existsInDom('lightbomba2')) {
          var divElement = document.getElementById('lightbomba2');
          if (obj.valor == 1) {
            divElement.style.backgroundColor = '#a5d6a7';
            document.getElementById("regarbomba2").className = "button button-off";
          } else {
            divElement.style.backgroundColor = '#e57373';
            document.getElementById("regarbomba2").className = "button button-on";
          }
        }
        break;

      case 'bomba3':
        if (existsInDom('lightbomba3')) {
          var divElement = document.getElementById('lightbomba3');
          if (obj.valor == 1) {
            divElement.style.backgroundColor = '#a5d6a7';
            document.getElementById("regarbomba3").className = "button button-off";
          } else {
            divElement.style.backgroundColor = '#e57373';
            document.getElementById("regarbomba3").className = "button button-on";
          }
        }
        break;

      case 'humedadsuelomaxima':
        if (existsInDom('humedadsuelomaxima')) {
          document.getElementById("humedadsuelomaxima").value = obj.valor;
        }
        break;

      case 'humedadsuelominima':
        if (existsInDom('humedadsuelominima')) {
          document.getElementById("humedadsuelominima").value = obj.valor;
        }
        break;

      case 'temperaturamaxima':
        if (existsInDom('temperaturamaxima')) {
          document.getElementById("temperaturamaxima").value = obj.valor;
        }
        break;

      case 'temperaturaminima':
        if (existsInDom('temperaturaminima')) {
          document.getElementById("temperaturaminima").value = obj.valor;
        }
        break;

      case 'humedadambientemaxima':
        if (existsInDom('humedadambientemaxima')) {
          document.getElementById("humedadambientemaxima").value = obj.valor;
        }
        break;

      case 'humedadambienteminima':
        if (existsInDom('humedadambienteminima')) {
          document.getElementById("humedadambienteminima").value = obj.valor;
        }
        break;

      default:
        console.log('No se encontraron datos válidos.');
    }
  }
}

function existsInDom(elementName) {
  var element = document.getElementById(elementName);
  if (typeof(element) != 'undefined' && element != null) {
    return true;
  }
  return false;
}
/*
$("#formbomba1").submit( function() {
  return false;
});
*/
