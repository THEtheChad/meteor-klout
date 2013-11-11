Package.describe({
  summary: "Klout API service for Meteor"
});

Package.on_use(function(api) {
  api.export && api.export('Klout');

  api.use('http', 'server');
  api.add_files('lib/klout.js', 'server');
});