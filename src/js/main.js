//Slider de productos relacionados
var carousel = new ch.Carousel(ch('.demo-carousel')[0], {});

//Tabs de descripcion y comentarios
var tabs = new ch.Tabs(ch(".descripcion-tabs")[0]);

//Valores cantidad y pagos
var cantidadDeProductos = 9;
var cantidadTotalTexto = "";
for (i=1; i <= cantidadDeProductos; i++){
  cantidadTotalTexto = cantidadTotalTexto + '<option value="' + i + '">' + i + '</option>';
}
document.getElementById('cantidad').innerHTML = cantidadTotalTexto;

var cantidadDePagos = 12;
var cantidadTotalTexto = "";
for (i=1; i <= cantidadDePagos; i++){
  cantidadTotalTexto = cantidadTotalTexto + '<option value="' + i + '">' + i + '</option>';
}
document.getElementById('pagos').innerHTML = cantidadTotalTexto;
