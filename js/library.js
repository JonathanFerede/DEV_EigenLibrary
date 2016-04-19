var library = {
    timers:[], //An array with all the Intervals
    
    init: function(Element, speed){      
        
        //chop the text inside by comma and place in Text-array
        var Strings = Element.innerHTML.split(',');
        //console.log(Strings);
  
        //Change the long text in the element to the first string
        Element.innerHTML = Strings[0];
        
        //Create a timer for this element. 
        //The index refers to the string to be shown
        var index = 0;
        this.timers.push(setInterval(function(){
            var String2Bshown = Strings[index];
            library.ChangeText(Element, String2Bshown);
            
            //update/reset index
            if(index < Strings.length-1){ index++; }
            else{ index = 0;}
            
        }, speed));
    },
    
    ChangeText: function(Element, String2Bshown){
        //this function changes the text in the element
        Element.innerHTML = String2Bshown;
    },
}