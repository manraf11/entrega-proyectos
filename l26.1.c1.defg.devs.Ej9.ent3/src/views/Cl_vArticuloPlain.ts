import { I_vArticulo } from "../interfaces/I_vArticulo.js";

export default class Cl_vArticuloPlain implements I_vArticulo {
  private inCodigo: HTMLInputElement;
  private inCosto: HTMLInputElement;
  private inVenta: HTMLInputElement;
  private inPeso: HTMLInputElement;
  private btCancelar: HTMLButtonElement;
  private btAceptar: HTMLButtonElement;
  private vista: HTMLElement;

  constructor() {
    this.vista = document.getElementById("articulo") as HTMLElement;
    this.inCodigo = document.getElementById("articulo_inCodigo") as HTMLInputElement;
    this.inCosto = document.getElementById("articulo_inCosto") as HTMLInputElement;
    this.inVenta = document.getElementById("articulo_inVenta") as HTMLInputElement;
      this.inPeso = document.getElementById("articulo_inPeso") as HTMLInputElement;
    this.btCancelar = document.getElementById("articulo_btCancelar") as HTMLButtonElement;
    this.btAceptar = document.getElementById("articulo_btAceptar") as HTMLButtonElement;
  }

  get codigo(): number { return +this.inCodigo.value; }
  get costo(): number { return +this.inCosto.value; }
  get venta(): number { return +this.inVenta.value; }
    get peso(): number { return +this.inPeso.value; }


  onAceptar(callback: () => void): void { this.btAceptar.onclick = callback; }
  onCancelar(callback: () => void): void { this.btCancelar.onclick = callback; }

  mostrar(): void {
    this.inCodigo.value = "";
    this.inCosto.value = "";
    this.inVenta.value = "";
    this.inPeso.value = "";
    this.vista.hidden = false;
  }

  ocultar(): void { this.vista.hidden = true; }
}   