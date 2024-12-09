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
└── styleguide/          # Fractal component library
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

You can run the application in two ways:

### 1. PHP Development Server
```bash
cd public
php -S localhost:8000
```

### 2. Component Development (Fractal)
```bash
# Start Fractal server with live reload
npm run fractal:start

# Or build static component library
npm run fractal:build
```

Access the applications:
- Main Website: http://localhost:8000
- Component Library: http://localhost:3000 (when using Fractal server)

## Development

### Component Development with Fractal

This project uses Fractal for component development and documentation. Fractal provides an isolated environment to develop and test components independently.

1. Start the Fractal development server:
   ```bash
   npm run fractal:start
   ```
   This will start a local server (usually at http://localhost:3000) with live reload capabilities.

2. Build a static version of the component library:
   ```bash
   npm run fractal:build
   ```
   This will generate a static HTML version of your component library in the `styleguide` directory.

### Component Structure
Each component should include:
- `.twig` file - The component template
- `.config.js` file - Component configuration and variants
- `README.md` file - Component documentation
- Related SCSS in `src/assets/scss/components/`

Example:
```
components/
└── button/
    ├── button.twig
    ├── button.config.js
    └── README.md
```

### Adding New Components

1. Create a new directory in `src/components/`
2. Add the required files (template, config, documentation)
3. Add corresponding SCSS in `src/assets/scss/components/`
4. Import the SCSS file in `src/assets/scss/main.scss`

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
