<?php

$temperatura1=$_POST["temperatura1"]?? null;
$temperatura2=$_POST["temperatura2"]?? null;
$temperatura3=$_POST["temperatura3"]?? null;
$humedad1=$_POST["humedad1"]?? null;
$humedad2=$_POST["humedad2"]?? null;
$humedad3=$_POST["humedad3"]?? null;
$bomba1=$_POST["bomba1"]?? null;
$bomba2=$_POST["bomba2"]?? null;
$bomba3=$_POST["bomba3"]?? null;

$jsonString = file_get_contents('data.json');
$data = json_decode($jsonString, true);


foreach ($data as $key => $entry) {

    switch ($entry['sensor']) {

      case 'temperatura1':

          if (isset($_POST['temperatura1']) && $_POST['temperatura1'] != ""){
          $data[$key]['valor'] = $temperatura1;}
                  break;

      case 'temperatura2':
      if (isset($_POST['temperatura2']) && $_POST['temperatura2'] != ""){
      $data[$key]['valor'] = $temperatura2;}
                  break;

      case 'temperatura3':
      if (isset($_POST['temperatura3']) && $_POST['temperatura3'] != ""){
      $data[$key]['valor'] = $temperatura3;}
                  break;

      case 'humedad1':
      if (isset($_POST['humedad1']) && $_POST['humedad1'] != ""){
      $data[$key]['valor'] = $humedad1;}
                  break;

      case 'humedad2':
      if (isset($_POST['humedad2']) && $_POST['humedad2'] != ""){
      $data[$key]['valor'] = $humedad2;}
                  break;

      case 'humedad3':
      if (isset($_POST['humedad3']) && $_POST['humedad3'] != ""){
      $data[$key]['valor'] = $humedad3;}
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
      f (isset($_POST['bomba3']) && $_POST['bomba3'] != ""){
      $data[$key]['valor'] = $bomba3;}
                  break;
    }

}

$newJsonString = json_encode($data);
file_put_contents('data.json', $newJsonString);

echo $jsonString = file_get_contents('data.json');
?>
