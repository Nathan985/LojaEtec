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
                else if(data != "errorcodigovazio"){
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
                else if(data != "errorprecovazio"){

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
                else if(data != "errorquantidadevazio"){
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
                        icon: 'sucess',
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
                        icon: 'sucess',
                        title: 'Erro ao Cadastrar!',
                    })

                }

            },//success
        });//ajax
        return false;
    });//function de dentro
});//function de fora