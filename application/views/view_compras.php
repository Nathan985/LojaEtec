<?php
defined('BASEPATH') or exit('No direct script access allowed');

$this->load->view('view_sidebar');
if (!isset($this->session->login)) {
    redirect(base_url('index.php/BLL_Usuarios'));
}
?>
<link rel="stylesheet" href="<?php echo base_url('assets/CSS/style.css') ?>">
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>

<div class="bg-white col-10 bannerTec styleContainer row ml-auto mr-auto">
    <h1 class="display-4 col-12 mt-5 text-center">Cadastro de Vendas</h1>
    <div class="row ml-auto mt-4 mr-auto">
        <center>
            <img id="image_pd" class="contProduct mb-3" style="cursor: inherit;" src="<?php echo base_url('assets/IMG/product.png') ?>" alt="">
            <form id="CadVenda" action="<?php echo base_url('index.php/BLL_Vendas/BuscarPd') ?>" method="POST">
                <input type="text" class=" col-4 input-field mt-3 " placeholder="Codigo de Barras" name="CodigoComp" id="CodigoComp">
                <button class="border-0" type="submit"><img class="bg-dark searchImg ml-1 mr-3" src="<?php echo base_url('assets/IMG/search.png') ?>" /></button>
            </form>
            <form id="CadCompra" action="<?php echo base_url('index.php/BLL_Vendas/CadCompra') ?>" method="POST">
                <input type="text" class="input-field mt-5 col-5 ml-3" disabled placeholder="Nome do Produto" name="NomeComp" id="NomeComp">
                <input type="date" class="input-field mt-5 col-5" disabled name="DataComp" id="DataComp">
                <input type="number" onChange="Calcular()" class="input-field mt-5 col-5 ml-3" disabled placeholder="Quantidade" name="QuantidadeComp" id="QuantidadeComp">
                <input type="text" disabled class="input-field mt-5 col-5" name="PrecoComp" placeholder="PrecoUn" id="PrecoUnidade">
                <input type="text" disabled class="input-field mt-5 col-5 ml-3" name="CPFComp" placeholder="CPF" id="CPFComp">
                <input type="text" disabled class="input-field mt-5 col-5" placeholder="Preço Total" name="PrecoTotalComp" id="PrecoTotal">
                <button type="submit" class="btn-pdt mt-5 mb-5 col-11">Comprar</button>
            </form>
        </center>
    </div>
    <script src="<?php echo base_url("assets/JS/validacoes.js");?>"></script>
</div>
</div>

<script>
    function Calcular() {
        const ElementsInput = {
            "quantidade": document.querySelector('#QuantidadeComp'),
            "precoUn": document.querySelector('#PrecoUnidade'),
            "PrecoTotal": document.querySelector('#PrecoTotal')
        }
        const result = parseInt(ElementsInput.quantidade.value) * parseInt(ElementsInput.precoUn.value);
        ElementsInput.PrecoTotal.value = result;
        console.log(result)
    }
</script>