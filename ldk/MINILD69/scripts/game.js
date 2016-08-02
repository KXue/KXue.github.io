(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _statesBoot = require('states/Boot');

var _statesBoot2 = _interopRequireDefault(_statesBoot);

var _statesPreload = require('states/Preload');

var _statesPreload2 = _interopRequireDefault(_statesPreload);

var _statesGameTitle = require('states/GameTitle');

var _statesGameTitle2 = _interopRequireDefault(_statesGameTitle);

var _statesMain = require('states/Main');

var _statesMain2 = _interopRequireDefault(_statesMain);

var _statesGameOver = require('states/GameOver');

var _statesGameOver2 = _interopRequireDefault(_statesGameOver);

var Game = (function (_Phaser$Game) {
	_inherits(Game, _Phaser$Game);

	function Game() {
		_classCallCheck(this, Game);

		_get(Object.getPrototypeOf(Game.prototype), 'constructor', this).call(this, 900, 600, Phaser.AUTO);

		this.state.add('Boot', _statesBoot2['default'], false);
		this.state.add('Preload', _statesPreload2['default'], false);
		this.state.add('GameTitle', _statesGameTitle2['default'], false);
		this.state.add('Main', _statesMain2['default'], false);
		this.state.add('GameOver', _statesGameOver2['default'], false);

		this.state.start('Boot');
	}

	return Game;
})(Phaser.Game);

new Game();

},{"states/Boot":4,"states/GameOver":5,"states/GameTitle":6,"states/Main":7,"states/Preload":8}],2:[function(require,module,exports){
//6 hex directions
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var directions = [new Phaser.Point(1, -1), new Phaser.Point(0, -1), new Phaser.Point(-1, 0), new Phaser.Point(-1, 1), new Phaser.Point(0, 1), new Phaser.Point(1, 0)];

var HexMap = (function () {
  function HexMap() {
    _classCallCheck(this, HexMap);

    this.coordHexMap = {};
  }

  _createClass(HexMap, [{
    key: "addHex",
    value: function addHex(hexSprite, coord) {
      this.coordHexMap[coord] = hexSprite;
    }
  }, {
    key: "fetchHex",
    value: function fetchHex(coord) {
      if (coord in this.coordHexMap) {
        return this.coordHexMap[coord];
      }
    }
  }, {
    key: "fetchNeighbors",
    value: function fetchNeighbors(coord) {
      var retArray = [];
      var neighborPoint = coord;
      for (var i = 0; i < 6; i++) {
        neighborPoint = Phaser.Point.add(coord, directions[i]);
        if (neighborPoint in this.coordHexMap) {
          retArray.push(this.coordHexMap[neighborPoint]);
        }
      }
      return retArray;
    }
  }, {
    key: "fetchAll",
    value: function fetchAll() {
      var _this = this;

      return Object.keys(this.coordHexMap).map(function (key) {
        return _this.coordHexMap[key];
      });
    }
  }]);

  return HexMap;
})();

exports["default"] = HexMap;
module.exports = exports["default"];

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFLENGTH = 125;
var MAXPOP = 3;
var MAXCPOP = 4;
var POPGROWTH = 1;
var POPCGROWTH = 2;

var HexTile = (function (_Phaser$Sprite) {
  _inherits(HexTile, _Phaser$Sprite);

  function HexTile(game, position, hexMapCoord, sideLength) {
    _classCallCheck(this, HexTile);

    _get(Object.getPrototypeOf(HexTile.prototype), "constructor", this).call(this, game, position.x, position.y, 'hexTile', 0);

    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
    this.tint = 0xffffff;
    this.scale.setTo(sideLength / DEFLENGTH);
    this.inputEnabled = false;
    this.endangered = false;
    this.dead = false;

    this.inputEnabled = true;
    this.input.pixelPerfectClick = true;

    this.coord = hexMapCoord;

    this.p1TempPop = 0;
    this.p1Pop = 0;
    this.p1VisiblePop = 0;

    this.p2TempPop = 0;
    this.p2Pop = 0;
    this.p2VisiblePop = 0;

    var textToCentreDistance = sideLength / 2;

    var style = { font: "32px helvetica", fill: "#000000", align: "center" };
    this.maxPopText = this.addChild(game.make.text(0, textToCentreDistance, '' + MAXPOP, style));
    this.maxPopText.anchor.set(0.5);

    var p1Style = { font: "32px helvetica", fill: "#FF0000", align: "center" };
    this.p1PopText = this.addChild(game.make.text(-textToCentreDistance * Math.sqrt(3) / 2, -textToCentreDistance * 0.5, '' + this.p1VisiblePop, p1Style));
    this.p1PopText.anchor.set(0.5);

    var p2Style = { font: "32px helvetica", fill: "#0000FF", align: "center" };
    this.p2PopText = this.addChild(game.make.text(textToCentreDistance * Math.sqrt(3) / 2, -textToCentreDistance * 0.5, '' + this.p2VisiblePop, p2Style));
    this.p2PopText.anchor.set(0.5);
  }

  _createClass(HexTile, [{
    key: "setClickable",
    value: function setClickable(clickable) {
      this.inputEnabled = clickable;
      this.setTint();
    }
  }, {
    key: "setTint",
    value: function setTint() {
      if (this.dead) {
        this.tint = 0x000000;
      } else if (this.endangered) {
        this.tint = 0xffffb2;
      } else if (this.inputEnabled) {
        this.tint = 0x9AFF9A;
      } else {
        this.tint = 0xffffff;
      }
    }
  }, {
    key: "checkOverpopulation",
    value: function checkOverpopulation() {
      if (this.p1Pop + this.p2Pop > MAXCPOP) {
        if (this.p1Pop > this.p2Pop) {
          this.setP2Pop(0);
        } else if (this.p2Pop > this.p1Pop) {
          this.setP1Pop(0);
        } else {
          this.setP2Pop(0);
          this.setP1Pop(0);
          this.dead = true;
        }
      }

      if (this.p1Pop > MAXPOP) {
        this.setP1Pop(0);
        this.dead = true;
      }

      if (this.p2Pop > MAXPOP) {
        this.setP2Pop(0);
        this.dead = true;
      }

      if (this.dead) {
        this.setClickable(false);
      }
      return this.dead;
    }
  }, {
    key: "addPopulation",
    value: function addPopulation() {
      if (this.p1Pop > 0 && this.p2Pop > 0) {
        this.p1Pop += 2;
        this.p2Pop += 2;
      } else if (this.p1Pop > 0) {
        this.p1Pop++;
      } else if (this.p2Pop > 0) {
        this.p2Pop++;
      }
      this.setP1Pop(this.p1Pop);
      this.setP2Pop(this.p2Pop);
      this.checkEndangered();
    }
  }, {
    key: "mergePopulation",
    value: function mergePopulation() {
      this.setP1Pop(this.p1TempPop);
      this.setP2Pop(this.p2TempPop);
      this.checkOverpopulation();
      this.checkEndangered();
      this.checkShared();
    }
  }, {
    key: "updatePopText",
    value: function updatePopText() {
      this.p1PopText.setText('' + this.p1VisiblePop);
      this.p2PopText.setText('' + this.p2VisiblePop);
    }
  }, {
    key: "setP1Pop",
    value: function setP1Pop(population) {
      this.p1Pop = population;
      this.p1TempPop = population;
      this.p1VisiblePop = population;
      this.updatePopText();
    }
  }, {
    key: "setP2Pop",
    value: function setP2Pop(population) {
      this.p2Pop = population;
      this.p2TempPop = population;
      this.p2VisiblePop = population;
      this.updatePopText();
    }
  }, {
    key: "checkEndangered",
    value: function checkEndangered() {
      this.endangered = this.p1VisiblePop > MAXPOP || this.p2VisiblePop > MAXPOP || this.p1VisiblePop + this.p2VisiblePop > MAXCPOP;
      this.setTint();
      return this.endangered;
    }
  }, {
    key: "checkShared",
    value: function checkShared() {
      var shared = this.p1VisiblePop > 0 && this.p2VisiblePop > 0;
      if (shared) {
        this.maxPopText.setText('' + MAXCPOP);
      } else {
        this.maxPopText.setText('' + MAXPOP);
      }
      return shared;
    }
  }, {
    key: "hideChanges",
    value: function hideChanges() {
      this.p2VisiblePop = this.p2Pop;
      this.p1VisiblePop = this.p1Pop;
      this.updatePopText();
    }
  }]);

  return HexTile;
})(Phaser.Sprite);

exports["default"] = HexTile;
module.exports = exports["default"];

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Boot = (function (_Phaser$State) {
	_inherits(Boot, _Phaser$State);

	function Boot() {
		_classCallCheck(this, Boot);

		_get(Object.getPrototypeOf(Boot.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(Boot, [{
		key: "preload",
		value: function preload() {}
	}, {
		key: "create",
		value: function create() {
			this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
			this.game.state.start("Preload");
		}
	}]);

	return Boot;
})(Phaser.State);

exports["default"] = Boot;
module.exports = exports["default"];

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameOver = (function (_Phaser$State) {
	_inherits(GameOver, _Phaser$State);

	function GameOver() {
		_classCallCheck(this, GameOver);

		_get(Object.getPrototypeOf(GameOver.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(GameOver, [{
		key: "create",
		value: function create() {}
	}, {
		key: "restartGame",
		value: function restartGame() {
			this.game.state.start("Main");
		}
	}]);

	return GameOver;
})(Phaser.State);

exports["default"] = GameOver;
module.exports = exports["default"];

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameTitle = (function (_Phaser$State) {
	_inherits(GameTitle, _Phaser$State);

	function GameTitle() {
		_classCallCheck(this, GameTitle);

		_get(Object.getPrototypeOf(GameTitle.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(GameTitle, [{
		key: "create",
		value: function create() {}
	}, {
		key: "startGame",
		value: function startGame() {
			this.game.state.start("Main");
		}
	}]);

	return GameTitle;
})(Phaser.State);

exports["default"] = GameTitle;
module.exports = exports["default"];

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _objectsHexTile = require('objects/HexTile');

var _objectsHexTile2 = _interopRequireDefault(_objectsHexTile);

var _objectsHexMap = require('objects/HexMap');

var _objectsHexMap2 = _interopRequireDefault(_objectsHexMap);

var hexMap = new _objectsHexMap2['default']();
//6 hex directions
var directions = [new Phaser.Point(1, -1), new Phaser.Point(0, -1), new Phaser.Point(-1, 0), new Phaser.Point(-1, 1), new Phaser.Point(0, 1), new Phaser.Point(1, 0)];

var Main = (function (_Phaser$State) {
  _inherits(Main, _Phaser$State);

  function Main() {
    _classCallCheck(this, Main);

    _get(Object.getPrototypeOf(Main.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Main, [{
    key: 'create',
    value: function create() {

      //Enable Arcade Physics
      this.game.physics.startSystem(Phaser.Physics.ARCADE);

      //Set the games background colour
      this.game.stage.backgroundColor = '#cecece';

      //Things I need to spawn hexagons
      var centre = new Phaser.Point(this.world.centerX, this.world.centerY);
      var sideLength = 100;
      var hexDistance = sideLength * Math.sqrt(3);

      //Spawn centre hexagon
      var testHex = new _objectsHexTile2['default'](this.game, centre, new Phaser.Point(0, 0), sideLength);
      testHex.events.onInputDown.add(this.hexClicked, this);
      this.add.existing(testHex);
      hexMap.addHex(testHex, new Phaser.Point(0, 0));

      //Point of surrounding hexagons
      var rotatePoint = new Phaser.Point(centre.x + hexDistance * Math.sqrt(3) / 2, centre.y + hexDistance * 0.5);

      //Spawn other 6 hexagons
      for (var i = 0; i < 6; i++) {

        testHex = new _objectsHexTile2['default'](this.game, rotatePoint, directions[i], sideLength, this.hexClicked);
        this.add.existing(testHex);
        hexMap.addHex(testHex, directions[i]);
        testHex.events.onInputDown.add(this.hexClicked, this);
        rotatePoint.rotate(centre.x, centre.y, Math.PI / 3);
      }

      var availableTiles = hexMap.fetchAll();
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = availableTiles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var tile = _step.value;

          tile.setClickable(true);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator['return']) {
            _iterator['return']();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.turnsTaken = 1;
      this.isPlayer1Turn = true;

      var endTurnStyle = { font: "32px helvetica", fill: "#cccccc", align: "center" };
      this.endText = this.game.add.text(0, 0, "End turn", endTurnStyle);
      this.endText.alignIn(this.game.camera.view, Phaser.BOTTOM_RIGHT, -20, 0);
      this.endText.events.onInputDown.add(this.swapTurns, this);

      var playerStyle = { fill: "#FF0000", align: "left" };
      this.playerText = this.game.add.text(0, 0, "Red's turn", playerStyle);

      var infoStyle = { fill: "#000000", align: "left" };
      this.turnText = this.game.add.text(0, 0, "Turn: 1", infoStyle);

      this.infoText = this.game.add.text(0, 0, "Select starting point", infoStyle);
      this.infoText.alignIn(this.game.camera.view, Phaser.TOP_LEFT, -20, 0);
      this.turnText.alignTo(this.infoText, Phaser.BOTTOM_LEFT, 0, 0);
      this.playerText.alignTo(this.turnText, Phaser.BOTTOM_LEFT, 0, 0);

      var diStyle = { font: "4px helvetica", fill: "#000000", align: "right" };
      this.diText = this.game.add.text(0, 0, "Hi Di :)", diStyle);
      this.diText.alignIn(this.game.camera.view, Phaser.TOP_RIGHT, 0, 0);
      this.selectedHex = undefined;

      this.p1TurnCount = -1;
      this.p2TurnCount = -1;
    }
  }, {
    key: 'hexClicked',
    value: function hexClicked(hex) {
      if (this.turnsTaken == 1) {
        if (this.isPlayer1Turn) {
          hex.p1TempPop++;
          hex.p1VisiblePop = hex.p1TempPop;
        } else {
          hex.p2TempPop++;
          hex.p2VisiblePop = hex.p2TempPop;
        }
        this.enableEnd(true);
        this.allClickable(false);
        hex.updatePopText();
      } else {
        if (typeof this.selectedHex == 'undefined') {
          this.selectedHex = hex;
          this.allClickable(false);

          console.log(hex.coord);
          var hexArray = hexMap.fetchNeighbors(hex.coord);
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = hexArray[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var tile = _step2.value;

              tile.setClickable(true);
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                _iterator2['return']();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        } else {
          if (this.isPlayer1Turn) {
            this.selectedHex.p1TempPop--;
            this.selectedHex.p1VisiblePop = this.selectedHex.p1TempPop;

            hex.p1TempPop++;
            hex.p1VisiblePop = hex.p1TempPop;
          } else {
            this.selectedHex.p2TempPop--;
            this.selectedHex.p2VisiblePop = this.selectedHex.p2TempPop;

            hex.p2TempPop++;
            hex.p2VisiblePop = hex.p2TempPop;
          }
          this.selectedHex.updatePopText();
          hex.updatePopText();

          this.allPopulated();
          this.selectedHex = undefined;
        }
      }
    }
  }, {
    key: 'allPopulated',
    value: function allPopulated() {
      var hexArray = hexMap.fetchAll();
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = hexArray[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var tile = _step3.value;

          if (!tile.dead && (this.isPlayer1Turn && tile.p1Pop > 0 && tile.p1TempPop > 0 || !this.isPlayer1Turn && tile.p2Pop > 0 && tile.p2TempPop > 0)) {
            tile.setClickable(true);
          } else {
            tile.setClickable(false);
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3['return']) {
            _iterator3['return']();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  }, {
    key: 'allClickable',
    value: function allClickable(canClick) {
      var hexArray = hexMap.fetchAll();
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = hexArray[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var tile = _step4.value;

          tile.setClickable(canClick);
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4['return']) {
            _iterator4['return']();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    }
  }, {
    key: 'enableEnd',
    value: function enableEnd(canEnd) {
      this.endText.inputEnabled = canEnd;
      if (!canEnd) {
        this.endText.setStyle({ fill: "#cccccc" });
      } else {
        this.endText.setStyle({ fill: "#000000" });
      }
    }
  }, {
    key: 'updateInfoText',
    value: function updateInfoText() {
      if (this.isPlayer1Turn) {
        this.playerText.setText("Red's turn");
        this.playerText.setStyle({ fill: '#FF0000' });
      } else {
        this.playerText.setText("Blue's turn");
        this.playerText.setStyle({ fill: '#0000FF' });
      }
      this.turnText.setText("Turn: " + this.turnsTaken);
    }

    //start with this for first 2 players
  }, {
    key: 'swapTurns',
    value: function swapTurns() {
      console.log(this.turnsTaken);
      console.log(this.isPlayer1Turn);
      if (!this.isPlayer1Turn) {
        this.turnsTaken++;
        this.mergeTiles();
        this.addPopulation();
        this.checkEnd();
      }

      this.isPlayer1Turn = !this.isPlayer1Turn;
      if (this.turnsTaken == 1) {
        this.enableEnd(false);
        this.allClickable(true);
      } else {
        this.infoText.setText("Move your population");
        this.allPopulated();
      }

      var hexArray = hexMap.fetchAll();
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = hexArray[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var tile = _step5.value;

          tile.hideChanges();
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5['return']) {
            _iterator5['return']();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }

      this.updateInfoText();
    }

    //after playerTurn
  }, {
    key: 'mergeTiles',
    value: function mergeTiles() {
      var hexArray = hexMap.fetchAll();
      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = hexArray[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var tile = _step6.value;

          tile.mergePopulation();
        }
      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6['return']) {
            _iterator6['return']();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }
    }
  }, {
    key: 'addPopulation',
    value: function addPopulation() {
      var hexArray = hexMap.fetchAll();
      var _iteratorNormalCompletion7 = true;
      var _didIteratorError7 = false;
      var _iteratorError7 = undefined;

      try {
        for (var _iterator7 = hexArray[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
          var tile = _step7.value;

          tile.addPopulation();
        }
      } catch (err) {
        _didIteratorError7 = true;
        _iteratorError7 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion7 && _iterator7['return']) {
            _iterator7['return']();
          }
        } finally {
          if (_didIteratorError7) {
            throw _iteratorError7;
          }
        }
      }
    }
  }, {
    key: 'checkEnd',
    value: function checkEnd() {
      var allDead = true;
      var p1Population = 0;
      var p2Population = 0;
      var hexArray = hexMap.fetchAll();
      var _iteratorNormalCompletion8 = true;
      var _didIteratorError8 = false;
      var _iteratorError8 = undefined;

      try {
        for (var _iterator8 = hexArray[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
          var tile = _step8.value;

          allDead = allDead && tile.dead;
          p1Population += tile.p1Pop;
          p2Population += tile.p2Pop;
        }
      } catch (err) {
        _didIteratorError8 = true;
        _iteratorError8 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion8 && _iterator8['return']) {
            _iterator8['return']();
          }
        } finally {
          if (_didIteratorError8) {
            throw _iteratorError8;
          }
        }
      }

      if (this.p1TurnCount < 0 && p1Population == 0) {
        this.p1turnCount = this.turnsTaken;
      }
      if (this.p2TurnCount < 0 && p2Population == 0) {
        this.p2TurnCount = this.turnsTaken;
      }
      var isGameOver = allDead || p1Population + p2Population == 0;
      if (isGameOver) {
        alert("Game Over:\n Red lasted: " + this.p1turnCount + " turns.\n Blue lasted: " + this.p2TurnCount + " turns.");
      }
    }
  }]);

  return Main;
})(Phaser.State);

exports['default'] = Main;
module.exports = exports['default'];

},{"objects/HexMap":2,"objects/HexTile":3}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Preload = (function (_Phaser$State) {
	_inherits(Preload, _Phaser$State);

	function Preload() {
		_classCallCheck(this, Preload);

		_get(Object.getPrototypeOf(Preload.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(Preload, [{
		key: 'preload',
		value: function preload() {
			this.game.load.image('hexTile', 'assets/hexTile300.png');
		}
	}, {
		key: 'create',
		value: function create() {
			this.game.state.start("Main");
		}
	}]);

	return Preload;
})(Phaser.State);

exports['default'] = Preload;
module.exports = exports['default'];

},{}]},{},[1])
//# sourceMappingURL=game.js.map
