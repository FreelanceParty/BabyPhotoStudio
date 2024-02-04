$(document).ready( function () {
    const
        $photoZone = $('.photo-zones'),
        $photoZonePopup = $photoZone.find('#photo-zone-popup'),
        $photoZoneBlock = $photoZone.find('.photo-zone-block'),
        $closeBtnPhotoZonePopup = $photoZonePopup.find('.close'),
        $secondaryPhotos = $photoZonePopup.find('img')
    ;

    $photoZoneBlock.on('click', function () {
        $photoZonePopup[0].style.display = "block";
        const topic = $(this).find('input')[0].value
        $photoZonePopup.find('#expandedImg')[0].src = '/resources/pictures/interiors/' + topic + '/' + topic + '-1.jpg';
        $photoZonePopup.find('#photo-1')[0].src = '/resources/pictures/interiors/' + topic + '/' + topic + '-1.jpg';
        $photoZonePopup.find('#photo-2')[0].src = '/resources/pictures/interiors/' + topic + '/' + topic + '-2.jpg';
        $photoZonePopup.find('#photo-3')[0].src = '/resources/pictures/interiors/' + topic + '/' + topic + '-3.jpg';
    });

    $secondaryPhotos.on('click', function () {
        const expandImg = $('#expandedImg')[0];
        expandImg.src = $(this)[0].src;
        expandImg.parentElement.style.display = "block";
    });

    $closeBtnPhotoZonePopup.on('click', function () {
        $photoZonePopup[0].style.display = "none";
    });

    $(window).on('click', function (event) {
        if (event.target === $photoZonePopup[0]) {
            $photoZonePopup[0].style.display = "none";
        }
    });
});