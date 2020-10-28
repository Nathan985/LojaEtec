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
                url: "index.php/Welcome/UploadImage",
                type: "POST",
                data: {
                    "image": response
                },
                success: function (data) {
                    const ElementFormData = document.querySelector('#upload_image');
                    console.log(ElementFormData);
                    // ElementFormData.value = "";
                    const dataQuery = response;

                    console.log(document.querySelector('#upload_image').value);
                    formElement = document.querySelector('#ImageFormElement');
                    formElement.submit();
                    $('#uploadimageModal').modal('hide');
                    $('#uploaded_image').html(data);
                    // imgmod = document.querySelector('#AlterImg');
                    // imgmod.src = Url_Image;
                    
                }
            });
        })
    });

});