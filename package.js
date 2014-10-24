Package.describe({
  name: "spacejamio:loglevel",
  summary: "Minimal lightweight logging library with output that preserves line numbers.",
  version: "1.1.0_1",
  git: "https://github.com/spacejamio/meteor-loglevel.git"
});


Package.onUse(function (api) {
  api.versionsFrom('0.9.3');

  api.use(['meteor', 'application-configuration']);

  api.addFiles('loglevel.js');
  api.addFiles('set-loglevel.js');

  api.export('log');
});


Package.onTest(function(api) {
  api.use(['spacejamio:loglevel', 'tinytest']);
  api.addFiles('loglevel-test.js');
});
