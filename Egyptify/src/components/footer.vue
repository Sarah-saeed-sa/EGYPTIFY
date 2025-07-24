<template>
  <footer class="footer">
    <div class="footer-section logo">
      <h2 class="logo-text">EGYPTIFY</h2>
      <p class="slogan">"Discover the magic of Egypt"</p>
    </div>

    <div class="footer-section social">
      <h3>Find Us In<br />Social media</h3>
      <div class="icons">
        <button><i class="fab fa-instagram"></i></button>
        <button><i class="fab fa-facebook-f"></i></button>
        <button><i class="fab fa-whatsapp"></i></button>
        <button><i class="fab fa-x-twitter"></i></button>
        <button><i class="fab fa-linkedin-in"></i></button>
      </div>
    </div>

    <div class="footer-section links">
      <h4>About Us</h4>
      <ul>
        <li>Mission</li>
        <li>Story</li>
        <li>Team</li>
        <li>Partners</li>
        <li>Press</li>
      </ul>
    </div>

    <div class="footer-section links">
      <h4>Contact Us</h4>
      <ul>
        <li>Contact</li>
        <li>Form</li>
        <li>Email</li>
        <li>Social</li>
        <li>LiveChat</li>
      </ul>
    </div>

    <div class="footer-section links">
      <h4>Policies</h4>
      <ul>
        <li>FAQ</li>
        <li>Support</li>
        <li>Feedback</li>
        <li>Blog</li>
        <li>Terms</li>
        <li>Complaints</li>
      </ul>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter;
</script>

<style scoped>
.footer {
  background-color: #ddd;
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  border: 2px solid #8e44ec;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo-text {
  color: #f4a623;
  font-weight: bold;
  font-size: 2rem;
  letter-spacing: 1px;
}

.slogan {
  font-style: italic;
  font-size: 1rem;
}

.social .icons {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.icons button {
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
  padding: 0.5rem;
  font-size: 1.1rem;
  cursor: pointer;
}

.links ul {
  list-style: none;
  padding: 0;
  text-align: center;
}

.links li {
  margin: 0.25rem 0;
}
</style>
