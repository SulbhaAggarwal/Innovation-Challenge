function loadContent(tab) {
    // Define URLs for each tab
    let url;
    if (tab === 'Home/dashboard') url = '/dashboard';
    if (tab === 'Applications') url = '/application';
    if (tab === 'Service Ids') url = '/service';
  
    // Fetch content from the server and load it into #content div
    fetch(url)
      .then(response => response.text())
      .then(data => {
        document.getElementById('content').innerHTML = data;
      })
      .catch(error => console.error('Error loading content:', error));
  }