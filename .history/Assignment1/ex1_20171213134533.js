const fs = require('fs')
const path = require('path')
const csv = require('csvtojson')
const csvFileName = 'customer-data.csv'
const csvFilePath = path.join(__dirname, csvFileName)
const jsonFileName ='customer-data.json'
const figlet = require('figlet');

csv({toArrayString:true})
.fromFile(csvFilePath)
.on('end_parsed',(jsonObj)=>{
    fs.writeFile(jsonFileName, JSON.stringify(jsonObj), function(error){
        if(error) console.error(error)
        
    }
)
})
.on('done',(error)=>{
    figlet('Csv2Json', function(err, data) {
        console.log(data)
        console.log('created new file: ' + jsonFileName +'\n')
    })
   
})