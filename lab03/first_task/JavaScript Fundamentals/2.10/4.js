let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}


let message1 = (message1=='Employee') ? 'Hello' : (message1=='Director') ? 'Greetings' : (message1=='') ? 'No login' : '';