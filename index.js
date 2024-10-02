const PI = 3.145;
const radius = 5;
const area = PI * radius * radius;
const spacePerPlant = 0.8;
const maxPlants = Math.floor(area / spacePerPlant);

console.log(`Maximum number of plants the garden can hold : ${maxPlants}`);


let week1 = 1;
    let plants = 20;
    for(let i =0;i<week1;i++)
    {
        plants *=2;
    }

    let capacity = maxPlants;
    let percentage = (plants / capacity) * 100;

    if(percentage > 80)
    {
        console.log(`after ${week1} weeks: prune the plants. Total plants:${plants}`);
    }
    else     if(percentage > 50)
    {
        console.log( `after ${week1} weeks: monitor the plants. Total plants:${plants}`);   
    }
    else{
        console.log( `after ${week1} weeks: plant more plants. Total plants:${plants}`);
    }

    let week2 = 2;
    plants = 20;
    for(let i =0;i<week2;i++)
    {
        plants *=2;
    }

     capacity = maxPlants;
     percentage = (plants / capacity) * 100;

     if(percentage > 80)
        {
            console.log(`after ${week2} weeks: prune the plants. Total plants:${plants}`);
        }
        else     if(percentage > 50)
        {
            console.log( `after ${week2} weeks: monitor the plants. Total plants:${plants}`);   
        }
        else{
            console.log( `after ${week2} weeks: plant more plants. Total plants:${plants}`);
        }

    let week3 = 3;
    plants = 20;
    for(let i =0;i<week3;i++)
    {
        plants *=2;
    }

     capacity = maxPlants;
     percentage = (plants / capacity) * 100;

     if(percentage > 80)
        {
            console.log(`after ${week3} weeks: prune the plants. Total plants:${plants}`);
        }
        else     if(percentage > 50)
        {
            console.log( `after ${week3} weeks: monitor the plants. Total plants:${plants}`);   
        }
        else{
            console.log( `after ${week3} weeks: plant more plants. Total plants:${plants}`);
        }

    
       let initialPlants = 100;
       let weeks = 10;

  
    for(let i =0;i<weeks;i++)
        {
            initialPlants *=2;
        }
        const requiredSpace = initialPlants * spacePerPlant;
        const additionalSpace = (requiredSpace - area).toFixed(2);
        const newRadius = Math.sqrt(requiredSpace/PI).toFixed(2);


console.log(`Additional space required : ${additionalSpace}square meters for 100 plants and did not prune for 10 weeks` );
console.log(`new radius of the expanded garden : ${newRadius}square meters for 100 plants and did not prune for 10 weeks`);

// -----------***************-------------------

try{
    const initialPlants = 100;
    const requiredSpace = initialPlants * spacePerPlant;

    if(requiredSpace > area)
    {
        throw new Error("The garden cannot accomodate the initial number of plants");
    }
    console.log("the garden can accomodate the initial number of plants.")

}catch(error)
{
    console.error(error.message);
}