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
    })
    console.log('created new file: ' + jsonFileName)
})




// const downloadPage = (url='http://nodeprogram.com') => {
//     console.log('downloading ', url)
//     const fetchPage = (urlF, callback) => {
//       http.get(urlF, (response) => {
//         let buff = ''
//         response.on('data', (chunk) => { 
//           buff += chunk
//         })
//         response.on('end', () => {
//           callback(null, buff)
//         })
//       }).on('error', (error) => {
//         console.error(`Got error: ${error.message}`)
//         callback(error)
//       })
//     }

//     const folderName = uuidv1()
//     fs.mkdirSync(folderName)
//     fetchPage(url, (error, data)=>{
//       if (error) return console.log(error)
//       fs.writeFileSync(path.join(__dirname, folderName, 'url.txt'), url)  
//       fs.writeFileSync(path.join(__dirname, folderName, 'file.html'), data)
//       console.log('downloading is done in folder ', folderName)
//     })
//   }
  
//   downloadPage(process.argv[2])