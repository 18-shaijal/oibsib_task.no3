const calculateTemp =()=>{
    const inputTemp= document.getElementById('temp').value;
    const tempSelected =document.getElementById
    ('temp_diff');
    const valuetemp = temp_diff.options[tempSelected.selectedIndex].value;
   //Celsius to Fahrenheit
   
    const celTofah =(cel)=>{
        let fahrenheit =((cel*9/5)+32).toFixed(1);
        return fahrenheit;
    }
    const fahTocel=(fah)=>{
        let celsius=((fah-32)*5/9).toFixed(1);
        return celsius;
    }
    if(valuetemp == 'cel')
    {
        document.getElementById("result").innerHTML=celTofah
        (inputTemp) +"&#176; fahrenheit";
    }
    else
    {
        document.getElementById("result").innerHTML=fahTocel
        (inputTemp) +"&#176; celcius";
    }
}