const express= require('express');
const router= express.Router();

const pool = require('../database');

router.get('/institutions', async (req , res) => {
    var headquarters= await pool.query(`SELECT * FROM headquarters;`);
    
    var columns= [];

    headquarters.forEach(headquarter => {
        columns.push(headquarter.headquarter);
        columns.push(headquarter.acronym);
        columns.push(headquarter.name);
        columns.push(headquarter.location);
    });

    console.log(columns);

    headquarters = JSON.stringify(headquarters);
    headquarters =  JSON.parse(headquarters);
    res.json(headquarters);

    //res.json(user);
});

router.post('/addInstitution', async (req , res) => {
    const tablename= req.query.tablename;
    const headquarter= req.query.headquarter;
    const acronym= req.query.acronym;
    const name= req.query.name;
    const location= req.query.location;

    if(tablename=='branch'){
        await pool.query(`INSERT INTO ${tablename} (headquarter,acronym,name,location) VALUES ('${headquarter}','${acronym}','${name}','${location}');`);
        const id_headquarter= req.query.id_headquarter; 
        const id_branchquery= await pool.query(`select * from branch order by id desc limit 1`);
        const id_branch= id_branchquery[0].id;
        console.log(id_branch);
        await pool.query(`INSERT INTO partners (id_headquarter,id_branch) VALUES ('${id_headquarter}','${id_branch}');`);
        
    }else{
        await pool.query(`INSERT INTO ${tablename} (headquarter,acronym,name,location) VALUES ('${headquarter}','${acronym}','${name}','${location}');`);
    }
    
    res.json(200);

    //res.json(user);
});

router.delete('/removeInstitution', async (req , res) => {
    const tablename= req.query.tablename;
    const id= req.query.id;

    await pool.query(`DELETE FROM ${tablename} WHERE id=${id};`);
    
    res.json(200);

    //res.json(user);
});

router.get('/headquarters', async (req , res) => {

    var headquarters= await pool.query(`SELECT * FROM headquarters;`);
    
    var columns= [];

    headquarters.forEach(headquarter => {
        columns.push(headquarter.headquarter);
        columns.push(headquarter.acronym);
        columns.push(headquarter.name);
        columns.push(headquarter.location);
    });

    console.log(columns);

    headquarters = JSON.stringify(headquarters);
    headquarters =  JSON.parse(headquarters);
    res.json(headquarters);
});

module.exports= router;