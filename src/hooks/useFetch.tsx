import axios from "axios";
import { useCallback } from "react";

const useFetch = () => {
 const request=useCallback(
  
  async (url:string)=>{
  try{
     const response = await axios(url);
     return response.data;
  } catch(err){
    throw err;
  }
 
 },[])

  return { request };
};
export default useFetch;