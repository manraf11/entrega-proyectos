export default class Cl_vPersonalBootstrap {
    inNombre;
    inTipo;
    inSalario;
    inPeso;
    btCancelar;
    btAceptar;
    modal;
    constructor() {
        this.inNombre = document.getElementById("personal_inNombre");
        this.inTipo = document.getElementById("personal_inTipo");
        this.inSalario = document.getElementById("personal_inSalario");
        this.inPeso = document.getElementById("personal_inPeso");
        this.btCancelar = document.getElementById("personal_btCancelar");
        this.btAceptar = document.getElementById("personal_btAceptar");
        const elementoModal = document.getElementById("personal");
        this.modal = new bootstrap.Modal(elementoModal);
    }
    get nombre() { return this.inNombre.value; }
    get tipo() { return +this.inTipo.value; }
    get salario() { return +this.inSalario.value; }
    get peso() { return +this.inPeso.value; }
    onAceptar(callback) { this.btAceptar.onclick = callback; }
    onCancelar(callback) { this.btCancelar.onclick = callback; }
    mostrar() {
        this.inNombre.value = "";
        this.inTipo.value = "";
        this.inSalario.value = "";
        this.inPeso.value = "";
        this.modal.show();
    }
    ocultar() { this.modal.hide(); }
}
//# sourceMappingURL=Cl_vPersonalBootstrap.js.map