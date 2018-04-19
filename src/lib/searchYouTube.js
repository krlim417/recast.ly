var searchYouTube = ({key, query, max = 5}, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    key: key,
    maxResults: max,
    part: 'snippet',
    q: query,
    type: 'video',
    videoEmbeddable: 'true'
  }).done(({items}) => {
    if (callback) {
      callback(items);
    }
  }).fail(({responseJSON}) => {
    responseJSON.error.errors.forEach((err) =>
      console.error(err)
    );
  });
};

window.searchYouTube = searchYouTube;
