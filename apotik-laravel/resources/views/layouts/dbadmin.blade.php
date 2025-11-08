<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Inventori</title>
    <link rel="icon" href="{{ asset('asset/favicon.png') }}" type="image/png">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>
<body>
    <div class="d-flex">

        <!-- Sidebar -->
        <div class="sidebar p-3">
            <div class="logo-container text-center mb-4">
                <img src="{{ asset('asset/kiapotik.png') }}" alt="Logo Admin" class="logo-img">
            </div>
            <ul class="nav flex-column">
                <li class="nav-item"><a href="#" class="nav-link">Dashboard</a></li>
                <li class="nav-item"><a href="{{ url('/inventori') }}" class="nav-link active">Inventori</a></li>
                <li class="nav-item"><a href="{{ url('/') }}" class="nav-link text-danger">Logout</a></li>
            </ul>
        </div>

        <!-- Main wrapper -->
        <div class="main-wrapper flex-grow-1">
            
            <!-- Header -->
            <header class="admin-header">
                <div class="header-title">
                    <h5>Inventori Produk</h5>
                </div>
                <div class="header-user">
                    <span>👤 {{ Auth::user()->name ?? 'Admin' }}</span>
                </div>
            </header>

            <!-- Konten utama -->
            <main class="main-content p-4">
                @yield('content')
            </main>

        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    @stack('scripts')
</body>
</html>
