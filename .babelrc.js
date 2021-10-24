const env = require('./env-config');

module.exports = {
  "presets": ["next/babel"],
  "plugins": ["inline-react-svg", ['transform-define', env]]
}
