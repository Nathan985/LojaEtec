<?php
    defined('BASEPATH') or exit('No direct script access allowed');

    class DALVendas extends CI_Model{

        public function SelectProduto($value){
            
            $this->db->where("codigo_Pd", $value);
            $linha = $this->db->get("Tbl_Produto")->row_array();
            return $linha;
        }

        public function CadastrarVenda($dados){
            return $this->db->insert('Tbl_Vendas', $dados);
        }

        public function SelectQuantidade($id){
            $this->db->select("quantidade");
            $this->db->where("fk_id_Produto", $id);
            return $this->db->get("Tbl_Estoque")->row_array();
        }

        public function AlterarEstoque($id, $value){
            $value = [
                "quantidade" => $value,
                "data_estoque" => date("Y/m/d")
            ];
            $this->db->where('fk_id_produto', $id);
            return $this->db->update('Tbl_Estoque', $value);
        }

    }
?>