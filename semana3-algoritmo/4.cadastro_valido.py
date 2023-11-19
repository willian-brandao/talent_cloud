<<<<<<< HEAD
def cadastro(ano_de_nascimento):
    idade = 0
    ano_atual = 0
    try:
        if (ano_de_nascimento >= 1922) and (ano_de_nascimento <= 2021):
            ano_atual = 2022
            idade = ano_atual - ano_de_nascimento 
        else:
            print("O ano tem que estar entre 1922 e 2021")
            
    except:
        print("Valor descrito não é válido")
        
    return idade



executar = True

while(executar == True):
    #nome = input("Digite seu nome completo:")
    nome = "cigano"
    ano_de_nascimento = int(input("Digite seu ano de nascimento:"))
    cadUnico = cadastro( ano_de_nascimento)
    print("Nome:{}.\nEle(a) tem {} anos.".format(nome,cadUnico))
=======
def cadastro(ano_de_nascimento):
    idade = 0
    ano_atual = 0
    try:
        if (ano_de_nascimento >= 1922) and (ano_de_nascimento <= 2021):
            ano_atual = 2022
            idade = ano_atual - ano_de_nascimento 
        else:
            print("O ano tem que estar entre 1922 e 2021")
    except:
        print("Valor descrito não é válido")
        
    return idade



executar = True

while(executar == True):
    #nome = input("Digite seu nome completo:")
    nome = "cigano"
    ano_de_nascimento = int(input("Digite seu ano de nascimento:"))
    cadUnico = cadastro( ano_de_nascimento)
    print("Nome:{}.\nEle(a) tem {} anos.".format(nome,cadUnico))
>>>>>>> ac5f1b2887791a2da4aa2e6834b7124fb5fe53cf
    executar = False