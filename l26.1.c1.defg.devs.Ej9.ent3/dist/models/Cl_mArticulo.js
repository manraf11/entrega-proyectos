export default class Cl_mArticulo {
    _codigo = 0;
    _costo = 0;
    _venta = 0;
    _peso = 0;
    constructor({ codigo, costo, venta, peso } = {
        codigo: 0,
        costo: 0,
        venta: 0,
        peso: 0,
    }) {
        this.codigo = codigo;
        this.costo = costo;
        this.venta = venta;
        this.peso = peso;
    }
    set codigo(codigo) { this._codigo = +codigo; }
    get codigo() { return this._codigo; }
    set costo(costo) { this._costo = +costo; }
    get costo() { return this._costo; }
    set venta(venta) { this._venta = +venta; }
    get venta() { return this._venta; }
    set peso(peso) { this._peso = +peso; }
    get peso() { return this._peso; }
    get ganancia() {
        return this.venta - this.costo;
    }
}
//# sourceMappingURL=Cl_mArticulo.js.map