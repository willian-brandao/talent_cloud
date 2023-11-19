lista_produtos = ['máscaras faciais', 'batons', 'esmaltes',
                  'perfumes', 'loções', 'xampus', 'sabonetes', 
                  'delineadores'] 



#


for index, value in enumerate(lista_produtos):
    if value == 'batons':
        lista_produtos[index] = 'rímel'
        
    if value == 'loções':
        lista_produtos[index] = 'creme hidratante'

    if value == 'delineadores':
        lista_produtos.pop(index)
        
print(lista_produtos)