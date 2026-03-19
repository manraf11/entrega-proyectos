import { I_vEmpresaArticulos } from "../interfaces/I_vEmpresaArticulos.js";
import Cl_mEmpresaArticulos from "../models/Cl_mEmpresaArticulos.js";

export default class Cl_vEmpresaArticulosBootstrap implements I_vEmpresaArticulos {
  private btProcesarArticulo: HTMLButtonElement;
  private lblCodigoArticulo: HTMLElement;
  private lblPrecioVenta: HTMLElement;
  private lblGanancia: HTMLElement;
  private lblArticuloMayor: HTMLElement;
  private lblTotalProcesados: HTMLElement;
  private lblPeso: HTMLElement;

  constructor() {
    this.btProcesarArticulo = document.getElementById("body_btProcesarArticulo") as HTMLButtonElement;
    this.lblCodigoArticulo = document.getElementById("body_lblCodigoArticulo") as HTMLElement;
    this.lblPrecioVenta = document.getElementById("body_lblPrecioVenta") as HTMLElement;
    this.lblGanancia = document.getElementById("body_lblGanancia") as HTMLElement;
    this.lblArticuloMayor = document.getElementById("body_lblArticuloMayor") as HTMLElement;
    this.lblTotalProcesados = document.getElementById("body_lblTotalProcesados") as HTMLElement;
    this.lblPeso = document.getElementById("body_lblPeso") as HTMLElement;
  }

  onProcesarArticulo(callback: () => void): void {
    this.btProcesarArticulo.onclick = callback;
  }

  reportar(empresa: Cl_mEmpresaArticulos): void {
    const ultimo = empresa.ultimoArticulo;
    this.lblCodigoArticulo.innerHTML = ultimo?.codigo.toString() || "0";
    this.lblPrecioVenta.innerHTML = ultimo?.venta.toString() || "0";
    this.lblGanancia.innerHTML = empresa.totalGanancia.toFixed(2);
    this.lblArticuloMayor.innerHTML = empresa.articuloMayorPrecio.toString();
    this.lblTotalProcesados.innerHTML = empresa.totalProcesados.toString();
    this.lblPeso.innerHTML = empresa.promediopeso.toString();
  }
}