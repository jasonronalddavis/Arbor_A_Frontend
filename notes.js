import {
    BrowserRouter,
    Routes, // instead of "Switch"
    Route,
  } from "react-router-dom";
  
  // ...
  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
  



  fetch("http://localhost:3000/api/v1/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      'Accept': 'application/json'
      },    
    })
      .then(r => r.json())
      .then(response => {
        if (response.error){
          alert(response.error)
        } else {
        // debugger;
        //const products = response.data.relationships.products.data
        console.log(response.data) 
        }
      })
      .catch(console.log())
  