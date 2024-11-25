̀function modifyElements() {
    
    const heading = document.getElementById("mainHeading");
    console.log("Found by ID:", heading);

    const paragraphs = document.getElementsByTagName("p");
    console.log("Found by Tag Name:", paragraphs);

    const textElements = document.getElementsByClassName("text");
    console.log("Found by Class Name:", textElements);

    const listItems = document.querySelectorAll("ul.list li");
    console.log("Found by CSS Selector:", listItems);
     
    const list = document.querySelector("ul.list");
    const newListItem = document.createElement("li");
    newListItem.textContent = `Item 4`;
    list.appendChild(newListItem);
    console.log("New child node added:", newListItem);

    if (listItems.length > 0) {
        const firstListItem = listItems[0];
        list.removeChild(firstListItem);
        console.log("First child node removed:", firstListItem);
    }
}

document.getElementById("modifyElementsButton").addEventListener("click", modifyElements);