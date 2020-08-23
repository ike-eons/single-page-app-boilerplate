import axios from "axios";

// export default()=>{
//     return axios.create({
//         baseURL:"http://127.0.0.1:8000/api",
//         withCredentials:false,
//         headers:{
//             Accept:"application/json",
//             "Context-Type":"application/json"
//         }
//     })
// }

let BaseApi = axios.create({
    baseURL:"http://127.0.0.1:8000/api",
        
});

let Api = ()=>{
    let token = localStorage.getItem('token');
    if(token){
        BaseApi.defaults.headers.common["Authorization"] = `Bearer ${token}`
    }
    return BaseApi
}

export default Api