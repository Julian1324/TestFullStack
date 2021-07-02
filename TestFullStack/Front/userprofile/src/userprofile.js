function init(){
    const Http = new XMLHttpRequest();

    const url=`http://localhost:4000/institutions`;
    Http.open('GET', url, true);
    
    Http.send();

    var username= document.querySelector('#username');
    username.innerHTML= localStorage.getItem('logged');
    
    Http.onload = (e) => {

        if(Http.status==0 || Http.status==404){

        }else{
            //console.log((Http.responseText));
            if(Http.responseText!= undefined){
                
                var data= JSON.parse(Http.responseText);

                

                for (let index = 0; index < data.length; index++) {

                    var seccion = document.createElement("div");
                    var headquarter = document.createElement("div");
                    var acronym = document.createElement("div");
                    var name = document.createElement("div");
                    var location = document.createElement("div");
                    var remove = document.createElement("div");
                    var content = document.createTextNode("");

                    seccion.appendChild(content);
                    headquarter.appendChild(content);
                    acronym.appendChild(content);
                    name.appendChild(content);
                    location.appendChild(content);
                    remove.appendChild(content);

                    seccion.appendChild(headquarter);
                    seccion.appendChild(acronym);
                    seccion.appendChild(name);
                    seccion.appendChild(location);
                    seccion.appendChild(remove);

                    document.querySelector('.listBox').appendChild(seccion);

                    seccion.className='seccion';
                    headquarter.className='headquarter';
                    acronym.className='acronym';
                    name.className='name';
                    location.className='location';
                    remove.className='remove';

                    // id de la base de datos
                    headquarter.id= data[index].id;

                    document.querySelectorAll('.headquarter')[index+1].innerHTML=data[index].headquarter;
                    document.querySelectorAll('.acronym')[index+1].innerHTML=data[index].acronym;
                    document.querySelectorAll('.name')[index+1].innerHTML=data[index].name;
                    document.querySelectorAll('.location')[index+1].innerHTML=data[index].location;

                    remove.addEventListener("click", removeBtn);
                        
                }
                    
                //document.querySelectorAll();
            }
            
        }

        

        
        
    }

    
}

function backHome(){
    window.location='../index.html';
}

function onAddInstitution(){
    window.location= '../additionform/additionform.html';
}

function removeBtn(button){
    const Http = new XMLHttpRequest();

    var tablename;
    if(button.path[1].children[0].innerHTML == 'Yes'){
        tablename='headquarters';
    }else{
        tablename= 'branch';
    }
    
    // encontrando el id de la base de datos
    const id=button.path[1].children[0].id;

    console.log(tablename);

    const url=`http://localhost:4000/removeInstitution?tablename=${tablename}&id=${id}`;
    Http.open('DELETE', url, true);
    
    Http.send();

    
    Http.onload = (e) => {

        if(Http.status==0 || Http.status==404){

        }else{
            window.location.reload();
            
        }

        

        
        
    }
}

function onSignOut(){
    localStorage.clear();
    window.location= '../index.html';
}