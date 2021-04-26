module.exports =  class ArmaData  {
    _armanome;
    _dano;
    _cadencia;
    _mobilidade;
    _controle;
    _alcance;
    _precisao;

    constructor(Arma,dano,cadencia,mobilidade,controle,alcance,precisao){
        this._armanome = Arma._nome,
        this._dano = dano;
        this._cadencia = cadencia;
        this._mobilidade = mobilidade;
        this._controle = controle;
        this._alcance = alcance;
        this._precisao = precisao;
    }




}

