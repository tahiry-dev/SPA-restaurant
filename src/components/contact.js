export default function contact() {
  const contact = document.createElement('section');
  contact.setAttribute('id', 'contact');
  contact.className = ('contact');

  contact.innerHTML = `
            <div class="container">
                <div class="section-title">
                  <h2><span>Contact</span> Us</h2>
                  <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae
                    autem.</p>
                </div>
            </div>

            <div class="container mt-5">

                <div class="info-wrap">
                  <div class="row">
                    <div class="col-lg-3 col-md-6 info">
                      <i class="icofont-google-map"></i>
                      <h4>Location:</h4>
                      <p>A108 Adam Street<br>New York, NY 535022</p>
                    </div>

                    <div class="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                      <i class="icofont-clock-time icofont-rotate-90"></i>
                      <h4>Open Hours:</h4>
                      <p>Monday-Saturday:<br>11:00 AM - 2300 PM</p>
                    </div>

                    <div class="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                      <i class="icofont-envelope"></i>
                      <h4>Email:</h4>
                      <p>info@example.com<br>contact@example.com</p>
                    </div>

                    <div class="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                      <i class="icofont-phone"></i>
                      <h4>Call:</h4>
                      <p>+1 5589 55488 51<br>+1 5589 22475 14</p>
                    </div>
                  </div>
                </div>

                <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                  <div class="row">
                    <div class="col-md-6 form-group">
                      <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars" />
                      <div class="validate"></div>
                    </div>
                    <div class="col-md-6 form-group mt-3 mt-md-0">
                      <input type="email" class="form-control" name="email" id="email" placeholder="Your Email"
                        data-rule="email" data-msg="Please enter a valid email" />
                      <div class="validate"></div>
                    </div>
                  </div>
                  <div class="form-group mt-3">
                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject"
                      data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                    <div class="validate"></div>
                  </div>
                  <div class="form-group mt-3">
                    <textarea class="form-control" name="message" rows="5" data-rule="required"
                      data-msg="Please write something for us" placeholder="Message"></textarea>
                    <div class="validate"></div>
                  </div>
                  <div class="mb-3">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div class="text-center"><button type="submit">Send Message</button></div>
                </form>

            </div>
        `;
  return contact;
}