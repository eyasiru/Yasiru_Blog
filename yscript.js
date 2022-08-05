
        console.log("This is working");
        /* This Eventlistner checks when the <li id="menu"> gets a click & run openmenu function  */
        document.getElementById("htmlmenu").addEventListener("click",openhtmlmenu);
        
        function openhtmlmenu(){
            /* <ul id="dropdown" toggle a class active(which defined in CSS display block) */
            document.getElementById("htmldrop").classList.toggle("active");
        }

        document.getElementById("cssmenu").addEventListener("click",opencssmenu);
        function opencssmenu(){
            document.getElementById("cssdrop").classList.toggle("active");
        }

        document.getElementById("jsmenu").addEventListener("click",openjsmenu);
        function openjsmenu(){
            document.getElementById("jsdrop").classList.toggle("active");
        }
      
      
    