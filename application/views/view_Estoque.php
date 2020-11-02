<?php
defined('BASEPATH') or exit('No direct script access allowed');
$this->load->view('view_sidebar');
if(!isset($this->session->login)){
    redirect(base_url('index.php/BLL_Usuarios'));
}
?>

<div class="bannerTec row overFlow ml-auto mr-auto styleContainer bg-white col-10">
    <h1 class="display-4 text-center col-12">Estoque de Produtos</h1>
    <?php
    foreach ($produto as $dataPd) {
        echo "
            <div class='row col-12 max-heigh mb-4 containerEstoque ml-auto mr-auto mt-4'>
        <div class='row col-12 CardEstoque'>
            <img class='ImgEstoque' src=" . base_url('assets/IMG/Produtos/'. $dataPd["foto"]) . ">
            <div class='col-4'>
                <p class='mt-4 textEstoque'>" . $dataPd["nome"] . "</p>
                <p class='mt-2 textEstoque'>" . $dataPd["preco"] . "</p>
            </div>
            <div class='col-5 aligncard'>
                <p class='mt-4 align-bottom textEstoque'>" . $dataPd["quantidade"] . "</p>
                <p class='mt-2 align-bottom textEstoquequant'>" . $dataPd["data_estoque"] . "</p>
            </div>
        </div>
    </div> 
            ";
    }
    ?>
    <!-- <div class="row col-12 max-heigh mb-4 containerEstoque ml-auto mr-auto mt-4">
        <div class="row col-12 CardEstoque">
            <img class="ImgEstoque" src="<?php echo base_url('assets/IMG/Produtos/a80ce0e1ec36ada8f6a8ae5e0004d5a2.png') ?>" alt="">
            <div class="col-4">
                <p class="mt-4 textEstoque">Coruja De Papel</p>
                <p class="mt-2 textEstoque">$52.90</p>
            </div>
            <div class="col-5 aligncard">
                <p class="mt-4 align-bottom textEstoque">155</p>
                <p class="mt-2 align-bottom textEstoquequant">30/10/2020</p>
            </div>
        </div>
    </div> -->
</div>
</div>