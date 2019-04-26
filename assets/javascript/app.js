$(document).ready(function(){
    $('#submitSearch').click(function(event){
    event.preventDefault();
    
    let searchTerm = $("#searchID").val();
    console.log(searchTerm);

    let numberRecords = $('#numRecord').val();
    console.log(numberRecords);

    let startingYear = $('#startYearID').val();
    console.log(startingYear);

    let endYear = $('#endYearID').val();
    console.log(endYear);
    let numRecord = document.getElementById("numRecord").selectedIndex;
    console.log(numRecord);

    })
})