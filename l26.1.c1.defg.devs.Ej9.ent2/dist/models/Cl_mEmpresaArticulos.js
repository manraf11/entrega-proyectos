export default class Cl_mEmpresaArticulos {
    acGanancia = 0;
    cntArticulos = 0;
    mayorPrecio = 0;
    codigoMayorPrecio = 0;
    _ultimoArticulo = null;
    procesarArticulo(a) {
        this.acGanancia += a.ganancia;
        this.cntArticulos++;
        this._ultimoArticulo = a;
        if (a.venta > this.mayorPrecio) {
            this.mayorPrecio = a.venta;
            this.codigoMayorPrecio = a.codigo;
        }
    }
    get totalGanancia() {
        return this.acGanancia;
    }
    get articuloMayorPrecio() {
        return this.codigoMayorPrecio;
    }
    get totalProcesados() {
        return this.cntArticulos;
    }
    get ultimoArticulo() {
        return this._ultimoArticulo;
    }
}
//# sourceMappingURL=Cl_mEmpresaArticulos.js.map