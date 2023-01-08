// Codecademy's Sleep Debt Calculator on functions


const getSleepHours = day =>{
    if (day === 'monday'){
      return 5;
    } else if (day === 'tuesday'){ 
      return 6;
    } else if (day === 'wednesday'){
      return 2;
    } else if (day === 'thursday'){
      return 6;
    } else if (day === 'friday'){
      return 6;
    } else if (day === 'saturday'){
      return 12;
    } else if (day === 'sunday'){
      return 8;
    }
   };
   
   const getActualSleepHours = () =>  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
   
   
   function getIdealSleepHours(){
     let idealHours = 8;
     return idealHours * 7;
   };
   
   function calculateSleepDebt(){
     const actualSleepHours = getActualSleepHours();
     const idealSleepHours = getIdealSleepHours();
   
   
   if (actualSleepHours === idealSleepHours){
     console.log(`You've got ${actualSleepHours} hours of sleep. The perfect amount of sleep! Yay!`);
   } else if (actualSleepHours > idealSleepHours){
     console.log(`You got ${actualSleepHours} hours of sleep. You should get out of bed you lazy POS!`);
   } else if (actualSleepHours < idealSleepHours){
     console.log(`WOW, it seems you only got ${actualSleepHours} hours of sleep. No wonder you look like s**t. Go get some sleep.`);
   }
   }
   
   calculateSleepDebt();