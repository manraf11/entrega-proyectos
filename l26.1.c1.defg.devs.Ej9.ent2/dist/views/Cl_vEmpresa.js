export default class Cl_vEmpresa {
    constructor() {
        this.lblCodigoArticulo = document.getElementById("body_lblCodigoArticulo");
        this.lblPrecioDeVenta = document.getElementById("body_lblPrecioDeVenta");
        this.lblGanancia = document.getElementById("body_lblGanancia");
        this.btProcesar1Articulo = document.getElementById("body_btProcesar1Articulo");
        this.lblArticuloMayGanancia = document.getElementById("body_lblArticuloMayGanancia");
        this.lblTotalprocesados = document.getElementById("body_lbltotalprocesados");
    }
    onProcesarPersonal(callback) {
        this.btProcesar1Articulo.onclick = callback;
    }
    reportar(empresa) {
        this.lblCodigoArticulo.innerHTML = `${empresa.ultimoArticulo?.codigo || 0}`;
        this.lblPrecioDeVenta.innerHTML = `${empresa.ultimoArticulo?.venta || 0}`;
        this.lblGanancia.innerHTML = `${empresa.totalGanancia}`;
        this.lblArticuloMayGanancia.innerHTML = `${empresa.articuloMayorPrecioventa}`;
        this.lblTotalprocesados.innerHTML = `${empresa.totalprocesados}`;
    }
}
