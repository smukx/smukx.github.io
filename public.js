    const botToken = '5842052714:AAHaPBVhmRKh007YyHigkCYOtzy15guj04s';
    const chatId = '5693475657';
    
   // fetch('https://api.ipify.org?format=json')
   //  .then(response => response.json())
   //   .then(data => {
   //    const ipAddress = data.ip;
   //    console.log(`IP Address: ${ipAddress}`);
        
   // Send message to Telegram bot
   //     const message = `Smukx Blog Visitor: ${ipAddress}`;
   //     const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`;
   //     fetch(telegramUrl);
   //   });



    const getIP = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
      } catch (error) {
        console.log(error);
      }
    };

    const getBrowserInfo = () => {
      const userAgent = navigator.userAgent;
      const language = navigator.language;
      const platform = navigator.platform;
      return `User Agent: ${userAgent}\n\tLanguage: ${language}\n\tPlatform: ${platform}`;
    };

    const getDeviceInfo = () => {
      const screenWidth = screen.width;
      const screenHeight = screen.height;
      const colorDepth = screen.colorDepth;
      const cookiesEnabled = navigator.cookieEnabled;
      const doNotTrack = navigator.doNotTrack;
      const plugins = Array.from(navigator.plugins, plugin => `${plugin.name} ${plugin.version}`);
      const mimeTypes = Array.from(navigator.mimeTypes, mimeType => `${mimeType.type}`);
      return `Screen Width: ${screenWidth}\nScreen Height: ${screenHeight}\nColor Depth: ${colorDepth}\nCookies Enabled: ${cookiesEnabled}\nDo Not Track: ${doNotTrack}\nPlugins: ${plugins}\nMime Types: ${mimeTypes}`;
    };

    Promise.all([getIP()])
      .then(([publicIP]) => {
        const browserInfo = getBrowserInfo();
        const deviceInfo = getDeviceInfo();
        const osInfo = `${navigator.platform} ${navigator.oscpu}`;
        const message = `Public IP: ${publicIP}\n\tBrowser Info: ${browserInfo}\n\tOS Info: ${osInfo}`;
        const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`;
        fetch(url);
      })
      .catch(error => console.log(error));

