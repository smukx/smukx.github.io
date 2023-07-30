<script>
  function sendTelegramMessage(message) {

    const botToken = '5842052714:AAHaPBVhmRKh007YyHigkCYOtzy15guj04s';
    const chatId = '5693475657';
    const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Message sent successfully.');
        } else {
          console.error('Failed to send the message.');
        }
      })
      .catch((error) => {
        console.error('Error sending the message:', error);
      });
  }

  // Get the visitor's public IP address
  function getPublicIP(callback) {
    fetch('https://api.ipify.org?format=json')
      .then((response) => response.json())
      .then((data) => {
        const ipAddress = data.ip;
        callback(ipAddress);
      })
      .catch((error) => {
        console.error('Error getting the IP address:', error);
      });
  }

  // Send message to Telegram when the page loads
  window.addEventListener('load', () => {
    getPublicIP((ipAddress) => {
      const message = `New Visitor Visited ${ipAddress}`;
      sendTelegramMessage(message);
    });
  });
</script>
