// Function to clear all stored search queries

/*function clearAllData() {
  chrome.storage.local.set({ searches: [] }, function() {
    console.log('All data has been erased.');
  });
}

// You can trigger this function when needed, e.g., from a popup or manually:
clearAllData();
*/

//Instructions for resetting: 1. Uncomment the above function and the calling of it 2. Reload the extension 3. It should automatically be called

chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed');
});

// Listen for messages from content script to trigger search query retrieval and save
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'SAVE_SEARCH_QUERY') {
    const query = message.query;
    const category = message.category;
    const starred = message.starred;
    const timestamp = Date.now(); // Get current timestamp
    chrome.storage.local.get({ searches: [] }, function(result) {
      let searches = result.searches;
      searches.push({ query: query, category: category, starred: starred, timestamp: timestamp });
      chrome.storage.local.set({ searches: searches }, function() {
        console.log('Search query saved:', query, 'Category:', category, 'Starred:', starred);
      });
    });
  } else if (message.type === 'DELETE_SEARCH_QUERY') {
    const index = message.index;
    chrome.storage.local.get({ searches: [] }, function(result) {
      let searches = result.searches;
      if (index >= 0 && index < searches.length) {
        searches.splice(index, 1); // Remove search query at specified index
        chrome.storage.local.set({ searches: searches }, function() {
          console.log('Search query deleted at index:', index);
        });
      }
    });
  }
});

// Listen for messages from the popup to retrieve the search input from the content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'REQUEST_SEARCH_INPUT') {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { type: 'GET_SEARCH_INPUT' }, function(response) {
        sendResponse(response);
      });
    });
    return true;  // Indicates to keep the message channel open for sendResponse
  }
});





  

/*chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed');
  });
  
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url.includes('https://www.google.com/search')) {
      console.log('Google search page detected');
      chrome.tabs.sendMessage(tabId, { type: 'GET_SEARCH_QUERY' });
    }
  });
  
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'SEARCH_QUERY') {
      const query = message.query;
      chrome.tabs.sendMessage(sender.tab.id, {
        type: 'SHOW_ALERT',
        query: query
      });
    }
  });
  
  
  function saveSearchQuery(query) {
    chrome.storage.local.get({ searches: [] }, (result) => {
      let searches = result.searches;
      searches.push(query);
      chrome.storage.local.set({ searches: searches }, () => {
        console.log('Search query saved');
      });
    });
  }
  */





  /*chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'SEARCH_QUERY') {
      console.log('Search query received:', message.query);
      const query = message.query;
      chrome.notifications.create({
        type: 'basic',
        iconUrl: 'images/icon48.png',
        title: 'Save Search?',
        message: `Do you want to save this search query: "${query}"?`,
        buttons: [
          { title: 'Yes' },
          { title: 'No' }
        ],
        requireInteraction: true
      });
  
      chrome.notifications.onButtonClicked.addListener((notifId, btnIdx) => {
        if (btnIdx === 0) {
          saveSearchQuery(query);
        }
        chrome.notifications.clear(notifId);
      });
    }
  });*/
  
//good to go and replace then run
  
