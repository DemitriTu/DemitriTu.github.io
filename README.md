# Personal Website Template

A clean, responsive personal website template for computer science students. Built with vanilla HTML, CSS, and JavaScript — no build tools required.

## Live Demo

Once deployed, your site will be available at `https://yourusername.github.io`

## Sections

- **Hero** — Introduction with social links
- **About** — Bio and recent technologies
- **Education** — Degree, coursework, GPA
- **Skills** — Languages, frameworks, and concepts
- **Projects** — Portfolio cards with GitHub/demo links
- **Experience** — Internships, TA roles, etc.
- **Contact** — Call-to-action with email link

## Customization

1. **Personal info** — Search for `Your Name`, `yourusername`, and `your.email@university.edu` in `index.html` and replace them with your details.
2. **Photo** — Replace the placeholder image URL in the About section with your own photo (add an image to the repo or use an external URL).
3. **Projects** — Duplicate or remove `.project-card` elements to match your portfolio.
4. **Colors** — Edit CSS variables at the top of `styles.css` to change the theme. The default accent color is `#64ffda`.
5. **Sections** — Remove any section you don't need (e.g., Experience) and update the nav links accordingly.

## Local Development

Open `index.html` directly in your browser, or use a local server:

```bash
# Python
python -m http.server 8000

# Node.js (npx)
npx serve .
```

Then visit `http://localhost:8000`

## Deploy to GitHub Pages

1. Push this repo to GitHub as `yourusername.github.io`
2. Go to **Settings → Pages**
3. Set source to **Deploy from branch: main** (root `/`)
4. Your site will be live in a few minutes

## File Structure

```
├── index.html    # Main page
├── styles.css    # All styles
├── script.js     # Navigation, scroll effects
└── README.md     # This file
```
