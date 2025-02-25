document.addEventListener("DOMContentLoaded", function () {
    const blogList = document.getElementById("blog-list");
    const showMoreBtn = document.getElementById("show-more-btn");
    const listItems = blogList.getElementsByTagName("li");
    const maxVisible = 10; // Show first 10 items

    // Hide extra items if there are more than 10
    if (listItems.length > maxVisible) {
        for (let i = maxVisible; i < listItems.length; i++) {
            listItems[i].style.display = "none";
        }
        showMoreBtn.style.display = "block"; // Show the button
    }

    // Show all items on button click
    showMoreBtn.addEventListener("click", function () {
        for (let i = maxVisible; i < listItems.length; i++) {
            listItems[i].style.display = "list-item";
        }
        showMoreBtn.style.display = "none"; // Hide button after clicking
    });
});
