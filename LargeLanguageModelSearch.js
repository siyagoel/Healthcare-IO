const PDFExtract = require('pdf.js-extract').PDFExtract;
const pdfExtract = new PDFExtract();
const options = {}; /* see below */
const express = require('express')
const bodyParser = require('body-parser')
const res = require('express/lib/response')
const { Configuration, OpenAIApi } = require("openai");
const { throws } = require('assert');
const app = express() 
app.use(express.json())
app.post('/extract-summary', (req, res) => {
  const pdf = req.body.pdf_path 
  function extractPdfData() {
    return new Promise((resolve, reject) => {
      pdfExtract.extract(pdf, options, (err, data) => {
        if (err) {
          reject(err);
        } else {
          numPages = data.pages.length;
          var info = new Array(numPages);
          for (let i = 0; i < numPages; i++) {
            content = data.pages[i].content;
            for (let j = 0; j < content.length; j++) {
              info[i] += content[j].str;
            }
          }
          resolve(info);
        }
      });
    });
  }
  // call the extractPdfData function and use the returned Promise to access the value of info
extractPdfData().then(async (info) => {
    // use the value of info here
    console.log(typeof info[0])
    info = info[0].split(" ").slice(0, 2048)
    const configuration = new Configuration({
      apiKey: "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",
    });
   const openai = new OpenAIApi(configuration);
   p = "Summarize the following scientific article in layman's term" + info 
   const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: p,
        temperature: 0.7,
        max_tokens: 834,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
   });
   console.log("here")
   res.send(response['data']['choices'][0]['text'])
  }).catch((err) => {
    console.log("there was an error. L ")
    console.error(err);
  });
}); 
app.listen(8000) // port number for local server. will not need it after hosting in GCP 
console.log("listening")
exports.server = app 
  console.log(pdf)
  function extractPdfData() {
    return new Promise((resolve, reject) => {
      pdfExtract.extract(pdf, options, (err, data) => {
        if (err) {
          reject(err);
        } else {
          numPages = data.pages.length;
          var info = new Array(numPages);
          for (let i = 0; i < numPages; i++) {
            content = data.pages[i].content;
            for (let j = 0; j < content.length; j++) {
              info[i] += content[j].str;
            }
          }
          resolve(info);
        }
      });
    });
  }
  // call the extractPdfData function and use the returned Promise to access the value of info
extractPdfData().then(async (info) => {
    // use the value of info here
    console.log(typeof info[0])
    info = info[0].split(" ").slice(0, 2048)
    const configuration = new Configuration({
      apiKey: "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",
    });
   const openai = new OpenAIApi(configuration);
   p = "Summarize the following scientific article in layman's term" + info 
   const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: p,
        temperature: 0.7,
        max_tokens: 834,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
   });
   console.log("here")
   res.send(response['data']['choices'][0]['text'])
  }).catch((err) => {
    console.log("there was an error. L ")
    console.error(err);
  });
