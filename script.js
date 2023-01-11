function switchMode() {
    let moon = document.getElementById ("moon");
      if(moon.className=="moon"){
        moon.className="sun";
        document.body.style.backgroundColor = "rgb(19, 17, 17)";
        document.body.style.color = "#fff";
      }
    else {
      moon.className ="moon";
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
    }
  }let btnText = document.getElementById("btn");
         function change() {
            let btn = document.body;
               btn.classList.toggle("dark");
            }