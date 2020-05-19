export const domainURL = 'http://localhost:8080';

export const saveUser = (nameLocalStorage, data) =>{
    var clientInfor = {
        "username" : data.username,
        "token" : data.type + " " + data.token
    }
    
    localStorage.setItem(nameLocalStorage, clientInfor);
}