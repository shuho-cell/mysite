console.log("======================");
var now = new Date();
console.log(now.getTime());
console.dir(now.getTime());
// getTime()は1970 年 1 月 1 日 00:00:00 UTC から指定した日時までの経過時間をミリ秒で表した数値。

var countDown = (due) => {
  var rest = due.getTime() - now.getTime();
  var sec = Math.floor(rest / 1000) % 60;
  var min = Math.floor(rest / 1000 / 60) % 60 ;
  var hours = Math.floor(rest / 1000 / 60 / 60) % 60 ;
  var days = Math.floor(rest / 1000 / 60 / 60 / 24) % 60 ;
  var count = [days, hours, min, sec];
  return count;
}
var goal = new Date();
goal.setHours(23);
goal.setMinutes(59);
goal.setSeconds(59);

console.log(countDown(goal));

var counter = countDown(goal);
var time = `${counter[0]}日${counter[1]}時間${counter[2]}分${counter[3]}秒`;
const timer = document.getElementById('timer');
timer.textContent = time;

// limit code 
const productLimit = `${counter[1]}時${counter[2]}分${counter[3]}秒`;
const limitElement = ()=> {
  const limit = document.getElementById('limit');
  // limit.textContent = productLimit;
  limit.textContent = productLimit;
}
limitElement();
