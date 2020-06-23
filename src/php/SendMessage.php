<?php
use PHPMailer\PHPMailer\PHPMailer;

$email = $_POST['email'];
$message = $_POST['message'];

require 'Exception.php';
require 'PHPMailer.php';
require 'SMTP.php';
$mail = new PHPMailer();
$mail->IsSMTP(); // enable SMTP
$mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
$mail->CharSet = "UTF-8";
$mail->PluginDir = "phpmailer/";
$mail->From = "dmiecvsite@gmail.com";
$mail->FromName = "Dawid Mieszczak";
$mail->Host = "smtp.gmail.com";
$mail->Mailer = "smtp";
$mail->Username = "mail"; //username
$mail->Password = "password"; //password
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'ssl'; 
$mail->Port = 465; //port poczty
$mail->SetLanguage("pl", "phpmailer/language/");
$mail->Subject = "CVSite message"; //temat wiadomości
$mail->Body = 'Wiadomość od : ' . $email . ',
Treść wiadomości: ' . $message . '.'; //wiadomość
$mail->AddAddress("dmiecvsite@gmail.com", "Dawid Mieszczak"); //do kogo ma być wysłana
if ($mail->Send()) {
        echo 'ok'; //odpowiedź
    } else {
        echo $mail->ErrorInfo;
    }
$mail->ClearAddresses();
$mail->ClearAttachments();
 