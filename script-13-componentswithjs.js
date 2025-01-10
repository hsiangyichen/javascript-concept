/*
Currently we are defining all our html as one big 
HTML string returned by the Main function.
We're going to refactor this into smaller components.
*/

const Header = () => {
  return `
    <header id="header">
      <nav id="nav-bar" class="header-item header-left">
        <a>Home</a> |
        <a>About</a> |
        <a>Contact</a>
      </nav>
      <div class="header-item logo">
        Logo
      </div>
      <div class="header-item header-right">
        User:
        <a>John Smith</a> |
        <a>Logout</a>
      </div>
    </header>
  `;
};

const Hero = () => {
  return `
    <section class="hero">
      <div>
        <h2 class="hero-title">Hero Title</h2>
        <h3 class="hero-tagline">Tag Line</h3>
      </div>
    </section>
  `;
};

const MainContent = () => {
  return `
    <main>
      <section class="card-list">
        <div class="card">
          <div class="card__content">
            Content
          </div>
          <h4 class="card__title">
            Title
          </h4>
        </div>
      </section>
      <section class="activity-list">
        <div>
          <h3>Activity Feed</h3>
          <div class="activity">
            Activity
          </div>
        </div>
      </section>
    </main>
  `;
};

const Footer = () => {
  return `
    <footer>
      <section class="footer footer-left">
        Left Footer
      </section>
      <section class="footer footer-center">
        Center Footer
      </section>
      <section class="footer footer-right">
        Right Footer
      </section>
    </footer>
  `;
};

const Main = () => {
  return `
    <div>
      ${Header()}
      ${Hero()}
      ${MainContent()}
      ${Footer()}
    </div>
  `;
};

let root = document.getElementById("main");
root.innerHTML = Main();
