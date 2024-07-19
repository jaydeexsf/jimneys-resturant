import React from 'react';

function Time () {
const openTime = [
    { day: 'Sunday', time: '8am-4pm' },
    { day: 'Monday', time: '7am-8pm' },
    { day: 'Tuesday', time: '7am-8pm' },
    { day: 'Wednesday', time: '7am-8pm' },
    { day: 'Thursday', time: '7am-8pm' },
    { day: 'Friday', time: '7am-7pm' },
    { day: 'Saturday', time: '7am-6pm' },
  ];

    let todays = new Date();
    let weekday = todays.getDay();

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


  for (i = 0;i < days.length;i++) {
    if (weekday == i) {
        return `${days[i]} ${openTime[i].time}`
    }
}
return <p>Daily 7am-8pm</p>

}

export default Time;

// import React from 'react';

// function Time() {
//   const openTime = [
//     {
//       friday: '7am-7pm',
//       saturday: '7am-6pm',
//       sunday: '8am-4pm', 
//     }
//   ];

//   let todays = new Date();
//   let weekday = todays.getDay(); // 0=Sunday

//   // Function to get weekday name
//   const getWeekDay = (dayNumber) => {
//     const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     return days[dayNumber];
//   };

//   return (
//     <div>
//       {weekday === 5 && <p>Friday: {openTime[0].friday}</p>}
//       {weekday === 6 && <p>Saturday: {openTime[0].saturday}</p>}
//       {weekday === 0 && <p>Sunday: {openTime[0].sunday}</p>}
//     </div>
//   );
// }

// export default Time;


