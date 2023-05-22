function pass(){
      var password = document.getElementById("test-2-pass").value;
      var repeatPassword = document.getElementById("test-2-pass2").value;
       if(!/[0-9]/.test(password)) {
          document.getElementById("error1").style.display = "block";
            event.preventDefault();
        }
        else{
          document.getElementById("error1").style.display = "none";
        }
        if(!/[!*$]/.test(password)){
          document.getElementById("error2").style.display = "block";
            event.preventDefault();
        }
        else{
          document.getElementById("error2").style.display = "none";
        }
        if (password != repeatPassword) {
        document.getElementById("error3").style.display = "block";
          event.preventDefault();
        } 
        else{
          document.getElementById("error3").style.display = "none";
        } 
}
