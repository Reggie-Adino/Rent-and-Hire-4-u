const form = document.querySelector("form");
const fileInput = document.querySelector(".file-input");
const progressArea = document.querySelector(".progress-area");
const uploadedArea = document.querySelector(".uploaded-area");

// form click event
form.addEventListener("click", () =>{
  fileInput.click();
});

//uploading

form.addEventListener('change',(obj)=>{
    
    console.log(obj);
   let file = obj.target.files[0];
   console.log(file)

   let formData = new FormData();

   formData.append('image',file)
    // let file = target.files[0];
    // let file =obj.target(files[0]);
    console.log(formData);

    fetch('https://buy-n-rent-4-u.herokuapp.com/upload',{
        method:'POST',
        body:formData
      }).then(data =>{
        console.log(data);
      }).then( res =>{
         if (res.status==200) {
            //  success
         } else {
            //  failed
         }
      })
    
})