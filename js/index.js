const form = document.querySelector("#github-form")
//The `index.html` file has a form with a search input. When the form is
//submitted, it should take the value of the input and search GitHub for user
//matches using the [User Search Endpoint](#user-search-endpoint).
form.addEventListener("submit", fetchQuery)
function fetchQuery (event) {
    event.preventDefault();

}
function renderResult (rawObject){
    const userObject = rawObject.items[0]
    const userContainer= document.querySelector("#user-list")
    //creates elements to append to a DOM

    //create a user card to hold all the information

    const li = document.createElement("li")
    const card = document.createElement("div")
    li.appendChild(card)
    
    //user name
    const title = document.createElement("h1")
    title.innerText = userObject.login
    card.appendChild(title)

    //user avatar
    const avatar = document.createElement("img")
    avatar.src = userObject.avatar_url
    card.appendChild(avatar)

    // github link
    fetch(`https://api.github.com/search/users?q=octocat`${event.target[0].value}


    //create Element fill up with info and append 

    //append card into the user container

    //fetch



} 

    
    


