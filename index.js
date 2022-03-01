// // Code your solution in this file!

function distanceFromHqInBlocks(block){
   if (block > 42) 
   return block - 42;
   else return  42 - block;
}

function distanceFromHqInFeet(block) {
   return distanceFromHqInBlocks(block) * 264;   
}

function distanceTravelledInFeet(start, destination){
    const block = 264
    if(start < destination){
        return (destination - start) * 264; 
    } else { 
        return (start - destination) * 264; 
}}

 
function calculatesFarePrice(start, destination) {
   const travelledInFeet = distanceTravelledInFeet(start, destination);
    if (travelledInFeet <= 400) 
    {
    return (0)
    }
    else if (travelledInFeet > 400 && travelledInFeet <= 2000)
    {
        return (travelledInFeet -400) * .02;
    }
    else if (travelledInFeet > 2000 && travelledInFeet <=2500)
        {
        return (25);
    }
    else if (travelledInFeet > 2500)
    {
        return ('cannot travel that far')
    }}
    