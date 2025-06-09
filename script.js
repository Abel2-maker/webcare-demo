 function showSuggestions() {
            var input = document.querySelector(".search-box").value;
            var suggestions = document.getElementById("suggestions");

            if (input.length > 1) {
                suggestions.style.display = "block";
            } else {
                suggestions.style.display = "none";
            }
        }
          const form = document.getElementById('auth-form');
  const switchLink = document.getElementById('switch-to-login');
  const title = document.getElementById('form-title');
  const nameBox = document.getElementById('name').parentElement;
  const confirmPasswordBox = document.getElementById('confirm-password-box');
  const errorMsg = document.getElementById('error-msg');

  let isLogin = false;

  switchLink.addEventListener('click', function(e) {
    e.preventDefault();
    isLogin = !isLogin;
    title.textContent = isLogin ? 'Login' : 'Sign Up';
    switchLink.textContent = isLogin ? 'Sign Up' : 'Login';
    nameBox.style.display = isLogin ? 'none' : 'block';
    confirmPasswordBox.style.display = isLogin ? 'none' : 'block';
    errorMsg.textContent = '';
  });

  /* js sign up*/
    document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.querySelector('input[type="email"]').value;

    // Fake check — in real setup, Flask/Python will do this
    if (email === "existing@example.com") {
      alert("Email already exists! Please log in instead.");
      window.location.href = "login.html";
    } else {
      alert("Account created successfully!");
      window.location.href = "login.html";
    }
  });
  /* js login */
  document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    // Fake login check — replace with Flask login logic later
    if (email === "test@example.com" && password === "123456") {
      alert("Login successful!");
      // Redirect to dashboard (when ready)
      // window.location.href = "dashboard.html";
    } else {
      alert("Incorrect email or password.");
    }
  });

  /* js pat Dashboard */
   // Handle symptom form submissions (placeholder)
    document
      .getElementById('symptomFormDesktop')
      .addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Symptoms submitted! Doctor will reply soon.');
        this.reset();
      });
    document
      .getElementById('symptomFormMobile')
      .addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Symptoms submitted! Doctor will reply soon.');
        this.reset();
      });
      /* intr script */
       const images = [
        'images/Team doctor,jpg',
        'images/Tools doctor,jpg'
       ];

       let index = 0;
       const bgFader =document.getElementById('background');

       function changeBackground() {
        bgFader.style.backgroundImage = url('${images[index]}');
        index = (index + 1) % images. length;
       }

       changeBackground();
       setInterval(changeBackground, 5000);