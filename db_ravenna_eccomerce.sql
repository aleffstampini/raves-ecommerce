CREATE DATABASE IF NOT EXISTS `dbravenna`;
USE `dbravenna`;

CREATE TABLE IF NOT EXISTS `tb_produto` (
  `id_produto` INT NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `descricao` VARCHAR(45) NULL,
  `valor` DOUBLE NOT NULL,
  PRIMARY KEY (`id_produto`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `tb_categoria` (
  `id_categoria` INT NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `descricao` TEXT NULL,
  PRIMARY KEY (`id_categoria`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `tb_usuario` (
  `id_usuario` INT NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  `cpf` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id_usuario`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `tb_venda` (
  `id_venda` INT NOT NULL,
  `valor` DOUBLE NOT NULL,
  `tipo_pagamento` VARCHAR(45) NOT NULL,
  `parcelado` TINYINT NOT NULL,
  `quantidade_parcelas` INT NULL,
  `status_venda` TINYINT NOT NULL,
  `tb_usuario_id_usuario` INT NOT NULL,
  PRIMARY KEY (`id_venda`),
  INDEX `fk_tb_venda_tb_usuario1_idx` (`tb_usuario_id_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_tb_venda_tb_usuario1`
    FOREIGN KEY (`tb_usuario_id_usuario`)
    REFERENCES `tb_usuario` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `tb_venda_has_tb_produto` (
  `tb_venda_id_venda` INT NOT NULL,
  `tb_produto_id_produto` INT NOT NULL,
  PRIMARY KEY (`tb_venda_id_venda`, `tb_produto_id_produto`),
  INDEX `fk_tb_venda_has_tb_produto_tb_produto1_idx` (`tb_produto_id_produto` ASC) VISIBLE,
  INDEX `fk_tb_venda_has_tb_produto_tb_venda1_idx` (`tb_venda_id_venda` ASC) VISIBLE,
  CONSTRAINT `fk_tb_venda_has_tb_produto_tb_venda1`
    FOREIGN KEY (`tb_venda_id_venda`)
    REFERENCES `tb_venda` (`id_venda`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tb_venda_has_tb_produto_tb_produto1`
    FOREIGN KEY (`tb_produto_id_produto`)
    REFERENCES `tb_produto` (`id_produto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `tb_rastreio` (
  `id_rastreio` INT NOT NULL,
  `codigo_rastreio` VARCHAR(100) NOT NULL,
  `tb_venda_id_venda` INT NOT NULL,
  PRIMARY KEY (`id_rastreio`),
  INDEX `fk_tb_rastreio_tb_venda1_idx` (`tb_venda_id_venda` ASC) VISIBLE,
  CONSTRAINT `fk_tb_rastreio_tb_venda1`
    FOREIGN KEY (`tb_venda_id_venda`)
    REFERENCES `tb_venda` (`id_venda`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `tb_produto_has_tb_categoria` (
  `tb_produto_id_produto` INT NOT NULL,
  `tb_categoria_id_categoria` INT NOT NULL,
  PRIMARY KEY (`tb_produto_id_produto`, `tb_categoria_id_categoria`),
  INDEX `fk_tb_produto_has_tb_categoria_tb_categoria1_idx` (`tb_categoria_id_categoria` ASC) VISIBLE,
  INDEX `fk_tb_produto_has_tb_categoria_tb_produto1_idx` (`tb_produto_id_produto` ASC) VISIBLE,
  CONSTRAINT `fk_tb_produto_has_tb_categoria_tb_produto1`
    FOREIGN KEY (`tb_produto_id_produto`)
    REFERENCES `tb_produto` (`id_produto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tb_produto_has_tb_categoria_tb_categoria1`
    FOREIGN KEY (`tb_categoria_id_categoria`)
    REFERENCES `tb_categoria` (`id_categoria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
