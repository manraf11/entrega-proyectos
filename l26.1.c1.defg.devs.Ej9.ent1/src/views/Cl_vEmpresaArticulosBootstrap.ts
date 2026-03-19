import { I_vEmpresaArticulos } from "../interfaces/I_vEmpresaArticulos.js";
import Cl_mEmpresaArticulos from "../models/Cl_mEmpresaArticulos.js";

export default class Cl_vEmpresaArticulosBootstrap implements I_vEmpresaArticulos {
  private btProcesarArticulo: HTMLButtonElement;
  private lblCodigoArticulo: HTMLElement;
  private lblGanancia: HTMLElement;
  private lblArticuloMayor: HTMLElement;

  constructor() {
    this.btProcesarArticulo = document.getElementById("body_btProcesarArticulo") as HTMLButtonElement;
    this.lblCodigoArticulo = document.getElementById("body_lblCodigoArticulo") as HTMLElement;
    this.lblGanancia = document.getElementById("body_lblGanancia") as HTMLElement;
    this.lblArticuloMayor = document.getElementById("body_lblArticuloMayor") as HTMLElement;
  }

  onProcesarArticulo(callback: () => void): void {
    this.btProcesarArticulo.onclick = callback;
  }

  reportar(empresa: Cl_mEmpresaArticulos): void {
    this.lblGanancia.innerHTML = empresa.totalGanancia.toFixed(2);
    this.lblArticuloMayor.innerHTML = empresa.articuloMayorPrecio.toString();
  }
}