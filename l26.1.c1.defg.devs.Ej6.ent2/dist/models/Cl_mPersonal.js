export default class Cl_mPersonal {
    _nombre = "";
    _tipo = 0;
    _salarioBase = 0;
    constructor({ nombre, tipo, salario } = {
        nombre: "",
        tipo: 0,
        salario: 0,
    }) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.salarioBase = salario;
    }
    set nombre(nombre) { this._nombre = nombre; }
    get nombre() { return this._nombre; }
    set tipo(tipo) { this._tipo = +tipo; }
    get tipo() { return this._tipo; }
    set salarioBase(salario) { this._salarioBase = +salario; }
    get salarioBase() { return this._salarioBase; }
    get salarioTotal() {
        return this.salarioBase;
    }
}
//# sourceMappingURL=Cl_mPersonal.js.map