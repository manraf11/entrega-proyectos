export default class Cl_vArticuloBootstrap {
    inCodigo;
    inCosto;
    inVenta;
    btCancelar;
    btAceptar;
    modal;
    constructor() {
        this.inCodigo = document.getElementById("articulo_inCodigo");
        this.inCosto = document.getElementById("articulo_inCosto");
        this.inVenta = document.getElementById("articulo_inVenta");
        this.btCancelar = document.getElementById("articulo_btCancelar");
        this.btAceptar = document.getElementById("articulo_btAceptar");
        const elementoModal = document.getElementById("articulo");
        this.modal = new bootstrap.Modal(elementoModal);
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
        this.modal.show();
    }
    ocultar() { this.modal.hide(); }
}
//# sourceMappingURL=Cl_vArticuloBootstrap.js.map