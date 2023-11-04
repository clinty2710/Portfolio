<!--

Clint Steadman
    
default.css

-->

<!-- PHP file: sendmail.php -->

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate input
    $name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
    $subject = filter_var($_POST["subject"], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $message = filter_var($_POST["message"], FILTER_SANITIZE_STRING);

    // Validate input data
    if (empty($name) || empty($subject) || empty($email) || empty($message)) {
        echo 'error'; // Return 'error' in case of validation failure
        exit;
    }

    // Configure email settings (ensure your server allows sending emails)
    $to = "clinty2710@hotmail.com"; // Your email address
    $headers = "From: $email";

    // Compose the email
    $emailContent = "Name: $name\n";
    $emailContent .= "Subject: $subject\n";
    $emailContent .= "Email: $email\n";
    $emailContent .= "Message:\n$message\n";

    // Send the email
    if (mail($to, $subject, $emailContent, $headers)) {
        echo 'success'; // Return 'success' after sending the email
    } else {
        echo 'error'; // Return 'error' in case of email sending failure
    }
}
?>

