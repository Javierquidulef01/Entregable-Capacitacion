export class ErrorNota extends Error {

    public constructor () {
        super("LA NOTA MINIMA NO DEBE SER UN NUMERO NEGATIVO");
        this.name = "Error de Nota";
    }
}