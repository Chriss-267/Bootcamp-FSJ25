import './style.css'
import { Producto } from './clases/producto';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Tienda la Tienda</h1>
    <form id = "formProducto">
      <section>
        <label>Nombre del producto</label>
         <input type = "text" id = "nombreProducto" name = "name" placeholder = "Ingresa el nombre del producto">
      </section>
      <section>
        <label>Precio</label>
         <input type = "text" id = "precio" name = "precio" placeholder = "Ingresa su precio">
      </section>
      <section>
        <label>Cantidad</label>
         <input type = "text" id = "cantidad" name = "cantidad" placeholder = "Ingresa su cantidad">
      </section>

      <button type = "submit">Agregar Producto</button>
      
    </form>
   
    
  </div>
`





//document.querySelector<HTMLElement>("#parrafo")!.innerText = "Esto es texto desde el p";

//asi con getbyId
const form = document.getElementById("formProducto") as HTMLFormElement;
 form.addEventListener("submit", (e:SubmitEvent)=>{
  e.preventDefault();


  const nombre = (document.getElementById("nombreProducto") as HTMLInputElement).value;
  const precio = parseFloat((document.getElementById("precio") as HTMLInputElement).value);
  const cantidad = parseInt((document.getElementById("cantidad") as HTMLInputElement).value);
  const id  = Date.now();
  console.log(id);
  console.log(nombre);
  console.log(precio);
  console.log(cantidad);

  
  //local storage que se guarden los datos local de cada cliente



  let productito = new Producto(id, nombre, precio, cantidad);
  console.log(productito)
  localStorage.setItem("productos", JSON.stringify(productito))
} )
