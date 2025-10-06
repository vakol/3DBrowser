// JavaScript code.
/*** Debug function. ***/
var _debug;
function createDebug(container) {
    _debug = document.createElement("DIV");
    _debug.style.position = "absolute";
    _debug.style.color = "white";
    _debug.style.backgroundColor = "black";
    _debug.style.zIndex = "10";
    _debug.style.padding = 10;
    if (container != null) {
        container.appendChild(_debug);
    }
    else {
        document.body.appendChild(_debug);
    }
}
function debugOffset(left, top) {
    if (_debug == null) {
        createDebug(null);
    }
    _debug.style.left = left;
    _debug.style.top = top;
}
function debug(object) {
    if (_debug == null) {
        createDebug(null);
    }
    _debug.innerHTML = _debug.innerHTML + String(object) + "<br>";
}