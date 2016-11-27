/* @jsx el */

import diff from 'virtual-dom/diff';
import VNode from 'virtual-dom/vnode/vnode';

// fake
var Ti = { UI: { xxx: 0 } };
var Alloy = { root: true, ti: true };
var Label = { ti: true, create: Ti.UI.createLabel };
var TableView = { ti: true, create: Ti.UI.createTableView };
var TableViewRow = { ti: true, create: Ti.UI.createTableViewRow };

var el = function(tag, props, ...children) {
    if (tag.ti) {
        return new VNode(tag, props, 
            children, 
            props && props.key);
    }
    else if (typeof tag === 'function') {
        return tag({ props: props || {}, children });
    }
    else {
        return tag;
    }
};

function Table({ props }) {
    return <TableView>
        <TableViewRow>
            <Label className="l" 
                text={`Hello ${props.name ? props.name : '...'}`} />
        </TableViewRow>
    </TableView>;
}

console.log(diff(<Table />, <Table name='Alloy!!!' />));

// var render = TiVDom.createRenderer($);
// render(
//     <Window>
//         <Table name="Nick" />
//     </Window>
// );