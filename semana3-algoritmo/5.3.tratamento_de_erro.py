
def mostrarNumero_divivel_por_dois_e_por_tres():
    
    print("Escreva um numero é divisivel por 2 e 3: ")
    
    numero_valido = False
    
    while(numero_valido == False):
        try:
            num = int(input())
            if(num % 2 != 0 and num % 3 != 0):
                print("O  número não é divisivel por 2 e por 3")
            elif(num % 2 == 0 and num % 3 != 0):
                print("O  número divisivel por 2 e não por 3")
            elif(num % 2 != 0 and num % 3 == 0):
                print("O  número divisivel por 3 ou não por 2")
            else:
                print("Voce escolheu o numero: " + str(num))
                numero_valido = True
        except:
            print("Você precise digitar um número é divisivel por 2 ou por 3")
            
mostrarNumero_divivel_por_dois_e_por_tres()