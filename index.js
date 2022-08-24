// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']



function findMatching(drivers,str){

//let textToSearch=drivers.includes(str);

//let checkDriver=drivers.filter(textToSearch);

return drivers.filter((textToSearch)=>textToSearch.toLowerCase()===str.toLowerCase()
);


}

function fuzzyMatch(drivers,checkStr){

    return drivers.filter(
        
     (mySearch)=>mySearch.toLowerCase().indexOf(checkStr.toLowerCase())===0

    );

}

function matchName(drivers,nameStr){

    return drivers.filter((allDrivers)=>allDrivers.name===nameStr);

}


