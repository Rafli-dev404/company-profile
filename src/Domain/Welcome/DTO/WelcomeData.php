<?php

namespace Domain\Welcome\DTO;

use Spatie\LaravelData\Data;

class WelcomeData extends Data
{
    public function __construct(
        public string $message
    )
    {
    }
}
