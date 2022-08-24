<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MoviesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movies = [
            [
                'name' => 'Batman',
                'slug' => 'batman-beginning',
                'category' => 'action',
                'video_url' => 'http://www.batman.com/',
                'thumbnail' => 'http://www.batman.com/',
                'rating' => 4.5,
                'is_featured' => 0,
            ],
            [
                'name' => 'Marvel Universe',
                'slug' => 'marvel-universe',
                'category' => 'action',
                'video_url' => 'http://www.batman.com/',
                'thumbnail' => 'http://www.batman.com/',
                'rating' => 2.3,
                'is_featured' => 1,
            ]
        ];

        Movie::insert($movies);
    }
}
