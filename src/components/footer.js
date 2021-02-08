export const footer = function () {

    const footer_container = document.createElement('footer');
    footer_container.setAttribute('id', 'footer');

    footer_container.innerHTML = `
        <div class="container">
            <h3>Microverse Student Restaurant</h3>
            <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
            <div class="social-links">
              <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
              <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
              <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
              <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
              <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
            </div>
            <div class="copyright">
              &copy; Copyright <strong><span>Microverse</span></strong>. All Rights Reserved
            </div>
        </div>
            
        `
    return footer_container;
}