def mostrarNumero():
    
    print("Escreva um numero menor que 100: ")
    
    numero_valido = false
    
    while(numero_valido == false):
        try:
            num = int(input())
            if(num > 100):
                print("O  nuumero precisa ser menor que 100")
            else:
                print("Voce escolheu o numero: " + str(num))
                numero_valido = True
        except:
            print("Você precise digitar um número inteiro.")
            
mostrarNumero()