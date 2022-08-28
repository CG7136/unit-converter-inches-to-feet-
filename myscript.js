var feet = document.getElementById('feet');

var inch = document.getElementById('inch');

feet.addEventListener('input',function(){
 console.log("channged");
 let f =this.value;
 let i = f*12;
 inch.value = i;
});
inch.addEventListener('input',function(){
    console.log("channged");
    let i =this.value;
    let f = i/12;
    if(!Number.isInteger(f)){
        f = f.toFixed(2);
    };
    feet.value = f;
   });