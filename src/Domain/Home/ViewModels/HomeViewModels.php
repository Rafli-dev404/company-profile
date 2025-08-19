<?php

namespace Domain\Home\ViewModels;

use Domain\Shared\ViewModels\ViewModel;

class HomeViewModels extends ViewModel
{
    public function __construct(){}
    public function title (): string
    {
        return 'Home';
    }

    // Add methods to retrieve data for the Home view if necessary
}
