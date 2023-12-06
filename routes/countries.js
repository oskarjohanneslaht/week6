const express = require('express');
const router = express.Router();
const data = require('../data/countries.json');


router.get('/', (req, res) =>{
    res.status(200).json(data);
});

router.get('/:countriesId', (req, res) =>{
    const requestedCountriesId = req.params.countriesId;
    const countries = data.countries.filter(countriesInData => {
       if(countriesInData.id.toString() === requestedCountriesId) {
            return countriesInData;
       }
    }); 
    
    res.status(200).json(countries);
});

module.exports = router;