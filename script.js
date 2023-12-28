function sendWhatsAppMessages() {
    const message = document.getElementById('message').value;
    const csvFile = document.getElementById('csvFile').files[0];

    if (!message || !csvFile) {
        alert('Please enter a message and select a CSV file.');
        return;
    }

    const formData = new FormData();
    formData.append('message', message);
    formData.append('csvFile', csvFile);

    fetch('send_messages.php', {
        method: 'POST',
        body: formData
    })
        var url = "https://wa.me/"
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while sending messages.');
    });
}
