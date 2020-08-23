import Api from './api'

export default{
    getCookie(){
        Api().get('/sanctum/csrf-cookie')
    }
}