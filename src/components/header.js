export default function header() {
  const nav = document.createElement('header');
  nav.setAttribute('id', 'header');
  nav.className = ('fixed-top d-flex align-items-center header-transparent');
  nav.innerHTML = `
          <div class="container d-flex align-items-center justify-content-between">
              <div class="logo">
                <h1 class="text-danger"><a href="index.html"><span>Microverse Student Restaurant</span></a></h1>
              </div>

              <nav class="nav-menu d-none d-lg-block">
                <ul class="navbar">
                  <li class="active"><a href="#">Home</a></li>
                  <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Useful links</a>
                  <ul class="dropdown-menu aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" id="menu-link">Menu</a></li>
                    <li><a class="dropdown-item active-contact" id="contact-link">Contact</a></li>
                  </ul>
                </li>
                  <li class="book-a-table text-center" id="booking"><a href="#book-a-table">Book a table</a></li>
                </ul>
              </nav>
          </div>
    `;
  return nav;
}