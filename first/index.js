    const h1target = document.getElementById("h1trag") 
    const startcountn = document.getElementById("startcountung")
    const stopcoutng = document.getElementById("stopcoutng")
    const decrested = document.getElementById("decrested")
    const inputdata = document.getElementById("age")
    const onlyinputnumber = document.getElementById("onlyinputnumber")





    let interbidid;
    let decredt;
    // let counties = 0;
    h1target.style.color = "red";
    h1target.style.fontSize = "24px";
    h1target.style.backgroundColor = "yellow";
    let real = 0;

    // console.log(real)
    // const data = Number(inputdata.value)


    onlyinputnumber.onclick = function () {
        const data = Number(inputdata.value)
        real = data + 1 ;
        console.log(real)
        return real;
    }



    function useh1tag() {
        h1target.innerHTML = `this is your count code ${real}`;
    }


    startcountn.onclick = function () {
        if (interbidid) return;
        interbidid =  setInterval(() => {
            real++
            useh1tag()
            console.log(real)
            // console.log(interbidid)
        }, 1000)

    }


    decrested.onclick = function () {
    if (interbidid || decredt) return;
        decredt = setInterval(() => {
            real--
            useh1tag()
            // console.log(counties)
        } , 1000)
    }

    stopcoutng.onclick = function () {
        clearInterval(interbidid);
        clearInterval(decredt);
        interbidid = null;
        decredt = null;
        real = 0;
        useh1tag()
    }


