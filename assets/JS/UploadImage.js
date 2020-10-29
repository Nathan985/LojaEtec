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

    $('.crop_image').click(function (event) {
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
                    if(imgpf){
                        imgpf.src = Url_Image;
                    }
                    imgmod.src = Url_Image;
                    
                }
            });
        })
    });

});