<?php
    defined('BASEPATH') or exit('No direct script access allowed');


    class BLL_Vendas extends CI_Controller{

        public function index(){
            $this->load->view('view_compras');
        }
        public function BuscarPd(){

            $value = $this->input->post("CodigoComp");

            if(empty($value)){
                echo "errocodigovazio";
                die();
            }
            $this->load->model('DALVendas');

            $result = $this->DALVendas->SelectProduto($value);
            if($result){
                $this->session->codigoPd = $result['id_Produto'];
                echo json_encode($result);
                die();
            }
            echo "errocodigonaoencontrado";
            die();
        }

        public function CadCompra(){

            if(!isset($this->session->codigoPd)){
                echo "erroselecaoproduto";
                die();
            }

            $dados = [
                "id_Venda"  => md5(date("d/m/Y h:i:s")),
                "data_venda" => $this->input->post("DataComp"),
                "total_venda" => $this->input->post("PrecoTotalComp"),
                "preco_unidade" => $this->input->post("PrecoComp"),
                "quantidade" => $this->input->post("QuantidadeComp"),
                "cpf" => $this->input->post("CPFComp"),
                "fk_id_Produto" => $this->session->codigoPd
            ];
            
            foreach($dados as $value => $key){
                if($value != "cpf"){
                    if (empty($dados[$value])) {
                        echo "error" . $value . "vazio";
                        die();
                    }
                }
            }
            $this->load->model("DALVendas");
            $bool = $this->DALVendas->CadastrarVenda($dados);

            if($bool){
                $this->session->unset_userdata("codigoPd");
                echo "sucessovenda";
                die();
            }
            else{
                echo "errovenda";
                die();
            }
        }
    }
