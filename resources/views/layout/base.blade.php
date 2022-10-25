<?php

use App\Classes\Hook;
use App\Models\UserAttribute;
use App\Services\DateService;
use App\Services\Helper;
use Illuminate\Support\Facades\Auth;

if ( Auth::check() && Auth::user()->attribute instanceof UserAttribute ) {
    $theme  =   Auth::user()->attribute->theme ?: ns()->option->get( 'ns_default_theme', 'light' );
} else {
    $theme  =   ns()->option->get( 'ns_default_theme', 'light' );
}
?>
<!DOCTYPE html>
<html lang="en" class="{{ $theme }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{!! $title ?? __( 'Unamed Page' ) !!}</title>
    @vite([
        'resources/css/grid.css',
        'resources/css/fonts.css',
        'resources/css/animations.scss',
        'resources/css/typography.css',
        'resources/css/app.css',
        'resources/css/' . $theme . '.css'
    ])
    <link rel="stylesheet" href="{{ asset( 'css/line-awesome.css' ) }}">

    @yield( 'layout.base.header' )
    <script>
        /**
         * constant where is registered
         * global custom components
         * @param {Object}
         */
        window.nsExtraComponents     =   new Object;

        /**
         * describe a global NexoPOS object
         * @param {object} ns
         */
        window.ns =   { nsExtraComponents };

        /**
         * store the server date
         * @param {string}
         */
        window.ns.date                     =   {
            current : '{{ app()->make( DateService::class )->toDateTimeString() }}',
            serverDate : '{{ app()->make( DateService::class )->toDateTimeString() }}',
            timeZone: '{{ ns()->option->get( "ns_datetime_timezone" ) }}',
            format: `{{ ns()->option->get( 'ns_datetime_format' ) }}`
        }

        /**
         * define the current language selected by the user or
         * the language that applies to the system by default.
         */
        window.ns.language      =   '{{ app()->getLocale() }}';
        window.ns.langFiles     =   <?php echo json_encode( Hook::filter( 'ns.langFiles', [
            'NexoPOS'   =>  asset( "/lang/" . app()->getLocale() . ".json" ),
        ]));?>
    </script>
    @if ( ns()->isProduction() )
    <!-- Something should be there -->
    @else
        @vite([ 'resources/ts/lang-loader.ts' ])
    @endif
@include( 'common.header-socket' )
</head>
<body>
    @yield( 'layout.base.body' )
    @section( 'layout.base.footer' )
        @include( '../common/footer' )
    @show
</body>
</html>