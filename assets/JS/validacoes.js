$(function () {
    $('#Login').submit(function () {
        var obj = this;
        var form = $(obj);
        var dados = new FormData(obj);
        $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            data: dados,
            processData: false,
            cache: false,
            contentType: false,
            success: function (data) {
                if (data == "ErroEmail") {
                    var titulo = document.getElementById("user");
                    titulo.className = "input-field invalid";
                    var exibirErro = document.getElementById("userErro");
                    exibirErro.className = "alert";
                    titulo.focus();

                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.3rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Nome Invalido!',
                    })
                }
                else {
                    var titulo = document.getElementById("user");
                    titulo.className = "input-field";
                    var exibirErro = document.getElementById("userErro");
                    exibirErro.className = "d-none";
                }
                if (data == "ErroSenha") {
                    var titulo = document.getElementById("pass");
                    titulo.className = "input-field invalid";
                    var exibirErro = document.getElementById("passErro");
                    exibirErro.className = "alert";
                    titulo.focus();

                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Senha Invalida!',
                    })
                }
                else {
                    var titulo = document.getElementById("pass");
                    titulo.className = "input-field";
                    var exibirErro = document.getElementById("passErro");
                    exibirErro.className = "d-none alert";
                }
                if (data == "Erro Usuario!") {

                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Cargo não é Valido!',
                    })

                }


                if (data == "FalhaLogin!") {
                    var titulo = document.getElementById("verLogin");
                    titulo.className = "alert";
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Usuario não encontrado!',
                    })
                }
                else {
                    var titulo = document.getElementById("verLogin");
                    titulo.className = "d-none alert";
                }
                if (data == "NãoAtivo") {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Usuario Desativado!',
                    })
                }
                if (data == "SucessoLogin") {
                    window.location.replace("TelaHome")
                }
                // if (data == "ReloadIMG") {
                //     window.location.href = "../"
                // }
                // if (data == "SucessoADM") {
                //     window.location.href = "../View/View_adm.php";
                // }
                // if (data == "SucessoFunc") {
                //     window.location.href = "../View/view_funcionario.php";
                // }
            },//success
        });//ajax
        return false;
    });//function de dentro
});//function de fora

//**
//AJAX REGISTER
//**

$(function () {
    $('#Register').submit(function () {
        var obj = this;
        var form = $(obj);
        var dados = new FormData(obj);
        $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            data: dados,
            processData: false,
            cache: false,
            contentType: false,
            success: function (data) {
                console.log(data);
                if (data == "ErroNome") {
                    Register();
                    var titulo = document.getElementById("Name");
                    titulo.className = "input-field invalid";
                    var titulo = document.getElementById("CadName");
                    titulo.className = "alert";

                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Nome Invalido!',
                    })
                }
                else {
                    var titulo = document.getElementById("Name");
                    titulo.className = "input-field";
                    var titulo = document.getElementById("CadName");
                    titulo.className = "alert d-none";
                }
                if (data == "ErroEmail") {
                    var titulo = document.getElementById("Mail_Cad");
                    titulo.className = "input-field";
                    var titulo = document.getElementById("CadEmailCadastrado");
                    titulo.className = "alert d-none";

                    Register();
                    var titulo = document.getElementById("Mail_Cad");
                    titulo.className = "input-field invalid";
                    var titulo = document.getElementById("CadEmail");
                    titulo.className = "alert";

                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'E-mail Invalido!',
                    })
                }
                else if (data == "ErroEmailCadastrado") {


                    var titulo = document.getElementById("Mail_Cad");
                    titulo.className = "input-field";
                    var titulo = document.getElementById("CadEmail");
                    titulo.className = "alert d-none";

                    Register();
                    var titulo = document.getElementById("Mail_Cad");
                    titulo.className = "input-field invalid";
                    var titulo = document.getElementById("CadEmailCadastrado");
                    titulo.className = "alert";

                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Email já Cadastrado!',
                    })

                    // var titulo = document.getElementById("Mail_Cad");
                    // titulo.className = "input-field";
                    // var titulo = document.getElementById("CadEmail");
                    // titulo.className = "alert d-none";
                }
                else {
                    var titulo = document.getElementById("Mail_Cad");
                    titulo.className = "input-field";
                    var titulo = document.getElementById("CadEmail");
                    titulo.className = "alert d-none";

                    var titulo = document.getElementById("Mail_Cad");
                    titulo.className = "input-field";
                    var titulo = document.getElementById("CadEmailCadastrado");
                    titulo.className = "alert d-none";
                }
                if (data == "ErroSenhacad") {
                    Register();
                    var titulo = document.getElementById("CadPass");
                    titulo.className = "input-field invalid";
                    var titulo = document.getElementById("Cadsenha");
                    titulo.className = "alert";

                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Senha Invalida!',
                    })
                }
                else {
                    var titulo = document.getElementById("CadPass");
                    titulo.className = "input-field";
                    var titulo = document.getElementById("Cadsenha");
                    titulo.className = "alert d-none";
                }
                if (data == "ErroConfSenha") {
                    Register();
                    var titulo = document.querySelector('#CadCpPass');
                    titulo.className = "input-field invalid";
                    var titulo = document.querySelector("#CadConfirm");
                    titulo.className = "alert";

                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Confirme a Senha!',
                    })
                }
                else {
                    var titulo = document.querySelector('#CadCpPass');
                    titulo.className = "input-field";
                    var titulo = document.querySelector('#CadConfirm')
                    titulo.className = "alert d-none";
                }
                if (data == "SenhasDiferentes") {
                    Register();
                    var titulo = document.querySelector('#CadCpPass');
                    titulo.className = "input-field invalid";
                    var titulo = document.querySelector("#CadConfirm2");
                    titulo.className = "alert";
                    // Campo 2
                    var titulo = document.querySelector("#CadPass");
                    titulo.className = "input-field invalid";

                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Senhas não conferem!',
                    })
                }
                else if (data != "ErroConfSenha" && data != "ErroSenhacad") {
                    var titulo = document.querySelector('#CadCpPass');
                    titulo.className = "input-field";
                    var titulo = document.querySelector('#CadConfirm2')
                    titulo.className = "alert d-none";

                    var titulo = document.querySelector("#CadPass");
                    titulo.className = "input-field";
                }
                if (data == "ErroNick") {
                    var titulo = document.querySelector('#cadUsername');
                    titulo.className = "input-field invalid";
                    var titulo = document.querySelector('#CadNick');
                    titulo.className = "alert";

                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Nickname Invalido!',
                    })
                }
                else {
                    var titulo = document.querySelector('#cadUsername');
                    titulo.className = "input-field";
                    var titulo = document.querySelector('#CadNick');
                    titulo.className = "alert d-none";
                }
                if (data == "ErroNickCadastrado") {
                    var titulo = document.querySelector('#cadUsername');
                    titulo.className = "input-field invalid";
                    var titulo = document.querySelector('#CadNickCadastrado');
                    titulo.className = "alert";

                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Nickname já Cadastrado!',
                    })
                }
                else if (data != "ErroNick") {
                    var titulo = document.querySelector('#cadUsername');
                    titulo.className = "input-field";
                    var titulo = document.querySelector('#CadNickCadastrado');
                    titulo.className = "alert d-none";
                }
                if (data == "ErroCPf") {
                    var titulo = document.getElementById("CadCpfCadastrado");
                    titulo.className = "alert d-none";
                    var titulo = document.getElementById("cadCPF");
                    titulo.className = "input-field invalid";
                    var titulo = document.getElementById("CadCpfmsg");
                    titulo.className = "alert";

                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'CPF Invalido!',
                    })
                }
                else {
                    var titulo = document.getElementById("cadCPF");
                    titulo.className = "input-field";
                    var titulo = document.getElementById("CadCpfmsg");
                    titulo.className = "alert d-none";
                }
                if (data == "ErroCpfCadastrado") {
                    var titulo = document.getElementById("cadCPF");
                    titulo.className = "input-field invalid";
                    var titulo = document.getElementById("CadCpfCadastrado");
                    titulo.className = "alert";

                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'CPF já Cadastrado!',
                    })
                }
                else if (data != "ErroCPf") {
                    var titulo = document.getElementById("cadCPF");
                    titulo.className = "input-field";
                    var titulo = document.getElementById("CadCpfCadastrado");
                    titulo.className = "alert d-none";
                }
                if (data == "ErroTell") {
                    var titulo = document.getElementById("Cadtell");
                    titulo.className = "input-field invalid";
                    var titulo = document.getElementById("Cadtelefone");
                    titulo.className = "alert";

                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Telefone Invalido!',
                    })
                }
                else {
                    var titulo = document.getElementById("Cadtell");
                    titulo.className = "input-field";
                    var titulo = document.getElementById("Cadtelefone");
                    titulo.className = "alert d-none";
                }
                if (data == "ClienteCadastrado") {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'success',
                        title: 'Cadastro Realizado!',
                    })
                    Limpar();
                    Cadastrado();
                }
                if (data == "FalhaCadastrado") {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Ocoreu um Erro!',
                    })
                }


            },//success
        });//ajax
        return false;
    });//function de dentro
});//function de fora

$(function () {
    $('#AlterUser').submit(function () {
        var obj = this;
        var form = $(obj);
        var dados = new FormData(obj);
        $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            data: dados,
            processData: false,
            cache: false,
            contentType: false,
            success: function (data) {
                console.log(data);
                if (data == "ErroEmailCadastrado") {
                    var titulo = document.getElementById("EmailPF");
                    titulo.className = "input-field invalid mt-3 col-5";

                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Email Já Cadastrado!',
                    })

                }
                else {
                    var titulo = document.getElementById("EmailPF");
                    titulo.className = "input-field mt-3 col-5";
                }
                if (data == "ErroNickCadastrado") {
                    var titulo = document.getElementById("NickPF");
                    titulo.className = "input-field invalid mt-3 col-5 ml-3";

                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Nickname Já Cadastrado!',
                    })

                }
                else {
                    var titulo = document.getElementById("NickPF");
                    titulo.className = "input-field mt-3 col-5 ml-3";
                }
                if (data == "ErroSenhasDiferentes") {
                    var titulo = document.getElementById("senhaPF");
                    titulo.className = "input-field invalid mt-3 col-5";
                    var titulo = document.getElementById("confsenhaPF");
                    titulo.className = "input-field invalid mt-3 mb-5 col-5 ml-3";
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Senhas não Conferem!',
                    })

                }
                else {
                    var titulo = document.getElementById("senhaPF");
                    titulo.className = "input-field mt-3 col-5";
                    var titulo = document.getElementById("confsenhaPF");
                    titulo.className = "input-field mt-3 mb-5 col-5 ml-3";
                }
                if (data == "SucessoAlteracao") {

                    window.location.reload()

                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'success',
                        title: 'Alteração Realizada!',
                    })

                }
                if (data == "ErroAlteracao") {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Falha Alteração!',
                    })
                }

            },//success
        });//ajax
        return false;
    });//function de dentro
});//function de fora


$(function () {
    $('#FormProduct').submit(function () {
        var obj = this;
        var form = $(obj);
        var dados = new FormData(obj);
        $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            data: dados,
            processData: false,
            cache: false,
            contentType: false,
            success: function (data) {

                if (data == "errornomevazio") {
                    var titulo = document.getElementById("NomePD");
                    titulo.className = "input-field invalid mt-4 col-5";
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Nome Vazio!',
                    })
                }
                else {
                    var titulo = document.getElementById("NomePD");
                    titulo.className = "input-field mt-4 col-5";
                }
                if (data == "errorcodigovazio") {
                    var titulo = document.getElementById("CodigoPF");
                    titulo.className = "input-field invalid mt-4 ml-3 col-5";
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Codigo Vazio!',
                    })
                }
                else {
                    var titulo = document.getElementById("CodigoPF");
                    titulo.className = "input-field mt-4 ml-3 col-5";
                }
                if (data == "errorprecovazio") {
                    var titulo = document.getElementById("PrecoPD");
                    titulo.className = "input-field invalid mt-5 col-5";
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Preço Vazio!',
                    })
                }
                else {
                    var titulo = document.getElementById("PrecoPD");
                    titulo.className = "input-field mt-5 col-5";
                }
                if (data == "errorfotovazio") {
                    var titulo = document.getElementById("image_pd");
                    titulo.className = "invalidImage contProduct";
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Foto Vazia!',
                    })

                }
                else {
                    var titulo = document.getElementById("image_pd");
                    titulo.className = "contProduct";
                }
                if (data == "errordescircaovazio") {
                    var titulo = document.getElementById("DescricaoPD");
                    titulo.className = "input-field invalid mt-5 col-5 mb-5 ml-3";
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Descrição Vazia!',
                    })

                }
                else {
                    var titulo = document.getElementById("DescricaoPD");
                    titulo.className = "input-field mt-5 col-5 mb-5 ml-3";
                }
                if (data == "errordata_estoquevazio") {
                    var titulo = document.getElementById("DataPF");
                    titulo.className = "input-field invalid mt-5 col-5";
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Data Vazio!',
                    })
                }
                else {
                    var titulo = document.getElementById("DataPF");
                    titulo.className = "input-field mt-5 col-5";
                }
                if (data == "errorquantidadevazio") {
                    var titulo = document.getElementById("QuantidadePD");
                    titulo.className = "input-field mt-5 col-5 ml-3 invalid";
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Quantidade Vazia!',
                    })
                }
                else {
                    var titulo = document.getElementById("QuantidadePD");
                    titulo.className = "input-field mt-5 col-5 ml-3";
                }
                if (data == "errocodigojaexistem") {
                    var titulo = document.getElementById("CodigoPF");
                    titulo.className = "input-field mt-4 col-5 ml-3 invalid";
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Codigo Já Cadastrado!',
                    })
                }
                else if (data != "errorcodigovazio") {
                    var titulo = document.getElementById("CodigoPF");
                    titulo.className = "input-field mt-4 col-5 ml-3";
                }
                if (data == "errorprecoinvalido") {
                    var titulo = document.getElementById("PrecoPD");
                    titulo.className = "input-field mt-5 col-5 invalid";
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Preço Invalido!',
                    })

                }
                else if (data != "errorprecovazio") {

                    var titulo = document.getElementById("PrecoPD");
                    titulo.className = "input-field mt-5 col-5";
                }
                if (data == "errorquantidadeinvalida") {
                    var titulo = document.getElementById("QuantidadePD");
                    titulo.className = "input-field mt-5 col-5 invalid";
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Quantidade invalida!',
                    })

                }
                else if (data != "errorquantidadevazio") {
                    var titulo = document.getElementById("QuantidadePD");
                    titulo.className = "input-field mt-5 col-5";
                }

                if (data == "ProdutoCadastrado") {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'success',
                        title: 'Produto Cadastrado!',
                    })
                    LimparDados();
                }

                function LimparDados() {
                    var campos = document.querySelectorAll('#FormProduct input');
                    for (campo of campos) {
                        campo.value = '';
                    }
                    var img = document.querySelector('#image_pd');
                    img.src = "http://localhost/LojinhaEtec/assets/IMG/product.png"
                }

                if (data == "erroCadastrado") {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Erro ao Cadastrar!',
                    })

                }

            },//success
        });//ajax
        return false;
    });//function de dentro
});//function de fora

// BUSCAR PRODUTO

$(function () {
    $('#CadVenda').submit(function () {
        var obj = this;
        var form = $(obj);
        var dados = new FormData(obj);
        $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            data: dados,
            processData: false,
            cache: false,
            contentType: false,
            success: function (data) {

                if (data === "errocodigonaoencontrado") {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Produto não encontrado!',
                    })
                }
                else {
                    const dados = JSON.parse(data);
                    const ElementImg = document.querySelector('#image_pd');
                    const ElementInputs = {
                        "nome": document.querySelector('#NomeComp'),
                        "precoUn": document.querySelector('#PrecoUnidade'),
                        "quantidade": document.querySelector('#QuantidadeComp'),
                        "data": document.querySelector('#DataComp'),
                        "precoTotal": document.querySelector('#PrecoTotal'),
                        "cpf": document.querySelector('#CPFComp')
                    }
                    ElementImg.src = "http://localhost/LojinhaEtec/assets/IMG/Produtos/" + dados.foto.toString();
                    ElementInputs.nome.value = dados.nome
                    ElementInputs.precoUn.value = dados.preco;
                    ElementInputs.precoTotal.value = dados.preco;
                    ElementInputs.quantidade.removeAttribute('disabled');
                    ElementInputs.data.removeAttribute('disabled');
                    ElementInputs.cpf.removeAttribute('disabled');
                    ElementInputs.nome.removeAttribute('disabled');
                    ElementInputs.precoUn.removeAttribute('disabled');
                    ElementInputs.precoTotal.removeAttribute('disabled');

                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'success',
                        title: 'Produto Encontrado!',
                    })
                }

            }, //success
        }); //ajax
        return false;
    }); //function de dentro
}); //function de fora

// Cadastrar Venda

$(function () {
    $('#CadCompra').submit(function () {
        var obj = this;
        var form = $(obj);
        var dados = new FormData(obj);
        $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            data: dados,
            processData: false,
            cache: false,
            contentType: false,
            success: function (data) {
                console.log(data);
                if (data === "erroselecaoproduto") {
                    var titulo = document.getElementById("CodigoComp");
                    titulo.className = "col-4 input-field mt-3 invalid";
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Informe o Produto',
                    })
                }
                else {
                    var titulo = document.getElementById("CodigoComp");
                    titulo.className = "col-4 input-field mt-3";
                }

                if (data === "errordata_vendavazio") {
                    var titulo = document.getElementById("DataComp");
                    titulo.className = "input-field mt-5 col-5 invalid";
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Data Vazia',
                    })
                }
                else {
                    var titulo = document.getElementById("DataComp");
                    titulo.className = "input-field mt-5 col-5";
                }

                if (data === "errortotal_vendavazio") {
                    var titulo = document.getElementById("PrecoTotal");
                    titulo.className = "input-field mt-5 col-5 invalid";
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Preço Total Vazio!',
                    })
                }
                else {
                    var titulo = document.getElementById("PrecoTotal");
                    titulo.className = "input-field mt-5 col-5";
                }

                if (data === "errorpreco_unidadevazio") {
                    var titulo = document.getElementById("PrecoUnidade");
                    titulo.className = "input-field mt-5 col-5 invalid";

                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Preço Unidade Vazio!',
                    })
                }
                else {
                    var titulo = document.getElementById("PrecoUnidade");
                    titulo.className = "input-field mt-5 col-5";
                }

                if (data === "errorquantidadevazio") {
                    var titulo = document.getElementById("QuantidadeComp");
                    titulo.className = "input-field mt-5 col-5 invalid";

                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Quantidade Vazia!',
                    })
                }
                else {
                    var titulo = document.getElementById("QuantidadeComp");
                    titulo.className = "input-field mt-5 col-5";
                }

                if (data === "errorfk_id_Produtovazio") {
                    var titulo = document.getElementById("CodigoComp");
                    titulo.className = "col-4 input-field mt-3 invalid";
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Informe o Produto',
                    })
                }
                else if (data !== "erroselecaoproduto") {
                    var titulo = document.getElementById("CodigoComp");
                    titulo.className = "col-4 input-field mt-3";
                }

                if(data === "estoqueinsuficiente"){
                    var titulo = document.getElementById("QuantidadeComp");
                    titulo.className = "input-field mt-5 col-5 invalid";

                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Estoque Insuficiente!',
                    })
                }
                else if(data !== "errorquantidadevazio"){
                    var titulo = document.getElementById("QuantidadeComp");
                    titulo.className = "input-field mt-5 col-5";
                }

                if(data === "erroalterarestoque"){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Erro ao Comprar!',
                    })
                }

                if (data === "sucessovenda") {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'success',
                        title: 'Venda Cadastrada',
                    })

                    var campos = document.querySelectorAll('#CadCompra input');
                    for (campo of campos) {
                        campo.value = '';
                    }
                    var campos = document.querySelectorAll('#CadVenda input');
                    for (campo of campos) {
                        campo.value = '';
                    }
                    const imgElement = document.querySelector('#image_pd');
                    imgElement.src = "http://localhost/LojinhaEtec/assets/IMG/product.png"

                    const ElementsInputs = {
                        "nome": document.querySelector('#NomeComp'),
                        "precoUn": document.querySelector('#PrecoUnidade'),
                        "quantidade": document.querySelector('#QuantidadeComp'),
                        "data": document.querySelector('#DataComp'),
                        "precoTotal": document.querySelector('#PrecoTotal'),
                        "cpf": document.querySelector('#CPFComp')
                    }

                    ElementsInputs.nome.setAttribute('disabled', true);
                    ElementsInputs.precoUn.setAttribute('disabled', true);
                    ElementsInputs.quantidade.setAttribute('disabled', true);
                    ElementsInputs.data.setAttribute('disabled', true);
                    ElementsInputs.precoTotal.setAttribute('disabled', true);
                    ElementsInputs.cpf.setAttribute('disabled', true);
                }

            }, //success
        }); //ajax
        return false;
    }); //function de dentro
}); //function de fora

$(function () {
    $('#BuscarPd').submit(function () {
        var obj = this;
        var form = $(obj);
        var dados = new FormData(obj);
        $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            data: dados,
            processData: false,
            cache: false,
            contentType: false,
            success: function (data) {
                console.log(data);
                if (data === "errocodigonaoencontrado" || data === "errocodigovazio") {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Produto não encontrado!',
                    })
                }
                else {
                    const dados = JSON.parse(data);
                    console.log(dados);
                    const ElementImg = document.querySelector('#image_pd');
                    const ElementInputs = {
                        "nome": document.querySelector('#NomePD'),
                        "button": document.querySelector('#button-alt'),
                        "codigo": document.querySelector('#CodigoPF'),
                        "preco": document.querySelector('#PrecoPD'),
                        "descricao": document.querySelector('#DescricaoPD'),
                    }
                    ElementImg.src = "http://localhost/LojinhaEtec/assets/IMG/Produtos/" + dados.foto.toString();
                    ElementInputs.nome.value = dados.nome
                    ElementInputs.preco.value = dados.preco;
                    ElementInputs.codigo.value = dados.codigo_Pd;
                    ElementInputs.descricao.value = dados.descircao;

                    ElementInputs.nome.removeAttribute('disabled');
                    ElementInputs.preco.removeAttribute('disabled');
                    ElementInputs.descricao.removeAttribute('disabled');
                    ElementInputs.button.removeAttribute('disabled');

                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'success',
                        title: 'Produto Encontrado!',
                    })
                }

            }, //success
        }); //ajax
        return false;
    }); //function de dentro
}); //function de fora
$(function () {
    $('#AltPd').submit(function () {
        var obj = this;
        var form = $(obj);
        var dados = new FormData(obj);
        $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            data: dados,
            processData: false,
            cache: false,
            contentType: false,
            success: function (data) {
                console.log(data);
                if(data === "errornomevazio"){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Informe o Nome!',
                    })
                }
                if(data === "errorprecovazio"){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Informe o Preco!',
                    })
                }
                if(data === "errordescircaovazio"){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Informe a Descrição!',
                    })
                }
                if(data === "errorprecoinvalido"){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Preço Inválido',
                    })
                }
                if(data === "errocodigovazio"){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Busque o Produto!',
                    })
                }
                if(data === "success"){
                    var campos = document.querySelectorAll('#AltPd input');
                    const imgElement = document.querySelector('#image_pd');
                    imgElement.src = "http://localhost/LojinhaEtec/assets/IMG/product.png"
                    for (campo of campos) {
                        campo.value = '';
                        campo.setAttribute('disabled', true)
                    }

                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'success',
                        title: 'Produto Alterado!',
                    })
                }

            }, //success
        }); //ajax
        return false;
    }); //function de dentro
}); //function de fora
$(function () {
    $('#Bd').submit(function () {
        var obj = this;
        var form = $(obj);
        var dados = new FormData(obj);
        $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            data: dados,
            processData: false,
            cache: false,
            contentType: false,
            success: function (data) {
                console.log(data);
                if (data === "errocodigonaoencontrado" || data === "errocodigovazio") {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Produto não encontrado!',
                    })
                }
                else {
                    const dados = JSON.parse(data);
                    console.log(dados);
                    const ElementImg = document.querySelector('#image_pd');
                    const ElementInputs = {
                        "dt_estoque": document.querySelector('#DataPF'),
                        "quantidade": document.querySelector('#QuantidadePD'),
                        "id_estoque": document.querySelector('#id_estoque'),
                        "button": document.querySelector('#buttonAlt'),
                    }
                    ElementImg.src = "http://localhost/LojinhaEtec/assets/IMG/Produtos/" + dados.foto.toString();

                    ElementInputs.dt_estoque.value = dados.data_estoque;
                    ElementInputs.quantidade.value = dados.quantidade;
                    ElementInputs.id_estoque.value = dados.id_Estoque;

                    ElementInputs.dt_estoque.removeAttribute('disabled');
                    ElementInputs.quantidade.removeAttribute('disabled');
                    ElementInputs.button.removeAttribute('disabled');

                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'success',
                        title: 'Produto Encontrado!',
                    })
                }

            }, //success
        }); //ajax
        return false;
    }); //function de dentro
}); //function de fora
$(function () {
    $('#AltEstoque').submit(function () {
        var obj = this;
        var form = $(obj);
        var dados = new FormData(obj);
        $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            data: dados,
            processData: false,
            cache: false,
            contentType: false,
            success: function (data) {
                if(data === "erroquantidadevazio"){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Informe a Quantidade!',
                    })
                }
                if(data === "errodata_estoquevazio"){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Informe a Data!',
                    })
                }
                if(data === "errocodigovazio"){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'error',
                        title: 'Busque o Produto!',
                    })
                }
                if(data === "success"){
                    var campos = document.querySelectorAll('#AltEstoque input');
                    const imgElement = document.querySelector('#image_pd');
                    imgElement.src = "http://localhost/LojinhaEtec/assets/IMG/product.png"
                    for (campo of campos) {
                        campo.value = '';
                        campo.setAttribute('disabled', true)
                    }

                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center-end',
                        background: '#fff',
                        showConfirmButton: false,
                        width: '420px',
                        padding: '1.2rem',
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })
                    Toast.fire({
                        customClass: {
                            content: 'CustomColor',
                            title: 'CustomText',
                            popup: 'CustomColor',
                            footer: 'CustomText'
                        },
                        icon: 'success',
                        title: 'Estoque Alterado!',
                    })
                }
            }, //success
        }); //ajax
        return false;
    }); //function de dentro
}); //function de fora