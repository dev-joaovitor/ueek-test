# Movefit - Landing Page + Testimonials Management

### Used Technologies
#### Infra
- 🚢 Docker v27.3
- 🚢💻 Docker Compose v2.29

#### Backend (API First)
- 🐘 PHP v8.3
- 🧩 Laravel v12
- 🐘📝 PostgreSQL v17.4

#### Frontend
- 🟢 Node.js v22
- ⬛ Next.js v15
- ⚛️ React v19
- 🔷 TypeScript v5
- 🌬️ TailwindCSS v4

### Minimum requirements to run
- Stable internet connection
- Docker 27.3.1 or compatible
- Docker Compose 2.29.7 (CLI) or compatible

### Step-by-step

1. Open a terminal emulator of your choice, e.g. Powershell (Windows 🪟), KDE/Konsole (Linux 🐧)...; you must have access to the `docker compose` command (see [requirements](#minimum-requirements-to-run))
2. Clone this repository in your machine by running the command: `git clone git@github.com:dev-joaovitor/movefit-laravel.git`
3. Navigate to the folder where the project is by running the command: `cd path/to/project/movefit-laravel`
4. Now you can run the project by running the command: `docker compose up -d` and waiting `Docker` to do its job
- At the first time running the command, the backend can skip the `depends_on` declaration and fail to keep the container running because of a database connection error. Just run the command again and you'll be good to go
6. When **all** containers are running, open your favorite browser and access any client endpoint:

#### Depending on the speed of your machine and/or the amount of resources you have allocated to Docker, it may take a few seconds for the endpoints to be accessible

- Landing page: http://localhost:3000
- Testimonials: http://localhost:3000/admin/testimonials
- **Optional**
  - Run this command if you want to populate your database with 4 default testminonials: `docker compose exec backend php artisan db:seed --class=TestimonialSeeder`
 
### Functionalities
- Testimonial Listing
  - Landing page
  - Admin panel
- Create new testimonial
- Edit a testimonial already created
- Remove a testimonial

###### Disclaimer: I know that uploading `.env` files are highly discouraged as it can leak sensible information from the project and these files need to be shared using more secure means. I made an exception for this project for you to be able to run it right away as it demands a few `.env` configuration. This project does not contain any private key.
