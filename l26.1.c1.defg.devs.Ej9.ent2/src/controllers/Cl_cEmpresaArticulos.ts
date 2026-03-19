import Cl_mEmpresaArticulos from "../models/Cl_mEmpresaArticulos.js";
import { I_vEmpresaArticulos } from "../interfaces/I_vEmpresaArticulos.js";
import Cl_cArticulo from "./Cl_cArticulo.js";

export default class Cl_cEmpresaArticulos {
  private mEmpresa: Cl_mEmpresaArticulos;
  private vEmpresa: I_vEmpresaArticulos;
  private cArticulo: Cl_cArticulo;

  constructor(vistaEmpresa: I_vEmpresaArticulos, controladorArticulo: Cl_cArticulo) {
    this.mEmpresa = new Cl_mEmpresaArticulos();
    this.vEmpresa = vistaEmpresa;
    this.cArticulo = controladorArticulo;
    this.vEmpresa.onProcesarArticulo(() => this.procesarArticulo());
  }

  private procesarArticulo() {
    this.cArticulo.solicitarArticulo((articulo) => {
      if (articulo !== null) {
        this.mEmpresa.procesarArticulo(articulo);
        this.vEmpresa.reportar(this.mEmpresa);
      }
    });
  }
}