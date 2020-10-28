<?php
defined('BASEPATH') or exit('No direct script access allowed');

class DalUsuarios extends CI_Model
{

    public function LogarUser($nome, $senha)
    {
        
        $where = "(nickname = '$nome' OR email = '$nome') AND senha = '$senha'";
        $this->db->where($where);
        $result = $this->db->get("Tbl_Usuario")->row_array();
        return $result;

    }

    public function CadastrarUsuario($data)
    {

        return $this->db->insert('Tbl_Usuario', $data);

    }

    public function ValidarCampo($campo, $value){
        $this->db->where($campo, $value);
        $result = $this->db->get("Tbl_Usuario")->row_array();
        return $result;
    }

    public function AlterarFoto($idUser, $foto){

        $data = array(
            'foto' => $foto 
        );
        $this->db->where('id_Usuario', $idUser);
        $this->db->update('Tbl_Usuario',$data);

    }
}