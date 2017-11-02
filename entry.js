// require("!style-loader!css-loader!./style.css");
require("./style.css");
document.write("It works.<br/>");
document.write(require("./content.js"));



//webpack commands
//webpack ./entry.js bundle.js
//webpack ./entry.js bundle.js --module-bind 'css=style-loader!css-loader'
//webpack --progress --colors --watch
//webpack-dev-server --progress --colors