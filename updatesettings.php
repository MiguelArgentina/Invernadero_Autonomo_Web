<?php

$humedadsuelomaxima=$_POST["humedadsuelomaxima"]?? null;
$humedadsuelominima=$_POST["humedadsuelominima"] ?? null;
$temperaturamaxima=$_POST["temperaturamaxima"]?? null;
$temperaturaminima=$_POST["temperaturaminima"]?? null;
$humedadambientemaxima=$_POST["humedadambientemaxima"]?? null;
$humedadambienteminima=$_POST["humedadambienteminima"]?? null;
$bomba1=$_POST["bomba1"]?? null;
$bomba2=$_POST["bomba2"]?? null;
$bomba3=$_POST["bomba3"]?? null;

$jsonString = file_get_contents('settings.json');
$data = json_decode($jsonString, true);


foreach ($data as $key => $entry) {
 
    switch ($entry['variable']) {

      case 'humedadsuelomaxima':
                  if(!is_null("$humedadsuelomaxima")) $data[$key]['valor'] = $humedadsuelomaxima;
                  break;
      case 'humedadsuelominima':
                  if(!is_null("$humedadsuelominima")) $data[$key]['valor'] = $humedadsuelominima;
                  break;
      case 'temperaturamaxima':
                  if(!is_null("$temperaturamaxima")) $data[$key]['valor'] = $temperaturamaxima;
                  break;
      case 'temperaturaminima':
                  if(!is_null("$temperaturaminima")) $data[$key]['valor'] = $temperaturaminima;
                  break;
      case 'humedadambientemaxima':
                  if(!is_null("$humedadambientemaxima")) $data[$key]['valor'] = $humedadambientemaxima;
                  break;
      case 'humedadambienteminima':
                  if(!is_null("$humedadambienteminima")) $data[$key]['valor'] = $humedadambienteminima;
                  break;
      case 'bomba1':
                  if(!is_null($bomba1)) $data[$key]['valor'] = $bomba1;
                  break;
      case 'bomba2':
                  if(!is_null($bomba2)) $data[$key]['valor'] = $bomba2;
                  break;
      case 'bomba3':
                  if(!is_null($bomba3)) $data[$key]['valor'] = $bomba3;
                  break;

    }

}

$newJsonString = json_encode($data);
file_put_contents('settings.json', $newJsonString);

echo $jsonString = file_get_contents('settings.json');

?>
