# DCMS Mono-Repo

**DCMS (Delivery & Content Management System)** - A full-stack application with Laravel backend and React frontend in a monorepo setup.

## 🏗️ Tech Stack

| Stack | Technology |
|-------|------------|
| **Backend** | Laravel 13 API |
| **Frontend** | React, TypeScript, Tailwind CSS, shadcn/ui |
| **Database** | PostgreSQL / MySQL |
| **Data Fetching** | Axios + TanStack Query |

## 📁 Project Structure

```
DCMS/
├── dcmsback/                 # Laravel 13 Backend
│   ├── app/
│   ├── database/
│   ├── routes/
│   ├── composer.json
│   └── ...
├── dcmsfront/                # React Frontend
│   ├── src/
│   ├── package.json
│   └── ...
├── .gitignore
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- PHP >= 8.2
- Composer
- Node.js >= 18
- PostgreSQL / MySQL
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/DCMS.git
cd DCMS
```

### 2. Backend Setup (Laravel)
```bash
cd dcmsback
composer install
cp .env.example .env
php artisan key:generate
```

**Configure your database** in `.env`:
```env
# PostgreSQL Example
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=dcms
DB_USERNAME=postgres
DB_PASSWORD=secret

# MySQL Example
# DB_CONNECTION=mysql
# DB_HOST=127.0.0.1
# DB_PORT=3306
# DB_DATABASE=dcms
# DB_USERNAME=root
# DB_PASSWORD=
```

**Run migrations & start server:**
```bash
php artisan migrate
php artisan serve
```
Backend running at: `http://localhost:8000`

### 3. Frontend Setup (React)
```bash
cd dcmsfront
npm install
cp .env.example .env
```

**Configure API URL** in `.env`:
```env
VITE_API_URL=http://localhost:8000/api
```

**Start development server:**
```bash
npm run dev
```
Frontend running at: `http://localhost:5173`

## 🔄 Running Both Projects Simultaneously

Install `concurrently` in the frontend directory:
```bash
cd dcmsfront
npm install concurrently --save-dev
```

Add this script to `dcmsfront/package.json`:
```json
{
  "scripts": {
    "dev:all": "concurrently \"cd ../dcmsback && php artisan serve\" \"npm run dev\""
  }
}
```

Then run:
```bash
npm run dev:all
```

## 📝 Development Workflow

### Backend Development
- **Routes:** `dcmsback/routes/`
- **Controllers:** `dcmsback/app/Http/Controllers/`
- **Models:** `dcmsback/app/Models/`
- **Migrations:** `dcmsback/database/migrations/`

### Frontend Development
- **Components:** `dcmsfront/src/components/`
- **Pages:** `dcmsfront/src/pages/`
- **API Calls:** `dcmsfront/src/api/`
- **Hooks:** `dcmsfront/src/hooks/`

### Git Workflow
Commit from the root directory:
```bash
git add .
git commit -m "feat: your descriptive message"
git push origin main
```

## 🐛 Common Issues

| Issue | Solution |
|-------|----------|
| `php artisan` not found | Make sure you're in `dcmsback/` directory |
| CORS errors | Check that `VITE_API_URL` matches your backend URL |
| Database connection failed | Verify credentials in `.env` and ensure database server is running |
| Frontend can't connect | Ensure backend is running on port 8000 |

## 📚 Useful Commands

### Backend
```bash
php artisan migrate:fresh --seed    # Reset database with seeders
php artisan make:model ModelName    # Create a new model
php artisan make:controller APIController  # Create a controller
```

### Frontend
```bash
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

## 📄 License
This project is licensed under the MIT License.