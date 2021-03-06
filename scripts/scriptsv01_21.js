function loadParametersOnDom() {
  $.get("phpScripts/pulldata.php", {}, function(result) {
    console.log("pullData:");
    //console.log(result);
    reRenderPageWithPhpEcho(result);
  });

  $.get("phpScripts/pullsettings.php", {}, function(result) {
    console.log("pullSettings:");
    //console.log(result);
    reRenderPageWithPhpEcho(result);
  });
}

function actualizarConfig(ref, formId) {
  postJsonToServer(formId);
}

function postJsonToServer(formId) {
  var data = $("#" + formId).serialize();
  console.log("data from "+ formId);
  console.log(data);
  //https://serverregistrodatos.000webhostapp.com/
  $.post("phpScripts/updatesettings.php",
    data,
    function(result) {
      //console.log(result);
      //console.alert(result);
      reRenderPageWithPhpEcho(result);
    }
  );
}


function ejecutarAccion(ref, bomba, formId, light) {
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

  postJsonToServer(formId);
  /*
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
  */


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

      case 'humedad1':
        if (existsInDom('humedad1')) {
          document.getElementById("humedad1").innerHTML = obj.valor;
        }
        break;
      case 'humedad2':
        if (existsInDom('humedad2')) {
          document.getElementById("humedad2").innerHTML = obj.valor;
        }
        break;
      case 'humedad3':
        if (existsInDom('humedad3')) {
          document.getElementById("humedad3").innerHTML = obj.valor;
        }
        break;
      case 'temperatura1':
        if (existsInDom('temperatura1')) {
          document.getElementById("temperatura1").innerHTML = obj.valor;
        }
        break;
      case 'temperatura2':
        if (existsInDom('temperatura2')) {
          document.getElementById("temperatura2").innerHTML = obj.valor;
        }
        break;
      case 'temperatura3':
        if (existsInDom('temperatura3')) {
          document.getElementById("temperatura3").innerHTML = obj.valor;
        }
        break;
      case 'sector1':
        if (existsInDom('sector1')) {
          document.getElementById("sector1").innerHTML = obj.valor;
        }
        break;
      case 'sector2':
        if (existsInDom('sector2')) {
          document.getElementById("sector2").innerHTML = obj.valor;
        }
        break;
      case 'sector3':
        if (existsInDom('sector3')) {
          document.getElementById("sector3").innerHTML = obj.valor;
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


//Google Sing-in functions:



function onSuccess(googleUser) {
  console.log('Logged in as: ' + googleUser.getBasicProfile().getName());

  // Display the user details
        var profileHTML = '<h3>Welcome '+ googleUser.getBasicProfile().getGivenName()+'! <a href="javascript:void(0);" onclick="signOut();">Sign out</a></h3>';
        profileHTML += '<img src="'+googleUser.getBasicProfile().getImageUrl()+'"/><p><b>Google ID: </b>'+googleUser.getBasicProfile().getId()+'</p><p><b>Name: </b>'+googleUser.getBasicProfile().getName()+'</p><p><b>Email: </b>'+googleUser.getBasicProfile().getEmail();
        document.getElementById("userContent").innerHTML = profileHTML;
        document.getElementById("my-signin2").style.display = "none";
        document.getElementById("userContent").style.display = "block";
// The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
        //alert(id_token);
        console.log("id Token:");
        console.log(id_token);
        document.location.href = '/index.html';

}
function onFailure(error) {
    var profileHTML = error;
    document.location.href = '/login.html';
    document.getElementById("userContent").innerHTML = profileHTML;
        document.getElementById("userContent").style.display = "block";
  console.log(error);

}


// Sign out the user
function signOut() {
var auth2 = gapi.auth2.getAuthInstance();
auth2.signOut().then(function () {
    document.getElementById("userContent").innerHTML  = '';
    document.getElementById("userContent").style.display = "none";
    document.getElementById("my-signin2").style.display = "block";
    document.location.href = '/index.html';
    document.getElementById("userContent").innerHTML  = '';
    document.getElementById("userContent").style.display = "none";
    document.getElementById("my-signin2").style.display = "block";

});
}







// Sign in mtehod from https://developers.google.com/identity/sign-in/web/sign-in
function onSignIn2(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  //document.getElementById('sign_out_button').style.visibility = 'visible';

}

// Render Google Sign-in button
function renderButton2() {
    gapi.signin2.render('gSignIn', {
        'scope': 'profile email',
        'width': 240,
        'height': 30,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': onSuccess2,
        'onfailure': onFailure2
    });
}

// Sign-in success callback
function onSuccess2(googleUser) {
    // Get the Google profile data (basic)
    //var profile = googleUser.getBasicProfile();

    // Retrieve the Google account data
    gapi.client.load('oauth2', 'v2', function () {
        var request = gapi.client.oauth2.userinfo.get({
            'userId': 'me'
        });
        request.execute(function (resp) {
            // Display the user details
            var profileHTML = '<h3>Welcome '+resp.given_name+'! <a href="javascript:void(0);" onclick="signOut();">Sign out</a></h3>';
            profileHTML += '<img src="'+resp.picture+'"/><p><b>Google ID: </b>'+resp.id+'</p><p><b>Name: </b>'+resp.name+'</p><p><b>Email: </b>'+resp.email+'</p><p><b>Gender: </b>'+resp.gender+'</p><p><b>Locale: </b>'+resp.locale+'</p><p><b>Google Profile:</b> <a target="_blank" href="'+resp.link+'">click to view profile</a></p>';
            document.getElementsByClassName("userContent")[0].innerHTML = profileHTML;

            document.getElementById("gSignIn").style.display = "none";
            document.getElementsByClassName("userContent")[0].style.display = "block";

            // Save user data
            saveUserData(resp);
        });
    });
}

// Save user data to the database
function saveUserData(userData){
  //console.log(JSON.stringify(userData));
    $.post('phpScripts/userData.php', { oauth_provider:'google', userData: JSON.stringify(userData) });
}

// Sign-in failure callback
function onFailure2(error) {
    alert(error);
}

// Sign out the user
function signOut2() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        document.getElementsByClassName("userContent")[0].innerHTML = '';
        document.getElementsByClassName("userContent")[0].style.display = "none";
        document.getElementById("gSignIn").style.display = "block";
    });

    auth2.disconnect();
}
