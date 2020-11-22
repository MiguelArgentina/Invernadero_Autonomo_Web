<?php

/*
foreach($_POST as $key => $value) {
  echo "POST parameter '$key' has '$value'";
}
*/

$humedadsuelomaxima=$_POST['humedadsuelomaxima']??null;
$humedadsuelominima=$_POST["humedadsuelominima"] ?? null;
$temperaturamaxima=$_POST["temperaturamaxima"]?? null;
$temperaturaminima=$_POST["temperaturaminima"]?? null;
$humedadambientemaxima=$_POST["humedadambientemaxima"]?? null;
$humedadambienteminima=$_POST["humedadambienteminima"]?? null;
$bomba1=$_POST["bomba1"]?? null;
$bomba2=$_POST["bomba2"]?? null;
$bomba3=$_POST["bomba3"]?? null;

$jsonString = file_get_contents('../data/settings.json');
$data = json_decode($jsonString, true);


foreach ($data as $key => $entry) {

    switch ($entry['variable']) {

      case 'humedadsuelomaxima':
                  if (isset($_POST['humedadsuelomaxima']) && $_POST['humedadsuelomaxima'] != ""){
                      $data[$key]['valor'] = $humedadsuelomaxima;}
                  break;
      case 'humedadsuelominima':
                  if (isset($_POST['humedadsuelominima']) && $_POST['humedadsuelominima'] != ""){ $data[$key]['valor'] = $humedadsuelominima;}
                  break;
      case 'temperaturamaxima':
                  if (isset($_POST['temperaturamaxima']) && $_POST['temperaturamaxima'] != ""){ $data[$key]['valor'] = $temperaturamaxima;}
                  break;
      case 'temperaturaminima':
                  if (isset($_POST['temperaturaminima']) && $_POST['temperaturaminima'] != ""){ $data[$key]['valor'] = $temperaturaminima;}
                  break;
      case 'humedadambientemaxima':
                  if (isset($_POST['humedadambientemaxima']) && $_POST['humedadambientemaxima'] != ""){ $data[$key]['valor'] = $humedadambientemaxima;}
                  break;
      case 'humedadambienteminima':
                  if (isset($_POST['humedadambienteminima']) && $_POST['humedadambienteminima'] != ""){ $data[$key]['valor'] = $humedadambienteminima;}
                  break;
      case 'bomba1':
                  if (isset($_POST['bomba1']) && $_POST['bomba1'] != ""){
                      $data[$key]['valor'] = $bomba1;}
                  break;
      case 'bomba2':
                  if (isset($_POST['bomba2']) && $_POST['bomba2'] != ""){
                      $data[$key]['valor'] = $bomba2;}
                  break;
      case 'bomba3':
                  if (isset($_POST['bomba3']) && $_POST['bomba3'] != ""){
                      $data[$key]['valor'] = $bomba3;}
                  break;

    }

}

$newJsonString = json_encode($data);
file_put_contents('../data/settings.json', $newJsonString);

echo $jsonString = file_get_contents('../data/settings.json');

?>
