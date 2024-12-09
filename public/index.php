<?php
require_once __DIR__ . '/../src/bootstrap.php';

$route = $_SERVER['REQUEST_URI'];
$route = strtok($route, '?');

// Remove trailing slash if present
$route = rtrim($route, '/');
if (empty($route)) {
    $route = '/';
}

// Define routes and their corresponding components
$routes = [
    '/' => [
        'template' => 'home/home.twig',
        'data' => json_decode(file_get_contents(__DIR__ . '/../src/components/home/home.json'), true),
        'active_page' => 'home'
    ],
    '/about' => [
        'template' => 'about/about.twig',
        'data' => json_decode(file_get_contents(__DIR__ . '/../src/components/about/about.json'), true),
        'active_page' => 'about'
    ],
    '/contact' => [
        'template' => 'contact/contact.twig',
        'data' => json_decode(file_get_contents(__DIR__ . '/../src/components/contact/contact.json'), true),
        'active_page' => 'contact'
    ]
];

// Check if route exists
if (isset($routes[$route])) {
    echo render_template($routes[$route]['template'], [
        'data' => $routes[$route]['data'],
        'active_page' => $routes[$route]['active_page']
    ]);
} else {
    // 404 page
    http_response_code(404);
    echo "404 - Page not found";
}
