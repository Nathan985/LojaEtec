<?php
defined('BASEPATH') or exit('No direct script access allowed');

$this->load->view('view_sidebar');
if (!isset($this->session->login)) {
    redirect(base_url('index.php/BLL_Usuarios'));
}
?>

<link rel="stylesheet" href="<?php echo base_url('assets/CSS/style.css') ?>">
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>

<div class="bannerTec row ml-auto mr-auto styleContainer bg-white col-10">
    <div class="col-12 ml-auto mr-auto mt-5">
        <center>
            <label for="Upload_image_pd">
                <img id="image_pd" class="contProduct" src="<?php echo base_url('assets/IMG/product.png') ?>" alt="">
            </label>
        </center>
    </div>
    <div class="mr-auto ml-auto col-10">
        <center>
        <form id="Bd"  class="mb-5" method="post" action="<?php echo base_url('index.php/BLL_Vendas/BuscarPd') ?>">
                <input type="text" class="input-field mt-4 col-5 ml-3" placeholder="Codigo do Produto" name="CodigoComp" id="CodigoComp">
                <button class="border-0" type="submit"><img class="bg-dark searchImg ml-1 mr-3" src="<?php echo base_url('assets/IMG/search.png') ?>" /></button>
            </form>
            <form id="AltEstoque" action="<?php echo base_url('index.php/BLL_Produtos/AlterarEstoque_Controller') ?>" method="post">
                
                <input type="text" class="input-field mt-5 col-5 d-none" name="id_est" id="id_estoque">
                <input type="date" disabled class="input-field mt-5 col-5" name="Data" id="DataPF">
                <input type="number" disabled class="input-field mt-5 col-5 ml-3" placeholder="Quantidade" name="Quantidade" id="QuantidadePD">
                <button id="buttonAlt" type="submit" disabled class="btn-pdt mt-5 mb-5 col-11">Alterar</button>
            </form>
        </center>
    </div>
</div>
<script src="<?php echo base_url('assets/JS/validacoes.js') ?>"></script>
</div>