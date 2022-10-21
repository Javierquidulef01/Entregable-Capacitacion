"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorNota = void 0;
class ErrorNota extends Error {
    constructor() {
        super("LA NOTA MINIMA NO DEBE SER UN NUMERO NEGATIVO");
        this.name = "Error de Nota";
    }
}
exports.ErrorNota = ErrorNota;
