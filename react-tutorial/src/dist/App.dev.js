"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _SomeContainer = _interopRequireDefault(require("./component/SomeContainer"));

var _AnotherContainer = _interopRequireDefault(require("./component/AnotherContainer"));

var _reactRouterDom = require("react-router-dom/cjs/react-router-dom.min");

require("./App.css");

var _react = _interopRequireDefault(require("react"));

var _MyButton = _interopRequireDefault(require("./component/MyButton"));

var _board = _interopRequireDefault(require("./component/board"));

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

/*
const board = () => {

  let row = 3
  let col = 3
  let l = []
  let count = 1
  for (let j = 1; j <= row; j++) {
    let r = []
    for (let i = 1; i <= col; i++) {
      r.push(<button
         className="square"
         onClick = {handleClick}
         >
          {count}
          </button>
          )
        count++;
    }
    l.push(<div className="board-row"> {r} </div>)

}
  return l
};
*/
function App() {
  return {
    board: _board["default"]
  };
}

var _default = App;
exports["default"] = _default;