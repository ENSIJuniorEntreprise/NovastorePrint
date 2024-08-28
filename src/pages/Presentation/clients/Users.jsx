import Users from '../../../data/avis.json';
export const getUsers = function ( page,limit) {
    let array =[];
    for (let i= (page -1) * limit; i< (page * limit );i++){
        array.push(Users[i]);
    }
    return array;
}
export const getlength = function (){
    return Users.length ;
}