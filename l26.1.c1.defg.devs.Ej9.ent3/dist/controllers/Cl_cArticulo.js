import Cl_mArticulo from "../models/Cl_mArticulo.js";
export default class Cl_cArticulo {
    vista;
    callback;
    constructor(vista) {
        this.vista = vista;
        this.vista.onCancelar(() => this.btCancelarOnClick());
        this.vista.onAceptar(() => this.btAceptarOnClick());
    }
    solicitarArticulo(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    btCancelarOnClick() {
        this.callback(null);
        this.vista.ocultar();
    }
    btAceptarOnClick() {
        this.callback(new Cl_mArticulo({
            codigo: this.vista.codigo,
            costo: this.vista.costo,
            venta: this.vista.venta,
            peso: this.vista.peso
        }));
        this.vista.ocultar();
    }
}
//# sourceMappingURL=Cl_cArticulo.js.map