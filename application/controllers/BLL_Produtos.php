<?php
defined('BASEPATH') or exit('No direct script access allowed');

class BLL_Produtos extends CI_Controller
{

    public function index()
    {
        $this->load->view('view_CadProduto');
    }

    public function alterarProduto(){
        $this->load->view('view_AlterarProduto');
    }

    public function Estoque(){
        $this->load->model('DALProdutos');
        $data['produto'] = $this->DALProdutos->SelectEstoque();
        $this->load->view('view_Estoque', $data);
    }

    public function Alterar(){
        $data = [
            'nome' =>  $this->input->post("Nome"),
            'preco' => $this->input->post("Preco"),
            'descircao' => $this->input->post("Descricao"),
        ];

        foreach ($data as $key => $value) {
            if (empty($value)) {
                echo "error" . $key . "vazio";
                die();
            }
        }

        if (!is_numeric($data['preco'])) {
            echo "errorprecoinvalido";
            die();
        }

        $codigo_Pd = $this->input->post("Codigo");

        if(empty($codigo_Pd)){
            echo "errocodigovazio";
            die();
        }

        if(isset($this->session->foto_pd)){
            $data["foto"] =  $foto = $this->session->foto_pd[0];;
            file_put_contents($this->session->foto_pd[2], $this->session->foto_pd[1]);
            $this->session->unset_userdata("foto_pd");
        }
        $this->load->model('DALProdutos');

        $res = $this->DALProdutos->AlterarProduto($data, $codigo_Pd);
        if($res === true){
            echo "success";
            die();
        }
    }

    public function AlterarEstoque(){
        $this->load->view('view_AlterarEstoque');
    }

    public function AlterarEstoque_Controller(){

        $data = [
            "quantidade" => $this->input->post("Quantidade"), 
            "data_estoque" =>  $this->input->post("Data")
        ];
        
        // $where = $this->input->post("id_est");
        var_dump($data, );
        foreach ($data as $key => $value) {
            if($value != 0){
                if (empty($value)) {
                    echo "error" . $key . "vazio";
                    die();
                }
            } 
        }

        if(empty($where)){
            echo "errocodigovazio";
            die();
        }

        $this->load->model('DALProdutos');

        $res = $this->DALProdutos->AlterarEstoque($data, $where);

        if($res === true){
            echo "success";
            die();
        }

    }

    public function Uploadfoto()
    {
        $data = $_POST["image"];


        $image_array_1 = explode(";", $data);
        $image_array_2 = explode(",", $image_array_1[1]);
        $data_convert = base64_decode($image_array_2[1]);

        $diretorio = './assets/IMG/Produtos/';
        $nome = md5(time()) . '.png';

        $imageName = $diretorio . $nome;

        // file_put_contents($imageName, $data_convert);
        $this->session->foto_upload = [$nome, $data_convert, $imageName];
        $this->session->foto_pd = [$nome, $data_convert, $imageName];
    }

    public function RelatorioProdutos(){

        $this->load->model('DALProdutos');
        $result['results'] = $this->DALProdutos->QuantidadeEstoque();
        $this->load->view('view_graficos_produtos', $result);

    }

    public function ValidarDados()
    {
        if (isset($this->session->foto_upload)) {
            $foto = $this->session->foto_upload[0];
        } else {
            $foto = null;
            echo "errorfotovazio";
            die();
        }
        $data_Produtos = [
            'id_Produto' => md5(date("d/m/Y h:i:s")),
            'nome' => $this->input->post("Nome"),
            'codigo_Pd' => $this->input->post("Codigo"),
            'preco' => $this->input->post("Preco"),
            'foto' => $foto,
            'descircao' => $this->input->post("Descricao")
        ];
        $data_Estoque = [
            'data_estoque' => $this->input->post("Data"),
            'codigo' => $this->input->post("Codigo"),
            'quantidade' => $this->input->post("Quantidade"),
            'fk_id_Produto' => $data_Produtos['id_Produto']
        ];

        foreach ($data_Produtos as $key => $value) {
            if (empty($value)) {
                echo "error" . $key . "vazio";
                die();
            }
        }

        foreach ($data_Estoque as $key => $value) {
            if (empty($value)) {
                echo "error" . $key . "vazio";
                die();
            }
        }
        if (!is_numeric($data_Produtos['preco'])) {
            echo "errorprecoinvalido";
            die();
        }
        if (!is_numeric($data_Estoque['quantidade'])) {
            echo "errorquantidadeinvalida";
            die();
        }
        $this->load->model('DalProdutos');

        $linha = $this->DalProdutos->ValidarCodigo($data_Produtos['codigo_Pd']);

        if($linha){
            echo "errocodigojaexistem";
            die();
        }

        file_put_contents($this->session->foto_upload[2], $this->session->foto_upload[1]);

        if ($this->DalProdutos->CadastrarProduto($data_Produtos, $data_Estoque)) {
            $this->session->unset_userdata("foto_upload");
            echo "ProdutoCadastrado";
            die();
        } else {
            echo "erroCadastrado";
            die();
        }
    }
}
