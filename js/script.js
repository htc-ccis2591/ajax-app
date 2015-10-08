var appointments = {
        "appointmentreminder" : [
            {
                "name": "Theo",
                "dob": "122006",
                "appt_date": "10 December at 5pm",
                "reason": "dental"
              
               
            },
            {
                "name": "Suvi",
                "dob": "03282010",
                "appt_date": "19 January at 5pm",
                "reason": "check up"
               
                
            
            },
            {
                "name": "Judah",
                "dob": "05212010",
                "appt_date": "23 February at 5pm",
                "reason": "dental"
               
                
            },
            {
                "name": "Russell",
                "dob": "04102014",
                "appt_date": "20 January at 5pm",
                "reason": "dental"
                
               
            

            }

        
        ]
    
    };

(function () {
	
	"use strict";
    var object = appointments.appointmentreminder,
        appointmentsCount = object.length,
        target = document.getElementsByTagName("body")[0],
        i;
	
		
    if (appointmentsCount > 0) {
        for (i = 0; i < appointmentsCount; i = i + 1) {
			
			var item = object[i],
				name = item.name,
				dob = item.dob,
				appt_date = item.appt_date,
				reason = item.reason;		
				

           
			target.innerHTML += '<p><a href="mailto:' + dob + '">' + name + '</a></p>';
			target.innerHTML += '<img src="images/emoji.png">' + name; 
 
			
			
			

        }
	}
})();