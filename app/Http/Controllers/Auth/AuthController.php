<?php
namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Http\Controllers\Controller; // Impor kelas Controller

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            if (Auth::user()->role === 'admin') {
                return Inertia::location('/admin');
            }
            Auth::logout();
            return back()->withErrors([
                'email' => 'Hanya akun admin yang bisa login.',
            ]);
        }

        return back()->withErrors([
            'email' => 'Email atau password salah.',
        ]);
    }
}
