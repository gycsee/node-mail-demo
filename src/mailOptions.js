const text = require('./mailContext');
const parseExcel = require('./parseExcel');

const options = {
from:"helloName freecodecampguangzhou@gmail.com",
to: parseExcel.mailList, 
subject: "This is demo for Node-xlxs-mailer",    
html: text.getContext(),
attachments: 
            [
                {
                    filename: 'QR.jpg',            // attachment_name
                    path: 'img/QR.jpg',            // attachment_path
                    cid : '00000001'               // cid index by mail
                }
                // {
                //     filename: 'map.jpg',            // attachment_name
                //     path: 'img/map.jpg',            // attachment_path
                //     cid : '00000002'               // cid index by mail
                // }
            ]
};

exports.options = options;