import Api from './api.js'

export default{
    register(user){
        return Api().post(`/register`,user)
    },

    auth(){
        return Api().get(`/user`);
    },

    login(user){
        return Api().post('/',user);
    },

    logout(){
        return Api().post('/logout');
    }
};