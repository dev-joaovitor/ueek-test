<?php

use App\Http\Controllers\TestimonialController;
use Illuminate\Support\Facades\Route;

Route::get("/v1/testimonial/{id}", [TestimonialController::class, "handleGetOne"]);
Route::get("/v1/testimonial", [TestimonialController::class, "handleGetAll"]);
Route::post("/v1/testimonial", [TestimonialController::class, "handlePost"]);
Route::patch("/v1/testimonial/{id}", [TestimonialController::class, "handlePatch"]);
Route::delete("/v1/testimonial/{id}", [TestimonialController::class, "handleDelete"]);

