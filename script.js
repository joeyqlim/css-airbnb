const guidebooksBtn = document.getElementById('guidebooks-btn');
const destinationsBtn = document.getElementById('destinations-btn');

const sanFran = document.querySelector('.sanfran');
const newYork = document.querySelector('.newyork');
const london = document.querySelector('.london');
const napa = document.querySelector('.napa');
const sonoma = document.querySelector('.sonoma');
const sanFran2 = document.querySelector('.sanfran-2');


guidebooksBtn.addEventListener('click', notDone);
destinationsBtn.addEventListener('click', notDone);

function notDone() {
  alert(`This feature isn't done yet`);
}

sanFran.addEventListener('click', function() {
  window.open(`https://www.google.com/maps/place/San+Francisco,+CA,+USA/@37.7576793,-122.5076402,12z/data=!3m1!4b1!4m5!3m4!1s0x80859a6d00690021:0x4a501367f076adff!8m2!3d37.7749295!4d-122.4194155`);
})

newYork.addEventListener('click', function() {
  window.open(`https://www.google.com/maps/place/New+York,+NY,+USA/@40.6971494,-74.259869,10z/data=!3m1!4b1!4m5!3m4!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728`);
})

london.addEventListener('click', function() {
  window.open(`https://www.google.com/maps/place/London,+UK/@51.528308,-0.3817794,10z/data=!3m1!4b1!4m5!3m4!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5073509!4d-0.1277583`);
})

napa.addEventListener('click', function() {
  window.open(`https://www.google.com/maps/place/Napa,+CA,+USA/@38.2859417,-122.3599987,12z/data=!3m1!4b1!4m5!3m4!1s0x8084ffe7f8f2deef:0xd6629f3a3384c725!8m2!3d38.2975381!4d-122.286865`);
})

sonoma.addEventListener('click', function() {
  window.open(`https://www.google.com.sg/maps/place/Sonoma,+CA+95476,+USA/@38.291092,-122.4666091,14z/data=!3m1!4b1!4m5!3m4!1s0x8085ac43817b9d77:0x380ed210ee6e045!8m2!3d38.291859!4d-122.4580356?hl=en`);
})

sanFran2.addEventListener('click', function() {
  window.open(`https://www.google.com/maps/place/San+Francisco,+CA,+USA/@37.7576793,-122.5076402,12z/data=!3m1!4b1!4m5!3m4!1s0x80859a6d00690021:0x4a501367f076adff!8m2!3d37.7749295!4d-122.4194155`);
})