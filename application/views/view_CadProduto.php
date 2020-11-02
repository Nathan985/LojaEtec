<?php
defined('BASEPATH') or exit('No direct script access allowed');

$this->load->view('view_sidebar');
if(!isset($this->session->login)){
    redirect(base_url('index.php/BLL_Usuarios'));
}
?>
<!-- <script src="<?php echo base_url('assets/JS/jquery.min.js') ?>"></script>
<script src="<?php echo base_url('assets/Bootstrap/bootstrap.min.js') ?>"></script>
<script src="<?php echo base_url('assets/JS/croppie.js') ?>"></script> -->
<link rel="stylesheet" href="<?php echo base_url('assets/CSS/style.css') ?>">
<!-- <link rel="stylesheet" href="<?php echo base_url('assets/CSS/croppie.css') ?>"> -->
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>

<div class="bannerTec row ml-auto mr-auto styleContainer bg-white col-10">
    <div class="col-12 ml-auto mr-auto mt-5">
        <center>
            <label for="Upload_image_pd">
                <img id="image_pd" class="contProduct" src="<?php echo base_url('assets/IMG/product.png') ?>" alt="">
                <img src="<?php echo base_url('assets/IMG/alt_img.png') ?>" class='Cam_IMG_pd bg-dark'>
                <input type="file" class="inputnone" name="Upload_image_pd" id="Upload_image_pd">
            </label>
        </center>
    </div>
    <div>
        <center>
            <form id="FormProduct" action="<?php echo base_url('index.php/BLL_Produtos/ValidarDados') ?>" method="post">
                <input type="text" class="input-field mt-4 col-5" placeholder="Nome" name="Nome" id="NomePD">
                <input type="text" class="input-field mt-4 col-5 ml-3" placeholder="Codigo" name="Codigo" id="CodigoPF">
                <input type="date" class="input-field mt-5 col-5" name="Data" id="DataPF">
                <input type="number" class="input-field mt-5 col-5 ml-3" placeholder="Quantidade" name="Quantidade" id="QuantidadePD">
                <input type="text" class="input-field mt-5 col-5" placeholder="Preço" name="Preco" id="PrecoPD">
                <input type="text" class="input-field mt-5 col-5 mb-5 ml-3" placeholder="Descrição" name="Descricao" id="DescricaoPD">
                <button type="submit" class="btn-pdt mt-5 mb-5 col-11">Cadastrar</button>
            </form>
        </center>
    </div>
</div>
</div>
<!-- <script src="<?php echo base_url('assets/JS/UploadImage.js') ?>"></script> -->
<!-- MODAL DE UPLOAD E AJUSTE DE IMAGEM - CROP.JS -->

<div id="uploadimageModalPD" class="modal" role="dialog">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Redimensionar Imagem e Carregar</h4>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-md-8 text-center">
                        <div id="image_demo_pd" style="width:350px; margin-top:30px"></div>
                    </div>
                    <div class="col-md-4" style="padding-top:30px;">
                        <br />
                        <br />
                        <br />
                        <button id="buttonUp" class="btn btn-success crop_image">Carregar</button>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
            </div>
        </div>
    </div>
</div>
    <script src="<?php echo base_url('assets/JS/validacoes.js') ?>"></script>
</body>
</html>