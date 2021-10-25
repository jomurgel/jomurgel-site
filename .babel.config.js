const env = require('./env-config');

module.exports = {
  "presets": ["next/babel", "@babel/preset-react", "@babel/preset-typescript", "@babel/plugin-transform-react-jsx", "@babel/preset-env"],
  "plugins": ["inline-react-svg", ['transform-define', env]]
}
