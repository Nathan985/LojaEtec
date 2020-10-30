$(document).ready(function () {

    $image_crop = $('#image_demo').croppie({
        enableExif: true,
        viewport: {
            width: 200,
            height: 200,
            type: 'circle' //circle
        },
        boundary: {
            width: 300,
            height: 300
        }
    });

    $('#upload_image').on('change', function () {
        var reader = new FileReader();
        reader.onload = function (event) {
            $image_crop.croppie('bind', {
                url: event.target.result
            }).then(function () {
                console.log('jQuery bind complete');
                Url_Image = event.target.result;
            });
        }
        reader.readAsDataURL(this.files[0]);
        $('#uploadimageModal').modal('show');
    });

    $('#ButtonSide').click(function (event) {
        $image_crop.croppie('result', {
            type: 'canvas',
            size: 'viewport'
        }).then(function (response) {
            $.ajax({
                url: "UploadImage",
                type: "POST",
                data: {
                    "image": response
                },
                success: function (data) {
                    $('#uploadimageModal').modal('hide');
                    $('#uploaded_image').html(data);
                    imgmod = document.querySelector('#Default');
                    imgpf = document.querySelector('#IMGPF');
                    if (imgpf) {
                        imgpf.src = Url_Image;
                    }
                    imgmod.src = Url_Image;

                }
            });
        })
    });
});

//IMAGE PRODUTO
$(document).ready(function () {

    $image_cropPD = $('#image_demo_pd').croppie({
        enableExif: true,
        viewport: {
            width: 200,
            height: 200,
            type: 'square' //circle
        },
        boundary: {
            width: 300,
            height: 300
        }
    });

    $('#Upload_image_pd').on('change', function () {
        var readerPD = new FileReader();
        readerPD.onload = function (event) {
            $image_cropPD.croppie('bind', {
                url: event.target.result
            }).then(function () {
                console.log('jQuery bind complete');
                Url_Image = event.target.result;
            });
        }
        readerPD.readAsDataURL(this.files[0]);
        $('#uploadimageModalPD').modal('show');
    });

    $('#buttonUp').click(function (event) {
        $image_cropPD.croppie('result', {
            type: 'canvas',
            size: 'viewport'
        }).then(function (response) {
            $.ajax({
                url: "Uploadfoto",
                type: "POST",
                data: {
                    "image": response
                },
                success: function (data) {
                    console.log(data);
                    $('#uploadimageModalPD').modal('hide');
                    $('#uploaded_image').html(data);
                    image_pd = document.querySelector('#image_pd');
                    image_pd.src = Url_Image;
                }
            });
        })
    });
});