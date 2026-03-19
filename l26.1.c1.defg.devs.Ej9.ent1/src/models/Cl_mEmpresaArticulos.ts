import Cl_mArticulo from "./Cl_mArticulo.js";

export default class Cl_mEmpresaArticulos {
  private acGanancia: number = 0;
  private cntArticulos: number = 0;
  private mayorPrecio: number = 0;
  private codigoMayorPrecio: number = 0;
  procesarArticulo(a: Cl_mArticulo): void {
    this.acGanancia += a.ganancia;
    this.cntArticulos++;

    if (a.venta > this.mayorPrecio) {
      this.mayorPrecio = a.venta;
      this.codigoMayorPrecio = a.codigo;
    }
  }

  get totalGanancia(): number {
    return this.acGanancia;
  }

  get articuloMayorPrecio(): number {
    return this.codigoMayorPrecio;
  }

}