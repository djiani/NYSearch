function getNews(title, link, imgURL) {
  return `
    <div>
        <h2 class="title">${title}</h2>
        <img src =${imgURL} />
        <a href=${link}>link </a>
    </div>`;
}

$(document).ready(function() {
  $("#submitSearch").click(function(event) {
    event.preventDefault();

    let searchTerm = $("#searchID").val();
    console.log(searchTerm);

    let numberRecords = $("#numRecord").val();
    console.log("numberRecords");
    console.log(numberRecords);

    let startingYear = $("#startYearID").val();
    console.log(startingYear);

    let endYear = $("#endYearID").val();
    console.log(endYear);
    $("#searchResult").append(getNews("news1", "link", "url1"));
    $("#searchResult").append(getNews("news2", "link", "url3"));

  });

});
