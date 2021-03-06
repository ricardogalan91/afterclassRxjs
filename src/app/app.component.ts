import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'afterclass3';
  /*
    APLICACION DE INGRESO DE PRODUCTOS A VENDER CON FORMULARIO Y LISTA
    1.- IMPLEMENTACIÓN DE SERVICIO Y DESARROLLO DE METODO PARA DEVOLVER OBSERVABLE PARA LA LISTA
    2.- IMPLEMENTACIÓN DE TABLA Y FORMULARIO (HTML) SE TENDRÍA QUE AÑADIR REACTIVEFORMSMODULE AL APP MODULE
    3.- IMPLEMENTACION DE TABLA CON METODO PARA HACER GET DE LA LISTA DE PRODUCTOS
        METODO ONCLICKADD QUE SE EJECUTE CON UN BOTON PARA NAVEGAR A FORM
        METODO ONCLICKROW PARA NAVEGAR A EDIT FORM PASANDO LA DATA A EDITAR AL FORM
        METODO ON DELETE PARA ELIMINAR EL PRODUCTO DE LA LISTA
    4.-IMPLEMENTACION DE FORM INSTANCIA DE FORM CON FORM BUILDER, LLAMADA DE SERVICIO PARA CHEQUEAR SI ES EDIT Y HACER PATCH AL FORM
        METODO ON SUBMIT DONDE SE OBTIENE LA LISTA DE PRODUCTOS PARA LUEGO AÑADIR AL ARRAY EL NUEVO PRODUCTO
        EN EL ONSUBMIT TAMBIÉN SE EJECUTARÁ FUNCIONALIDAD PARA AÑADIR ID
        DEPENDIENDO DE SI ES EDIT O NO SE REEMPLAZA LA DATA CON EL ID O SE AGREGA UN NUEVO PRODUCTO
        POR ULTIMO NAVEGA A PRODUCTS LIST UNA VEZ AGREGADO O EDITADO
  */
}
