//Expor os Admin

function AcharAdm(map){
    let Admins = [];
    for([key,value] of map){
        if(value === 'Admin'){
            Admins.push(key);
        }
    }
    return Admins;
}

const usuarios= new Map();

usuarios.set('Luiz','Admin');
usuarios.set('Daniel','Admin')
usuarios.set('Jorge','Usuer');
usuarios.set('Natália','Admin');

console.log(AcharAdm(usuarios))