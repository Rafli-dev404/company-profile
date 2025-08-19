<?php

use Illuminate\Support\Facades\Route;

foreach (glob(base_path('routes/modules/*.php')) as $routeFile) {
    require $routeFile;
}

