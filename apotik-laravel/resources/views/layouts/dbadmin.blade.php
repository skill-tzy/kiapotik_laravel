<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard Admin - Inventori</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>
<body>
    <div class="d-flex">
        <!-- Sidebar -->
        <div class="sidebar p-3">
            <h3 class="text-white mb-4">Admin Panel</h3>
            <ul class="nav flex-column">
                <li class="nav-item"><a href="#" class="nav-link">Dashboard</a></li>
                <li class="nav-item"><a href="{{ url('/inventori') }}" class="nav-link active">Inventori</a></li>
                <li class="nav-item"><a href="#" class="nav-link text-danger">Logout</a></li>
            </ul>
        </div>

        <!-- Content -->
        <div class="content flex-grow-1">
            <header class="d-flex justify-content-between align-items-center p-3 border-bottom bg-white">
                <h5 class="mb-0">Inventori Produk</h5>
                <span class="fw-bold text-primary">👤 {{ Auth::user()->name ?? 'Admin' }}</span>
            </header>

            <main class="p-4">
                @yield('content')
            </main>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    @stack('scripts')
</body>
</html>
