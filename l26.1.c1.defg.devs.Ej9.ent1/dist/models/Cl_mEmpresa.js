export default class Cl_mEmpresaArticulos {
    constructor() {
        this.acGanancia = 0;
        this.cntArticulos = 0;
        this.mayorPrecio = 0;
        this.codigoMayorPrecio = 0;
        this.ultimoArticulo = null;
    }
    procesarArticulo(a) {
        this.acGanancia += a.ganancia;
        this.cntArticulos++;
        this.ultimoArticulo = a;
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
    get ultimoArticuloProcesado() {
        return this.ultimoArticulo;
    }
}
