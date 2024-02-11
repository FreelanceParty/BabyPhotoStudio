$(document).ready(function () {
    const
        $content = $('#content'),
        $header = $('#header'),
        $headerTabs = $header.find('.header-tab')
    ;
    $content.load('/views/content/home.html');
    $headerTabs.on('click', function () {
        switch ($(this)[0].id) {
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
            case 'contacts-tab':
                $content.load('/views/content/contacts.html')
                break;
        }
    });
});