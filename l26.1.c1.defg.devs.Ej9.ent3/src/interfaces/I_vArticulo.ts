export interface I_vArticulo {
  get codigo(): number;
  get costo(): number;
  get venta(): number;
  get peso(): number;

  mostrar(): void;
  ocultar(): void;
  onAceptar(callback: () => void): void;
  onCancelar(callback: () => void): void;
}