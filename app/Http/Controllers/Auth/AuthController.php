<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Domain\Login\Request\LoginRequest;
use Domain\Login\Action\LoginAction;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Domain\Login\Request\LogoutRequest;

class AuthController extends Controller
{
    protected $loginAction;

    public function __construct(LoginAction $loginAction)
    {
        $this->loginAction = $loginAction;
    }

    public function showLoginForm()
    {
        return inertia('Login/Index');
    }

    public function login(LoginRequest $request): RedirectResponse
    {
        $credentials = $request->only('email', 'password');


        return $this->loginAction->handle($request, $credentials);
    }

    public function logout(LogoutRequest $request): RedirectResponse
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('login.form');
    }
}
