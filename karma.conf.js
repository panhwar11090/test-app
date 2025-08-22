// karma.conf.js
module.exports = function (config) {
  config.set({
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    browsers: ['ChromeHeadlessNoSandbox'],   // <— use this in CI
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--disable-gpu'
        ],
      },
    },
    junitReporter: {
      outputDir: 'reports/junit',
      outputFile: 'test-results.xml',
      useBrowserName: false,
    },
    coverageReporter: {
      dir: 'reports/coverage',
      reporters: [
        { type: 'html' },
        { type: 'lcovonly', subdir: '.', file: 'lcov.info' },
        { type: 'text-summary' }
      ],
    },
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-junit-reporter'),
      require('karma-coverage'),
    ],
    reporters: ['progress', 'kjhtml', 'junit', 'coverage'],
    singleRun: true,
  });
};
