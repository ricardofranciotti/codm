module.exports = class ItemArmaData {
    _dano;
    _cadencia;
    _mobilidade;
    _controle;
    _alcance;
    _precisao;

    constructor (ArmaData,dano,cadencia,mobilidade,controle,alcance,precisao){
        this._dano = dano - ArmaData._dano
        this._cadencia = cadencia - ArmaData._cadencia
        this._mobilidade = mobilidade - ArmaData._mobilidade
        this._controle = controle - ArmaData._controle
        this._alcance = alcance - ArmaData._alcance
        this._precisao = precisao - ArmaData._precisao
    }

    

}
