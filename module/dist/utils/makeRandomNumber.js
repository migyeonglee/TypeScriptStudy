"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRandomNumber = exports.MAX_AGE = void 0;
exports.MAX_AGE = 100;
function makeRandomNumber(max) {
    if (max === void 0) { max = exports.MAX_AGE; }
    return Math.ceil((Math.random() * max));
}
exports.makeRandomNumber = makeRandomNumber;
//# sourceMappingURL=makeRandomNumber.js.map