const fs = require('fs')
const path = require('path')
const csv = require('csvtojson')
const csvFileName = 'customer-data.csv'
const csvFilePath = path.join(__dirname, csvFileName)
const jsonFileName ='customer-data.json'

csv()
.fromFile(csvFilePath)
.on('json',(jsonObj)=>{
    // combine csv header row and csv line to a json object
    // jsonObj.a ==> 1 or 4
    console.log(jsonObj)
})
.on('done',(error)=>{
    fs.writeFile(csvFilePath, JSON.stringify(jsonObj), function(error){
        if(error)
            console.error(error)
            console.log('writing file done')
    }

)
    console.log('end')
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