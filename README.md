# Component-Based Website with PHP, Twig, SCSS, and TypeScript

A modern, component-based website built with PHP, Twig templating, SCSS for styling, and TypeScript for enhanced interactivity. The project uses Bootstrap for responsive design and follows a modular architecture.

## Features

- Component-based architecture
- Responsive design using Bootstrap
- Type-safe JavaScript with TypeScript
- Modern CSS with SCSS
- PHP templating with Twig
- Three main pages: Home, About Us, and Contact

## Prerequisites

Make sure you have the following installed on your system:

- PHP 7.4 or higher
- Composer (PHP package manager)
- Node.js and npm
- Web server (Apache/Nginx) or PHP's built-in server

## Project Structure

```
project/
├── cache/                 # Twig template cache
├── public/               # Public assets and entry point
│   ├── css/             # Compiled CSS
│   ├── js/              # Compiled JavaScript
│   └── index.php        # Application entry point
├── src/
│   ├── assets/          # Source assets
│   │   ├── scss/       # SCSS source files
│   │   └── ts/         # TypeScript source files
│   ├── components/      # Twig components
│   │   ├── about/
│   │   ├── contact/
│   │   ├── home/
│   │   └── layout/
│   └── bootstrap.php    # Application bootstrap
```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install PHP dependencies:
   ```bash
   composer install
   ```

3. Install Node.js dependencies:
   ```bash
   npm install
   ```

4. Create required directories:
   ```bash
   mkdir cache
   mkdir -p public/css
   mkdir -p public/js
   ```

## Building Assets

1. Compile TypeScript:
   ```bash
   npm run build:ts
   ```

2. Compile SCSS:
   ```bash
   npm run build:scss
   ```

3. Watch for changes during development:
   ```bash
   # In separate terminal windows:
   npm run watch:ts
   npm run watch:scss
   ```

## Running the Application

1. Using PHP's built-in server:
   ```bash
   cd public
   php -S localhost:8000
   ```

2. Or configure your web server (Apache/Nginx) to point to the `public` directory as the web root.

3. Access the website:
   - Home page: http://localhost:8000
   - About page: http://localhost:8000/about
   - Contact page: http://localhost:8000/contact

## Development

### Adding New Components

1. Create a new directory in `src/components/`
2. Add the following files:
   - `component-name.twig` - Component template
   - `component-name.json` - Component data
   - Add SCSS in `src/assets/scss/components/_component-name.scss`
   - Import the SCSS file in `src/assets/scss/main.scss`

### Modifying Styles

1. Edit SCSS files in `src/assets/scss/`
2. Run `npm run build:scss` to compile
3. Or use `npm run watch:scss` during development

### Adding JavaScript Functionality

1. Edit TypeScript files in `src/assets/ts/`
2. Run `npm run build:ts` to compile
3. Or use `npm run watch:ts` during development

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
