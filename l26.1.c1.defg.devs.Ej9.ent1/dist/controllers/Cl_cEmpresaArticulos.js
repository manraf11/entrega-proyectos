import Cl_mEmpresaArticulos from "../models/Cl_mEmpresaArticulos.js";
export default class Cl_cEmpresaArticulos {
    mEmpresa;
    vEmpresa;
    cArticulo;
    constructor(vistaEmpresa, controladorArticulo) {
        this.mEmpresa = new Cl_mEmpresaArticulos();
        this.vEmpresa = vistaEmpresa;
        this.cArticulo = controladorArticulo;
        this.vEmpresa.onProcesarArticulo(() => this.procesarArticulo());
    }
    procesarArticulo() {
        this.cArticulo.solicitarArticulo((articulo) => {
            if (articulo !== null) {
                this.mEmpresa.procesarArticulo(articulo);
                this.vEmpresa.reportar(this.mEmpresa);
            }
        });
    }
}
//# sourceMappingURL=Cl_cEmpresaArticulos.js.map