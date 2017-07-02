exports.config = {
  framework: 'custom',

  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  // require feature files
  specs: [
    'lib/config/test/e2e/features/**/*.feature' // accepts a glob
  ],

  cucumberOpts: {
    // require step definitions
    require: [
      'lib/config/test/e2e/steps/**/*.steps.js', // accepts a glob
      'lib/config/test/e2e/steps/**/hooks.js',
      'lib/config/test/e2e/steps/**/timout.conf.js'
    ]
  }
};