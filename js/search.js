(function () {
  function displaySearchResults(results, store) {
    var searchResults = document.getElementById('search-results');
    if (results.length) {
      var responseResults = document.getElementById('response-results');
      // Are there any results?
      var appendString = '';
      var listResponse = [];

      for (var i = 0; i < results.length; i++) {
        // Iterate over the results
        var item = store[results[i].ref];
        appendString += '<li> <a href="' + item.url + '"><h3>' + item.title + '</h3></a>';
        appendString += '<p>' + item.content.substring(0, 300) + '...</p></li>';

        if (i < 10) {
          listResponse.push({
            itemid: 're' + i,
            url: item.url,
            title: item.title,
            content: item.content.substring(0, 200)
          });
        }
      }

      appendString +=
        '<br><h3 class="text-more-result">Para más resultados por favor intente con otro término.</h3>';

      searchResults.innerHTML = appendString;
      responseResults.innerHTML = listResponse.length > 0 ? JSON.stringify(listResponse) : '';
    } else {
      searchResults.innerHTML = '<li>No hay resultados.</li>';
    }
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }
  var searchTerm = getQueryVariable('query');

  if (searchTerm) {
    document.getElementById('search-box').setAttribute('value', searchTerm);

    var idx = lunr(function () {
      this.field('title', { boost: 10 });
      this.field('content');
    });
    var results;
    for (var key in window.store) {
      idx.add({
        id: key,
        title: window.store[key].title,
        author: window.store[key].author,
        category: window.store[key].category,
        content: window.store[key].content,
      });

      results = idx.search(searchTerm);
      //limit records to improve search performance
      if (results.length == 40) {
        break;
      }
    }
    displaySearchResults(results, window.store);
  }
})();
