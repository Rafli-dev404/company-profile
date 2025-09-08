<?php
namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Domain\Login\Request\LoginRequest;
use Domain\Login\Action\LoginAction; // Perbaiki namespace
use Illuminate\Http\RedirectResponse;

class AuthController extends Controller
{
    protected $loginAction;

    public function __construct(LoginAction $loginAction)
    {
        $this->loginAction = $loginAction;
    }

    public function showLoginForm()
    {
        return \Inertia\Inertia::render('Login/Index'); // Gunakan namespace penuh
    }

    public function login(LoginRequest $request): RedirectResponse
    {
        $credentials = $request->only('email', 'password');
        return $this->loginAction->handle($request, $credentials);
    }
}
