<?php

namespace Domain\Welcome\ViewModels;

use Domain\Shared\ViewModels\ViewModel;

class WelcomeViewModel extends ViewModel
{
    public function data(): array
    {
        return [
            'message' => 'Welcome to the MIT app!',
        ];
    }
}
