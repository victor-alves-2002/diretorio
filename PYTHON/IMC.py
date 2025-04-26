#variavel
continuar = True

#função loop
while continuar:

#--IMC--
        print("\n---IMC---\n")
        peso = float(input("Digite seu peso em Kg: \n"));
        altura = float(input("Digite sua altura em Metros: \n"));
        imc = peso / (altura ** 2);
        print(f"IMC = {imc:.2f}");

        #Abaixo do Peso (IMC < 18,5);
        if (imc < 18.5):
                print("Abaixo do Peso")

        #Peso Normal (IMC entre 18,5 e 24,9)
        elif (imc >= 18.5 and imc <= 24.9):
                print("Peso Normal")

        #Sobrepeso (IMC entre 25 e 29,9)
        elif (imc >= 25 and imc < 29.9):
                print("Sobrepeso")

        #Obesidade Grau I (IMC ≥ 30). 
        elif (imc >= 30 and imc < 34.9):
                print("Obesidade Grau I")

        #Obesidade Grau II
        elif (imc >= 35 and imc < 39.9):
                print("Obesidade Grau II")

        #Obesidade Grau III 
        else:
                print("Obesidade Grau III Mórbida")

        
        continuar = input("continue? (s/n)")
        if continuar != "s":    
                continuar = False