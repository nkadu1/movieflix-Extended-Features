// Karma configuration
// Generated on Mon Sep 12 2016 18:37:21 GMT-0400 (Eastern Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'bower_components/angular/angular.js',
       'bower_components/angular-bootstrap/ui-bootstrap.js',
      'bower_components/angular-messages/angular-messages.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/ngInfiniteScroll/build/ng-infinite-scroll.js',
      'bower_components/SHA-1/sha1.js',
      'bower_components/videogular/videogular.js',
      'bower_components/videogular-angulartics/vg-analytics.js',
      'bower_components/videogular-buffering/vg-buffering.js',
      'bower_components/videogular-controls/vg-controls.js',
      'bower_components/videogular-ima-ads/vg-ima-ads.js',
      'bower_components/videogular-overlay-play/vg-overlay-play.js',
      'bower_components/videogular-poster/vg-poster.js',
      'bower_components/waypoints/vg-waypoints.js',
      'src/app/app.js',
      'src/app/app.constant.js',
      'src/app/controllers/login.controller.js',
      'src/app/controllers/movieDetails.controller.js',
      'src/app/controllers/movieList.controllers.js',
      'src/app/services/movie.service.js',
      'src/app/services/user.service.js',

      'src/test/controllers/login.controller.spec.js',
      'src/test/controllers/movieDetails.controller.spec.js',
      'src/test/controllers/movieList.controllers.spec.js',
      'src/test/services/movie.service.spec.js',
      'src/test/services/user.service.spec.js',



    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
