var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var articles = {
'article-one' : {
    title : "Article One",
    content : " this is article one",
    date : "day one"
},
'article-two' : {
    title : "Article two",
    content : " this is article two",
    date : "day two"
},
'article-three' : {
    title : "Article Three",
    content : " this is article Three",
    date : "day three"
}
};

function CreateTemplate(data) {
    var title = data.title;
    var content = data.content;
    var date = data.date;
    
    var htmltemplate = `
    <html>
    <head>
        <title>${title}</title>
        <link href="ui/style.css" rel="stylesheet">
    </head>
    <body>
        <div class='cont1'>
        <H1>${content}</H1>
        <p>This is a paragraph</p>
        <h2>${date}</h2>
        </div>
    </body>
    </html>
    `
    return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articlename',function(req,res){
  var articlename = req.params.articlename;
  res.send(CreateTemplate(articles[articlename]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
