chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if(msg.op === "get_image_url") {
    var res = document.getElementById('screenshot-image').src.substr(31);
    sendResponse(res);
  }
});
