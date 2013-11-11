Package.describe({
  summary: "Klout API service for Meteor"
});

Package.on_use(function(api){
  api.use('http', 'server');
  api.export('Klout');
  api.add_files('klout.js', 'server');
});

Package.on_test(function(api){

});