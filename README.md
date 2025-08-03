# Personal Portfolio Website

A modern, responsive portfolio website built with React and JavaScript using legacy CSS. This portfolio showcases your skills, projects, and professional information in an attractive and user-friendly design.

## Features

- 🎨 **Modern Design**: Clean and professional design with smooth animations
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Fast Performance**: Optimized for speed and performance
- 🎯 **SEO Friendly**: Proper meta tags and semantic HTML
- 📧 **Contact Form**: Functional contact form with validation
- 🔧 **Easy Customization**: Well-structured code for easy modifications

## Sections

1. **Header**: Navigation menu with smooth scrolling
2. **Hero**: Eye-catching introduction with call-to-action buttons
3. **About**: Personal information and statistics
4. **Skills**: Technical skills with animated progress bars
5. **Projects**: Portfolio projects with filtering options
6. **Contact**: Contact form and contact information
7. **Footer**: Social links and additional information

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone or download this project
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

### Building for Production

Create a production build:
```bash
npm run build
```

## Customization Guide

### Personal Information

1. **Hero Section** (`src/components/Hero.js`):
   - Update your name in the hero title
   - Modify the subtitle and description
   - Update social media links

2. **About Section** (`src/components/About.js`):
   - Edit the personal description
   - Update statistics (years of experience, projects, etc.)
   - Modify the services list

3. **Skills Section** (`src/components/Skills.js`):
   - Update skill categories and proficiency levels
   - Add or remove skills as needed
   - Modify the development approach text

4. **Projects Section** (`src/components/Projects.js`):
   - Replace sample projects with your actual projects
   - Update project descriptions, technologies, and links
   - Add your GitHub and live demo links

5. **Contact Section** (`src/components/Contact.js`):
   - Update contact information (email, phone, location)
   - Modify social media links
   - Customize the contact form message

6. **Footer** (`src/components/Footer.js`):
   - Update your name in the copyright
   - Modify the description
   - Update social media links

### Styling

The portfolio uses legacy CSS with a modern design approach:

- **Global Styles**: `src/index.css`
- **Component Styles**: Each component has its own CSS file
- **Color Scheme**: Primary colors are defined in CSS variables
- **Typography**: Uses Poppins font family

### Color Scheme

The current color scheme uses:
- Primary: `#667eea` (Blue)
- Secondary: `#764ba2` (Purple)
- Accent: `#ffd700` (Gold)
- Text: `#333` (Dark Gray)
- Background: `#f8f9fa` (Light Gray)

You can easily change these colors by updating the CSS variables in the respective component files.

## File Structure

```
src/
├── components/
│   ├── Header.js & Header.css
│   ├── Hero.js & Hero.css
│   ├── About.js & About.css
│   ├── Skills.js & Skills.css
│   ├── Projects.js & Projects.css
│   ├── Contact.js & Contact.css
│   └── Footer.js & Footer.css
├── App.js & App.css
├── index.js & index.css
└── README.md
```

## Technologies Used

- **React 18**: Modern React with hooks
- **JavaScript**: ES6+ features
- **CSS3**: Legacy CSS with modern features
- **React Icons**: Beautiful icons
- **Google Fonts**: Poppins font family

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`

### GitHub Pages
1. Add homepage to package.json: `"homepage": "https://username.github.io/repo-name"`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add scripts to package.json:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
4. Deploy: `npm run deploy`

## Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you need help customizing this portfolio or have any questions, feel free to reach out!

---

**Happy Coding! 🚀** 