export default class Cl_vEmpresaArticulosBootstrap {
    btProcesarArticulo;
    lblCodigoArticulo;
    lblGanancia;
    lblArticuloMayor;
    constructor() {
        this.btProcesarArticulo = document.getElementById("body_btProcesarArticulo");
        this.lblCodigoArticulo = document.getElementById("body_lblCodigoArticulo");
        this.lblGanancia = document.getElementById("body_lblGanancia");
        this.lblArticuloMayor = document.getElementById("body_lblArticuloMayor");
    }
    onProcesarArticulo(callback) {
        this.btProcesarArticulo.onclick = callback;
    }
    reportar(empresa) {
        this.lblGanancia.innerHTML = empresa.totalGanancia.toFixed(2);
        this.lblArticuloMayor.innerHTML = empresa.articuloMayorPrecio.toString();
    }
}
//# sourceMappingURL=Cl_vEmpresaArticulosBootstrap.js.map