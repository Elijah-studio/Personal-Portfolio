function renderSection(section) {
  const mainContent = document.getElementById("main-content");
  let content = "";

  switch (section) {
    case "home":
      content = `
        <div id="home" class="section">
          <div class="text-container">
            <h1>Hi</h1>
            <h1>I am</h1>
            <h1>Jiro</h1>
            <h1>Elijah</h1>
            <h1>Aguilar</h1>
          </div>
          <img src="https://scontent.fmnl13-2.fna.fbcdn.net/v/t1.15752-9/465952489_1129343865391952_2665514008146090947_n.png?_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeGep97idjqyY1Bo8iQgunjxYTSynvTOYAlhNLKe9M5gCSpwxKUVXu00wz1jbOUxyQXtk_3NN4--SVstcuoLnWry&_nc_ohc=rHgbioUVhu4Q7kNvgFr9jdt&_nc_zt=23&_nc_ht=scontent.fmnl13-2.fna&oh=03_Q7cD1QFsSN3tU5M0ukIgYns2u47G99mspTba2z5BcRVzkrLAJw&oe=67755587" alt="Jiro Elijah Aguilar" />
        </div>
      `;
      break;

    case "about":
      content = `
        <div id="about" class="section">
          <p>I am a passionate developer who loves solving problems and building impactful projects.</p>
        </div>
      `;
      break;

    case "skills":
      content = `
        <div id="skills" class="section">
          <div class="skills-container">
            <div class="skill-box html">HTML</div>
            <div class="skill-box css">CSS</div>
            <div class="skill-box javascript">JavaScript</div>
            <div class="skill-box python">Python</div>
            <div class="skill-box csharp">C#</div>
            <div class="skill-box java">Java</div>
          </div>
        </div>
      `;
      break;

    case "projects":
      content = `
      <div id="projects" class="section">
      <div class="projects-container">
          <div class="project-box">
              <a href="https://codesandbox.io/p/sandbox/10-js-fundamentals-lab-forked-vmx7jt" target="_blank">JS Fundamentals Lab</a>
          </div>
          <div class="project-box">
              <a href="https://codesandbox.io/p/sandbox/09-js-basics-exercises-forked-psvgsx" target="_blank">JS Basics Exercises</a>
          </div>
          <div class="project-box">
              <a href="https://codesandbox.io/p/sandbox/07-sunny-landingpage-forked-c39gv9" target="_blank">Sunny Landing Page</a>
          </div>
          <div class="project-box">
              <a href="https://codesandbox.io/p/sandbox/ancient-waterfall-k9qvf4" target="_blank">Log In</a>
          </div>
      </div>
  </div>  
      `;
      break;

    case "contact":
      content = `
        <div id="contact" class="section">
        
          <div class="contact-info">
            <p>Phone: 09386411330</p>
            <p>Email: <a href="mailto:aguilarjiroelijah@gmail.com">aguilarjiroelijah@gmail.com</a></p>
          </div>
            <div class="social-icons">
            <a href="https://www.facebook.com/jiroelijah.aguilar" target="_blank" class="icon"><i class="fab fa-facebook-f"></i></a>
            <a href="https://www.tiktok.com" target="_blank" class="icon"><i class="fab fa-tiktok"></i></a>
            <a href="https://www.telegram.org" target="_blank" class="icon"><i class="fab fa-telegram-plane"></i></a>
            <a href="https://www.instagram.com" target="_blank" class="icon"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      `;
      break;

    default:
      content = `<div><h1>Section not found</h1></div>`;
  }

  mainContent.innerHTML = content;
}
