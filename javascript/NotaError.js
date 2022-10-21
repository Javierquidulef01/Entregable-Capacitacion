"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Class = void 0;
class Class extends Error {
    constructor(mensajeError) {
        super();
        this.message = mensajeError;
    }
}
exports.Class = Class;
