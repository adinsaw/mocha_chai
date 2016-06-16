// Karma configuration
// Generated on Tue Jun 14 2016 10:18:29 GMT-0500 (Central Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
  //    {pattern: 'node_modules/es6-shim/es6-shim.min.js', included: true, watched: true},
  {pattern: 'node_modules/traceur/bin/traceur-runtime.js', included: true, watched: true},
      {pattern: 'node_modules/reflect-metadata/Reflect.js', included: true, watched: true},
      {pattern: 'node_modules/zone.js/dist/zone.js', included: true, watched: true},
      {pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: true},
      {pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false},
      {pattern: 'node_modules/@angular/**/*.js', included: false, watched: false},
      {pattern: 'karma-test-shim.js', included: true, watched: true},

      {pattern: 'app/test/*.spec.js', included: false},
      {pattern: 'app/*.js', included: false}
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
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,
    reporters: ['junit'],
    junitReporter: {
      outputFile: 'test-results.xml'
    },
    
    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
