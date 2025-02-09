switch (browser) {
    case 'Edge':
      alert( "You've got the Edge!" );
      break;
  
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert( 'Okay we support these browsers too' );
      break;
  
    default:
      alert( 'We hope that this page looks ok!' );
  }


if(browser1=='Edje'){
    alert( "You've got the Edge!" );
} else if(browser1=='Chrome' || browser1=='Firefox' || browser1=='Safari' || browser1=='Opera'){
    alert( 'Okay we support these browsers too' );
} else{
    alert( 'We hope that this page looks ok!' );
}