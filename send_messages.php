<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $message = $_POST['message'];
    $csvFile = $_FILES['csvFile'];

    $response = ['message' => 'Messages sent successfully.']; // Replace with actual success message
    echo json_encode($response);
} else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(['error' => 'Method not allowed.']);
}
?>
