export default class Cl_vEmpresaPlain {
    btProcesarPersonal;
    lblTotalObreros;
    lblPromedioObreros;
    lblTotalAdministrativos;
    lblPromedioAdministrativos;
    lblTotalProcesados;
    lblPorcentajeobreros;
    lblPeso;
    constructor() {
        this.btProcesarPersonal = document.getElementById("body_btProcesarPersonal");
        this.lblTotalObreros = document.getElementById("body_lblTotalObreros");
        this.lblPromedioObreros = document.getElementById("body_lblPromedioObreros");
        this.lblTotalAdministrativos = document.getElementById("body_lblTotalAdministrativos");
        this.lblPromedioAdministrativos = document.getElementById("body_lblPromedioAdministrativos");
        this.lblTotalProcesados = document.getElementById("body_lblTotalProcesados");
        this.lblPorcentajeobreros = document.getElementById("body_lblPorcentajeobreros");
        this.lblPeso = document.getElementById("body_lblPeso");
    }
    onProcesarPersonal(callback) {
        this.btProcesarPersonal.onclick = callback;
    }
    reportar(empresa) {
        this.lblTotalObreros.innerHTML = empresa.totalobreros.toString();
        this.lblPromedioObreros.innerHTML = empresa.PromedioObreros.toFixed(2);
        this.lblTotalAdministrativos.innerHTML = empresa.totalAdministrativos.toString();
        this.lblPromedioAdministrativos.innerHTML = empresa.PromedioAdministrativos.toFixed(2);
        this.lblTotalProcesados.innerHTML = empresa.totalregistros.toString();
        this.lblPorcentajeobreros.innerHTML = empresa.porcentajeobreros.toString();
        this.lblPeso.innerHTML = empresa.promediopeso.toFixed(2);
    }
}
//# sourceMappingURL=Cl_vEmpresaPlain.js.map