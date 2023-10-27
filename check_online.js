/*
For reactive applications, IS_ONLINE could be replaced with a set() call that
alters the store.
*/
let IS_ONLINE = false;

const checkOnlineStatus = async () => {
  if (!navigator.onLine) return false;
  else {
    try {
      const request = await fetch("/some/status/endpoint");
      return request.status >= 200 && request.status < 300;
    }
    catch {
      return false;
    }
  }
}

window.addEventListener("load", async () => {
  IS_ONLINE = await checkOnlineStatus();
  
  setInterval(
    async () => {
      if (!IS_ONLINE) {
        IS_ONLINE = await checkOnlineStatus();
      }
    },
    30000 // check every 30 seconds.
  );
});

window.addEventListener("offline", () => {
  IS_ONLINE = false;
});

window.addEventListener("online", async () => {
  IS_ONLINE = await checkOnlineStatus();
}); 

