'use strict'

const fs = require('fs')
const path = require('path')

// bismillah 

// Create folder

// fs.mkdir(path.join(__dirname,'templates'),err => {
//     if(err) throw new Error(err)
//     console.log('Folder created...')
// })

// Create and write to file

// fs.writeFile(path.join(__dirname,'mynotes.txt'),'Create txt file',err => {
//     if(err) throw new Error(err)

//     console.log('File created...')

//     fs.appendFile(path.join(__dirname,'mynotes.txt'),' and append text',err => {
//         if(err) throw new Error(err)
//         console.log('File appended...')
//     })
// })

// Read file

fs.readFile(path.join(__dirname,'utf-8','mynotes.txt'),(err,data) => {
    if(err) throw new Error(err)
    console.log(data.toString()) // if not use utf-8, data will be buffer
    console.log(data)
})