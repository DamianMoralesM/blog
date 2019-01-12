let nroParrafos = 0;

function addElementToContent(element){
    const row = document.createElement('div') //create div
    row.setAttribute('class','row')  // add class row
    row.appendChild(element) 
    element.setAttribute('class','contenido') 
    document.getElementById('main').appendChild(row) // append to main
}

function AddText()  {

    nroParrafos++;
    let textBlock = document.createElement('textarea') 
    textBlock.setAttribute('name',`bloque[${nroParrafos}]`) // add order
    addElementToContent(textBlock)
          
}



function addImagePicker(){

   const imagePicker = document.createElement('input') 
   imagePicker.setAttribute('type','file')
   addElementToContent(imagePicker)

}

function vistaPrevia(){
   let elementos = ''
   let auxElementos = ''
   let vistaPrevia = ''
   const elementosSeccionContenido =  document.getElementsByClassName('contenido') 
       
    
   for(i = 0; i < elementosSeccionContenido.length ;i++){
        const node = elementosSeccionContenido[i]

        if (node.nodeName == 'TEXTAREA'){

          vistaPrevia = vistaPrevia + previewBlockText(node)
                    
        }
      
        if (node.nodeName == 'INPUT'){

          vistaPrevia = vistaPrevia + previewImage(node)

        }

   }
  
    
   console.log( document.getElementsByClassName('contenido'))
   document.getElementById('preview').innerHTML = vistaPrevia
}

/**

window.URL = window.URL || window.webkitURL;

const fileSelect = document.getElementById("fileSelect"),
    fileElem = document.getElementById("fileElem"),
    fileList = document.getElementById("fileList");

fileSelect.addEventListener("click", function (e) {
  if (fileElem) {
    fileElem.click();
  }
  e.preventDefault(); // prevent navigation to "#"
}, false);

function handleFiles(files) {
  if (!files.length) {
    fileList.innerHTML = "<p>No files selected!</p>";
  } else {
    fileList.innerHTML = "";
    const list = document.createElement("ul");
    fileList.appendChild(list);
    for (let i = 0; i < files.length; i++) {
      const li = document.createElement("li");
      list.appendChild(li);
      
      const img = document.createElement("img");
      img.src = window.URL.createObjectURL(files[i]);
      img.height = 80;
      img.onload = function() {
        window.URL.revokeObjectURL(this.src);
      }
      li.appendChild(img);
      const info = document.createElement("span");
      info.innerHTML = files[i].name + ": " + files[i].size + " bytes";
      li.appendChild(info);
    }
  }
}

 */


  function  previewImage(node){
      const img =  document.createElement('img')
      img.setAttribute('alt','unaImagen')
      return img
  }

  function  previewBlockText(node){
       
    const  auxParrafo = node.value
    return  '<p>' + auxParrafo.replace(/\n/g, "</p>\n<p>") + '</p>'
      
   }