<?php
    defined('BASEPATH') or exit('No direct script access allowed');

    class DALVendas extends CI_Model{

        public function SelectProduto($value){
            
            $this->db->where("codigo", $value);
            $linha = $this->db->get("Tbl_Produto")->row_array();
            return $linha;
        }

        public function CadastrarVenda($dados){
            return $this->db->insert('Tbl_Vendas', $dados);
        }

    }
?>