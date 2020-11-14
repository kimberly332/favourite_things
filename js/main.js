import {fetchData} from "./modules/DataMiner.js";

(() => {
    // stub * just a place for non-component-specific stuff
    console.log('loaded');
    
    function popErrorBox(message) {
        alert("Something has gone horribly, horribly wrong");
    }

    function handleDataSet(data) {
        // populate a lightbox with this data
        // and then open it
        let lightbox = document.querySelector(".lightbox");
    }

    function retrieveProjectInfo (event) {
        // test for an ID
        // check for an id, and if there isn't one, then don't try the fetch call
        // because it'll break (the PHP will choke)
        if (!event.target.id) {
            return
        }

        fetchData(`./includes/index.php?id=${event.target.id}`).then(data => console.log(data)).catch(err => console.log(err));
    }

    function renderPortfolioThumbnails(thumbs) {
        let userSection = document.querySelector('.user-section'),
            userTemplate = document.querySelector('#user-template').content;
        
        for (let user in thumbs) {  
            let currentUser = userTemplate.cloneNode(true),
                currentUserText = currentUser.querySelector(".user").children;

             currentUserText[1].src = `images/${thumbs[user].avatar}`;
             currentUserText[1].id = thumbs[user].id;
            // add this new user to the view
             userSection.appendChild(currentUser);
         }

         userSection.addEventListener("click", retrieveProjectInfo);
    }

    fetchData("./includes/index.php").then(data => renderPortfolioThumbnails(data)).catch(err => console.log(err));
    // fetchData("./includes/functions.php").then(data => handleDataSet(data)).catch(err => console.log(err));
})();