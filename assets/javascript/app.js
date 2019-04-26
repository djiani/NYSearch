function getNews(title, link, imgURL) {
  return `
    <div>
        <h2 class="title">${title}</h2>
        <img src =${imgURL} />
        <a href=${link}>link </a>
    </div>`;
}
const baseUrl = "https://api.nytimes.com/svc/search/v2/";

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
    //ajax code function here:
    $.ajax({
      url:`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=9GJooULQWNQ78BGGiBYrgraZtLeqaEP9`,
      method: "GET"

    }).then(function(response){
      const articles = response.response.docs.map(function(newArt){
        return getNews(newArt.snippet, "", "");
      })

      $("#searchResult").append(articles);

    }).catch(function(err){
      console.log("error");
    })






    // $("#searchResult").append(getNews("news1", "link", "url1"));
    // $("#searchResult").append(getNews("news2", "link", "url3"));

  });

});
