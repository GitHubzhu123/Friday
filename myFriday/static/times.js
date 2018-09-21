function times(aa) {
  var nowTime = new Date();
  var endTime = new Date(aa*1000);
  var t = endTime.getTime()-nowTime.getTime();
  var day = Math.floor(t / 1000 / 60 / 60 / 24);
  var hour = Math.floor(t / 1000 / 60 / 60 % 24);
  var min = Math.floor(t / 1000 / 60 % 60);
  var sec = Math.floor(t / 1000 % 60);
  if (hour < 10) {
    hour = "0" + hour;
  }else{
    hour = hour;
  }
  if (min < 10) {
    min = "0" + min;
  }else{
    min = min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }else{
    sec = sec;
  }
  return {
    day:day,
    hour:hour,
    min:min,
    sec:sec,
  };
  // day +":"+ hour + ":" + min + ":" + sec
// }, 1000);
}
export default { times:times }
