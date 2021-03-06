define(function () {
  var URL_MAIN = "https://images-api.nasa.gov/search?q=";

  var makeURL = function(str) {
    return URL_MAIN + str.split(' ').join('%20') + "&page=1";
  };


  var getImages = function(str, successCallback, errorCallback) {	
    var url = makeURL(str);
    appService.makeHttpRequest(
      url, 
      function(responseData){
        var imgLinks = responseData.collection.items.map(function(item) {
          return (item.links) ? item.links[0].href : '';
        });                  	
        successCallback(imgLinks);
      }, 
      errorCallback
    );
  };

  return {
    getImages: getImages,
  };
});