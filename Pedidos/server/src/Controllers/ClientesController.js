import { response } from "express";
import PedidoModel from "../Models/ClientesModel.js";

class ClienteController {
    constructor() {

    }

    create(req, res) {
        const clientes = req.body.nome;
        ClienteModel.create(clientes).then(
            resposta => {
                console.debug("Cadastrando um cliente");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro: Cadastrando um cliente");
                res.status(resposta[0]).json(resposta[1])
            }
        )


    }


    read(req, res) {
       
        ClienteModel.read().then(
            resposta => {
                console.debug("Mostrando Cliente");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro: Mostrando Cliente");
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    update(req, res) {
        const id_cliente = req.params.id_cliente;
        const nome = req.body.nome;

        ClienteModel.update(id_cliente, nome_cliente, endereco).then(
            resposta=>{
                console.debug("Atualizando Cliente")
                res.status(resposta[0]).json(resposta[1])
            }

        ).catch(
            resposta=>{
                console.debug("Erro: Atualizando Cliente")
                res.status(resposta[0]).json(resposta[1])
            }
        )

        res.status(200).json("Cliente Atualizado");
    }

    delete(req, res) {
        const id_cliente = req.params.id_cliente;
        ClienteModel.delete(id_cliente).then(
            resposta =>{
                console.debug("Cliente Deletado");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug("Erro: Ao Deletar Cliente");
                res.status(resposta[0]).json(resposta[1])
            }
        )
       

    }
}

export default new ClienteController(); 