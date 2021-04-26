module.exports = class Arma {
    _nome;
    _tipo;

    constructor(nome, tipo) {
        this._nome = nome;
        this._tipo = tipo;
    }


    get nome() {
        return _nome
        
    }
    get tipo() {
        return _tipo        
    }
    



}

