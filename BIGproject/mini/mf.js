"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MF = function () {
	function MF(newSmallBox, newBigBox, newMask) {
		_classCallCheck(this, MF);

		this.smallBox = newSmallBox;
		this.bigBox = newBigBox;
		this.mask = newMask;
	}

	_createClass(MF, [{
		key: "onmouseover",
		value: function onmouseover() {
			var that = this;
			this.smallBox.onmouseover = function () {
				that.bigBox.style.display = "block";
				that.mask.style.display = "block";
			};
		}
	}, {
		key: "onmouseout",
		value: function onmouseout() {
			var that = this;
			this.smallBox.onmouseout = function () {
				that.bigBox.style.display = "none";
				that.mask.style.display = "none";
			};
		}
	}, {
		key: "onmousemove",
		value: function onmousemove() {
			var that = this;
			this.smallBox.onmousemove = function (evt) {
				var e = evt || event;

				var left = e.pageX - that.smallBox.offsetLeft - that.mask.offsetWidth / 2;
				var top = e.pageY - 225 - that.mask.offsetHeight / 2;
				// console.log(left);
				console.log(that.smallBox.offsetTop);
				// console.log(top);

				if (left < 0) {
					left = 0;
				}

				var maxLeft = that.smallBox.offsetWidth - that.mask.offsetWidth;

				if (left > maxLeft) {
					left = maxLeft;
				}

				if (top < 0) {
					top = 0;
				}

				var maxTop = that.smallBox.offsetHeight - that.mask.offsetHeight;

				if (top > maxTop) {
					top = maxTop;
				}

				var x = that.bigBox.offsetWidth * left / that.mask.offsetWidth;
				var y = that.bigBox.offsetHeight * top / that.mask.offsetHeight;

				that.mask.style.left = left + "px";
				that.mask.style.top = top + "px";

				that.bigBox.style.backgroundPositionX = -x + "px";
				that.bigBox.style.backgroundPositionY = -y + "px";
			};
		}
	}, {
		key: "eventBind",
		value: function eventBind() {
			this.onmouseover();
			this.onmouseout();
			this.onmousemove();
		}
	}]);

	return MF;
}();