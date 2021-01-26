const day = 'wednesday';

switch(day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare videos');
        break;
    case 'wednesday':
        console.log('Exercise')
        // break;
    case 'thursday':
        console.log('Code');
        // break;
    case 'friday':
        console.log('CodeRecord'); // this gets run since no more matching will be made
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day')                    
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare videos');
} else if (day === 'wednesday') {
    console.log('Exercise')
} else if (day === 'thursday') {
    console.log('Code')
} else if (day === 'friday') {
    console.log('CodeRecord')
} else if (day === 'satuday' || day === 'sunday') {
    console.log('Enjoy the weekend')
} else {
    console.log('Not a valid day')
}
