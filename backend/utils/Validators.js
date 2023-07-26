const isUrlValid = require('url-validation');
module.exports.validatePost = (
    title,
    author,
    ISNB,
    genres,
    url,
  ) => {
    const errors = {};
    if (title.trim() === '') {
      errors.title = 'title must not be empty';
    }
    if (author.trim() === '' || !isNaN(author)) {
        errors.author = 'author must not be empty';
      }
      if (ISNB.trim() === '' || isNaN(ISNB)) {
        errors.ISNB = 'ISNB must not be empty';
      }
      if (genres.trim() === '' || !isNaN(genres)) {
        errors.genres = 'genres must not be empty';
      }
      //const urlPattern = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
      if (url.trim() === '' ) {
        errors.url = 'url is not valid';
      }
    return {
      errors,
      valid: Object.keys(errors).length < 1
    };
  };