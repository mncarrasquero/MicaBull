
<?php

// please only use the fields thata re present in the html form itself for now we have listed all possible ones

$to = "micarosental@gmail.com";

if (isset($_POST)){

	$subject = "Tienda Bull Join Team";
	
	
	$message .= "<br>Message: " . " Hola este es el email  de una persona interesada  en unirse a Bull";
	$message .= "<br>Email: " . $_POST['user_emailJoin'];

	
};

$headers  = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/html; charset=utf-8" . "\r\n";
$headers .= "From: SERVIDOR <" . $_POST['user_emailJoin'] . ">". "\r\n";

$json = array();
$json['status'] = false;
$json['text'] = "";
if( mail($to, $subject, $message, $headers) ) {
	$json['status'] = true;
	
} else {
	$json['status'] = false;
}
echo json_encode($json);
?>

