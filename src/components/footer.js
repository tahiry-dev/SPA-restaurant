export default function footer() {
  const footerContainer = document.createElement('footer');
  footerContainer.setAttribute('id', 'footer');

  footerContainer.innerHTML = `
        <div class="container">
            <h3>Microverse Student Restaurant</h3>
            <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
            <div class="copyright">
              &copy; Copyright <strong><span>Microverse</span></strong>. All Rights Reserved
            </div>
        </div>
            
        `;
  return footerContainer;
}