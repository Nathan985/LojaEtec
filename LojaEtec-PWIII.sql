-- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- CRIAÇÃO DO BANCO DE DADOS
DROP DATABASE IF EXISTS LojaEtec;

CREATE DATABASE IF NOT EXISTS LojaEtec;

USE LojaEtec;

-- CRIAÇÃO DE TABELAS

#CRIAÇÃO DA TABELA USUARIOS
CREATE TABLE IF NOT EXISTS Tbl_Usuario(

	id_Usuario VARCHAR(100) NOT NULL UNIQUE,
    nome VARCHAR(20) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
	senha VARCHAR(60) NOT NULL,
    foto VARCHAR(150) UNIQUE NOT NULL DEFAULT  'default_user.png',
    nickname VARCHAR(50) UNIQUE NOT NULL,
    cargo VARCHAR(20) NOT NULL DEFAULT 'Cliente',
    cpf VARCHAR(50) UNIQUE NOT NULL,
    ativo BOOL NOT NULL DEFAULT TRUE,
    telefone VARCHAR(20) NOT NULL,
    PRIMARY KEY(id_Usuario)
);

#CRIAÇÃO DA TABELA PRODUTOS
CREATE TABLE IF NOT EXISTS Tbl_Produto(

	id_Produto VARCHAR(100) NOT NULL UNIQUE,
    codigo VARCHAR(40) NOT NULL UNIQUE,
    nome VARCHAR(20) NOT NULL,
	preco DECIMAL(10, 2) UNSIGNED NOT NULL,
    foto VARCHAR(150) UNIQUE NOT NULL DEFAULT  'default_produto.png',
    descircao LONGTEXT NULL,
    PRIMARY KEY(id_Produto)
);

#CRIAÇÃO DA TABELA ESTOQUES
CREATE TABLE IF NOT EXISTS Tbl_Estoque(
	
    id_Estoque INT UNSIGNED NOT NULL,
	codigo VARCHAR(40) NOT NULL,
    quantidade INT UNSIGNED NOT NULL,
    data_estoque DATE NOT NULL DEFAULT NOW(),
    fk_id_produto VARCHAR(100) NOT NULL UNIQUE,
	PRIMARY KEY(id_Estoque)

);

#CRIAÇÃO DA TABELA VENDAS
CREATE TABLE IF NOT EXISTS Tbl_Vendas(

	id_Venda VARCHAR(100) NOT NULL UNIQUE,
    data_venda DATE NOT NULL DEFAULT NOW(),
    codigo_venda INT UNSIGNED NOT NULL UNIQUE AUTO_INCREMENT,
    total_venda DECIMAL(10, 2) UNSIGNED NOT NULL,
    cpf VARCHAR(20) NULL,
    preco_unidade DECIMAL(10, 2) UNSIGNED NOT NULL,
    quantidade INT UNSIGNED NOT NULL,
    fk_id_Produto VARCHAR(100) NOT NULL,
    PRIMARY KEY(id_Venda)
);
-- CRIANDO AS FOREIGN KEY

#FOREIGN KEY TABELA ESTOQUE CAMPO ID_PRODUTO
ALTER TABLE Tbl_Estoque ADD CONSTRAINT fk_id_Produto_Estoque FOREIGN KEY (fk_id_Produto) REFERENCES Tbl_Produto(id_Produto);

#FOREIGN KEY TABELA VENDAS CAMPO ID_PRODUTO
ALTER TABLE Tbl_Vendas ADD CONSTRAINT fk_id_Produto_Vandas FOREIGN KEY (fk_id_Produto) REFERENCES Tbl_Produto(id_Produto);
-- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------