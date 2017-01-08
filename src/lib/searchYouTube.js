var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search', 
    type: 'GET',
    data: {
      query: options.query,
      key: options.key,
      maxResults: options.max,
      part: 'snippet',
      type: 'video'
    },
    // contentType: 'application/json',
    success: function ( data ) {
      callback(data.items);

    },
    error: function (data) {


      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('Failed the get resquest.Failed to get message', data);
    }
  });

};

window.searchYouTube = searchYouTube;
