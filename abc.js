function getData() {
    var url = 'https://api.themoviedb.org/3/movie/popular?api_key=b93f5439608f8df1ce076d0b03efaef0';
  
    fetch(url).then(function(response) {
        if (response.ok) {
          return response.json(); 
        }
        throw new Error('Error: ' + response.status);
      })
      .then(function(data) {
        var dataContainer = document.getElementById('data-container');
        data.results.forEach(function(movie) {
          var card = document.createElement('div');
          card.className = 'card';
  
          var image = document.createElement('img');
          image.src = 'https://image.tmdb.org/t/p/w200' + movie.poster_path;
          image.alt = movie.title;
          card.appendChild(image);
  
          var title = document.createElement('div');
          title.className = 'card-title';
          title.textContent = movie.title;
          card.appendChild(title);
  
          dataContainer.appendChild(card);
        });
      })
      .catch(function(error) {
        console.log(error);
      });
      
  }
  
  getData();

function getDataSearch(searchQuery) {
  var url = 'https://api.themoviedb.org/3/search/movie?api_key=b93f5439608f8df1ce076d0b03efaef0&query=' + encodeURIComponent(searchQuery);

  fetch(url)
    .then(function(response) {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Error: ' + response.status);
    })
    .then(function(data) {
      var dataContainer = document.getElementById('data-container');
      dataContainer.innerHTML = '';
      data.results.forEach(function(movie) {
        var card = document.createElement('div');
        card.className = 'card';

        var image = document.createElement('img');
        image.src = 'https://image.tmdb.org/t/p/w200' + movie.poster_path;
        image.alt = movie.title;
        card.appendChild(image);

          var title = document.createElement('div');
          title.className = 'card-title';
          title.textContent = movie.title;
          card.appendChild(title);
  

        dataContainer.appendChild(card);
      });
    })
    .catch(function(error) {
      console.log(error);
    });
}

function handleFormSubmit(event) {
  event.preventDefault();

  var searchInput = document.getElementById('search-input');
  var searchQuery = searchInput.value.trim();

  if (searchQuery !== '') {
    getDataSearch(searchQuery);
  }
}

var searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', handleFormSubmit);
