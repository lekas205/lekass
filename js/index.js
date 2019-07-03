// alert("hello world");
// var score = document.getElementsByClassName("score");
// console.log(score);


function callmenow(elm) {
    // console.log(elm);
    //  if(elm.which == 13){
        let id = elm.target.id;
        let val = elm.target.value;
        let fixid = id.slice(5);
    if(elm.target.value.length > 0){
        
        if(id == 'scoremath'){

            let result = show(val)
            document.getElementById('grade'+fixid).innerText=result;
        }else if(id == 'scorebio'){
            let result = show(val)

            document.getElementById('grade'+fixid).innerText=result;
        } else if(id == 'scorephy'){
            let result = show(val)

            document.getElementById('grade'+fixid).innerText=result;
        }
        // console.log(elm.target.id.slice(5));
        
    }else{
        document.getElementById('grade'+fixid).innerText="";
    }
    //  }
       
    
}


function show(x){
    // var score = document.getElementsByClassName("score");
    // var grade = document.getElementsByClassName("grade");

    let final = '';

    if(x >= 70 && x < 101){
        final = "A";
    }
    else if (x <= 69 && x > 59) {
       final = "B";
    }
    else if (x <= 59 && x > 49) {
       final = "C";
    }
     else if (x <= 49 && x > 39){
       final = "D";
    }
    else if (x < 40 && x > 0){
       final = "F";
    }
    else if (x >= 101){
       final = "Err!";
    }
    else{
       final = "Err";
    }
    return final;
}


let showResult = document.getElementsByClassName('score');
// console.log(showResult);

for (const iterator of showResult) {
    console.log(iterator);
    
    iterator.addEventListener('keyup',callmenow);
    // iterator.addEventListener('keypress',(e)=>{
    //     console.log(e.which == 13);
        
    // });
}


