export const hero = function () {
  const hero_container = document.createElement('section');
  hero_container.setAttribute('id', 'hero');
  hero_container.innerHTML = `
    <div class="hero-container">
        <div id="heroCarousel" data-bs-interval="5000" class="carousel slide carousel-fade" data-bs-ride="carousel">
          <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>
    
          <div class="carousel-inner" role="listbox">
    
            <!-- Slide 1 -->
            <div class="carousel-item active" style="background: url(assets/img/slide/slide-1.jpg);">
              <div class="carousel-container">
                <div class="carousel-content">
                  <h2 class="animate__animated animate__fadeInDown"><span>Microverse Student</span> Restaurant</h2>
                  <p class="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi
                    ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea
                    voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                  <div>
                    <a href="#menu" class="btn-menu animate__animated animate__fadeInUp scrollto">Our Menu</a>
                    <a href="#book-a-table" class="btn-book animate__animated animate__fadeInUp scrollto">Book a Table</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  `
  return hero_container;
}