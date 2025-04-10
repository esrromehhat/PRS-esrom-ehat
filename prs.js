 // Mobile Menu Toggle
 const hamburger = document.querySelector(".hamburger");
 const mobileMenu = document.querySelector(".mobile-menu");
 hamburger.addEventListener("click", () => {
   hamburger.classList.toggle("open");
   mobileMenu.classList.toggle("hidden");
 });

 // Mobile Menu Links
 const mobileLinks = document.querySelectorAll(".mobile-menu a");
 mobileLinks.forEach((link) => {
   link.addEventListener("click", () => {
     hamburger.classList.remove("open");
     mobileMenu.classList.add("hidden");
   });
 });

 // Scroll to sections
 document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
   anchor.addEventListener("click", function (e) {
     e.preventDefault();
     const targetId = this.getAttribute("href");
     const targetElement = document.querySelector(targetId);
     window.scrollTo({
       top: targetElement.offsetTop - 80,
       behavior: "smooth",
     });
   });
 });

 // Scroll Down Button
 const scrollDownBtn = document.querySelector(".scroll-down");
 scrollDownBtn.addEventListener("click", () => {
   const portfolioSection = document.querySelector("#portfolio");
   window.scrollTo({
     top: portfolioSection.offsetTop - 80,
     behavior: "smooth",
   });
 });

 // Back to Top Button
 const backToTopBtn = document.getElementById("backToTop");
 window.addEventListener("scroll", () => {
   if (window.pageYOffset > 300) {
     backToTopBtn.classList.remove("opacity-0", "invisible");
     backToTopBtn.classList.add("opacity-100", "visible");
   } else {
     backToTopBtn.classList.remove("opacity-100", "visible");
     backToTopBtn.classList.add("opacity-0", "invisible");
   }

// Header Background on Scroll
const header = document.querySelector("header");
  if (window.pageYOffset > 50) {
    header.classList.add("bg-white", "shadow-md");
    header.classList.remove("bg-transparent");
} else {
    header.classList.remove("bg-white", "shadow-md");
    header.classList.add("bg-transparent");
}
 });
 backToTopBtn.addEventListener("click", () => {
   window.scrollTo({
     top: 0,
     behavior: "smooth",
   });
 });

 // Custom Cursor
 const cursor = document.querySelector(".custom-cursor");
 document.addEventListener("mousemove", (e) => {
   cursor.style.left = e.clientX + "px";
   cursor.style.top = e.clientY + "px";
 });
 document.querySelectorAll("a, button, .cursor-pointer").forEach((el) => {
   el.addEventListener("mouseenter", () => {
     cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
     cursor.style.backgroundColor = "rgba(99, 102, 241, 0.3)";
   });
   el.addEventListener("mouseleave", () => {
     cursor.style.transform = "translate(-50%, -50%) scale(1)";
     cursor.style.backgroundColor = "rgba(99, 102, 241, 0.5)";
   });
 });

 // Portfolio Filtering
 const filterBtns = document.querySelectorAll(".filter-btn");
 const portfolioItems = document.querySelectorAll(".portfolio-item");
 filterBtns.forEach((btn) => {
   btn.addEventListener("click", () => {
     // Remove active class from all buttons
     filterBtns.forEach((btn) => {
       btn.classList.remove("bg-primary", "text-white");
       btn.classList.add("bg-gray-100", "text-gray-700");
     });
     // Add active class to clicked button
     btn.classList.remove("bg-gray-100", "text-gray-700");
     btn.classList.add("bg-primary", "text-white");
     const filterValue = btn.textContent.trim().toLowerCase();
     portfolioItems.forEach((item) => {
       if (filterValue === "alle" || item.dataset.category === filterValue) {
         item.style.display = "block";
       } else {
         item.style.display = "none";
       }
     });
   });
 });

 // Animate Skill Bars
 const animateSkillBars = () => {
   const skillBars = document.querySelectorAll(".skill-progress");
   skillBars.forEach((bar) => {
     const width = bar.getAttribute("data-width");
     bar.style.width = width + "%";
   });
 };

 // Charts
 const initCharts = () => {
   // Tech Skills Chart
   const techSkillsChart = echarts.init(
     document.getElementById("techSkillsChart"),
   );
   const techSkillsOption = {
     tooltip: {
       trigger: "axis",
       axisPointer: {
         type: "shadow",
       },
     },
     grid: {
       left: "3%",
       right: "4%",
       bottom: "3%",
       containLabel: true,
     },
     xAxis: {
       type: "value",
       max: 100,
       axisLabel: {
         formatter: "{value}%",
       },
     },
     yAxis: {
       type: "category",
       data: [
         "HTML",
         "CSS",
         "JavaScript",
         "Responsive Design",
         "Git Basics",
         "Bootstrap",
         "Markdown",
       ],
     },
     series: [
       {
         name: "Fähigkeitslevel",
         type: "bar",
         data: [90, 85, 40, 80, 50, 65, 75],
         itemStyle: {
           color: "#6366f1",
         },
       },
     ],
   };
   techSkillsChart.setOption(techSkillsOption);
   // Design Skills Chart
   const designSkillsChart = echarts.init(
     document.getElementById("designSkillsChart"),
   );
   const designSkillsOption = {
     tooltip: {
       trigger: "item",
     },
     legend: {
       orient: "vertical",
       left: "left",
     },
     series: [
       {
         name: "Lerninteressen",
         type: "pie",
         radius: ["40%", "70%"],
         avoidLabelOverlap: false,
         itemStyle: {
           borderRadius: 10,
           borderColor: "#fff",
           borderWidth: 2,
         },
         label: {
           show: false,
           position: "center",
         },
         emphasis: {
           label: {
             show: true,
             fontSize: "18",
             fontWeight: "bold",
           },
         },
         labelLine: {
           show: false,
         },
         data: [
           { value: 20, name: "JavaScript" },
           { value: 85, name: "Frontend-Frameworks" },
           { value: 75, name: "Responsive Design" },
           { value: 84, name: "Webanimationen" },
           { value: 10, name: "Backend-Grundlagen" },
         ],
         color: ["#6366f1", "#4f46e5", "#818cf8", "#a5b4fc", "#c7d2fe"],
       },
     ],
   };
   designSkillsChart.setOption(designSkillsOption);
   // Resize charts when window size changes
   window.addEventListener("resize", () => {
     techSkillsChart.resize();
     designSkillsChart.resize();
   });
 };
 // Contact Form Submission
 const contactForm = document.getElementById("contactForm");
 const successModal = document.getElementById("successModal");
 const closeModal = document.getElementById("closeModal");
 contactForm.addEventListener("submit", (e) => {
   e.preventDefault();
   // Show success modal
   successModal.classList.remove("opacity-0", "invisible");
   successModal.querySelector("div").classList.remove("scale-95");
   successModal.querySelector("div").classList.add("scale-100");
   // Reset form
   contactForm.reset();
 });
 closeModal.addEventListener("click", () => {
   successModal.classList.add("opacity-0", "invisible");
   successModal.querySelector("div").classList.remove("scale-100");
   successModal.querySelector("div").classList.add("scale-95");
 });
 // Initialize everything when DOM is loaded
 document.addEventListener("DOMContentLoaded", () => {
   animateSkillBars();
   initCharts();
   // Add intersection observer for animations
   const observer = new IntersectionObserver(
     (entries) => {
       entries.forEach((entry) => {
         if (entry.isIntersecting) {
           if (entry.target.classList.contains("skill-item")) {
             animateSkillBars();
           }
         }
       });
     },
     { threshold: 0.5 },
   );
   document.querySelectorAll(".skill-item").forEach((item) => {
     observer.observe(item);
   });
 });