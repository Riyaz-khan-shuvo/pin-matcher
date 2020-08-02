function insertNumber(number) 
{
    var existingNumbers = $('#pin-area').val();
    $('#pin-area').val(existingNumbers + number);
}
function clearResult() 
{
    $('#pin-area').val('');
}
function deleteNumber() 
{
    var presentvalue= $('#pin-area').val();
    if (presentvalue != '') 
    {
        $('#pin-area').val($('#pin-area').val().slice(0,-1));
    }
}



//random value area start...

document.getElementById('generate-pin').addEventListener('click',function(){
    var randomNumber = Math.floor(1000 + Math.random() * 9000);
    
    document.getElementById('random-number').value = randomNumber;
});

//random value area ends...


//pin-check area start...

document.getElementById('submit').addEventListener('click',function(){
    var randomValue = document.getElementById('random-number').value;
    var pin = document.getElementById('pin-area').value;
    if(randomValue == pin){
        document.getElementById('pin-match').style.display='block';
        document.getElementById('pin-area').value='';
    }
    if(randomValue != pin){
        document.getElementById('pin-not-match').style.display='block';
        document.getElementById('pin-area').value='';
    }
});
// pin check area ends...