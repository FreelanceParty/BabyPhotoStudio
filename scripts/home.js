$(document).ready(function () {
    // INTERIOR
    const
        $interiors = $('.interiors'),
        $interiorPopup = $interiors.find('#interior-popup'),
        $interiorBlock = $interiors.find('.interior-block'),
        $closeBtnInteriorPopup = $interiorPopup.find('.close'),
        $secondaryPhotos = $interiorPopup.find('img')
    ;

    $interiorBlock.on('click', function () {
        $interiorPopup[0].style.display = "flex";
        $('body').css('overflow-y', 'hidden')
        const topic = $(this).find('input')[0].value;
        $interiorPopup.find('#expandedImg')[0].src = '/resources/pictures/interiors/' + topic + '/' + topic + '-1.jpg';
        $interiorPopup.find('#photo-1')[0].src = '/resources/pictures/interiors/' + topic + '/' + topic + '-1.jpg';
        $interiorPopup.find('#photo-2')[0].src = '/resources/pictures/interiors/' + topic + '/' + topic + '-2.jpg';
        $interiorPopup.find('#photo-3')[0].src = '/resources/pictures/interiors/' + topic + '/' + topic + '-3.jpg';
    });

    $secondaryPhotos.on('click', function () {
        const expandImg = $('#expandedImg')[0];
        expandImg.src = $(this)[0].src;
        expandImg.parentElement.style.display = "block";
    });

    $closeBtnInteriorPopup.on('click', function () {
        $interiorPopup[0].style.display = "none";
        $('body').css('overflow-y', 'auto')
    });

    $(window).on('click', function (event) {
        if (event.target === $interiorPopup[0]) {
            $interiorPopup[0].style.display = "none";
            $('body').css('overflow-y', 'auto')
        } else if (event.target === $studioRentPopup[0]) {
            $studioRentPopup[0].style.display = "none";
            $('body').css('overflow-y', 'auto')
        }
    });

    // PHOTO-SESSIONS
    const
        $photoSessionTypesBlock = $('.photo-session-types'),
        $photoSessionBlocks = $photoSessionTypesBlock.find('.photo-session-block'),
        $content = $('#content')
    ;
    $photoSessionBlocks.on('click', function () {
        const dataToSend = {
            block_id: $(this).attr('value'),
        };
        localStorage.setItem('myData', JSON.stringify(dataToSend));
        $content.load('/views/content/photo-sessions/details.html');

    });
});