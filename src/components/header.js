export default function header() {
  const nav = document.createElement('header');
  nav.setAttribute('id', 'header');
  nav.className = ('fixed-top d-flex align-items-center header-transparent');
  nav.innerHTML = `
            <div class="container d-flex align-items-center justify-content-between">
                <div class="logo">
                  <h1 class="text-danger"><a href="index.html"><span>Microverse Student Restaurant</span></a></h1>
                  <!-- Uncomment below if you prefer to use an image logo -->
                  <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
                </div>

                <nav class="nav-menu d-none d-lg-block">
                  <ul>
                    <li class="active"><a href="index.html">Home</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#contact">Contact</a></li>

                    <li class="book-a-table text-center"><a href="#book-a-table">Book a table</a></li>
                  </ul>
                </nav>

            </div>

    `;
  return nav;
}