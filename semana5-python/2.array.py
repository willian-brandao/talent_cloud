#declaração do array de nomes 
nomes = ["Rafael", "Rand","Paloma", "Paulo"] 

#funçao quue verifica se um array tem determinado elemento
#criada uma função com dois parametros, que são o elemento e a lista


def achar_elemento( elem, array):

    achou = False    
    #declar um while para fazer a verificação do nome
#percorre todo a lista    
    for i in range(len(array)):
#verificação se o elemento existe na lista        
        if array[i] == elem:
            achou = True
            break
    if( achou ==  False):
        print("Não achamos o nome: "+elem)
    else:
        print("Achamos o nome: " + elem + " está na",i+1,"ª posição")
            


elem = input("Qual o nome que você está  procurando? ")
      
achar_elemento(elem, nomes)


