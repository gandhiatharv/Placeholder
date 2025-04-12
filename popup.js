document.addEventListener('DOMContentLoaded', function() {
  // Function to retrieve saved search queries from Chrome Storage
  function getSavedSearches(callback) {
    chrome.storage.local.get({ searches: [] }, function(result) {
      callback(result.searches);
    });
  }

  // Function to display search queries in the popup
  function displaySearchQueries(searches, showStarredOnly = false) {
    const searchLists = {
      "Urgent Reminders": document.getElementById('search-list-urgent-reminders'),
      "Skills to Develop": document.getElementById('search-list-skills-to-develop'),
      "Inspirations": document.getElementById('search-list-inspirations'),
      "Levels to Achieve": document.getElementById('search-list-levels-to-achieve'),
      "4 4 4 Ps": document.getElementById('search-list-444-ps'),
      "Productivity": document.getElementById('search-list-productivity'),
      "ELA": document.getElementById('search-list-ela'),
      "Math": document.getElementById('search-list-math'),
      "Science": document.getElementById('search-list-science'),
      "History": document.getElementById('search-list-history'),
      "Politics": document.getElementById('search-list-politics'),
      "Current Events": document.getElementById('search-list-current-events'),
      "Neuroscience": document.getElementById('search-list-neuroscience'),
      "Sustainability": document.getElementById('search-list-sustainability'),
      "Vohra": document.getElementById('search-list-vohra'),
      "Debate": document.getElementById('search-list-debate'),
      "Computer Science": document.getElementById('search-list-computer-science'),
      "APs": document.getElementById('search-list-aps'),
      "Science Olympiad": document.getElementById('search-list-science-olympiad'),
      "Starred Messages": document.getElementById('search-list-starred') // New list for starred messages
    };

    // Clear all search lists
    Object.values(searchLists).forEach(searchList => {
      searchList.innerHTML = '';
    });

    // Populate the respective search lists with saved searches
    searches.forEach((search, index) => {
      const category = search.category;

      if (showStarredOnly) {
        if (search.starred) {
          const starredListItem = createListItem(search, index);
          searchLists["Starred Messages"].appendChild(starredListItem);
        }
      } else {
        if (category && searchLists[category]) {
          const listItem = createListItem(search, index);
          searchLists[category].appendChild(listItem);

          if (search.starred) {
            const starredListItem = createListItem(search, index);
            searchLists["Starred Messages"].appendChild(starredListItem);
          }
        }
      }
    });
  }

  // Function to create a list item
  function createListItem(search, index) {
    const listItem = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.dataset.index = index; // Store the index in a data attribute
    listItem.appendChild(checkbox);

    const queryText = document.createElement('span');
    queryText.textContent = ` ${search.query} (${formatTimestamp(search.timestamp)})`;
    queryText.style.cursor = 'pointer';
    queryText.dataset.index = index; // Store the index in a data attribute
    queryText.addEventListener('click', toggleStarred);
    listItem.appendChild(queryText);

    if (search.starred) { // Check if the message is starred
      listItem.classList.add('starred'); // Apply styling for starred messages
    }

    return listItem;
  }

  // Function to format timestamp
  // Function to format timestamp
  function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month (0-indexed)
    const day = date.getDate().toString().padStart(2, '0'); // Day of the month
    const hours = date.getHours().toString().padStart(2, '0'); // Hours
    const minutes = date.getMinutes().toString().padStart(2, '0'); // Minutes
    return `${month}/${day}, ${hours}:${minutes}`;
  }


  // Function to handle viewing starred messages
  document.getElementById('view-starred-btn').addEventListener('click', function() {
    getSavedSearches(function(searches) {
      displaySearchQueries(searches, true); // Display only starred messages
    });
  });

  // Function to toggle the starred state of a message
  function toggleStarred(event) {
    const index = event.target.dataset.index;
    getSavedSearches(function(searches) {
      searches[index].starred = !searches[index].starred;
      chrome.storage.local.set({ searches: searches }, function() {
        displaySearchQueries(searches); // Refresh the display
      });
    });
  }

  // Function to delete selected search queries
  document.getElementById('delete-btn').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    getSavedSearches(function(searches) {
      const remainingSearches = searches.filter((_, index) => !checkboxes[index].checked);
      chrome.storage.local.set({ searches: remainingSearches }, function() {
        displaySearchQueries(remainingSearches); // Refresh the display
      });
    });
  });
  document.getElementById('delete-btn1').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    getSavedSearches(function(searches) {
      const remainingSearches = searches.filter((_, index) => !checkboxes[index].checked);
      chrome.storage.local.set({ searches: remainingSearches }, function() {
        displaySearchQueries(remainingSearches); // Refresh the display
      });
    });
  });

  document.getElementById('delete-btn2').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    getSavedSearches(function(searches) {
      const remainingSearches = searches.filter((_, index) => !checkboxes[index].checked);
      chrome.storage.local.set({ searches: remainingSearches }, function() {
        displaySearchQueries(remainingSearches); // Refresh the display
      });
    });
  });

  document.getElementById('delete-btn3').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    getSavedSearches(function(searches) {
      const remainingSearches = searches.filter((_, index) => !checkboxes[index].checked);
      chrome.storage.local.set({ searches: remainingSearches }, function() {
        displaySearchQueries(remainingSearches); // Refresh the display
      });
    });
  });

  document.getElementById('delete-btn4').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    getSavedSearches(function(searches) {
      const remainingSearches = searches.filter((_, index) => !checkboxes[index].checked);
      chrome.storage.local.set({ searches: remainingSearches }, function() {
        displaySearchQueries(remainingSearches); // Refresh the display
      });
    });
  });

  document.getElementById('delete-btn5').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    getSavedSearches(function(searches) {
      const remainingSearches = searches.filter((_, index) => !checkboxes[index].checked);
      chrome.storage.local.set({ searches: remainingSearches }, function() {
        displaySearchQueries(remainingSearches); // Refresh the display
      });
    });
  });

  document.getElementById('delete-btn6').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    getSavedSearches(function(searches) {
      const remainingSearches = searches.filter((_, index) => !checkboxes[index].checked);
      chrome.storage.local.set({ searches: remainingSearches }, function() {
        displaySearchQueries(remainingSearches); // Refresh the display
      });
    });
  });

  document.getElementById('delete-btn7').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    getSavedSearches(function(searches) {
      const remainingSearches = searches.filter((_, index) => !checkboxes[index].checked);
      chrome.storage.local.set({ searches: remainingSearches }, function() {
        displaySearchQueries(remainingSearches); // Refresh the display
      });
    });
  });

  document.getElementById('delete-btn8').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    getSavedSearches(function(searches) {
      const remainingSearches = searches.filter((_, index) => !checkboxes[index].checked);
      chrome.storage.local.set({ searches: remainingSearches }, function() {
        displaySearchQueries(remainingSearches); // Refresh the display
      });
    });
  });

  document.getElementById('delete-btn9').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    getSavedSearches(function(searches) {
      const remainingSearches = searches.filter((_, index) => !checkboxes[index].checked);
      chrome.storage.local.set({ searches: remainingSearches }, function() {
        displaySearchQueries(remainingSearches); // Refresh the display
      });
    });
  });

  document.getElementById('delete-btn10').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    getSavedSearches(function(searches) {
      const remainingSearches = searches.filter((_, index) => !checkboxes[index].checked);
      chrome.storage.local.set({ searches: remainingSearches }, function() {
        displaySearchQueries(remainingSearches); // Refresh the display
      });
    });
  });

  document.getElementById('delete-btn11').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    getSavedSearches(function(searches) {
      const remainingSearches = searches.filter((_, index) => !checkboxes[index].checked);
      chrome.storage.local.set({ searches: remainingSearches }, function() {
        displaySearchQueries(remainingSearches); // Refresh the display
      });
    });
  });

  document.getElementById('delete-btn12').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    getSavedSearches(function(searches) {
      const remainingSearches = searches.filter((_, index) => !checkboxes[index].checked);
      chrome.storage.local.set({ searches: remainingSearches }, function() {
        displaySearchQueries(remainingSearches); // Refresh the display
      });
    });
  });

  document.getElementById('delete-btn13').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    getSavedSearches(function(searches) {
      const remainingSearches = searches.filter((_, index) => !checkboxes[index].checked);
      chrome.storage.local.set({ searches: remainingSearches }, function() {
        displaySearchQueries(remainingSearches); // Refresh the display
      });
    });
  });

  document.getElementById('delete-btn14').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    getSavedSearches(function(searches) {
      const remainingSearches = searches.filter((_, index) => !checkboxes[index].checked);
      chrome.storage.local.set({ searches: remainingSearches }, function() {
        displaySearchQueries(remainingSearches); // Refresh the display
      });
    });
  });

  document.getElementById('delete-btn15').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    getSavedSearches(function(searches) {
      const remainingSearches = searches.filter((_, index) => !checkboxes[index].checked);
      chrome.storage.local.set({ searches: remainingSearches }, function() {
        displaySearchQueries(remainingSearches); // Refresh the display
      });
    });
  });

  document.getElementById('delete-btn16').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    getSavedSearches(function(searches) {
      const remainingSearches = searches.filter((_, index) => !checkboxes[index].checked);
      chrome.storage.local.set({ searches: remainingSearches }, function() {
        displaySearchQueries(remainingSearches); // Refresh the display
      });
    });
  });

  document.getElementById('delete-btn17').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    getSavedSearches(function(searches) {
      const remainingSearches = searches.filter((_, index) => !checkboxes[index].checked);
      chrome.storage.local.set({ searches: remainingSearches }, function() {
        displaySearchQueries(remainingSearches); // Refresh the display
      });
    });
  });
  
  document.getElementById('delete-btn18').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    getSavedSearches(function(searches) {
      const remainingSearches = searches.filter((_, index) => !checkboxes[index].checked);
      chrome.storage.local.set({ searches: remainingSearches }, function() {
        displaySearchQueries(remainingSearches); // Refresh the display
      });
    });
  });
  
  document.getElementById('delete-btn19').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    getSavedSearches(function(searches) {
      const remainingSearches = searches.filter((_, index) => !checkboxes[index].checked);
      chrome.storage.local.set({ searches: remainingSearches }, function() {
        displaySearchQueries(remainingSearches); // Refresh the display
      });
    });
  });
  

  // Retrieve saved search queries and display them initially
  getSavedSearches(displaySearchQueries);
});
