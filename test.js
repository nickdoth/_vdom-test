'use strict';

var _diff = require('virtual-dom/diff');

var _diff2 = _interopRequireDefault(_diff);

var _vnode = require('virtual-dom/vnode/vnode');

var _vnode2 = _interopRequireDefault(_vnode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// fake
/* @jsx el */

var Ti = { UI: { xxx: 0 } };
var Alloy = { root: true, ti: true };
var Label = { ti: true, create: Ti.UI.createLabel };
var TableView = { ti: true, create: Ti.UI.createTableView };
var TableViewRow = { ti: true, create: Ti.UI.createTableViewRow };

var el = function el(tag, props) {
    for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        children[_key - 2] = arguments[_key];
    }

    if (tag.ti) {
        return new _vnode2.default(tag, props, children, props && props.key);
    } else if (typeof tag === 'function') {
        return tag({ props: props || {}, children: children });
    } else {
        return tag;
    }
};

function Table(_ref) {
    var props = _ref.props;

    return el(
        TableView,
        null,
        el(
            TableViewRow,
            null,
            el(Label, { className: 'l',
                text: 'Hello ' + (props.name ? props.name : '...') })
        )
    );
}

console.log((0, _diff2.default)(el(Table, null), el(Table, { name: 'Alloy!!!' })));

// render($, <Alloy><Table /></Alloy>);
