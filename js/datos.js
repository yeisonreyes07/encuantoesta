  //var contenido = document.querySelector('#contenido')
        
  function traer(){
    fetch('https://s3.amazonaws.com/dolartoday/data.json')
    .then(res => res.json() )
    .then(data => {
        //console.log(data)
        tabla(data)
        //console.log(data.USD.promedio)
    })
    
}
function eArabic(x){
return x.toLocaleString('en-US');
}
function tabla(data) {

contenido.innerHTML = ''
if(data => valor){
var valor = data;

hora.innerHTML = `
<p>${ valor._timestamp.fecha}</p>

` 

contenido.innerHTML = `

<tr  class="row100 body">
    <td><i class="fas fa-dollar-sign"></i> Dolar</td>
    <td>${eArabic(valor.USD.transferencia) }</td>
    <td>${eArabic(valor.USD.transfer_cucuta) }</td>
    <td>${eArabic(valor.USD.sicad2)}</td>
    <td>${eArabic(valor.USD.localbitcoin_ref)}</td>
    <td>${eArabic(valor.USD.promedio_real)} Bss</td>
</tr>

`
contenido_eur.innerHTML = `

<tr  class="row100 body">
    <td><i class="fas fa-euro-sign"></i> Euro</td>
    <td>${eArabic(valor.EUR.transferencia) }</td>
    <td>${eArabic(valor.EUR.transfer_cucuta) }</td>
    <td>${eArabic(valor.EUR.sicad2 )}</td>
    <td>${eArabic(valor.EUR.dolartoday)}</td>
    <td>${eArabic(valor.EUR.promedio_real)} Bss</td>
</tr>

`
nro = eArabic(valor.USD.promedio_real);
}
}

function enviar(){
m1 = document.getElementById("numero_enviar").value;
m2 = "https://api.whatsapp.com/send?phone=";
m3 = "&text=El%20precio%20del%20dolar%20hoy%20es%20de%20";
r = m2 + m1 + m3 + nro;

document.getElementById("whatsapp").setAttribute("href", r);
}