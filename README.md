# Portfolio Website - Front-End Developer

A modern, responsive portfolio website showcasing my skills, projects, and experience as a fresh graduate in Informatics Engineering seeking a front-end developer position.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Interactive Elements**: 
  - Smooth scrolling navigation
  - Animated skill bars
  - Project cards with hover effects
  - Mobile-friendly hamburger menu
  - Scroll-to-top button
- **Sections**:
  - Hero section with introduction
  - About me with education and background
  - Technical skills with progress bars
  - Project showcase with descriptions
  - Contact form
  - Social media links

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript
- Font Awesome Icons

## Customization Guide

### 1. Personal Information
Edit `index.html` and replace:
- `Your Name` - Your actual name
- `your.email@example.com` - Your email address
- `+123 456 7890` - Your phone number
- `Your City, Country` - Your location
- Social media links (GitHub, LinkedIn, Twitter)

### 2. Profile Picture
Replace the placeholder image URL in the About section:
```html
<img src="https://via.placeholder.com/400x400" alt="Profile Picture">
```
Change to your actual image path:
```html
<img src="images/profile.jpg" alt="Your Name">
```

### 3. Projects
Update the projects section with your actual projects:
- Replace placeholder images
- Update project titles and descriptions
- Add links to live demos and GitHub repositories
- Modify technology tags

### 4. Skills
Adjust skill levels in `index.html`:
```html
<div class="skill-progress" style="width: 90%"></div>
```
Change the width percentage to match your skill level.

### 5. Resume
Add your resume PDF file to the portfolio folder and update the link:
```html
<a href="resume.pdf" class="btn btn-primary" download>Download Resume</a>
```

### 6. Colors
Customize the color scheme in `styles.css` by modifying the CSS variables:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f093fb;
    /* ... other colors */
}
```

## How to Use

1. **Open the website**: Simply open `index.html` in your web browser
2. **Deploy**: You can deploy this portfolio to various hosting platforms:
   - GitHub Pages
   - Netlify
   - Vercel
   - Any web hosting service

## Deployment Instructions

### GitHub Pages
1. Create a new repository on GitHub
2. Push your portfolio files to the repository
3. Go to Settings → Pages
4. Select the branch to deploy (usually `main`)
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify
1. Create an account on Netlify
2. Drag and drop your portfolio folder
3. Your site will be live instantly with a random URL
4. You can customize the URL or add a custom domain

## Contact Form Setup

The contact form currently shows an alert message. To make it functional, you need to:

1. **Use a form service** like:
   - Formspree (easy, free tier available)
   - EmailJS
   - Netlify Forms (if hosting on Netlify)

2. **Add backend**: Create a simple backend with Node.js/Express or use serverless functions

3. **Example with Formspree**:
```html
<form action="https://formspree.io/f/your-form-id" method="POST">
    <!-- form fields -->
</form>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

This project is open source and available for personal and commercial use.

## Credits

- Font Awesome for icons
- Google Fonts for typography

---

**Good luck with your job search!** 🚀

Feel free to customize this portfolio to match your personal style and preferences.
