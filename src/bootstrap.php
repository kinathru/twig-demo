<?php
require_once __DIR__ . '/../vendor/autoload.php';

use Twig\Environment;
use Twig\Loader\FilesystemLoader;

$loader = new FilesystemLoader(__DIR__ . '/components');
$twig = new Environment($loader, [
    'cache' => __DIR__ . '/../cache',
    'auto_reload' => true
]);

function render_template($template, $data = []) {
    global $twig;
    return $twig->render($template, $data);
}
