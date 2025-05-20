// Mobile Menu Toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Notice Board Functionality
function initializeNoticeBoard() {
  const noticeScroll = document.querySelector('.notice-scroll');
  if (noticeScroll) {
    // Add hover pause functionality
    noticeScroll.addEventListener('mouseenter', () => {
      noticeScroll.style.overflow = 'auto';
    });

    noticeScroll.addEventListener('mouseleave', () => {
      noticeScroll.style.overflow = 'auto';
    });

    // Add new notice functionality
    const addNewNotice = (date, title, content) => {
      const noticeItem = document.createElement('div');
      noticeItem.className = 'notice-item';
      noticeItem.innerHTML = `
                <span class="notice-date">${date}</span>
                <h3>${title}</h3>
                <p>${content}</p>
            `;
      noticeScroll.insertBefore(noticeItem, noticeScroll.firstChild);
    };

    // Example of adding a new notice (can be used by admin panel)
    // addNewNotice('March 20, 2024', 'New Notice Title', 'Notice content goes here');
  }
}

// Language Switching
let currentLanguage = 'en';
const translations = {
  en: {
    home: 'Home',
    about: 'About Us',
    academics: 'Academics',
    events: 'Events',
    gallery: 'Gallery',
    admission: 'Admission',
    contact: 'Contact',
    welcome: 'Welcome to Our School',
    mission: 'Our Mission',
    leadership: 'Leadership',
    chairman: 'Chairman',
    director: 'Founder & Director',
    curriculum: 'Standard Curriculum',
    multimedia: 'Multimedia Learning',
    creative: 'Creative Methods',
    admissionProcess: 'Admission Process',
    inquiryForm: 'Inquiry Form',
    getInTouch: 'Get in Touch',
    submit: 'Submit'
  },
  bn: {
    home: 'হোম',
    about: 'আমাদের সম্পর্কে',
    academics: 'শিক্ষা',
    events: 'ইভেন্ট',
    gallery: 'গ্যালারি',
    admission: 'ভর্তি',
    contact: 'যোগাযোগ',
    welcome: 'আমাদের স্কুলে স্বাগতম',
    mission: 'আমাদের লক্ষ্য',
    leadership: 'নেতৃত্ব',
    chairman: 'চেয়ারম্যান',
    director: 'প্রতিষ্ঠাতা ও পরিচালক',
    curriculum: 'মানসম্মত পাঠ্যক্রম',
    multimedia: 'মাল্টিমিডিয়া শিক্ষা',
    creative: 'সৃজনশীল পদ্ধতি',
    admissionProcess: 'ভর্তি প্রক্রিয়া',
    inquiryForm: 'জিজ্ঞাসা ফর্ম',
    getInTouch: 'যোগাযোগ করুন',
    submit: 'জমা দিন'
  }
};

function toggleLanguage() {
  currentLanguage = currentLanguage === 'en' ? 'bn' : 'en';
  updateLanguage();
}

function updateLanguage() {
  // Update navigation links
  document.querySelectorAll('.nav-links a').forEach(link => {
    const key = link.getAttribute('href').substring(1);
    if (translations[currentLanguage][key]) {
      link.textContent = translations[currentLanguage][key];
    }
  });

  // Update other text content
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[currentLanguage][key]) {
      element.textContent = translations[currentLanguage][key];
    }
  });

  // Update form placeholders
  document.querySelectorAll('[data-placeholder]').forEach(element => {
    const key = element.getAttribute('data-placeholder');
    if (translations[currentLanguage][key]) {
      element.placeholder = translations[currentLanguage][key];
    }
  });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Form Submission
const admissionForm = document.getElementById('admission-form');
if (admissionForm) {
  admissionForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your interest! We will contact you soon.');
    this.reset();
  });
}

// Gallery Image Loading
function loadGalleryImages() {
  const galleryGrid = document.querySelector('.gallery-grid');
  if (galleryGrid) {
    // Add your gallery images here

    const images = [
      'photo1.jpg',
      'photo2.jpg',
      'photo3.jpg',
      'photo4.jpg'
    ];

    images.forEach(image => {
      const img = document.createElement('img');
      img.src = image;
      img.alt = 'School Event';
      img.loading = 'lazy';
      galleryGrid.appendChild(img);
    });
  }
}

// Event Cards
function loadEventCards() {
  const eventCards = document.querySelector('.event-cards');
  if (eventCards) {
    const events = [
      {
        title: 'EID-UL-FITR',
        date: 'February 21, 2024',
        description: 'EID-UL-FITR is a Muslim festival that celebrates the end of Ramadan, the Islamic holy month of fasting.'
      },
      {
        title: 'Annual Sports Day',
        date: 'March 15, 2024',
        description: 'Sports competitions and prize distribution'
      }
    ];

    events.forEach(event => {
      const card = document.createElement('div');
      card.className = 'event-card';
      card.innerHTML = `
                <h3>${event.title}</h3>
                <p class="date">${event.date}</p>
                <p>${event.description}</p>
            `;
      eventCards.appendChild(card);
    });
  }
}

// FAQ Section Toggle
function setupFAQ() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(btn => {
    btn.addEventListener('click', function () {
      const item = this.parentElement;
      item.classList.toggle('active');
    });
    btn.addEventListener('touchstart', function () {
      const item = this.parentElement;
      item.classList.toggle('active');
    });
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadGalleryImages();
  loadEventCards();
  updateLanguage();
  initializeNoticeBoard();
  setupFAQ();
}); 
