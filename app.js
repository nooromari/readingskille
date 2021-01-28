var user = prompt('what is your name?');
alert('Hi '+ user );
var userInput = prompt('How are you? good or not good');
if (userInput=='good') { alert('Great');
    
} else if (userInput=='not good') {alert('ma3lesh')
    
} else{ alert('have a nice day')}
var ans = prompt ('Do you want to read more about reading skills? yes or no' );

while (!(ans=='yes'|| ans =='no')) {
     ans = prompt ('please write yes or no only!' );
}

if (ans == 'yes') { alert('you can press in (Back to the main page) in the end of the page')
    
}

var num = prompt ('How many books do you read?' );
var image='' ;

if (num == 0) {
    image = '<img src ="https://ctp-media.imigino.com/image/1/process/nullxnull?source=https://northernnatalcourier.co.za/wp-content/uploads/sites/63/2016/10/7qfcq5.jpg">';
} else  {

for (i = 0; i < num; i++) {
    image =image + '<img src ="https://image.shutterstock.com/image-vector/happy-smiley-emoticon-reading-book-260nw-228260320.jpg">';
}
}
document.write(image);