$(document).ready(function () {
    const
        $content = $('#content'),
        $header = $('#header'),
        $headerTabs = $header.find('.header-tab')
    ;
    $content.load('/views/content/home.html');
    Array.from($headerTabs).forEach(function (tab) {
        tab.addEventListener('click', function () {
            switch (tab.id) {
                case 'main-tab':
                case 'logo':
                    $content.load('/views/content/home.html')
                    break;
                case 'photo-sessions-tab':
                    $content.load('/views/content/photo-sessions.html')
                    break;
                case 'calendar-tab':
                    $content.load('/views/content/calendar.html')
                    break;
                case 'prices-tab':
                    $content.load('/views/content/prices.html')
                    break;
                case 'location-tab':
                    $content.load('/views/content/location.html')
                    break;
                case 'call-me-tab':
                    $content.load('/views/content/contacts.html')
                    break;
            }
        });
    });
});