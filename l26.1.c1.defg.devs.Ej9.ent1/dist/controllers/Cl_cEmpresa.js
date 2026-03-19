import Cl_mEmpresa from "../models/Cl_mEmpresaArticulos.js";
import Cl_cArticulo from "./Cl_cArticulo.js";
export default class Cl_cEmpresa {
    constructor({ vistaEmpresa, vistaArticulo, }) {
        this.mEmpresa = new Cl_mEmpresa();
        this.vEmpresa = vistaEmpresa;
        this.vArticulo = vistaArticulo;
        this.vEmpresa.onProcesarPersonal(() => this.procesar1Articulo());
    }
    procesar1Articulo() {
        new Cl_cArticulo({
            vista: this.vArticulo,
            callback: (articulo) => {
                if (articulo) {
                    // Guardar el último artículo procesado para mostrarlo en el reporte
                    this.mEmpresa.ultimoArticulo = articulo;
                    this.mEmpresa.procesarArticulo(articulo);
                    this.vEmpresa.reportar(this.mEmpresa);
                }
            },
        });
    }
}
