//#region \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJSMin = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
//#endregion
let node_fs = require("node:fs");
node_fs = __toESM(node_fs);
//#endregion
//#region src/main.js
var import_dist = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	const { randomBytes } = require("crypto");
	var SIZE = 4096, HEX = [], IDX = 0, BUFFER;
	for (; IDX < 256; IDX++) HEX[IDX] = (IDX + 256).toString(16).substring(1);
	module.exports = function() {
		if (!BUFFER || IDX + 16 > SIZE) {
			BUFFER = randomBytes(SIZE);
			IDX = 0;
		}
		var i = 0, tmp, out = "";
		for (; i < 16; i++) {
			tmp = BUFFER[i + IDX];
			if (i == 6) out += HEX[tmp & 15 | 64];
			else if (i == 8) out += HEX[tmp & 63 | 128];
			else out += HEX[tmp];
			if (i & 1 && i > 1 && i < 11) out += "-";
		}
		IDX++;
		return out;
	};
})))());
function debug(msg) {
	console.log(`::debug::${msg}`);
}
function setOutput(name, value) {
	node_fs.default.writeFileSync(process.env["GITHUB_OUTPUT"], `${name}=${value}`, { flag: "a" });
}
const theUuid = (0, import_dist.default)();
debug(`UUID v4 generated: ${theUuid}`);
setOutput("uuid", theUuid);
//#endregion
