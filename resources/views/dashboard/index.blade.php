<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">

    <!-- Bootstrap 3.3.7 -->
    <link rel="stylesheet" href="{{ asset('themes/dashboard/bower_components/bootstrap/dist/css/bootstrap.min.css') }}">
    <!-- Select2 -->
    <link rel="stylesheet" href="{{ asset('themes/dashboard/bower_components/select2/dist/css/select2.min.css') }}">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="{{ asset('themes/dashboard/bower_components/font-awesome/css/font-awesome.min.css') }}">
    <!-- Ionicons -->
    <link rel="stylesheet" href="{{ asset('themes/dashboard/bower_components/Ionicons/css/ionicons.min.css') }}">

    <!-- DataTables -->
    <link rel="stylesheet" href="{{ asset('themes/dashboard/bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css') }}">

    <!-- bootstrap wysihtml5 - text editor -->
    <link rel="stylesheet" href="{{ asset('themes/dashboard/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css') }}">

    <!-- bootstrap datepicker -->
    <link rel="stylesheet" href="{{ asset('themes/dashboard/bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css') }}">

    <!-- Ionicons -->
    <link rel="stylesheet" href="{{ asset('themes/dashboard/plugins/iCheck/all.css') }}">
    <!-- Theme style -->
    <link rel="stylesheet" href="{{ asset('themes/dashboard/dist/css/AdminLTE.min.css') }}">
    <!-- AdminLTE Skins. Choose a skin from the css/skins folder instead of downloading all of them to reduce the load. -->
    <link rel="stylesheet" href="{{ asset('themes/dashboard/dist/css/skins/_all-skins.min.css') }}">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <script>
        window.Laravel = {
            csrfToken: "{{ csrf_token() }}"
        };
        window.BaseUrl = "{!! url('/') !!}";
        window.User = {!! auth()->user() !!};
        window.AccessToken = "{!! auth()->user() ? JWTAuth::fromUser(auth()->user()) : null !!}";
    </script>

    <!-- Styles -->
    <link href="{{ asset('themes/dashboard/dist/css/app.css') }}" rel="stylesheet">
</head>
<body class="hold-transition skin-yellow sidebar-mini">
<div id="app">
    <router-view></router-view>
</div>
<!-- Scripts -->
<!-- jQuery 3 -->
<script src="{{ asset('themes/dashboard/bower_components/jquery/dist/jquery.min.js') }}"></script>
<!-- jQuery UI 1.11.4 -->
<script src="{{ asset('themes/dashboard/bower_components/jquery-ui/jquery-ui.min.js') }}"></script>
<!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
<script>
    $.widget.bridge('uibutton', $.ui.button);
</script>
<!-- DataTables -->
<script src="{{ asset('themes/dashboard/bower_components/datatables.net/js/jquery.dataTables.min.js') }}"></script>
<!-- Bootstrap 3.3.7 -->
<script src="{{ asset('themes/dashboard/bower_components/bootstrap/dist/js/bootstrap.min.js') }}"></script>
<!-- Select2 -->
<script src="{{ asset('themes/dashboard/bower_components/select2/dist/js/select2.full.min.js') }}"></script>
<!-- Slimscroll -->
<script src="{{ asset('themes/dashboard/bower_components/jquery-slimscroll/jquery.slimscroll.min.js') }}"></script>
<!-- FastClick -->
<script src="{{ asset('themes/dashboard/bower_components/fastclick/lib/fastclick.js') }}"></script>
<!-- CK Editor -->
<script src="{{ asset('themes/dashboard/bower_components/ckeditor/ckeditor.js') }}"></script>
<!-- Bootstrap WYSIHTML5 -->
<script src="{{ asset('themes/dashboard/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js') }}"></script>
<!-- iCheck 1.0.1 -->
<script src="{{ asset('themes/dashboard/plugins/iCheck/icheck.min.js') }}"></script>
<!-- AdminLTE App -->
<script src="{{ asset('themes/dashboard/dist/js/adminlte.min.js') }}"></script>
<!-- AdminLTE for demo purposes -->
<!-- bootstrap datepicker -->
<script src="{{ asset('themes/dashboard/bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js') }}"></script>
<script src="{{ asset('themes/dashboard/dist/js/demo.js') }}"></script>

<script src="{{ asset('themes/dashboard/dist/js/app.js') }}"></script>
</body>
</html>
