const AWS = require('aws-sdk');
AWS.config.update({region: "us-east-1"});

var docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async function (event, context) {
    let response = await getDynamoDBItems();
    return { statusCode: 200, body: JSON.stringify(response) };
}

async function getDynamoDBItems() {
    var params = {
        TableName: 'munchies',
        ProjectionExpression: 'image,propertyLocation,propertyName,propertyPrice',
    }

    var result = await docClient.scan(params).promise();
    var {Items} = result;
    var cities = [];
    Items.forEach(item => {
        cities.push(item.propertyLocation)
    })
    return {cities};

}