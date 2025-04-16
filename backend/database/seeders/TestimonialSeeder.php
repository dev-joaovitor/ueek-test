<?php

namespace Database\Seeders;

use App\Models\Testimonial;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class TestimonialSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $testimonials = [
            [
                "name" => "Leonardo da Vinci",
                "headline" => "Study",
                "comment" => "Study without desire spoils the memory, and it retains nothing that it takes in.",
                "stars" => 4.5,
                "image" => "https://hips.hearstapps.com/hmg-prod/images/portrait-of-leonardo-da-vinci-1452-1519-getty.jpg?crop=1xw:1.0xh;center,top&resize=640:*",
            ],
            [
                "name" => "Linus Torvalds",
                "headline" => "Fun is the key to programming",
                "comment" => "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.",
                "stars" => 5.0,
                "image" => "https://antlia.com.br/wp-content/uploads/2023/08/Linus.jpg",
            ],
            [
                "name" => "Nikola Tesla",
                "headline" => "Science and non-physical phenomena",
                "comment" => "The day science begins to study non-physical phenomena, it will make more progress in one decade than in all the previous centuries of its existence.",
                "stars" => 4.5,
                "image" => "https://www.sapaviva.com/wp-content/uploads/2017/06/8S.-Nikola-Tesla-1856-1943-508x508.jpg",
            ],
            [
                "name" => "Leonhard Euler",
                "headline" => "Logic is the foundation",
                "comment" => "Logic is the foundation of the certainty of all the knowledge we acquire.",
                "stars" => 3.5,
                "image" => "https://www.radiofrance.fr/s3/cruiser-production/2023/10/3f44fd83-5ec5-4934-94a0-2183c0bc5023/250x250_sc_leonhard-euler-antique-illustration.jpg",
            ]
        ];

        foreach ($testimonials as &$testimonial) {
            try {
                $image_path = $testimonial["image"];
                $testimonial["image"] = null;

                $testimonial = Testimonial::create($testimonial);

                if (!$testimonial) continue;

                $contents = file_get_contents($image_path);
                $image_name = $testimonial->id . ".jpg";

                Storage::disk("public")->put("/testimonials/$image_name", $contents);

                $testimonial->image = $image_name;
                $testimonial->save();
            } catch(e) {
                continue;
            }
        }
    }
}
