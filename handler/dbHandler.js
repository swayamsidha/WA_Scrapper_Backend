const dbConnection = require('../db/dbConnect')

exports.addContactsToDb = (request, response) => {
    console.log('request is')
    console.log(request.body)
    const groupContacts = request.body
    try {
        let insertQuery = `INSERT INTO group_contacts (screen_name, name_or_number) values ?`
        dbConnection.query(insertQuery, [groupContacts], (err) => {
            if(err){
                throw new Error(err.message)
            }
        })
        return response.status(200).send('data inserted')
    } catch (error) {
        return response.status(400).send(error.message)
    }
}