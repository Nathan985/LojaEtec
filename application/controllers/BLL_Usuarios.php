<?php
defined('BASEPATH') or exit('No direct script access allowed');

class BLL_Usuarios extends CI_Controller
{


    public function index()
    {

        $this->load->view('view_Login');
    }

    public function TelaHome()
    {
        $this->load->view('view_Home');
    }

    public function Logout()
    {
        $this->session->sess_destroy();
        $this->index();
    }
    public function UploadImage()
    {

        $data = $_POST["image"];


        $image_array_1 = explode(";", $data);
        $image_array_2 = explode(",", $image_array_1[1]);
        $data_convert = base64_decode($image_array_2[1]);

        $diretorio = './assets/IMG/Clientes/';
        $nome = md5(time()) . '.png';

        $imageName = $diretorio . $nome;

        file_put_contents($imageName, $data_convert);
        $id = $this->session->id_Usuario;
        $this->AlterarFoto($id, $nome);

    }

    public function AlterarFoto($id ,$nome){
        $this->load->model('DalUsuarios');
        
        $this->DalUsuarios->AlterarFoto($id, $nome);

        $this->session->foto = $nome;
    }

    public function Perfil()
    {
        $this->load->view('view_Perfil');
    }

    public function ValidarLogin()
    {

        $nome = $this->input->post("Iden");
        $senha = $this->Hash($this->input->post("Pass"));

        $result = $this->ValidarCredenciaisLogin($nome, $senha);

        if ($result) {
            $this->load->model('DalUsuarios');
            $linha = $this->DalUsuarios->LogarUser($nome, $senha);
            if (!empty($linha)) {
                if ($linha['ativo']) {
                    switch ($linha['cargo']) {
                        case "Cliente":
                            echo "SucessoLogin";
                            $this->Session($linha);
                            break;
                        case "Admin":
                            echo "SucessoLogin";
                            $this->Session($linha);
                            break;
                        case "Funcionario":
                            echo "Sucesso!Func";
                            break;
                        default:
                            echo "Erro Usuario!";
                            break;
                    }
                } else {
                    echo "NãoAtivo";
                    die();
                }
            } else {
                echo "FalhaLogin!";
                die();
            }
        }
    }

    function Session($dados)
    {
        $this->session->nome = $dados['nome'];
        $this->session->id_Usuario = $dados['id_Usuario'];
        $this->session->login = true;
        $this->session->email = $dados['email'];
        $this->session->nickname = $dados['nickname'];
        $this->session->foto = $dados['foto'];
        $this->session->cargo = $dados['cargo'];
    }


    private function ValidarCredenciaisLogin($nome, $senha)
    {

        if (empty($nome)) {
            echo "ErroEmail";
            die();
        } else if (empty($senha)) {
            echo "ErroSenha";
            die();
        } else {
            return true;
        }
    }

    public function ValidarCadastro()
    {
        $dados = [
            'id_Usuario' => $this->Hash(date("d/m/Y h:i:s")),
            'nome' => $this->input->post("User"),
            'email' => $this->input->post("E-mail"),
            'senha' => $this->input->post("senhacad"),
            'nickname' => $this->input->post("Username"),
            'cargo' => "Cliente",
            'cpf' => $this->input->post("CPF"),
            'telefone' => $this->input->post("Telefone"),
        ];
        $cfsenha = $this->input->post("CPass");
        $result = $this->ValidarCredenciaisCadastro($dados, $cfsenha);
        $this->load->model('DalUsuarios');


        if ($result) {
            $dados['senha'] = $this->Hash($dados['senha']);
            if ($this->DalUsuarios->CadastrarUsuario($dados)) {
                echo "ClienteCadastrado";
                die();
            }
        }
    }

    private function ValidarCredenciaisCadastro($dados, $cfsenha)
    {
        $this->load->model('DalUsuarios');
        if (empty($dados['nome'])) {
            echo "ErroNome";
            die();
        }
        if (empty($dados['email'])) {
            echo "ErroEmail";
            die();
        }
        $bool = $this->DalUsuarios->ValidarCampo("email", $dados['email']);
        if ($bool) {
            echo "ErroEmailCadastrado";
            die();
        }
        if (empty($dados['senha'])) {
            echo "ErroSenhacad";
            die();
        }
        if (empty($cfsenha)) {
            echo "ErroConfSenha";
            die();
        }
        if ($dados['senha'] != $cfsenha) {
            echo "SenhasDiferentes";
            die();
        }
        if (empty($dados['nickname'])) {
            echo "ErroNick";
            die();
        }
        $bool = $this->DalUsuarios->ValidarCampo("nickname", $dados['nickname']);
        if ($bool) {
            echo "ErroNickCadastrado";
            die();
        }
        if (empty($dados['cpf']) or strlen($dados['cpf']) != 11) {
            echo "ErroCPf";
            die();
        }
        $bool = $this->DalUsuarios->ValidarCampo("cpf", $dados['cpf']);
        if ($bool) {
            echo "ErroCpfCadastrado";
            die();
        }
        if (empty($dados['telefone'])) {
            echo "ErroTell";
            die();
        }
        return true;
    }

    private function Hash($senha)
    {

        $result = md5($senha);

        return $result;
    }
}
