const {JWT} = require('google-auth-library')
require('dotenv').config()
const { GoogleSpreadsheet } = require('google-spreadsheet')


const SCOPES = [
    'https://www.googleapis.com/auth/spreadsheets',
     'https://www.googleapis.com/auth/drive.file',
]

const jwt = new JWT({
    email:process.env.cliente_email,
    key:process.env.private_key,
    scopes:SCOPES,
})

const doc = new GoogleSpreadsheet("1ZB_PblJhqCXtUwhzJZVBXujA7djn4Q4nvLvKNl12CZQ/edit?gid=0#gid=0", jwt)


async function getDoc(){
    const data = await doc.loadInfo()
    console.log(data)
    const GoogleSpreadsheet = {
        
    }
}