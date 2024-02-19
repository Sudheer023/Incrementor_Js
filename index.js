const counter=document.querySelectorAll('.counter');
counter.forEach((counter)=>{

    counter.innerHTML=0;  
       const updatecounter = (()=>{
        const targetcount= +counter.getAttribute('data-target')
        console.log(typeof(targetcount))
        // counter.innerHTML=targetcount
        const startingCount=Number(counter.innerHTML)
        console.log('gggg',startingCount)
        const incr=targetcount/10;
        if(startingCount < targetcount){
            counter.innerHTML=`${startingCount + incr}`
            setTimeout(updatecounter,100)
        }else{
            counter.innerHTML=targetcount
        }
})

updatecounter()
})