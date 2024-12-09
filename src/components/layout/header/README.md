# Header Component

The header component provides the main navigation for the website. It includes a responsive navbar with links to all main sections of the site.

## Usage

```twig
{% include "layout/header/header.twig" with {active_page: 'home'} %}
```

## Properties

- `active_page`: String - Determines which navigation item should be highlighted
  - Options: 'home', 'about', 'contact'

## Variants

1. Default - Home page active
2. About - About page active
3. Contact - Contact page active

## Dependencies

- Bootstrap 5.3.2
- Custom SCSS styles in `_header.scss`
