# react-starter


## Overview

The new [React](https://facebook.github.io/react/) basic React app starter.

## Setup

### Development environment

* installed required packages

```
npm install -g babel
npm install -g babel-cli

npm init -f
npm install webpack --save
npm install webpack-dev-server --save
npm install react --save
npm install react-dom --save
npm install babel-core --save
npm install babel-loader --save
npm install babel-preset-react --save
npm install babel-preset-es2015 --save
npm install react-router --save
```

* create base files
```
touch index.html
touch App.jsx
touch main.js
touch webpack.config.js
```

* build config files

```
cat > webpack.config.js <<EOF
var config = {
   entry: './main.js',

   output: {
      path:'./',
      filename: 'index.js',
   },

   devServer: {
      inline: true,
      port: 3000
   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',

            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;
EOF
```

* build index.html

```
cat > index.html <<EOF
<!DOCTYPE html>
<html lang = "en">

   <head>
      <meta charset = "UTF-8">
      <title>React App</title>
   </head>

   <body>
      <div id = "app"></div>
      <script src = "index.js"></script>
   </body>

</html>

EOF
```

* Build App.jsx

```
cat > App.jsx <<EOF
import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
           Content can go here.
         </div>
      );
   }
}

export default App;
EOF
```

* build main.js

```
cat > main.js <<EOF
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
//this renders your app
ReactDOM.render(<App />, document.getElementById('app'))
EOF
```

* edit package.json

```
sed -i -e 's/"test": "echo \\"Error: no test specified\\" && exit 1"/"start": "webpack-dev-server --hot"/g' package.json
```

