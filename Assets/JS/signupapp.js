// window.addEventListener('Load', ()=>{
//     let firstName = document.querySelector('form2');   
// })/
 

const signUp = document.querySelector("#form2");
 const firstName =document.querySelector("#firstName");
 const lastName =document.querySelector("#lastName");
 const mail = document.querySelector("#email");
 const gend = document.querySelector("#gender");
 const pwd = document.querySelector("#password");

signUp.addEventListener('submit',  async function(e){
    e.preventDefault();

    
    let firstname =firstName.value;
    let lastname = lastName.value;
    let email = mail.value;
    let gender = gend.value;
    let password = pwd.value;
    console.log(gender);
    console.log(firstname);


  await  fetch("https://buy-n-rent-4-u.herokuapp.com/signup", {
        method: "POST",
        body: JSON.stringify({
            firstname,
            lastname,
            gender,
            email,
            password
        }),
        headers: {
          "Content-Type": "application/json;charset =UTF-8"
        },
      })
        .then((response) => response.json())
        .then(
          (responseData) => {
            console.log(responseData);
            alert('Signup Successful');
            // history.push("/login")
  
          }
        ).catch((err) => console.log(err));
  
})


// *--------------SIGN IN---------------*/
const signIn = document.querySelector('#form1');
const usermail = document.querySelector('#useremail');
const userpwd = document.querySelector('#pwd');

signIn.addEventListener('submit',  async  function(e){
        e.preventDefault;

        
        let email = usermail.value;
        let password= userpwd.value;
        console.log(email, password)
                    // window.location.href("/index.html")


      await   fetch('https://buy-n-rent-4-u.herokuapp.com/signin',{
            method:'post',
            body: {
                email,
                password
            }
            }).then(function(response) {
                console.log(response);
                 if(response.status === 200){
                //     window.location.href("/index.html")
                alert("Sign in successful");

             }
            
            }).then(
                text=>console.log(text)
            ).catch(err=>console.log(err));
   
    
})



