<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Role
{
    public function handle(Request $request, Closure $next, string $role): mixed
    {
        if (!Auth::check() || Auth::user()->role !== $role) {
            return redirect('/login')->withErrors([
                'email' => 'Hanya akun admin yang bisa mengakses halaman ini.',
            ]);
        }
        return $next($request);
    }
}
