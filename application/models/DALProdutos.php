<?php
    defined('BASEPATH') or exit('No direct script access allowed');

    class DalProdutos extends CI_Model{

        public function CadastrarProduto($data_produto, $data_estoque){
            $bool_1 = $this->db->insert('Tbl_Produto', $data_produto);
            $bool_2 = $this->CadastrarEstoque($data_estoque);
            if($bool_1 && $bool_2){return true;} else {return false;}
        }

        private function CadastrarEstoque($data){
            return $this->db->insert('Tbl_Estoque', $data);
        }
        
        public function ValidarCodigo($value){
            $this->db->where("codigo", $value);
            $result = $this->db->get("Tbl_Produto")->row_array();
            return $result;
        }

    }
?>