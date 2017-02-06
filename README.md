# goodtables-react-js

React component to show goodtables report

## Demo

https://roll.github.io/goodtables-react-js/

## Usage

```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>goodtables-vue</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="//unpkg.com/react@15.4.2/dist/react.js"></script>
    <script src="//unpkg.com/react-dom@15.4.2/dist/react-dom.js"></script>
    <script src="dist/goodtables-react.js"></script>
    <script>
      ReactDOM.render(
        // Past your goodtables report
        React.createElement(goodtablesVue.Report, {report}, null),
        document.getElementById('app')
      );
    </script>
  </body>
</html>
```

## Development

```bash
$ npm run dev
```
