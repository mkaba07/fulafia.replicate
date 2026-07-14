const container = document.querySelector(".faculty-container");
const leftBtn = document.querySelector(".left-arrow")
const rightBtn = document.querySelector(".right-arrow")
const facultyCard = document.querySelector(".faculty-card")

 leftBtn.addEventListener("click", ()=>{
    container.scrollBy({
        left:-250,
        behavior:"smooth"
    });
 });
 
 rightBtn.addEventListener("click", ()=>{
    container.scrollBy({
        left:250,
        behavior:"smooth"
    });
 });

const faculties = document.querySelectorAll(".faculty");
const title = document.getElementById("title");
const dept = document.getElementById("dept");
const student = document.getElementById("student");

faculties.forEach(faculty => {

    faculty.addEventListener("click", () => {

        // Show the card if it's hidden
        facultyCard.style.display = "block";

        // Fade out
        facultyCard.style.opacity = "0";

        setTimeout(() => {

            // Remove previous active faculty
            faculties.forEach(f => f.classList.remove("active"));

            // Highlight the clicked faculty
            faculty.classList.add("active");

            // Update the card
            title.textContent = "Faculty of " + faculty.dataset.title;
            dept.textContent = faculty.dataset.dept;
            student.textContent = faculty.dataset.student;

            // Fade in
            facultyCard.style.opacity = "1";

        }, 300); //waits 300 milliseconds which is 0.3s ,then runs the code inside

    });

});


