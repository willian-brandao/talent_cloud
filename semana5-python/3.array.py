#lista de produtos disponíveis
#quando um acabar substitui por outro
#adicionar mais produto

#declaração da lista de produtos
lista_de_produtos = ["arroz","feijão","farinha","laranja"]
print(lista_de_produtos)

def atualizar_produtos_estoque(lista):

#imprime produtos existentes  
    print(lista_de_produtos)


    #pergunta qual produto finalizou no estoque ao usuário
    produto_a_ser_subsituido = input("Qual produto finalizou no estoque atual? ")
    produto_substituto = input("Qual produto a ser adicionado?")

    #percorre a lista procurando um produto
    for index, value in enumerate(lista_de_produtos):
        if value == produto_a_ser_subsituido:
            lista_de_produtos[index] = produto_substituto
        

def adicionar_produtos(lista):
#solicita o usuario qual produto será adicionado
    produto = input('Qual produto deseja adicionado ao estoque?')
#adiciona um novo produto a lista usando a função append   
    lista.append(produto)
    print(lista)


#chamada da função
atualizar_produtos_estoque(lista_de_produtos)
adicionar_produtos(lista_de_produtos)