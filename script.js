// THEME TOGGLE
const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggle.textContent =
    document.body.classList.contains("light") ? "☀️" : "🌙";
});

// PANELS
document.querySelectorAll(".main-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.target;

    document.querySelectorAll(".panel").forEach(p =>
      p.classList.remove("active")
    );

    document.getElementById(id).classList.add("active");
  });
});
// PROJECT DETAILS DATA
const projectData = {
  portfolio: {
    title: "Portfolio Website",
    text: "This is my personal portfolio website where I showcase my projects, skills and contact information.",
    tech: "HTML, CSS, JavaScript"
  },
  todo: {
    title: "To-Do App",
    text: "A simple task management app where users can add, delete and manage daily tasks.",
    tech: "HTML, CSS, JavaScript"
  }
};

const detailBox = document.getElementById("project-details");
const detailTitle = document.getElementById("detail-title");
const detailText = document.getElementById("detail-text");
const detailTech = document.getElementById("detail-tech");

document.querySelectorAll(".view-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();

    const key = btn.dataset.project;
    const data = projectData[key];

    detailTitle.textContent = data.title;
    detailText.textContent = data.text;
    detailTech.textContent = data.tech;

    detailBox.classList.add("active");
  });
});

document.getElementById("close-details").addEventListener("click", () => {
  detailBox.classList.remove("active");
});
