function search(e) {
  var input = "";
  if(event.key === 'Enter') {
    //alert(e.value);
    var temp =e.value;
    //console.log(temp); 
    input = temp;
    //console.log(input);

    //first get the artist id by sending a request to the API with the artist name
    var napster = "https://api.napster.com//v2.2/artists/" + temp;
    $.ajax({
      url: napster,
      method: "GET",
      headers: {
        apikey: "MGE4NWY2OWQtMWEyOC00NjBjLWEzZTUtZDNjY2M2MmM3MTUw"
      },
    }).then(function(response) {
      //console.log(response.artists[0].id);
      var artistID = response.artists[0].id;
    //console.log(artistID);
      var napster = "https://api.napster.com//v2.2/artists/" + artistID + "/tracks/top";
      $.ajax({
        url: napster,
        method: "GET",
        headers: {
          apikey: "MGE4NWY2OWQtMWEyOC00NjBjLWEzZTUtZDNjY2M2MmM3MTUw"
        },
      }).then(function(response) {
        console.log(  );
        //console.log(response.tracks[4].previewURL);
        var previewSong = response.tracks[4].previewURL;
        $("#songPreview").append("<source src=" + response.tracks[4].previewURL + "/>");

        var image = "http://direct.napster.com/imageserver/v2/artists/" + artistID + "/images/356x237.jpg";
        console.log(image);
        $("#img").append("<img src=" + image + "/>");
      });
    });
  }
}
//once oyu get artist ID, plug into ,mp3 call 
//var napster = "https://api.napster.com/v2.2/artists/top";  /v2.2/artists/{id}/tracks/top
//var napster = "https://api.napster.com/v2.2/artists/sia";
//var napster = "https://api.napster.com//v2.2/artists/" + artistID + "/tracks/top";
//  var napster = "https://api.napster.com//v2.2/artists/art.58977/tracks/top";
//  $.ajax({
//    url: napster,
//    method: "GET",
//    headers: {
//      apikey: "MGE4NWY2OWQtMWEyOC00NjBjLWEzZTUtZDNjY2M2MmM3MTUw"
//    },
//  }).then(function(response) {
  
//    console.log(response.tracks[4].previewURL);
//    var previewSong = response.tracks[4].previewURL;
//    $("#songPreview").append("<source src=" + response.tracks[4].previewURL + "/>");
//  });
