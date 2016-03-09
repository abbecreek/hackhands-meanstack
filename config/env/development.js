var port = 1337;

module.exports = {
  port: port,
  db: 'mongodb://localhost/todos',
  facebook: {
    clientID: '1688185348088005',
    clientSecret: '78ef2324ba0c33260f61f09066370339',
    callbackURL: 'http://localhost:' + port + '/oauth/facebook/callback'
  },
  twitter: {
    clientID: 'oiggrWyy7cFLaocB5rJmxnhlX',
    clientSecret: 'WqFAOJXBsUghzPeywV9lElJrLCa369sT3PDZ9FPL7GTRKm18nQ',
    callbackURL: 'http://localhost:1337/oauth/twitter/callback'
  }
};
