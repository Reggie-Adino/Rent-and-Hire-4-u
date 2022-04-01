let searchButton1 = document.querySelector("#search-btn");
let search1 =document.querySelector("#search");


searchButton1.addEventListener('click',  async ()=>{
    let searchvalue = search1.value;
    let apartmentData = "";
    await fetch('https://buy-n-rent-4-u.herokuapp.com/apartments/').then(res=> res.json()).then( responds =>apartmentData = responds.data )
    console.log(apartmentData)
  let result =  apartmentData.filter(data=> {
    //console.log(data.city)
    return data.city == searchvalue;
    })

    // populate to landing page

    
    // window.location.href="/landingpage.html" ;
    console.log(result);



})

//https://buy-n-rent-4-u.herokuapp.com/apartments