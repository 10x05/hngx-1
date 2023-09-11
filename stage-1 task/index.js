function updateDateTime() {
    const outputWeek = document.getElementById("daysOfTheWeek");
    const outputTime = document.getElementById("updatedTime");
  
    const currentDate = new Date();
    const daysOfWeek = ["Sunday", "Monday","Tuesday","Wednesday","Thursday", "Friday","Saturday"];
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    outputWeek.textContent = dayOfWeek;
  
    const UTCTime = currentDate.toISOString().split(".") [0] + "Z";
    outputTime.textContent = UTCTime;
  }
  
  updateDateTime();
  setInterval(updateDateTime, 1000);