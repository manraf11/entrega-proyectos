export default class Cl_vArticuloPlain {
    inCodigo;
    inCosto;
    inVenta;
    btCancelar;
    btAceptar;
    vista;
    constructor() {
        this.vista = document.getElementById("articulo");
        this.inCodigo = document.getElementById("articulo_inCodigo");
        this.inCosto = document.getElementById("articulo_inCosto");
        this.inVenta = document.getElementById("articulo_inVenta");
        this.btCancelar = document.getElementById("articulo_btCancelar");
        this.btAceptar = document.getElementById("articulo_btAceptar");
    }
    get codigo() { return +this.inCodigo.value; }
    get costo() { return +this.inCosto.value; }
    get venta() { return +this.inVenta.value; }
    onAceptar(callback) { this.btAceptar.onclick = callback; }
    onCancelar(callback) { this.btCancelar.onclick = callback; }
    mostrar() {
        this.inCodigo.value = "";
        this.inCosto.value = "";
        this.inVenta.value = "";
        this.vista.hidden = false;
    }
    ocultar() { this.vista.hidden = true; }
}
//# sourceMappingURL=Cl_vArticuloPlain.js.map