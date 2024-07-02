create database pedidos;
use pedidos;

create table clientes (
 id_cliente int,
 nome_cliente varchar(45),
 endereco varchar(150)
 
);


insert into clientes values (
"1",
"Ramon",
"Vitoria-Es"
);



insert into clientes values (
"2",
"Isaac",
"Vila Velha-Es"
);




insert into clientes values (
"3",
"Samara",
"Vila Velha-Es"
);

create table pedidos (
 id_pedido int,
 descricao varchar (150),
 valor varchar (15),
 id_cliente int
 
);


insert into pedidos values (
"1",
"Bolo de Cenoura",
"R$ 50,00",
"1"
);


insert into pedidos values (
"2",
"Brigadeiro",
"R$ 12,00",
"2"
);


insert into pedidos values (
"3",
"Empada",
"R$ 15,00",
"3"
);
