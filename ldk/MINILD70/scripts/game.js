(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _BootState = require('states/BootState');

var _BootState2 = _interopRequireDefault(_BootState);

var _GameOverState = require('states/GameOverState');

var _GameOverState2 = _interopRequireDefault(_GameOverState);

var _GameState = require('states/GameState');

var _GameState2 = _interopRequireDefault(_GameState);

var _PreloadState = require('states/PreloadState');

var _PreloadState2 = _interopRequireDefault(_PreloadState);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Game = function (_Phaser$Game) {
  _inherits(Game, _Phaser$Game);

  function Game() {
    _classCallCheck(this, Game);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Game).call(this, 800, 600, Phaser.AUTO, 'content', null));

    _this.state.add('BootState', _BootState2.default);
    _this.state.add('GameOverState', _GameOverState2.default);
    _this.state.add('GameState', _GameState2.default);
    _this.state.add('PreloadState', _PreloadState2.default);
    _this.state.start('BootState');
    return _this;
  }

  return Game;
}(Phaser.Game);

new Game();

},{"states/BootState":5,"states/GameOverState":6,"states/GameState":7,"states/PreloadState":8}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _ShipSprite = require('objects/ShipSprite');

var _ShipSprite2 = _interopRequireDefault(_ShipSprite);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var BossSprite = function (_Phaser$Sprite) {
  _inherits(BossSprite, _Phaser$Sprite);

  function BossSprite(game, position) {
    _classCallCheck(this, BossSprite);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BossSprite).call(this, game, position.x, position.y, 'ring', 0));

    _this.anchor.x = 0.5;
    _this.anchor.y = 0.5;
    _this.tint = 0x000000;
    _this.currentPosition = new Phaser.Point(_this.x, _this.y);
    return _this;
  }

  _createClass(BossSprite, [{
    key: 'spawnShip',
    value: function spawnShip(playerPosition) {
      var spawnPoint = new Phaser.Point(50, 0);
      var shipAngle = this.currentPosition.angle(playerPosition, true);
      spawnPoint.rotate(0, 0, shipAngle, true);
      var ship = new _ShipSprite2.default(this.game, spawnPoint.add(this.x, this.y), shipAngle);
      return ship;
    }
  }]);

  return BossSprite;
}(Phaser.Sprite);

exports.default = BossSprite;

},{"objects/ShipSprite":4}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var PlayerSprite = function (_Phaser$Sprite) {
  _inherits(PlayerSprite, _Phaser$Sprite);

  function PlayerSprite(game, position) {
    _classCallCheck(this, PlayerSprite);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PlayerSprite).call(this, game, position.x, position.y, 'rocket', 0));

    game.physics.enable(_this, Phaser.Physics.ARCADE);
    _this.body.collideWorldBounds = true;
    _this.anchor.x = 0.5;
    _this.anchor.y = 0.5;
    _this.body.gravity.y = 500;
    _this.body.maxVelocity.y = 500;
    _this.body.setSize(25, 50, 12, 0); // width, height, xoffset, yoffset
    _this.tint = 0x00ff00;
    _this.scale.setTo(0.75, 0.75);
    return _this;
  }

  return PlayerSprite;
}(Phaser.Sprite);

exports.default = PlayerSprite;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ShipSprite = function (_Phaser$Sprite) {
  _inherits(ShipSprite, _Phaser$Sprite);

  function ShipSprite(game, position, angle) {
    _classCallCheck(this, ShipSprite);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ShipSprite).call(this, game, position.x, position.y, 'ship', 0));

    game.physics.enable(_this, Phaser.Physics.ARCADE);
    _this.body.collideWorldBounds = true;
    _this.anchor.x = 0.5;
    _this.anchor.y = 0.5;
    _this.tint = 0xff0000;
    _this.scale.setTo(0.5, 0.5);
    _this.body.rotation = angle;
    return _this;
  }

  _createClass(ShipSprite, [{
    key: 'calculateDirection',
    value: function calculateDirection(playerPoint) {
      var playerAngle = this.body.position.angle(playerPoint, true);
      var directionFactor = 1;
      if (Math.abs(this.body.rotation - playerAngle) <= 180) {
        directionFactor = -1;
      }
      if (this.body.rotation - playerAngle < 0) {
        this.body.angularVelocity = -70 * directionFactor;
      } else {
        this.body.angularVelocity = 70 * directionFactor;
      }
      var velocityPoint = new Phaser.Point(150, 0);
      velocityPoint.rotate(0, 0, this.body.rotation, true);
      this.body.velocity = velocityPoint;
    }
  }]);

  return ShipSprite;
}(Phaser.Sprite);

exports.default = ShipSprite;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var BootState = function (_Phaser$State) {
  _inherits(BootState, _Phaser$State);

  function BootState() {
    _classCallCheck(this, BootState);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(BootState).apply(this, arguments));
  }

  _createClass(BootState, [{
    key: "preload",
    value: function preload() {}
  }, {
    key: "create",
    value: function create() {
      this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      // this.game.physics.arcade.gravity.y = 500;
      this.game.state.start("PreloadState");
    }
  }]);

  return BootState;
}(Phaser.State);

exports.default = BootState;

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var GameOverState = function (_Phaser$State) {
  _inherits(GameOverState, _Phaser$State);

  function GameOverState() {
    _classCallCheck(this, GameOverState);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(GameOverState).apply(this, arguments));
  }

  _createClass(GameOverState, [{
    key: 'preload',
    value: function preload() {}
  }, {
    key: 'create',
    value: function create() {
      this.state.start('GameState');
    }
  }]);

  return GameOverState;
}(Phaser.State);

exports.default = GameOverState;

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _BossSprite = require('objects/BossSprite');

var _BossSprite2 = _interopRequireDefault(_BossSprite);

var _PlayerSprite = require('objects/PlayerSprite');

var _PlayerSprite2 = _interopRequireDefault(_PlayerSprite);

var _ShipSprite = require('objects/ShipSprite');

var _ShipSprite2 = _interopRequireDefault(_ShipSprite);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var origin = new Phaser.Point();
var maxDashTime = 250;

var GameState = function (_Phaser$State) {
  _inherits(GameState, _Phaser$State);

  function GameState() {
    _classCallCheck(this, GameState);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(GameState).apply(this, arguments));
  }

  _createClass(GameState, [{
    key: 'create',
    value: function create() {
      var _this2 = this;

      var center = { x: this.game.world.centerX, y: this.game.world.centerY };
      this.game.stage.backgroundColor = '#cecece';
      this.cursors = this.game.input.keyboard.createCursorKeys();
      this.dashButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
      this.player = new _PlayerSprite2.default(this.game, new Phaser.Point(center.x, 600));
      this.boss = new _BossSprite2.default(this.game, center);
      this.dashEndTime = 0;
      this.isDashing = false;
      this.add.existing(this.boss);
      this.add.existing(this.player);
      this.shipGroup = this.add.group();
      // this.player.scale.setTo(0.5, 0.5); // for now. remove later
      this.dashButton.onDown.add(function () {
        _this2.isDashing = true;
        _this2.dashEndTime = _this2.time.now + maxDashTime;
        var velocityPoint = new Phaser.Point(400, 0);
        velocityPoint.rotate(0, 0, _this2.player.body.rotation, true);
        _this2.player.body.velocity = velocityPoint;
        _this2.player.body.gravity.y = 0;
      });
      this.shipSpawnLoop = this.time.events.loop(Phaser.Timer.SECOND, this.spawnShip, this);
    }
  }, {
    key: 'update',
    value: function update() {
      var _this3 = this;

      var directionPoint = new Phaser.Point();
      if (this.cursors.left.isDown) {
        directionPoint.y += 1;
      }
      if (this.cursors.right.isDown) {
        directionPoint.y -= 1;
      }
      if (this.cursors.up.isDown) {
        directionPoint.x -= 1;
      }
      if (this.cursors.down.isDown) {
        directionPoint.x += 1;
      }
      this.player.body.rotation = directionPoint.angle(origin, true) - 90;
      if (this.time.now >= this.dashEndTime && this.isDashing) {
        this.player.body.velocity.x = 0;
        this.player.body.velocity.y = 0;
        this.player.body.gravity.y = 1000;
        this.isDashing = false;
      }
      this.shipGroup.forEach(function (ship) {
        ship.calculateDirection(_this3.player.body.position);
      }, this);
    }
  }, {
    key: 'render',
    value: function render() {
      this.game.debug.bodyInfo(this.player, 16, 24);
    }
  }, {
    key: 'spawnShip',
    value: function spawnShip() {
      var ship = this.boss.spawnShip(this.player.body.position);
      this.shipGroup.add(ship);
      ship.body.rotation = 90;
    }
  }]);

  return GameState;
}(Phaser.State);

exports.default = GameState;

},{"objects/BossSprite":2,"objects/PlayerSprite":3,"objects/ShipSprite":4}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var PreloadState = function (_Phaser$State) {
  _inherits(PreloadState, _Phaser$State);

  function PreloadState() {
    _classCallCheck(this, PreloadState);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(PreloadState).apply(this, arguments));
  }

  _createClass(PreloadState, [{
    key: 'preload',
    value: function preload() {
      // this.game.load.image('hexTile', 'assets/hexTile300.png');
      this.game.load.image('rocket', 'assets/rocket50.png');
      this.game.load.image('ring', 'assets/ring.png');
      this.game.load.image('ship', 'assets/ship.png');
    }
  }, {
    key: 'create',
    value: function create() {
      this.game.state.start("GameState");
    }
  }]);

  return PreloadState;
}(Phaser.State);

exports.default = PreloadState;

},{}]},{},[1])
//# sourceMappingURL=game.js.map
