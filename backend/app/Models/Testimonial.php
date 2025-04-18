<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    use HasUuids;

    protected $fillable = [
        "name",
        "headline",
        "comment",
        "image",
        "stars",
    ];
}
