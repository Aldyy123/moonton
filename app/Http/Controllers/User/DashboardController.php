<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Movie;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {

        $featured = Movie::whereIsFeatured(true)->get();
        $movie = Movie::all();
        $props = [
            'isFeaturedMovie' => $featured,
            "movies" => $movie,
        ];

        return inertia('User/Dashboard/index', $props);
    }
}
