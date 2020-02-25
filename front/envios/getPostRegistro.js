const enviarData=async(x)=>{
    const url = 'http://192.168.1.32:4000/registro'
    
    try{
      const response = await fetch(url,{
        method: 'POST',
        body: x,
        headers:{
          'Content-type': 'application/json'
        }
      })
      if (response.ok){
        alert('Creado exitosamente')
      }
    }catch{
      alert('El usuario ya registrado')
    }
  }
export default enviarData;