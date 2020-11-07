<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quitanda</title>
</head>

<body>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>BeHealthy</title>
        <script src="<?php echo base_url('assets/JS/jquery.min.js') ?>"></script>
        <script src="<?php echo base_url('assets/Bootstrap/bootstrap.min.js') ?>"></script>
        <script src="<?php echo base_url('assets/JS/croppie.js') ?>"></script>
        <link rel="stylesheet" href="<?php echo base_url('assets/Bootstrap/bootstrap.min.css') ?>" />
        <link rel="stylesheet" href="<?php echo base_url('assets/CSS/croppie.css') ?>">
        <link rel="stylesheet" href="<?php echo base_url('assets/CSS/style_home.css') ?>">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css">
        <link rel="stylesheet" href="<?php echo base_url('assets/Bootstrap/css/bootstrap.css') ?>">
        <style>
            .Logout_btn {
                text-decoration: none;
            }
        </style>
    </head>

    <body class="hero">
        <input type="checkbox" id="check">
        <header>
            <div class="left_area">
                <h3><span>Loja</span>Tec</h3>
            </div>
            <div class="right_area">
                <?php
                $this->load->library('session');
                if (isset($this->session->login)) {
                    echo "<a href=" . base_url('index.php/BLL_Usuarios/Logout') . " class='logout_btn text-decoration-none'>Logout</a>";
                } else {
                    echo "<a href=" . base_url('index.php/BLL_Usuarios/index') . " class='logout_btn text-decoration-none'>Login</a>";
                }
                ?>
            </div>
        </header>
        <div class="sidebar">
            <center>
            <?php if(isset($this->session->login) && $this->session->login == true){
                echo "<label for='upload_image'>";
            }?>
                    <img id="Default" style="cursor:pointer" src="<?php if (isset($this->session->foto)) {
                                                echo base_url('assets/IMG/Clientes/' . $this->session->foto);
                                            } else {
                                                echo base_url('assets/IMG/Clientes/default_user.png');
                                            }  ?>" class="profile_image">
                    <?php
                    if (isset($this->session->login) && $this->session->login == true) {
                        echo "<img src=" . base_url('assets/IMG/alt_img.png') . " class='Cam_IMG' ></label>";
                    }
                    ?>

                    <h4 id="Nameside" class="textCSS"><?php if (isset($this->session->nome)) {
                                            echo $this->session->nome;
                                        } ?></h4>
            </center>
            <Div class="Itens-Side">
                <?php

                if (isset($this->session->cargo) && $this->session->cargo == "Admin") {
                    echo "
                                <a href='".base_url('index.php/BLL_Usuarios/TelaHome') ."' class='text-decoration-none'><i class='fas fa-home'></i><span>Inicio</span></a>
                                <a href='".base_url('index.php/BLL_Usuarios/Perfil') ."' class='text-decoration-none'><i class='fas fa-users-cog'></i><span>Perfil</span></a>
                                <a href='". base_url('index.php/BLL_Produtos/') ."' class='text-decoration-none'><i class='fas fa-dolly'></i><span>Cadastrar Produto</span></a>
                                <a href='". base_url('index.php/BLL_Produtos/Estoque') ."' class='text-decoration-none'><i class='fas fa-box-open'></i><span>Estoque</span></a>
                                <a href='#' class='text-decoration-none'><i class='far fa-edit'></i><span>Alterar Produto</span></a>
                                <a href='#' class='text-decoration-none'><i class='fas fa-tools'></i><span>Alterar Estoque</span></a>
                                <a href='". base_url('index.php/BLL_Vendas/index') ."' class='text-decoration-none'><i class='fas fa-cart-plus'></i><span>Vendas</span></a>
                                <a href='#' class='text-decoration-none'><i class='far fa-chart-bar'></i><span>Relatorio Produtos</span></a>
                                <a href='#' class='text-decoration-none'><i class='fas fa-chart-line'></i><span>Relatorio de Venda</span></a>
                                ";
                } else if (isset($this->session->cargo) && $this->session->cargo == "Cliente") {
                    echo "
                            <a href='".base_url('index.php/BLL_Usuarios/TelaHome') ."' class='text-decoration-none'><i class='fas fa-home'></i><span>Inicio</span></a>
                            <a href='".base_url('index.php/BLL_Usuarios/Perfil') ."' class='text-decoration-none'><i class='fas fa-users-cog'></i><span>Perfil</span></a>
                            ";
                } else {
                    echo "
                            <a href='#' class='text-decoration-none'><i class='fas fa-home'></i><span>Inicio</span></a>
                            ";
                }
                ?>
            </Div>
        </div>

        <div class="content">
            <label for="check">
                <i class="fas fa-bars" class="space" id="sidebar_btn"></i>
            </label>
            <form id="ImageFormElement" action="<?php echo base_url('index.php/Welcome/UploadImage') ?>" enctype="multipart/form-data" method="post">
                <input type="file" name="upload_image" id="upload_image" />
            </form>
            <center>
                
            </center>
        
        <!-- <script src="<?php echo base_url('assets/JS/jquery/dist/jquery.js') ?>"></script> -->
        <!-- <script src="JS/validacoes.js"></script> -->
        <script src="<?php echo base_url('assets/JS/UploadImage.js') ?>"></script>
        <script src="<?php echo base_url('assets/Bootstrap/js/bootstrap.js') ?>"></script>
    </body>

    </html>


    <!-- MODAL DE UPLOAD E AJUSTE DE IMAGEM - CROP.JS -->

    <div id="uploadimageModal" class="modal" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Redimensionar Imagem e Carregar</h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-8 text-center">
                            <div id="image_demo" style="width:350px; margin-top:30px"></div>
                        </div>
                        <div class="col-md-4" style="padding-top:30px;">
                            <br />
                            <br />
                            <br />
                            <button id="ButtonSide" class="btn btn-success crop_image">Carregar</button>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
                </div>
            </div>
        </div>
    </div>
</body>

</html>