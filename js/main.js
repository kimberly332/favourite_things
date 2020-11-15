import {fetchData} from "./modules/DataMiner.js";

(() => {

    let db;
    let count = 0; // count number of clicks - just for testing

    // stub * just a place for non-component-specific stuff
    console.log('loaded');
    
    let popUp = document.querySelector(".popup"),
        lbClose = popUp.querySelector("span"),
        displaySection = document.querySelector(".display-section"),
        name = document.querySelector(".name"),
        selfIntro = document.querySelector(".selfIntroduction"),
        popUpPhoto = document.querySelector(".photo");

    function popErrorBox(message) {
        alert("Something has gone horribly, horribly wrong");
    }

    function showLightbox() {
        popUp.classList.add('showPopup');
    }

    function hideLightbox() {
        popUp.classList.remove('showPopup');
    }

    function retrieveInfo(event) {

        count += 1;
        console.log("click: ", count);
        
        try {
        // test for an ID
        // check for an id, and if there isn't one, then don't try the fetch call
        // because it'll break (the PHP will choke)

            showLightbox();
        
            // find out which info
            const len = event.target.className.length;
            const ind = parseInt(event.target.className[len - 1]) - 1;

            // change content
            console.log("changinggggggg");

            name.textContent = db[ind].title;
            selfIntro.textContent = db[ind].description;

            // change image
            popUpPhoto.src = `images/img${ind + 1}.jpg`;

        } catch (error) {
            console.log("oooops, cannot click!!!");
            hideLightbox();
        }
    }

    function renderImageThumbnails(thumbs) {
        console.log("inside renderImageThumbnails...");

        let userTemplate = document.querySelector('#user-template').content;
            
        for (let item in thumbs) {  
            let currentUser = userTemplate.cloneNode(true),
                currentUserText = currentUser.querySelector(".item").children;
    
            currentUserText[2].src = `images/${thumbs[item].image}`;

            // add "1"/"2"/"3" to class for later finding out which info in retreiveInfo function
            currentUserText[2].classList.add(thumbs[item].id);
            currentUserText[3].classList.add(thumbs[item].id);

            // add this new user to the view
            displaySection.appendChild(currentUser);
        }

        displaySection.addEventListener("click", retrieveInfo);
        
    }

    lbClose.addEventListener("click", hideLightbox);

    fetchData("./includes/index.php")
        .then(data => {
            db = data;
            renderImageThumbnails(data);
        })
        .catch(err => console.log(err)
    );

})();