<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('testimonials', function (Blueprint $table) {
            $table->uuid("id")->primary();
            $table->string("name");
            $table->string("headline", length: 75);
            $table->string("comment", length: 255);
            $table->string("image")->nullable();
            $table->decimal("stars", total: 2, places: 1);
            $table->dateTime("created_at")->useCurrent();
            $table->dateTime("updated_at")->nullable()->useCurrentOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('testimonials');
    }
};
