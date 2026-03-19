export default class Cl_vEmpresaArticulosPlain {
    btProcesarArticulo;
    lblCodigoArticulo;
    lblPrecioVenta;
    lblGanancia;
    lblArticuloMayor;
    lblTotalProcesados;
    lblPeso;
    constructor() {
        this.btProcesarArticulo = document.getElementById("body_btProcesarArticulo");
        this.lblCodigoArticulo = document.getElementById("body_lblCodigoArticulo");
        this.lblPrecioVenta = document.getElementById("body_lblPrecioVenta");
        this.lblGanancia = document.getElementById("body_lblGanancia");
        this.lblArticuloMayor = document.getElementById("body_lblArticuloMayor");
        this.lblTotalProcesados = document.getElementById("body_lblTotalProcesados");
        this.lblPeso = document.getElementById("body_lblPeso");
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
        this.lblPeso.innerHTML = empresa.promediopeso.toString();
    }
}
//# sourceMappingURL=Cl_vEmpresaArticulosPlain.js.map