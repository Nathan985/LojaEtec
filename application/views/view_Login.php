<?php
defined('BASEPATH') or exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>BeHealthy</title>
	<link rel="stylesheet" href="<?php echo base_url("assets/CSS/style.css"); ?>">
	<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
</head>

<body>
	<!-- Div Master -->
	<div class="hero">
		<!-- Botões alternantes entre login e registro -->
		<div class="form-box">
			<div class="button-box" id="BtnsElement">
				<div id="btn" class="btn_bck"></div>
				<center>
					<button type="button" class="toggle-btn" id="ElementLogin">Login</button>
					<button type="button" class="toggle-btn" id="ElementRegister">Register</button>
				</center>
			</div>

			<!-- Icones de rede Social -->
			<div class="social-icons">
				<img src="<?php echo base_url("assets/IMG/fb.png"); ?>">
				<img src="<?php echo base_url("assets/IMG/tw.png"); ?>">
				<img src="<?php echo base_url("assets/IMG/gp.png"); ?>">
			</div>

			<!-- Formulario de Login -->
			<form action="<?php echo base_url("index.php/BLL_Usuarios/ValidarLogin"); ?>" id="Login" class="input-group" method="post">
				<div class="alert d-none" id="verLogin">Incorrect username/password</div>
				<input type="text" class="input-field" placeholder="Name" name="Iden" id="user">
				<div class="d-none alert" id="userErro">Invalid user name</div>
				<input type="password" class="input-field" placeholder="Password" name="Pass" id="pass">
				<div class="d-none alert" id="passErro">Invalid password</div>
				<input type="checkbox" class="chech-box" name="check" id="Check"><span class="span">Remember
					Password</span>
				<button type="submit" class="submit-btn">Login</button>
			</form>

			<!---->

			<!-- Formulario de Registro -->
			<form action="<?php echo base_url("index.php/BLL_Usuarios/ValidarCadastro"); ?>" class="input-group-cad" method="post" id="Register">
				<input type="text" class="input-field" placeholder="Name" name="User" id="Name">
				<small class="alert d-none" id="CadName">Empty name field</small>
				<input type="text" class="input-field" placeholder="E-mail" name="E-mail" id="Mail_Cad">
				<small class="alert d-none" id="CadEmail">Empty email field</small>
				<small class="alert d-none" id="CadEmailCadastrado">E-mail already registered</small>
				<input type="password" class="input-field" placeholder="Password" name="senhacad" id="CadPass">
				<small class="alert d-none" id="Cadsenha">Empty password field</small>
				<input type="password" class="input-field" placeholder="Confirm Password" name="CPass" id="CadCpPass">
				<small class="alert d-none" id="CadConfirm">Field confirm empty</small>
				<small class="alert d-none" id="CadConfirm2">Unmatched password</small>

				<!-- Botões de Paginação do Registro -->
				<div class="group-pages">
					<div class="paginas" id="Page1"></div>
					<div class="paginas" id="ElementClick"></div>
				</div>
				<!-- Botão Próxima Pagina do Cadastro -->
				<div class="button-box-cad">
					<div id="btn"></div>
					<center><button type="button" id="ElementNext" class="toggle-btn-cad">Next</button></center>
				</div>

				<!-- Pagina 2 do Cadastro -->
				<span class="input-group-cad" id="Page">
					<input type="text" class="input-field" placeholder="Username" name="Username" id="cadUsername">
					<small class="alert d-none" id="CadNick">Invalid Username field</small>
					<small class="alert d-none" id="CadNickCadastrado">Username already registered</small>
					<input type="text" class="input-field" placeholder="CPF" name="CPF" id="cadCPF">
					<small class="alert d-none" id="CadCpfmsg">Empty CPF field</small>
					<small class="alert d-none" id="CadCpfCadastrado">CPF already registered</small>
					<input type="text" class="input-field" placeholder="Phone" name="Telefone" id="Cadtell">
					<small class="alert d-none" id="Cadtelefone">Empty phone field</small>

					<!-- Botões de Paginação do Registro -->
					<div class="group-pages" id="pagCad">
						<div class="paginas" id="ElementBack" id="Page1"></div>
						<div class="paginas" id="Page2"></div>
					</div>

					<!-- Botão para voltar para pagina 1 de Cadastro -->
					<div class="button-box-cad2">
						<div id="btn"></div>
						<center><button type="button" id="BtnBackElement" class="toggle-btn-cad">Voltar</button>
						</center>
					</div>

					<!-- Concoluir Cadastro do Form 1 & 2 -->
					<center><button type="submit" class="submit-btn">Cadastro</button></center>

				</span>
			</form>
		</div>
	</div>

	<script src="<?php echo base_url("assets/JS/AnimationForm.js"); ?>"></script>
	<script src="<?php echo base_url("assets/JS/jquery.js"); ?>"></script>
	<script src="<?php echo base_url("assets/JS/validacoes.js"); ?>"></script>
</body>

</html>