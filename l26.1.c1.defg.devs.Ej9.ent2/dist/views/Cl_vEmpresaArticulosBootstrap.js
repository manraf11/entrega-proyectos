export default class Cl_vEmpresaArticulosBootstrap {
    btProcesarArticulo;
    lblCodigoArticulo;
    lblPrecioVenta;
    lblGanancia;
    lblArticuloMayor;
    lblTotalProcesados;
    constructor() {
        this.btProcesarArticulo = document.getElementById("body_btProcesarArticulo");
        this.lblCodigoArticulo = document.getElementById("body_lblCodigoArticulo");
        this.lblPrecioVenta = document.getElementById("body_lblPrecioVenta");
        this.lblGanancia = document.getElementById("body_lblGanancia");
        this.lblArticuloMayor = document.getElementById("body_lblArticuloMayor");
        this.lblTotalProcesados = document.getElementById("body_lblTotalProcesados");
    }
    onProcesarArticulo(callback) {
        this.btProcesarArticulo.onclick = callback;
    }
    reportar(empresa) {
        const ultimo = empresa.ultimoArticulo;
        this.lblCodigoArticulo.innerHTML = ultimo?.codigo.toString() || "0";
        this.lblPrecioVenta.innerHTML = ultimo?.venta.toString() || "0";
        this.lblGanancia.innerHTML = empresa.totalGanancia.toFixed(2);
        this.lblArticuloMayor.innerHTML = empresa.articuloMayorPrecio.toString();
        this.lblTotalProcesados.innerHTML = empresa.totalProcesados.toString();
    }
}
//# sourceMappingURL=Cl_vEmpresaArticulosBootstrap.js.map