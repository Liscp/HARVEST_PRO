const getData=async(user, pass)=>{
    console.log(user)
      const response = await fetch(`http://192.168.1.32:4000/login/${user}/${pass}/`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }   
    }); 
  const json = await response.json();
  console.log(json);     
  return json;
  }
  export default getData