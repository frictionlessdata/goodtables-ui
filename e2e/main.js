export default {
  home: (client) => {
    client
      .url(client.launch_url)
      .waitForElementVisible('.goodtables-ui-report', 5000)
      .assert.containsText('a.file-name', 'data/invalid.csv')
      .end();
  },
  afterEach: (client, done) => {
     client.globals.report(client, done);
  },
};
