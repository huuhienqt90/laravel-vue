<?php

namespace App\Http\Middleware;

use Closure;

class MustBeAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        // Determine whether the current user is an administrator
        if (auth()->guest()) {
            return redirect()->route('dashboard.showLoginForm');
        }

        return $next($request);
    }
}
