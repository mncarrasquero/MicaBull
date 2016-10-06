
<?php

// please only use the fields thata re present in the html form itself for now we have listed all possible ones

$to = "micarosental@gmail.com";

if (isset($_POST)){

	$subject = "Tienda Bull Contacto";
	
	
	$message = "First name: " . $_POST['userName'];
	$message .= "<br>Phone: " . $_POST['userPhone'];
	$message .= "<br>Email: " . $_POST['userEmail']; 
	$message .= "<br>Message: " . $_POST['userMessage'];
	
};

$headers  = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/html; charset=utf-8" . "\r\n";
$headers .= "From: " . $_POST['userName'] . " <" . $_POST['userEmail'] . ">". "\r\n";

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


