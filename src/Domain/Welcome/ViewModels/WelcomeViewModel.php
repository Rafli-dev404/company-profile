<?php

namespace Domain\Welcome\ViewModels;

use Domain\Shared\ViewModels\ViewModel;
use Domain\Welcome\DTO\WelcomeData;

class WelcomeViewModel extends ViewModel
{
    public function data(): WelcomeData
    {
        return WelcomeData::from([
            'message' => 'Welcome to the Laravel Data package!',
        ]);
    }
}
