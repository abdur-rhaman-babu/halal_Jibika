export const getDatafromLs =()=>{
    let Data =  localStorage.getItem('allData')
    return Data ?  JSON.parse(Data) : []
 }
 