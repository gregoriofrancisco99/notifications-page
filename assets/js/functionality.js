const notificationsPanel = {
  notifications: [
    {
      username:'Mark Webber' ,
      avatar: './assets/images/avatar-mark-webber.webp',
      activity:'reacted to' ,
      target:{
        name: 'your recent post',
        type: 'post',
      },
      content:'My first tournament today!',
      time: '1m ago',
      read: false
    },
    {
      username:'Angela Gray' ,
      avatar: './assets/images/avatar-angela-gray.webp',
      activity:'followed' ,
      target:{
        name: 'you',
        type: 'user',
      },
      content:'',
      time: '5m ago',
      read: false
    },
    {  
      username:'Jacob Thompson' ,
      avatar: '/assets/images/avatar-jacob-thompson.webp',
      activity:'has joined' ,
      target:{
        name: 'your group',
        type: 'group',
      },
      content:'Chess Club',
      time: '1 day ago',
      read: false
    },
    { 
      username:'Rizky Hasanuddin',
      avatar: './assets/images/avatar-rizky-hasanuddin.webp',
      activity:'sent you a private message' ,
      target:{
        name: 'Private message',
        type: 'message',
      },
      content:`Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
      I'm already having lots of fun and improving my game.`,
      time: '5 days ago',
      read: true
    },
    { 
      username:'Kimberly Smith',
      avatar: './assets/images/avatar-kimberly-smith.webp',
      activity:'commented on your picture' ,
      target:{
        name: 'picture',
        type: 'picture',
      },
      content:``,
      time: '1 week ago',
      read: true
    },
    {   
      username:'Nathan Peterson',
      avatar: './assets/images/avatar-nathan-peterson.webp',
      activity:'reacted to your recent post' ,
      target:{
        name: 'post',
        type: 'post',
      },
      content:`5 end-game strategies to increase your win rate`,
      time: '2 weeks ago',
      read: true
    },
    { 
      username:'Anna Kim',
      avatar: './assets/images/avatar-anna-kim.webp',
      activity:'left the group' ,
      target:{
        name: 'Chess Club',
        type: 'group',
      },
      content:`Chess Club`,
      time: '2 weeks ago',
      read: true
    }
  ],
  presentNotifications () {
    let notificationCounter = 0;
    notificationsPanel.notifications.forEach(notification => {
      if(!notification.read){
        notificationCounter++;
      }
    })
    document.getElementById('total-unread')
    .innerHTML = notificationCounter
  },
  markRead() {
    notificationsPanel.notifications.forEach(notification => {
      if(!notification.read) {
        notification.read = true;
      }
    });
    Object.entries(document.getElementsByClassName('row')).forEach(row => {
      row[1]
      .classList
      .remove('unread')
    });
    notificationsPanel.presentNotifications();
  },
  notificationBuilder() {
    const notificationsHub = document.querySelector('div#main');
    
    notificationsPanel.notifications.forEach(pieceOfInfo => {
      const Row = document.createElement('div');
      const listOfClass = (pieceOfInfo.read) ? 'read' : 'unread';
      Row.classList.add('row', listOfClass);

      if(pieceOfInfo.target.type == 'user') {
        Row.innerHTML = `
        <img src="${pieceOfInfo.avatar}" alt="${pieceOfInfo.username}">
              <div class="notificationMessage">
                <p>
                  <span class="username link">${pieceOfInfo.username}</span>
                  <span class="activity">${pieceOfInfo.activity}</span>
                  <span class="target">${pieceOfInfo.target.name}</span>
                  <span class="content link">${pieceOfInfo.content}</span>
                </p>
                <small class="time">${pieceOfInfo.time}</small>
              </div>
        `
      } else if(pieceOfInfo.target.type == 'group') {
        Row.innerHTML = `
        <img src="${pieceOfInfo.avatar}" alt="${pieceOfInfo.username}">
              <div class="notificationMessage">
                <p>
                  <span class="username link">${pieceOfInfo.username}</span>
                  <span class="activity">${pieceOfInfo.activity}</span>
                  <span class="target">${pieceOfInfo.target.name}</span>
                  <span class="content link">${pieceOfInfo.content}</span>
                </p>
                <small class="time">${pieceOfInfo.time}</small>
              </div>
        `
      } else if(pieceOfInfo.target.type == 'message') {
        Row.innerHTML = `
        <img src="${pieceOfInfo.avatar}" alt="${pieceOfInfo.username}">
              <div class="notificationMessage">
                <p>
                  <span class="username link">${pieceOfInfo.username}</span>
                  <span class="activity">${pieceOfInfo.activity}</span>
                  <span class="target">${pieceOfInfo.target.name}</span>
                  </p>
                  <small class="time">${pieceOfInfo.time}</small>
                  <span class="content message link">${pieceOfInfo.content}</span>
              </div>
        `;
      } else if(pieceOfInfo.target.type == 'picture') {
        Row.innerHTML = `
        <img src="${pieceOfInfo.avatar}" alt="${pieceOfInfo.username}">
              <div class="notificationMessage">
                <p>
                  <span class="username link">${pieceOfInfo.username}</span>
                  <span class="activity">${pieceOfInfo.activity}</span>
                  <span class="target">${pieceOfInfo.target.name}</span>
                </p>
                <small class="time">${pieceOfInfo.time}</small>
              </div>
        `;
      } else {
        Row.innerHTML = `
        <img src="${pieceOfInfo.avatar}" alt="${pieceOfInfo.username}">
              <div class="notificationMessage">
                <p>
                  <span class="username link">${pieceOfInfo.username}</span>
                  <span class="activity">${pieceOfInfo.activity}</span>
                  <span class="target">${pieceOfInfo.target.name}</span>
                  <span class="content link">${pieceOfInfo.content}</span>
                </p>
                <small class="time">${pieceOfInfo.time}</small>
              </div>
        `;
      } 

      notificationsHub.appendChild(Row);
    });
  
    notificationsPanel.presentNotifications();
  }
}

notificationsPanel.notificationBuilder()