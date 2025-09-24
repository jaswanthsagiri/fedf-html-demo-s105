document.getElementById("demo").innerText="welcome to javasript session";

        let x;
        x=prompt("Enter x value");
        let num=parseInt(x);
        if(num>0) {

         document.getElementById("demo").innerText=" is positive";
        } else if(num<0) {
        document.getElementById("demo").innerText=" is negative";
        } else {
         document.getElementById("demo").innerText=" is zero";
        }