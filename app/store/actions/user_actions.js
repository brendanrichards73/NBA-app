

import axios from 'axios';

export function signUp(){

    return {
        type:'SIGN_UP',
        payload:{
            email: 'brendan@gmail.com',
            token: 'abcdefghijklm'
        }
    }
}


export function signIn(){
    return {
        type:'SIGN_IN',
        payload:{
            email: 'brendan@gmail.com',
            token: 'abcdefghijklm'
        }
    }
}