<?php
defined('BASEPATH') or exit('No direct script access allowed');

$this->load->view('view_sidebar');

if(!isset($this->session->login)){
    redirect(base_url('index.php/BLL_Usuarios'));
}

?>
<link rel="stylesheet" href="<?php echo base_url('assets/CSS/style.css') ?>">
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
<div class="bg-white col-10 bannerTec styleContainer row ml-auto mr-auto">
    <div class="col-12">
        <div id="imagePerfil" class="row">
            <label class="ml-auto mr-auto" for="upload_image">
                <img id="IMGPF" width="200px" height="200px" class="mt-5 ml-auto mr-auto" style="cursor: pointer" src="<?php echo base_url('assets/IMG/Clientes/' . $this->session->foto); ?>" alt="">
                <img src="<?php echo base_url('assets/IMG/alt_img.png') ?>" class='Cam_IMG_pf'>
            </label>
        </div>
        <h1 id="NamePerfil" class="Margin-nome display-3 text-center"><?php echo $this->session->nome ?></h1>
    </div>
    <div class="row ml-auto mr-auto">
        <center>
            <form id="AlterUser" action="<?php echo base_url('index.php/BLL_Usuarios/AlterarDados') ?>" method="POST">
                <input type="text" class="input-field mt-3 col-5" value="<?php echo $this->session->nome ?>" placeholder="Name" name="Nome" id="NomePF">
                <input type="text" class="input-field mt-3 col-5 ml-3" value="<?php echo $this->session->nickname ?>" placeholder="Nickname" name="nick" id="NickPF">
                <input type="text" class="input-field text-black-50 mt-3 col-5" value="<?php echo $this->session->email ?>" disabled placeholder="Email" name="email" id="EmailPF">
                <input type="text" class="input-field text-black-50 mt-3 col-5 ml-3" value="<?php echo $this->session->cpf ?>" placeholder="CPF" name="cpf" disabled id="CpfPF">
                <input type="text" class="input-field text-black-50 mt-3 col-5" value="<?php echo $this->session->cargo ?>" disabled placeholder="cargo" name="cargo" id="CargoPF">
                <input type="text" class="input-field mt-3 col-5 ml-3" value="<?php echo $this->session->telefone ?>" placeholder="Telefone" name="telefone" id="telefonePf">
                <input type="password" class="input-field mt-3 col-5" placeholder="Senha" name="senha" id="senhaPF">
                <input type="password" class="input-field mt-3 mb-5 col-5 ml-3" placeholder="Confirmar senha" name="confsenha" id="confsenhaPF">
                <button type="submit" class="btn-pdt mt-1 mb-5 col-11">Alterar</button>
            </form>
            
        </center>
    </div>
    <script src="<?php echo base_url('assets/JS/validacoes.js') ?>"></script>
</div>
</div>