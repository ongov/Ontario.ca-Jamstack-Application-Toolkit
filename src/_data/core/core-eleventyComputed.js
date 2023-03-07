var { googleTagManagerID: appGlobalsGtmId } = require('../app/app-globals')();

module.exports = {
  enDateFormatPublished: function () {
    return Intl.DateTimeFormat('en-CA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC',
    }).format;
  },

  enDateFormatUpdated: function () {
    return Intl.DateTimeFormat('en-CA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'America/Toronto',
    }).format;
  },

  frDateFormatPublished: function () {
    return Intl.DateTimeFormat('fr-CA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC',
    }).format;
  },

  frDateFormatUpdated: function () {
    return Intl.DateTimeFormat('fr-CA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'America/Toronto',
    }).format;
  },

  googleTagManagerID: function () {
    var envGtmId = process.env.GOOGLE_TAGMANAGER_ID;
    var gtmId = envGtmId === undefined ? appGlobalsGtmId : envGtmId;
    return gtmId;
  },
};
