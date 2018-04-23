var ghpages = require("gh-pages");
ghpages.publish("target/deploy", function(err) {
  console.error(err);
});
