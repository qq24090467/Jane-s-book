import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8000';

export default{
    get(url,params){
        let user = '';
        if(localStorage.hasOwnProperty('token')){
            user = localStorage.getItem('token');
        }
        return  axios({
                    method:'get',
                    url:url,
                    params:params,
                    headers:{
                        'token':user
                    }
                })
    },
    post(url,data){
        let user = '';
        if(localStorage.hasOwnProperty('token')){
            user = localStorage.getItem('token');
        }
        return  axios({
                    method:'post',
                    url:url,
                    data:data,
                    headers:{
                        'token':user
                    }
                })
    },
}