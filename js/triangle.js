document.getElementById('btn-triangle').addEventListener('click', function(){
    const inputCalField = getElementById('input-cal');
    const inputCalFieldString  = inputCalField.value;
    const  newCalField = parseFloat(inputCalFieldString);
    console.log(newCalField);
})