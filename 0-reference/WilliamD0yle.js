<!DOCTYPE html>
<html >
<head>
  <meta charset="UTF-8">
  <title>WatchList</title>
  
<link rel='stylesheet prefetch' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css'>
<link rel='stylesheet prefetch' href='https://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css'>
<link rel='stylesheet prefetch' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css'>
<link rel="stylesheet" href="css/style.css">  
</head>

<body>
  <div class="container-fluid">
  <div class="row text-center ">
    <nav class="navbar navbar-inverse">
      <h1>Movie <span>DB</span></h1>
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
<span class="sr-only">Toggle navigation</span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>
</button>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav selection">
            <li id="movie" class="lead custom"><a href="#">Movies</a></li>
            <li id="tv" class="lead custom"><a href="#">TV Shows</a></li>
            <li role="presentation" class="dropdown dropmovies">
              <a class="dropdown-toggle lead" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
Genre<span class="caret"></span>
</a>
              <ul class="dropdown-menu ">
                <li><a href="#" onclick="sortMovies('action')">Action</a></li>
                <li><a href="#" onclick="sortMovies('adventure')">Adventure</a></li>
                <li><a href="#" onclick="sortMovies('animation')">Animation</a></li>
                <li><a href="#" onclick="sortMovies('comedy')">Comedy</a></li>
                <li><a href="#" onclick="sortMovies('crime')">Crime</a></li>
                <li><a href="#" onclick="sortMovies('documentary')">Documentary</a></li>
                <li><a href="#" onclick="sortMovies('drama')">Drama</a></li>
                <li><a href="#" onclick="sortMovies('family')">Family</a></li>
                <li><a href="#" onclick="sortMovies('fantasy')">Fantasy</a></li>
                <li><a href="#" onclick="sortMovies('foreign')">Foreign</a></li>
                <li><a href="#" onclick="sortMovies('history')">History</a></li>
                <li><a href="#" onclick="sortMovies('horror')">Horror</a></li>
                <li><a href="#" onclick="sortMovies('music')">Music</a></li>
                <li><a href="#" onclick="sortMovies('mystery')">Mystery</a></li>
                <li><a href="#" onclick="sortMovies('romance')">Romance</a></li>
                <li><a href="#" onclick="sortMovies('science fiction')">Science Fiction</a></li>
                <li><a href="#" onclick="sortMovies('tv movie')">TV Movie</a></li>
                <li><a href="#" onclick="sortMovies('thriller')">Thriller</a></li>
                <li><a href="#" onclick="sortMovies('war')">War</a></li>
                <li><a href="#" onclick="sortMovies('western')">Western</a></li>
              </ul>
            </li>
            <li role="presentation" class="dropdown dropmovies">
              <a class="dropdown-toggle lead dropmovies" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
Sort by<span class="caret"></span>
</a><ul class="dropdown-menu">
                <li><a href="#" onclick="sortMovies('popularity')">Most Popular</a></li>
                <li><a href="#" onclick="sortMovies('rating')">Rating</a></li>
                <li><a href="#" onclick="sortMovies('grossing')">Grossing</a></li>
              </ul>
            </li>
            <li role="presentation" class="dropdown droptv">
              <a class="dropdown-toggle lead " data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
Genre<span class="caret"></span>
</a>
              <ul class="dropdown-menu">
                <li><a href="#" onclick="sortTv('action')">Action</a></li>
                <li><a href="#" onclick="sortTv('adventure')">Adventure</a></li>
                <li><a href="#" onclick="sortTv('animation')">Animation</a></li>
                <li><a href="#" onclick="sortTv('comedy')">Comedy</a></li>
                <li><a href="#" onclick="sortTv('crime')">Crime</a></li>
                <li><a href="#" onclick="sortTv('documentary')">Documentary</a></li>
                <li><a href="#" onclick="sortTv('drama')">Drama</a></li>
                <li><a href="#" onclick="sortTv('family')">Family</a></li>
                <li><a href="#" onclick="sortTv('fantasy')">Fantasy</a></li>
                <li><a href="#" onclick="sortTv('foreign')">Foreign</a></li>
                <li><a href="#" onclick="sortTv('history')">History</a></li>
                <li><a href="#" onclick="sortTv('horror')">Horror</a></li>
                <li><a href="#" onclick="sortTv('music')">Music</a></li>
                <li><a href="#" onclick="sortTv('mystery')">Mystery</a></li>
                <li><a href="#" onclick="sortTv('romance')">Romance</a></li>
                <li><a href="#" onclick="sortTv('science fiction')">Science Fiction</a></li>
                <li><a href="#" onclick="sortTv('tv movie')">TV Movie</a></li>
                <li><a href="#" onclick="sortTv('thriller')">Thriller</a></li>
                <li><a href="#" onclick="sortTv('war')">War</a></li>
                <li><a href="#" onclick="sortTv('western')">Western</a></li>
              </ul>
            </li>
            <li role="presentation" class="dropdown droptv">
              <a class="dropdown-toggle lead " data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
Sort by<span class="caret"></span>
</a><ul class="dropdown-menu">
                <li><a href="#" onclick="sortTv('popularity')">Most Popular</a></li>
                <li><a href="#" onclick="sortTv('rating')">Rating</a></li>
                <li><a href="#" onclick="sortTv('grossing')">Grossing</a></li>
              </ul>
            </li>
          </ul>
          <form class="navbar-form navbar-right">
            <div class="search">
              <input type="text" id="search" placeholder="Search movie, tv show">
            </div>
          </form>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <div class="row text-center main">
  </div>
  <div class="row text-center row-eq-height bottom">
    <div class="col-sm-12">
      <i class="fa fa-plus-circle more" aria-hidden="true"></i>
    </div>
    <div class="col-sm-12">
      <i class="fa fa-plus-circle moreTV" aria-hidden="true"></i>
    </div>
  </div>
</div>
 <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.0/jquery-ui.min.js'></script>
<script src='https://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js'></script>
<script src='http://cdnjs.cloudflare.com/ajax/libs/waypoints/1.1.6/waypoints.min.js'></script>

    <script src="js/index.js"></script>

</body>
</html>
-----------------
/*
TO DO LIST
1.fix poster loading by changing the url to the smaller img size - done
2.add genre and category sorting to tv shows 
3.add more info to tv and movie info screens - done
4.fix css for large and small screens - done 
5.for loop to show all genres for movies - done
6.add cast info to movie and tv info screens - done
7.add imdb link to tv and movies - done
8.add star rating - done
9.add placeholder poster and background images:poster done packdrop not done
10.add tv search
11.get multi search working
*/
var next = 1;
var nextTV = 1;
//key links
var posterPaths = "http://image.tmdb.org/t/p/w500";
var backgroundPaths = "http://image.tmdb.org/t/p/w1000";
var url = "https://api.themoviedb.org/3/discover/movie?";
var key = "&api_key=84ade81a32ab2ef4395fd367ad4ea5be";
var urlTV = "https://api.themoviedb.org/3/discover/tv?";
var moreTVinfo = "https://api.themoviedb.org/3/tv/  +tvshow id+  ?&api_key=84ade81a32ab2ef4395fd367ad4ea5be";
var movieCast = "https://api.themoviedb.org/3/movie/";
var actorInfo = "https://api.themoviedb.org/3/discover/movie?&with_cast=";
var imdbLink = "http://www.imdb.com/title/";
var date = new Date();
//functiomn for sorting the movie - massive if statement. needs to be more refined
function sortMovies(choice) {
  next=0;
  $(".movies").remove();
  if (choice === "rating") {
    choices="vote_count.gte=50&sort_by=vote_average.desc";
    showMovie("vote_count.gte=50&sort_by=vote_average.desc");
  } else if (choice === "grossing") {
    choices="sort_by=revenue.desc";
    showMovie("sort_by=revenue.desc");
  }
  // Genres sort by list start
  else if (choice === "action") {
    choices="&with_genres=28";
    showMovie("&with_genres=28");
  } else if (choice === "adventure") {
    choices="&with_genres=12";
    showMovie("&with_genres=12");
  } else if (choice === "animation") {
    choices="&with_genres=16";
    showMovie("&with_genres=16");
  } else if (choice === "comedy") {
    choices="&with_genres=35";
    showMovie("&with_genres=35");
  } else if (choice === "crime") {
    choices="&with_genres=80";
    showMovie("&with_genres=80");
  } else if (choice === "documentary") {
    choices="&with_genres=99";
    showMovie("&with_genres=99");
  } else if (choice === "drama") {
    choices="&with_genres=18";
    showMovie("&with_genres=18");
  } else if (choice === "family") {
    choices="&with_genres=10751";
    showMovie("&with_genres=10751");
  } else if (choice === "fantasy") {
    choices="&with_genres=14";
    showMovie("&with_genres=14");
  } else if (choice === "foreign") {
    choices="&with_genres=10769";
    showMovie("&with_genres=10769");
  } else if (choice === "history") {
    choices="&with_genres=36";
    showMovie("&with_genres=36");
  } else if (choice === "horror") {
    choices="&with_genres=27";
    showMovie("&with_genres=27");
  } else if (choice === "music") {
    choices="&with_genres=10402";
    showMovie("&with_genres=10402");
  } else if (choice === "mystery") {
    choices="&with_genres=9648";
    showMovie("&with_genres=9648");
  } else if (choice === "romance") {
    choices="&with_genres=10749";
    showMovie("&with_genres=10749");
  } else if (choice === "science fiction") {
    choices="&with_genres=878";
    showMovie("&with_genres=878");
  } else if (choice === "tv movie") {
    choices="&with_genres=10770";
    showMovie("&with_genres=10770");
  } else if (choice === "thriller") {
    choices="&with_genres=53";
    showMovie("&with_genres=53");
  } else if (choice === "war") {
    choices="&with_genres=10752";
    showMovie("&with_genres=10752");
  } else if (choice === "western") {
    choices="&with_genres=37";
    showMovie("&with_genres=37");
  }
  //genre ends
  else {
    choices="sort_by=popularity.desc";
    showMovie("sort_by=popularity.desc");
  }
}
//save as above but for tv
function sortTv(choice) {
  nextTV = 0;
  $(".tv").remove();
  if (choice === "rating") {
    choices="vote_count.gte=50&sort_by=vote_average.desc";
    showTv("vote_count.gte=50&sort_by=vote_average.desc");
  } else if (choice === "grossing") {
    choices="sort_by=revenue.desc";
    showTv("sort_by=revenue.desc");
  }
  // Genres sort by list start
  else if (choice === "action") {
    choices="&with_genres=28";
    showTv("&with_genres=28");
  } else if (choice === "adventure") {
    choices="&with_genres=12";
    showTv("&with_genres=12");
  } else if (choice === "animation") {
    choices="&with_genres=16";
    showTv("&with_genres=16");
  } else if (choice === "comedy") {
    choices="&with_genres=35";
    showTv("&with_genres=35");
  } else if (choice === "crime") {
    choices="&with_genres=80";
    showTv("&with_genres=80");
  } else if (choice === "documentary") {
    choices="&with_genres=99";
    showTv("&with_genres=99");
  } else if (choice === "drama") {
    choices="&with_genres=18";
    showTv("&with_genres=18");
  } else if (choice === "family") {
    choices="&with_genres=10751";
    showTv("&with_genres=10751");
  } else if (choice === "fantasy") {
    choices="&with_genres=14";
    showTv("&with_genres=14");
  } else if (choice === "foreign") {
    choices="&with_genres=10769";
    showTv("&with_genres=10769");
  } else if (choice === "history") {
    choices="&with_genres=36";
    showTv("&with_genres=36");
  } else if (choice === "horror") {
    choices="&with_genres=27";
    showTv("&with_genres=27");
  } else if (choice === "music") {
    choices="&with_genres=10402";
    showTv("&with_genres=10402");
  } else if (choice === "mystery") {
    choices="&with_genres=9648";
    showTv("&with_genres=9648");
  } else if (choice === "romance") {
    choices="&with_genres=10749";
    showTv("&with_genres=10749");
  } else if (choice === "science fiction") {
    choices="&with_genres=878";
    showTv("&with_genres=878");
  } else if (choice === "tv movie") {
    choices="&with_genres=10770";
    showTv("&with_genres=10770");
  } else if (choice === "thriller") {
    choices="&with_genres=53";
    showTv("&with_genres=53");
  } else if (choice === "war") {
    choices="&with_genres=10752";
    showTv("&with_genres=10752");
  } else if (choice === "western") {
    choices="&with_genres=37";
    showTv("&with_genres=37");
  }
  //genre ends
  else {
    choices="sort_by=popularity.desc";
    showTv("sort_by=popularity.desc");
  }
}
/// when enter is hit it starts the search 
function checkSubmit(e) {
  //if the enter is pressed
  if (e && e.keyCode == 13) {
    var searching = document.getElementById('search').value;
    search(searching);
    document.getElementById('search').value = "";
    return false;
  }
}

function search(search) {
  $(".movies").remove();
  $(".tv").remove();
  //use the url with the search query
  var searchurl = "https://api.themoviedb.org/3/search/multi?api_key=84ade81a32ab2ef4395fd367ad4ea5be&query=";
  //loop over the json data to obtain the info
  $.getJSON(searchurl + search, function(data) {
    for (var i = 0; i < data.results.length; i++) {
      //assign the info to variables
      var id = data.results[i].id;
      var title = data.results[i].name;
      var rating = data.results[i].vote_average;
      var poster = posterPaths + data.results[i].poster_path;
      var overview = data.results[i].overview;
      if (poster === "http://image.tmdb.org/t/p/w500null") {
          //if their is no poster dont show the movie
      }
      else if(overview == "null"){
        //dont show if the overview is null
      }
      else{
      //append the info to the html
      $(".main").append("<div class='col-sm-2 text-center movies m" + i + "' id='" + id + "'><div class='tiles'><img onclick='movieInfo(" + id + ")' src=" + poster + "><div class='ratings'><p class='lead rating'>" + ratin + " <i class='fa fa-star' aria-hidden='true'></i></p></div></div></div>");
      }
    }
  });
}

function showMovie(choice) {
  next++;
  $.getJSON(url + choice + key + "&page=" + next, function(data) {
    for (var i = 0; i < data.results.length; i++) {
      var id = data.results[i].id;
      var title = data.results[i].title;
      var overview = data.results[i].overview;
      var rating = data.results[i].vote_average;
      roundHalf(rating);

      function roundHalf(rating) {
        ratin = rating / 2;
        ratin = Math.round(ratin * 2) / 2;
      }
      var poster = posterPaths + data.results[i].poster_path;
      if (poster === "http://image.tmdb.org/t/p/w500null") {
          //if their is no poster dont show the movie
      }
      else if(overview == "null"){
        //dont show if the overview is null
      }
      else{
      $(".main").append("<div class='col-sm-2 text-center movies m" + i + "' id='" + id + "'><div class='tiles'><img onclick='movieInfo(" + id + ")' src=" + poster + "><div class='ratings'><p class='lead rating'>" + ratin + " <i class='fa fa-star' aria-hidden='true'></i></p></div></div></div>");
      }
    }
  });
}

var movieCast = "https://api.themoviedb.org/3/movie/";
var actorInfo = "https://api.themoviedb.org/3/discover/movie?&with_cast=";
260513
function movieInfo(id) {
  $.getJSON(movieCast + id + "/casts?" + key, function(json) {
    cast1 = json.cast[0].name;
    cast1id = json.cast[0].id;
    cast2 = json.cast[1].name;
    cast2id = json.cast[1].id;
    cast3 = json.cast[2].name;
    cast3id = json.cast[2].id;
    cast4 = json.cast[3].name;
    cast4id = json.cast[3].id;
    $(".movies").hide();
    $(".more").hide();
    var infoURL = "https://api.themoviedb.org/3/movie/" + id + "?&api_key=84ade81a32ab2ef4395fd367ad4ea5be";
    $.getJSON(infoURL, function(data) {
      var budget = "$" + data.budget;
      if (budget === "$0") {
        budget = "Budget not yet released";
      }
      var revenue = "$" + data.revenue;
      if (revenue === "$0") {
        revenue = "Revenue not yet released";
      }
      var release = data.release_date;
      var imdb = imdbLink + data.imdb_id;
      var runtime = data.runtime;
      var tagline = data.tagline;
      var title = data.title;
      var overview = data.overview;
      var poster = posterPaths + data.poster_path;
      if (poster === "http://image.tmdb.org/t/p/w1000null") {
        poster = "https://placeholdit.imgix.net/~text?txtsize=33&txt=No%20Poster%20Availible&w=250&h=350";
      }
      var backdrop = backgroundPaths + data.backdrop_path;
      if (data.genres.length > 3) {
        genre = data.genres[0].name + ", " + data.genres[1].name+ ", " + data.genres[2].name + ", " + data.genres[3].name;
      } else if (data.genres.length > 2) {
        genre = data.genres[0].name + ", " + data.genres[1].name + ", " + data.genres[2].name;
      } else if (data.genres.length > 1) {
        genre = data.genres[0].name + ", " + data.genres[1].name;
      } else {
        genre = data.genres[0].name;
      }
      $(".main").prepend("<div class='col-sm-12 overview'><div class='background'><img src=" + backdrop + "></div><div class='col-sm-4 over-poster'><img src=" + poster + "></div><div class='col-sm-8 text-left'><h1 class=''>" + title + "<span class='runtime'> - Runtime: " + runtime + "mins</span></h1><p class='lead tagline'><i>" + tagline + "</i></p><p class='lead text-left'>" + overview + "</p></div><div class='col-sm-2 text-left'><h2>Genre:</h2><p class='lead text-left'>" + genre + "</p></div><div class='col-sm-3 text-left cast'><h2 class='text-left'>Cast:</h2><p class='lead'><a onclick='showActor(" + cast1id + ")'>" + cast1 + "</a>, <a onclick='showActor(" + cast2id + ")'> " + cast2 + "</a>, <a onclick='showActor(" + cast3id + ")'>" + cast3 + "</a>, <a onclick='showActor(" + cast4id + ")'>" + cast4 + "</a></p></div><div class='col-sm-3 text-left facts'><h2>Facts &amp; Figures</h2><p class='lead'>Budget: " + budget + "</p><p class='lead'>Revenue: " + revenue + "</p></div><div id='hideMInfo' class='exit'><i onclick='exit(" + id + ")' class='fa fa-times-circle' aria-hidden='true'></i></div></div>");
    });
  });
}

function showActor(id) {
  $(".overview").hide();
  var next = 0;
  next++;
  $.getJSON(actorInfo + id + key + "&page=" + next, function(data) {
    for (var i = 0; i < data.results.length; i++) {
      var id = data.results[i].id;
      var title = data.results[i].title;
      var overview = data.results[i].overview;
      var rating = data.results[i].vote_average;
      roundHalf(rating);

      function roundHalf(rating) {
        ratin = rating / 2;
        ratin = Math.round(ratin * 2) / 2;
      }
      var poster = posterPaths + data.results[i].poster_path;
      if (poster === "http://image.tmdb.org/t/p/w500null") {
        poster = "https://placeholdit.imgix.net/~text?txtsize=33&txt=No%20Poster%20Availible&w=250&h=350";
      }
      $(".main").append("<div class='col-sm-2 text-center movies m" + i + "' id='" + id + "'><div class='tiles'><img onclick='movieInfo(" + id + ")' src=" + poster + "><div class='ratings'><p class='lead rating'>" + ratin + " <i class='fa fa-star' aria-hidden='true'></i></p></div></div></div>");
    }
  })
}

function showTv(choice) {
  nextTV++;
  console.log(url + choice + key + "&page=" + next);
  $.getJSON(urlTV + choice + key + "&page=" + nextTV, function(data) {
    for (var i = 0; i < data.results.length; i++) {
      var id = data.results[i].id;
      var title = data.results[i].name;
      var rating = data.results[i].vote_average;
      var overview = data.results[i].overview;
      roundHalf(rating);

      function roundHalf(rating) {
        ratin = rating / 2;
        ratin = Math.round(ratin * 2) / 2;
      }
      var poster = posterPaths + data.results[i].poster_path;
      if (poster === "http://image.tmdb.org/t/p/w500null") {
        poster = "https://placeholdit.imgix.net/~text?txtsize=33&txt=No%20Poster%20Availible&w=250&h=400";
      }
      if (poster === "http://image.tmdb.org/t/p/w500null") {
          //if their is no poster dont show the movie
      }
      else if(overview == "null"){
        //dont show if the overview is null
      }
      else{
      $(".main").append("<div class='col-sm-2 text-center tv t" + i + "' id='" + id + "'><div class='tiles'><img onclick='tvInfo(" + id + ")' src=" + poster + "><div class='ratings'><p class='lead rating'>" + ratin + " <i class='fa fa-star' aria-hidden='true'></i></p></div></div></div>");
      }
    }
  });
}

function tvInfo(id) {
  $(".movie").remove();
  $(".tv").hide();
  $(".moreTV").hide();
  var infoURL = "https://api.themoviedb.org/3/tv/" + id + "?&api_key=84ade81a32ab2ef4395fd367ad4ea5be";
  $.getJSON(infoURL, function(data) {
    var genre;
    if (data.genres.length > 3) {
      genre = data.genres[0].name + ", " + data.genres[1].name + ", " + data.genres[2].name + ", " + data.genres[3].name;
    } else if (data.genres.length > 2) {
      genre = data.genres[0].name + ", " + data.genres[1].name + ", " + data.genres[2].name;
    } else if (data.genres.length > 1) {
      genre = data.genres[0].name + ", " + data.genres[1].name;
    } else {
      genre = data.genres[0].name;
    }
    var seasons = data.seasons.length;
    var title = data.name;
    var rating = data.vote_average;
    var overview = data.overview;
    var poster = posterPaths + data.poster_path;
    if (poster === "https://image.tmdb.org/t/p/w500null") {
      poster = "https://placeholdit.imgix.net/~text?txtsize=33&txt=No%20Poster%20Availible&w=250&h=400";
    }
    var backdrop = backgroundPaths + data.backdrop_path;
    $(".main").prepend("<div class='col-sm-12 overview'><div class='background'><img src=" + backdrop + "></i></div><div class='col-sm-4 over-poster'><img src=" + poster + "></div><div class='col-sm-8 text-left'><h1 class=''>" + title + "</h1><p class='lead text-left'>" + overview + "</p></div><div class='col-sm-3 text-left'><h2>Genre:</h2><p class='lead text-left'>" + genre + "</p></div><div class='col-sm-5 text-left seasons'><h2>Season information:</h2><select class='col-sm-8 lead text-left season'></select></div><div id='hideMInfo' class='exit'><i onclick='exitTv(" + id + ")' class='fa fa-times-circle' aria-hidden='true'></div></div>");
    
    for (var i = 0; i < data.seasons.length; i++) {
      $(".season").prepend("<option onclick='seriesInfo("+data.seasons[i].id+","+data.seasons[i].season_number+")' value='"+data.seasons[i].season_number+"'>Season "+data.seasons[i].season_number+" </option>");
    }
     //var selected = $( ".season option:selected" ).value();
     //seriesInfo(data.seasons[i].id,selected);
  });
}

function seriesInfo(id,num){
  var seriesURL = "https://api.themoviedb.org/3/tv/"+id+"/season/"+num+"?&api_key=84ade81a32ab2ef4395fd367ad4ea5be";
  $.getJSON(seriesURL, function(data) {
    for(var i=0; i<data.episodes.length;i++){
      var seasonname = data.name;
      var seasonoverview = data.overview;
      var episode = data.episodes[i].name;
      var overview = data.episodes[i].overview;
      var airdate = data.episodes[i].air_date;
      
      $(".seasons").append("<div><p>"+episode+"</p><p>"+overview+"</p><p>"+airdate+"</p></div>");
    }
  });
}

$("#tv").click(function() {
  nextTV = 0;
  sortTv();
  $(".movies").remove();
  $(".overview").remove();
  $(".moreTV").show();
  $(".more").hide();
  $(".droptv").show();
  $(".dropmovies").hide();
});
$("#movie").click(function() {
  sortMovies();
  $(".tv").remove();
  $(".overview").remove();
  $(".more").show();
  $(".moreTV").hide();
  $(".dropmovies").show();
  $(".droptv").hide();
  next = 1;
});
$(".more").click(function() {
  showMovie(choices);
});
$(".moreTV").click(function() {
  showTv(choices);
});

function exit(id) {
  $(".overview").remove();
  $(".movies").show();
  $(".more").show( );
  window.location.hash = id;
}

function exitTv(id) {
  $(".overview").hide();
  $(".tv").show();
  $(".moreTV").show();
  window.location.hash = id;
}
sortMovies();
------------------
body {
  background-color: rgb(25, 25, 25);
}

h1 {
  color: #f2f2f2;
  font-weight: 100;
}

h2 {
  color: #f2f2f2;
  font-weight: 200;
}

h3 {
  color: #f2f2f2;
  font-weight: 100;
}
p{
 color: #f2f2f2;
}
a{
  cursor:pointer;
}
.lead{
  color: #f2f2f2;
  font-weight:200;
}
span {
  font-weight: 400;
}
.navbar {
  background-color: rgba(15,15,15,0.9);
}

.navbar a {
  color: #f2f2f2;
  font-weight: 200;
}
.over-poster img{
  width:100%;
  padding-top: 25px;
}
.main {
  background-color: rgb(22, 22, 22);
}
.search{
  background-color:rgb(255,255,255);
  color:rgb(5,5,5);
  font-size: 1.25em;
  cursor:pointer;
}
.search i{
  width:40px;
}
.rating {
  color:rgba(255,215,0,0.9);
  display:none;
}
.movies {
  margin:0;
  padding:0;
}
.tv {
  margin:0;
  padding:0;
}
.tiles img{
 /*height:317px;*/
  height:100%;
  width: 100%;
  border-radius: 4px;
  border: 3px solid #161616;
  cursor: pointer;
}
.tagline{
  font-weight:100;
}
.tiles img:hover {
  width: 100%;
  border-radius: 4px;
  border: 3px solid #4d4dff;
  opacity: 0.4;
  background: #FFFFFF;
}
nav ul li.droptv{
  display:none;
}

.tv img {
  width: 100%;
  border-radius: 4px;
  border: 3px solid #161616;
  cursor: pointer;
}

.tv img:hover {
  width: 100%;
  border-radius: 4px;
  border: 3px solid #4d4dff;
  opacity: 0.4;
  background: #FFFFFF;
}

.overview {
  padding: -10px 0 10px 0;
}
.overview .poster{
  padding-top: 20px;
  width:100%;
  height: auto;
  border-radius:4px;
  overflow: hidden;
}
.runtime{
  font-size:0.5em;
  font-weight:200;
  color:rgba(255,255,255,0.8);
}
.imdb img{
  width: 50px;
  height: auto;
}
.exit{
  position: absolute;
  top:-25px;
  left: 20px;
  color:rgba(255,102,102,0.9);
  font-size: 2em;
  font-weight:100;
  cursor:pointer;
}

.background img {
  position: absolute;
  left: 0;
  top: -25px;
  height: auto;
  width: 100% !important;
  overflow:hidden;
  opacity:0.2;
}
.more {
  color:rgba(255,102,102,0.9);
  font-size: 5em;
  cursor:pointer;
}
.more i:hover{
  color:rgba(240,202,202,0.9);
}
.bottom{
  height:100px;
}
.moreTV{
  display:none;
  color:rgba(255,102,102,0.9);
  font-size: 5em;
  cursor:pointer;
}