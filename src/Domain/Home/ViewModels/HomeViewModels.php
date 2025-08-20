<?php

namespace Domain\Home\ViewModels;

use Domain\Shared\ViewModels\ViewModel;

class HomeViewModels extends ViewModel
{
    public function __construct() {}

    public function title(): string
    {
        return 'PT Maksi Integrasi Teknologi';
    }

    public function subtitle(): string
    {
        return 'Selamat Datang di Maksi Integrasi Sistem';
    }

    public function description(): string
    {
        return 'Providing comprehensive IT development, deployment, and system integration services to help businesses undergo digital transformation.';
    }

    public function buttons(): array
    {
        return [
            ['label' => 'Tentang Kami', 'href' => '/about'],
            ['label' => 'Get Started', 'href' => '/contact'],
        ];
    }
}
