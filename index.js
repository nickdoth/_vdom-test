var diff = require('virtual-dom/diff');
var VNode = require('virtual-dom/vnode/vnode');
// var _ = require("virtual-dom/h");

var _ = function(tagName, props, children, key) {
    return new VNode(tagName, props, children, key);
};

var Label = { type: 'Ti.UI.Label' };

// var tree = _('a', { class: 'label', i: 1 },
//  [ _('text', {}, ['Hello'], '0.0')] , 0);
// var newTree = _('a', { class: 'label', i: 1 },
//   [_('text', {}, ['Hello alloy!'], '0.0->1')], 0);;

// var tree = _('a', { class: 'label', i: 1 },
//  ['Hello']);
// var newTree = _('a', { class: 'label', i: 1 },
//   ['Hello alloy']);;

  var tree = _('a', { class: 'label', i: 1 },
 [ _('span', {}, ['Hello']), 'mm']);
  var newTree = _('a', { class: 'label', i: 1 },
  [_('span', {}, ['Hello alloy!', 'Long3']), 'mmm']);;

console.log(diff(tree, newTree));

var patchAsFllows = { '0': 
   /* VirtualPatch */ {
     type: 4,
     vNode: 
      /* VirtualNode */ {
        tagName: [Object],
        properties: [Object],
        children: [],
        key: undefined,
        namespace: null,
        count: 0,
        hasWidgets: false,
        hasThunks: false,
        hooks: undefined,
        descendantHooks: false },
     patch: { text: 'Hello World!', i: '1' } },
  a: 
   /* VirtualNode */ {
     tagName: { type: 'Ti.UI.Label' },
     properties: { text: 'Hello', class: 'label', i: 1 },
     children: [],
     key: undefined,
     namespace: null,
     count: 0,
     hasWidgets: false,
     hasThunks: false,
     hooks: undefined,
     descendantHooks: false } }