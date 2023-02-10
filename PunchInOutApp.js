

function time_diff(punchIntime, punchOuttime) 
{
  var t1parts = punchIntime.split(':');    
  var t1cm=Number(t1parts[0])*60+Number(t1parts[1]);

  var t2parts = punchOuttime.split(':');    
  var t2cm=Number(t2parts[0])*60+Number(t2parts[1]);

  var hour =Math.floor((t1cm-t2cm)/60);    
  var min=Math.floor((t1cm-t2cm)%60);    
  return (hour+':'+min+':00'); 
}

// const punchIntime = new Date().toLocaleTimeString();
// console.log(punchIntime);
// const punchOuttime = new Date().toLocaleTimeString();


console.log(time_diff("10:10:30 AM","7:10:00 PM"));