import mysql from "mysql2";
import config from "../Config.js";

class ClienteModel {
    constructor() {
       this.conexao = mysql.createConnection(config.db);
    }
    create(nome) {
    let sql = `insert into clientes values ("${null}", "${nome}");`
       
        return new Promise ((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    reject([400,erro])
                }
                resolve([201, "Cliente Adicionado"])
            })
        });
    }

    read(){
        let sql = `select * from  clientes;`;
       
        return new Promise ((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    reject([400,erro])
                }
                resolve([200, retorno])
            })
        });
    }


    update(id_cliente, nome_cliente, enedereco){
        let sql = `UPDATE  clientes SET nome=${nome} WHERE id_cliente= ${id_cliente}`
            
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
        let sql = `delete from clientes where id_cliente="${id_cliente}";`

        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    reject([400,erro])
                }else if (retorno.affectedRows>0){
                    resolve([200,"Cliente Deletado"])
                }else{
                    resolve([404],"Cliente não encontrado")
                }
            })
           
        });
      


    }

}
export default new ClienteModel();
