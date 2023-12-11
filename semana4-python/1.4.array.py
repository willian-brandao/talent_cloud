lista_produtos = ['máscaras faciais', 'batons', 'esmaltes',
                  'perfumes', 'loções', 'xampus', 'sabonetes', 
                  'delineadores'] 



#


for index, value in enumerate(lista_produtos):
  li
    if value == 'batons':
        lista_produtos[index] = 'rímel'
        
    if value == 'loções':
        lista_produtos[index] = 'creme hidratante'

    if value == 'delineadores':
        lista_produtos.pop(index)

#listando novos produtos
lista_de_produtos_novos = ['desodorantes corporais','condicionadores']
        
#unindo as listas
lista_atualizada = lista_produtos + lista_de_produtos_novos
#imprime a lista atualizada
print(lista_atualizada)
