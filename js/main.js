import {fetchData} from "./modules/DataMiner.js";

(() => {
    // stub * just a place for non-component-specific stuff
    console.log('loaded');
    
    let popUp = document.querySelector(".popup"),
        lbClose = popUp.querySelector("span"),
        button1 = document.querySelector(".button1"),
        button2 = document.querySelector(".button2"),
        button3 = document.querySelector(".button3");


    function popErrorBox(message) {
        alert("Something has gone horribly, horribly wrong");
    }

    function handleDataSet(data) {
        // populate a lightbox with this data
        // and then open it
        let lightbox = document.querySelector(".lightbox");
    }

    function retrieveInfo (event) {
        // test for an ID
        // check for an id, and if there isn't one, then don't try the fetch call
        // because it'll break (the PHP will choke)
        if (!event.target.id) {
            return
        }

        fetchData(`./includes/index.php?id=${event.target.id}`).then(data => console.log(data)).catch(err => console.log(err));
    }

    function renderImageThumbnails(thumbs) {
        let userSection = document.querySelector('.user-section'),
            userTemplate = document.querySelector('#user-template').content;
        
        for (let item in thumbs) {  
            let currentUser = userTemplate.cloneNode(true),
                currentUserText = currentUser.querySelector(".item").children;

             currentUserText[1].src = `images/${thumbs[item].image}`;
             currentUserText[1].id = thumbs[item].id;
            // add this new user to the view
             userSection.appendChild(currentUser);
         }

         userSection.addEventListener("click", retrieveInfo);
    }

    fetchData("./includes/index.php").then(data => renderImageThumbnails(data)).catch(err => console.log(err));
})();