var btnClick=false;

function init(){
    const Http = new XMLHttpRequest();

    const url=`http://localhost:4000/headquarters`;

    Http.open('GET', url, true);
    
    Http.send();

    Http.onload = (e) => {

        if(Http.status==0 || Http.status==404){

        }else{
            //console.log((Http.responseText));
            if(Http.responseText!= undefined){
                
                var data= JSON.parse(Http.responseText);
                

                for (let index = 3; index < data.length; index++) {
                    var option= document.createElement("option");
                    option.style.fontSize='1.3em';
                    option.innerHTML=''+data[index].name;
                    document.querySelector('#selectHeadQuarter').appendChild(option);
                    
                }
                console.log(data);
                
            }
            
        }
    }
}

function backHome(){
    window.location= '../index.html';
}

function isBranch(number){
    if(number==1){

        var yes= document.querySelectorAll('.yesNoBtn')[number-1];
        yes.style.backgroundColor= '#009adb';

        var no= document.querySelectorAll('.yesNoBtn')[number];
        no.style.backgroundColor= 'rgba(128, 128, 128, 0.129)';
        document.querySelector('#instHeadQuarter').style.display='flex';
        yes.id='true';
        no.id= 'false';
        btnClick=true;
    }else{
        var no= document.querySelectorAll('.yesNoBtn')[number-1];
        no.style.backgroundColor= '#009adb';

        var yes= document.querySelectorAll('.yesNoBtn')[0];
        yes.style.backgroundColor= 'rgba(128, 128, 128, 0.129)';
        document.querySelector('#instHeadQuarter').style.display='none';
        yes.id='false';
        no.id= 'true';
        btnClick=true;
    }
}

function onAddInstitution(){

    
    const Http = new XMLHttpRequest();

    var tablename;
    var headquarter;
    var acronym;
    var name;
    var location;
    var link;
    var correcLink=false;
    
    link= document.querySelector('.textFieldLink').value;
    link= link.split('');

    if( (link[0]== 'h' && link[1]=='t' && link[2]=='t' && link[3]=='p') || (link[0]== 'h' && link[1]=='t' && link[2]=='t' && link[3]=='p' && link[4]=='s')){
        correcLink= true;
    }
    acronym= document.querySelectorAll('.textField')[0].value;
    name= document.querySelectorAll('.textField')[1].value;

    name= name.split(" ");
    
    // Cogiendo datos del select
    location= document.querySelectorAll('.textField')[2].value+', '+document.querySelectorAll(".selectTypeAndCountry")[1].options[document.querySelectorAll(".selectTypeAndCountry")[1].selectedIndex].text;
    
    if(btnClick && name.length < 10 && correcLink){
        console.log("entro");
        var yesBtn=document.querySelectorAll('.yesNoBtn')[0].id;
        var id_headquarter;
        if(yesBtn== "true"){
            tablename='branch';
            headquarter='No';

            id_headquarter= document.querySelector("#selectHeadQuarter").selectedIndex+1;

            //&id_headquarter=${id_headquarter}
            
        }else{
            tablename='headquarters';
            headquarter='Yes';
            id_headquarter='';
        }

        const url=`http://localhost:4000/addInstitution?tablename=${tablename}&headquarter=${headquarter}&acronym=${acronym}&name=${name}&location=${location}&id_headquarter=${id_headquarter}`;

        Http.open('POST', url, true);
    
        Http.send();

        alert("Added succesfully");

        window.location='../userprofile/userprofile.html';
    }else{
        alert('Verify your information');
    }

    /*
    Http.open('POST', url, true);
    
    Http.send();*/

    
    Http.onload = (e) => {

        if(Http.status==0 || Http.status==404){

        }else{
            //console.log((Http.responseText));
            if(Http.responseText!= undefined){
                
                //var data= JSON.parse(Http.responseText);
                
                //document.querySelectorAll();
            }
            
        }

        

        
        
    }
}