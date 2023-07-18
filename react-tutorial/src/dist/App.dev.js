"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _SomeContainer = _interopRequireDefault(require("./component/SomeContainer"));

var _AnotherContainer = _interopRequireDefault(require("./component/AnotherContainer"));

var _reactRouterDom = require("react-router-dom/cjs/react-router-dom.min");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path = "/">
          <AnotherContainer/>
        </Route>
        <Route exact path="/somecontainer">
          <SomeContainer />
        </Route>
      </Switch>

    </div>
  );
}
*/
var _default = App;
exports["default"] = _default;