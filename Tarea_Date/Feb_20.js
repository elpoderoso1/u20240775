const FEB_20 = new Date("2012-01-20 03:12:00"); //'February 20, 2012 03:12:00'
const OPTIONS = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
};
const FORMATTED_TIME = FEB_20.toLocaleTimeString('en-US', OPTIONS);

console.log(FORMATTED_TIME);