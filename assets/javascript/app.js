function getNews(title, link, imgURL, snippet) {
    return `
    <div class="card m-2 d-inline-flex" style="width:80% heigh:300px">
            <div class="card-body">
                <h4 class="card-title">${title}</h4>
                <p class="card-text">${snippet}</p>
                <a href=${link} class="btn btn-primary">More...</a>
            </div>
            <img class="card-img-botton" src=${imgURL} alt=${imgURL} style="width:100%">
    </div>`;
    
        }
        const baseUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=9GJooULQWNQ78BGGiBYrgraZtLeqaEP9";
        const baseIMG = "https://www.nytimes.com/";
        
                        
        
$(document).ready(function() {
            $("#submitSearch").click(function (event) {
                event.preventDefault();
                let querystring = "";
                let searchTerm = $("#searchID").val();
                console.log(searchTerm);

                let numberRecords = $("#numRecord").val();
                console.log("numberRecords");
                console.log(numberRecords);

                let startingYear = $("#startYearID").val();
                console.log(startingYear);

                let endYear = $("#endYearID").val();
                console.log(endYear);
                querystring += `&q=${searchTerm}&page=${numberRecords}`;
                if (startingYear) {
                    querystring += "&begin_date=" + startingYear + "0101";

                }
                if (endYear) {
                    querystring += "&end_date=" + endYear + "0101";

                }
                //ajax code function here:
                $.ajax({
                    url: baseUrl + querystring,
                    method: "GET"

                }).then(function (response) {
                    console.log(response);
                    const articles = response.response.docs.map(function (newArt) {
                        let imgurl = "";
                        if (newArt.multimedia && newArt.multimedia[0]) {
                            imgurl = newArt.multimedia[0].url
                        }
                        console.log(baseIMG+imgurl);
                        return getNews(newArt.headline.main, newArt.web_url, baseIMG + imgurl, newArt.snippet);
                    })

                    $("#searchResult").append(articles);

                }).catch(function (err) {
                    console.log("error");
                })

                // $("#searchResult").append(getNews("news1", "link", "url1"));
                // $("#searchResult").append(getNews("news2", "link", "url3"));

            });

        });
