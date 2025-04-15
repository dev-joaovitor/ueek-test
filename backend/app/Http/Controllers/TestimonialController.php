<?php

namespace App\Http\Controllers;

use App\Models\Testimonial;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class TestimonialController extends Controller
{
    public function handleGetAll() {
        try {
            return response([
                "status_code" => 200,
                "testimonials" => Testimonial::all(),
            ], 200);
        } catch(Exception $e) {
            return response([
                "status_code" => 500,
                "action" => "Serviços indisponíveis, entre em contato.",
            ], 500);
        }
    }

    public function handleGetOne(string $id) {
        try {
            $testimonial = Testimonial::find($id);

            if (!$testimonial)
                return response([
                    "status_code" => 404,
                    "action" => "Depoimento não encontrado, tente outro.",
                ], 404);

            return response([
                "status_code" => 200,
                "testimonial" => $testimonial->toArray(),
            ], 200);
        } catch(Exception $e) {
            return response([
                "status_code" => 500,
                "action" => "Serviços indisponíveis, entre em contato.",
            ], 500);
        }
    }

    public function handlePost(Request $request) {
        try {
            try {
                $request->validate([
                    "name" => "required",
                    "headline" => "required|max:75",
                    "comment" => "required|max:255",
                    "stars" => "required",
                    "photo" => "mimetypes:image/*",
                ]);
            } catch (Exception $e) {
                return response([
                    "status_code" => 422,
                    "action" => "Verifique os campos e tente novamente.",
                ], 422);
            }

            $data = $request->post();

            $testimonial = Testimonial::create([
                "name" => $data["name"],
                "headline" => $data["headline"],
                "comment" => $data["comment"],
                "stars" => $data["stars"],
                "image" => null,
            ]);

            if ($request->hasFile("photo"))
            {
                $file = $request->file("photo");
                $extension = $file->extension();
                $file_name = $testimonial->id . ".$extension";

                $file_path = $file->storeAs(
                    "testimonials",
                    $file_name,
                    "public"
                );

                if ($file_path) {
                    $testimonial->image = $file_name;
                    $testimonial->save();
                }
            }

            if (!$testimonial) throw new Exception("services-down");

            return response([
                "status_code" => 201,
                "action" => "Depoimento salvo com sucesso!",
            ], 201);

        } catch(Exception $e) {
            return response([
                "status_code" => 500,
                "action" => "Serviços indisponíveis, entre em contato.",
            ], 500);
        }
    }

    public function handlePatch(Request $request, string $id) {
        try {
            try {
                $request->validate([
                    "name" => "required",
                    "headline" => "required|max:75",
                    "comment" => "required|max:255",
                    "stars" => "required",
                    "photo" => "mimetypes:image/*",
                ]);
            } catch (Exception $e) {
                return response([
                    "status_code" => 422,
                    "action" => "Verifique os campos e tente novamente.",
                ], 422);
            }

            $data = $request->post();

            $testimonial = Testimonial::find($id);

            if (!$testimonial)
                return response([
                    "status_code" => 404,
                    "action" => "Depoimento não encontrado, recarregue a página e tente novamente.",
                ], 404);

            $testimonial->update([
                "name" => $data["name"],
                "headline" => $data["headline"],
                "comment" => $data["comment"],
                "stars" => $data["stars"],
                "image" => null,
            ]);

            if ($request->hasFile("photo"))
            {
                $oldImage = $testimonial->image;

                if ($oldImage)
                    Storage::disk("public")->delete($oldImage);

                $file = $request->file("photo");

                $file_extension = $file->extension();

                $file_name = $testimonial->id;
                $file_name .= ".$file_extension";

                $file_path = $file->storeAs(
                    "testimonials",
                    $file_name,
                    "public"
                );

                if ($file_path && !$oldImage) {
                    $testimonial->image = $file_name;
                    $testimonial->save();
                }
            }

            return response([
                "status_code" => 201,
                "action" => "Depoimento salvo com sucesso!",
            ], 201);
        } catch(Exception $e) {
            return response([
                "status_code" => 500,
                "action" => "Serviços indisponíveis, entre em contato.",
            ], 500);
        }
    }
}
