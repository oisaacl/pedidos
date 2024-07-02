import { response } from "express";
import PedidosModel from "../Models/PedidosModel";

class PedidoController {
    constructor() {

    }

    create(req, res) {
        const pedidos = req.body.nome;
        PedidoModel.create(pedidos).then(
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
       
        PedidoModel.read().then(
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
        const nome = req.body.nome;

        PedidoModel.update(id_pedido, id_cliente).then(
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
        PedidoModel.delete(id_pedido).then(
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