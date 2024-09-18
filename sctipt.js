emailjs.init('klkt762k8gVNRYF1q');


document.getElementById('no').addEventListener('click', function() {
    const container = document.getElementById('container');
    const button = this;
    
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const buttonWidth = button.clientWidth;
    const buttonHeight = button.clientHeight;

    const maxX = containerWidth - buttonWidth;
    const maxY = containerHeight - buttonHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
});


document.getElementById('yes').addEventListener('click', function() {
    
    document.querySelector('img').src = './2.gif'; // Change the image source
    document.getElementById('qu').textContent = 'I like you too 💕'; // Change the heading text
    document.getElementById('yes').style.display = 'none'; // Hide the 'yes' button
    document.getElementById('no').style.display = 'none'; // Hide the 'no' button
    
    emailjs.send("service_vx1ax0a","template_x837v5h")
      .then(function(response) {
        console.log('Email sent successfully:', response);
      }, function(error) {
        console.error('Failed to send email:', error);
      });
});

