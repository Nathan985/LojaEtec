<?php
defined('BASEPATH') or exit('No direct script access allowed');

class DalProdutos extends CI_Model
{

    public function CadastrarProduto($data_produto, $data_estoque)
    {
        $bool_1 = $this->db->insert('Tbl_Produto', $data_produto);
        $bool_2 = $this->CadastrarEstoque($data_estoque);
        if ($bool_1 && $bool_2) {
            return true;
        } else {
            return false;
        }
    }

    private function CadastrarEstoque($data)
    {
        return $this->db->insert('Tbl_Estoque', $data);
    }

    public function ValidarCodigo($value)
    {
        $this->db->where("codigo_Pd", $value);
        $result = $this->db->get("Tbl_Produto")->row_array();
        return $result;
    }

    public function SelectEstoque()
    {
        $this->db->select('nome, codigo_Pd, preco, foto, quantidade, data_estoque');
        $this->db->from('Tbl_Produto');
        $this->db->join('Tbl_Estoque', 'fk_id_produto = id_Produto');
        $linha = $this->db->get()->result_array();
        return $linha;
    }

    public function QuantidadeEstoque(){

        $this->db->select('id_Produto, nome, quantidade, fk_id_produto');
        $this->db->from('Tbl_Produto');
        $this->db->join('Tbl_Estoque', 'fk_id_produto = id_Produto');
        $this->db->where('quantidade <', 20);
        $this->db->group_by('quantidade'); 
        $this->db->limit(4);
        $linha = $this->db->get()->result_array();
        return $linha;

    }

    public function AlterarEstoque($data, $where){
        $this->db->where("id_Estoque", $where);
        return $this->db->update('Tbl_Estoque', $data);
    }

    public function AlterarProduto($data, $codigo_Pd){
        $this->db->where("codigo_Pd", $codigo_Pd);
        return $this->db->update('Tbl_Produto', $data);
    }
}
