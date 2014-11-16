require.config({
  paths: {
    "jquery": "vendor/jquery/dist/jquery",
    "underscore": "vendor/underscore-amd/underscore",
    "backbone": "vendor/backbone-amd/backbone",
    "typedjs": "vendor/typed.js/js/typed"
  }
});

require(['views/app'], function(AppView) {
  new AppView;
});
