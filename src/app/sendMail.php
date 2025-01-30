<?php

switch ($_SERVER['REQUEST_METHOD']) {    
    case("POST"):
        header("Access-Control-Allow-Origin: *");
        $json = file_get_contents('php://input');
        $params = json_decode($json);
    
        $senderEmail = $params->email;
        $senderName = $params->name;
        $senderMessage = $params->message;
    
        $recipient = 'sinan-demir@hotmail.com';
        $subjectToYou = "Neue Kontaktanfrage von $senderName";
        $messageToYou = "Von: $senderName ($senderEmail)<br><br>$senderMessage";
        
        $subjectToSender = "Bestätigung Ihrer Nachricht";
        $messageToSender = "Hallo $senderName,<br><br>"
            . "Vielen Dank für deine Nachricht!<br>"
            . "Ich habe folgende Nachricht erhalten:<br><br>"
            . "<em>$senderMessage</em><br><br>"
            . "Mit freundlichen Grüßen,<br>Sinan Demir";
    
        $headers = [
            'MIME-Version: 1.0',
            'Content-type: text/html; charset=utf-8',
            'From: https://developerdemir.com/'
        ];
    
        $mail1 = mail($recipient, $subjectToYou, $messageToYou, implode("\r\n", $headers));
        $mail2 = mail($senderEmail, $subjectToSender, $messageToSender, implode("\r\n", $headers));
    
        if($mail1 && $mail2) {
            http_response_code(200);
            echo json_encode(["success" => true]);
        } else {
            http_response_code(500);
            echo json_encode(["error" => "Fehler beim Versand"]);
        }
        break;

        default:
            header("Allow: POST", true, 405);
            exit;
    } 
