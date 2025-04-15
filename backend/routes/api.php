<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post("/v1/testimonial", function(Request $request) {
    if ($request->hasFile("photo")) {
        $file = $request->file("photo");
        $extension = $file->extension();
        $file_name = uuid_create() . ".$extension";

        $path = $file->storeAs(
            "testimonials",
            $file_name,
            "public"
        );
    }

    return response(
        json_encode([
            "abc" => 123,
            "post" => $request->post(),
            "files" => $request->hasFile("photo"),
            "path" => $path ?? null,
        ], 200)
    )->header("Content-Type", "application/json");
});

Route::patch("/v1/testimonial/{id}", function(Request $request) {
    return response(
        json_encode([
            "abc" => 123,
            "asgs" => "asd",
        ], 200)
    )->header("Content-Type", "application/json");
});
