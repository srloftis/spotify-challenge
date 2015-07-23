var data;
var baseSongs = 'https://api.spotify.com/v1/search?type=track&query='
var baseArtists = 'https://api.spotify.com/v1/search?type=artist&query='
var myApp = angular.module('myApp', [])

var myCtrl = myApp.controller('myCtrl', function($scope, $http) {
  $scope.audioObject = {}
  $scope.song
  $scope.name
  
  $scope.getSongs = function() {
    $http.get(baseSongs + $scope.track).success(function(response){
      data = $scope.tracks = response.tracks.items  
	  $scope.song = true;
	  $scope.songForm.$setPristine(true)
    })
  }
  $scope.getArtist = function() {
    $http.get(baseArtists + $scope.artist).success(function(response){
      data = $scope.artists = response.artists.items   
	$scope.song = false;
	$scope.songForm.$setPristine(true)
    })
  }
  $scope.getArtistSongs = function(name) {
    $http.get(baseSongs + name).success(function(response){
      data = $scope.tracks = response.tracks.items  
	  $scope.song = true;
	  $scope.songForm.$setPristine(true)
    })
  }
  
  $scope.play = function(song) {
    if($scope.currentSong == song) {
      $scope.audioObject.pause()
      $scope.currentSong = false
      return
    }
    else {
      if($scope.audioObject.pause != undefined) $scope.audioObject.pause()
      $scope.audioObject = new Audio(song);
      $scope.audioObject.play()  
      $scope.currentSong = song
    }
  }
})

// Add tool tips to anything with a title property
$('body').tooltip({
    selector: '[title]'
});

//links
//https://api.spotify.com/v1/search?type=artist&query=justin
//https://api.spotify.com/v1/search?type=track&query=love


