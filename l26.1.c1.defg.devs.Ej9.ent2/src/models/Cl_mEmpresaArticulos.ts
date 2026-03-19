import Cl_mArticulo from "./Cl_mArticulo.js";

export default class Cl_mEmpresaArticulos {
  private acGanancia: number = 0;
  private cntArticulos: number = 0;
  private mayorPrecio: number = 0;
  private codigoMayorPrecio: number = 0;
  private _ultimoArticulo: Cl_mArticulo | null = null;

  procesarArticulo(a: Cl_mArticulo): void {
    this.acGanancia += a.ganancia;
    this.cntArticulos++;
    this._ultimoArticulo = a;

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

  get totalProcesados(): number {
    return this.cntArticulos;
  }

  get ultimoArticulo(): Cl_mArticulo | null {
    return this._ultimoArticulo;
  }
}