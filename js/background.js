var url = /^https?:\/\/prnt\.sc/;

chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.sendMessage(tab.id, { op: 'get_image_url' }, function (imgUrl) {
      if(url.test(tab.url))
        chrome.tabs.update(tab.id, { url: imgUrl });
    });
});
