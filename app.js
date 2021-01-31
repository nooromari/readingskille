function salam(userName) {
    alert('Hi '+ userName );
}

function userStat(userInput) {
    if (userInput=='good') { alert('Great');
} else if (userInput=='not good') {alert('ma3lesh')   
} else{ alert('have a nice day')}
}

function mainPage(ans) {
    while (!(ans=='yes'|| ans =='no')) {
        ans = prompt ('please write yes or no only!' );
   }
   if (ans == 'yes') { alert('you can press in (Back to the main page) in the end of the page')
   }   
}

function bookNum(num,image) {
    if (num == 0) {
        image = '<img src ="https://ctp-media.imigino.com/image/1/process/nullxnull?source=https://northernnatalcourier.co.za/wp-content/uploads/sites/63/2016/10/7qfcq5.jpg">';
    } else  {
    for (i = 0; i < num; i++) {
        image =image + '<img src ="https://image.shutterstock.com/image-vector/happy-smiley-emoticon-reading-book-260nw-228260320.jpg">';
    }
    }
    document.write(image);
}

var user = prompt('what is your name?');
salam(user);

var userEnter = prompt('How are you? good or not good');
userStat(userEnter);

var answer = prompt ('Do you want to read more about reading skills? yes or no' );
mainPage(answer);

var number = prompt ('How many books did you read?' );
var Img='' ;
bookNum(number,Img);
