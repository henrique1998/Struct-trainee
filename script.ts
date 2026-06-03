const themeToggleBtn = document.getElementById("themeToggle") as HTMLButtonElement;
const backToTopBtn = document.getElementById("backToTop") as HTMLButtonElement;
const sectionsList = document.querySelectorAll("section") as NodeListOf<HTMLElement>;
const navLinks = document.querySelectorAll("nav ul li a") as NodeListOf<HTMLAnchorElement>;

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-theme");
  themeToggleBtn.innerText = "Mudar Tema ☀️";
}

themeToggleBtn.addEventListener("click", (): void => {
  document.body.classList.toggle("dark-theme");
  
  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
    themeToggleBtn.innerText = "Mudar Tema ☀️";
  } else {
    localStorage.setItem("theme", "light");
    themeToggleBtn.innerText = "Mudar Tema 🌙";
  }
});

window.addEventListener("scroll", (): void => {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }

  let activeSectionId: string | null = "";

  sectionsList.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollPosition >= sectionTop - 100) {
      activeSectionId = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${activeSectionId}`) {
      link.classList.add("active");
    }
  });
});

backToTopBtn.addEventListener("click", (): void => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
