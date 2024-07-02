import mysql from "mysql2";
import config from "../Config.js";

class PedidoModel {
    constructor() {
       this.conexao = mysql.createConnection(config.db);
    }
    create(nome) {
    let sql = `insert into pedidos values ("${null}", "${nome}");`
       
        return new Promise ((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    reject([400,erro])
                }
                resolve([201, "Pedido Adicionado"])
            })
        });
    }

    read(){
        let sql = `select * from  pedidos;`;
       
        return new Promise ((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    reject([400,erro])
                }
                resolve([200, retorno])
            })
        });
    }


    update(id_categoria, nome){
        let sql = `UPDATE  pedidos SET nome=${nome} WHERE id_pedidos= ${id_categoria}`
            
        return new Promise ((rsolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    reject([400,erro])
                }else if (retorno.affectedRows > 0){
                    resolve([])
                }
                
                resolve([200, retorno])
                
            })
        })

     
    
    }

    delete(id_pedido){
        let sql = `delete from pedidos where id_categoria="${id_pedido}";`

        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    reject([400,erro])
                }else if (retorno.affectedRows>0){
                    resolve([200,"Pedido Deletado"])
                }else{
                    resolve([404],"Pedido não encontrado")
                }
            })
           
        });
      


    }

}
export default new PedidoModel();
