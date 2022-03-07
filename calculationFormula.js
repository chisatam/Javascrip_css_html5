function Respond(id, value) {
    document.getElementById(id).innerHTML = value;
}

function Bmicalculate(width, height) {
    console.log((height / 100).toFixed(2));
    console.log("width", width);
    console.log("height", height);
    let bmi=0
    if(width!==0 && height !==0)
    {
         bmi = width / Math.pow((height / 100).toFixed(2), 2);
    }
    else{
        bmi=0
    }
    
    return Respond("resultbmi", bmi.toFixed(2));
}
function Bmrcalculate(width, height, age, sex, bmrselect) {
    let bmr = 0;
    console.log("width", width);
    console.log("height", height);
    console.log("age", age);
    console.log("sex", sex);
    console.log("bmrselect", bmrselect);
    if (sex === "man") {
        bmr = (66 + (13.7 * width) +( 5 * height) - (6.8 * age)) * Number(bmrselect);
    } else {
        bmr = (665 + (9.6 * width )+ (1.8 * height) - (4.7 * age)) * Number(bmrselect); 
    }
    return Respond("resultbmr", bmr.toFixed(2));
}
function Ibwcalculate( height,sex) {

    console.log("height", height);
    let ibw = 0
    if(sex==="man"){
        ibw=height-105
    }
    else if(sex==="woman")
    {
        ibw=height-110
    }
    else
    {
        ibw=0
    }
    return Respond("resultibw", ibw.toFixed(2));
}
