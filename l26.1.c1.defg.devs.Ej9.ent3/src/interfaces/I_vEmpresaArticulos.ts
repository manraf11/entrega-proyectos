import Cl_mEmpresaArticulos from "../models/Cl_mEmpresaArticulos.js";

export interface I_vEmpresaArticulos {
  onProcesarArticulo(callback: () => void): void;
  reportar(empresa: Cl_mEmpresaArticulos): void;
}