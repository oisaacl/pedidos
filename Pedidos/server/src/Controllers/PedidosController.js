import { response } from "express";
import PedidosModel from "../Models/PedidosModel.js";

class PedidoController {
    constructor() {

    }

    create(req, res) {
        const pedidos = req.body.nome;
        PedidosModel.create(pedidos).then(
            
            resposta => {
                console.debug("Cadastrando um pedido");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro: Cadastrando um pedido");
                res.status(resposta[0]).json(resposta[1])
            }
        )


    }


    read(req, res) {
       
        PedidosModel.read().then(
            resposta => {
                console.debug("Mostrando Pedido");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro: Mostrando Pedido");
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    update(req, res) {
        const id_pedido = req.params.id_pedido;
        const descricao = req.body.descricao;
        const valor = req.params.valor;
        const id_cliente = req.body.id_cliente;
        

        PedidosModel.update(id_pedido, descricao, valor, id_cliente).then(
            resposta=>{
                console.debug("Atualizando Pedido")
                res.status(resposta[0]).json(resposta[1])
            }

        ).catch(
            resposta=>{
                console.debug("Erro: Atualizando Pedido")
                res.status(resposta[0]).json(resposta[1])
            }
        )

        res.status(200).json("Pedido Atualizado");
    }

    delete(req, res) {
        const id_pedido = req.params.id_pedido;
        PedidosModel.delete(id_pedido).then(
            resposta =>{
                console.debug("Pedido Deletado");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug("Erro: Ao Deletar Pedido");
                res.status(resposta[0]).json(resposta[1])
            }
        )
       

    }
}

export default new PedidoController(); 