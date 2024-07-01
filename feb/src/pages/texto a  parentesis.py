txt=input("Mete aqui el texto: ")
for i, index in enumerate(txt):
    for j, ini in enumerate(txt, i+1):
        if(index==ini):
            print("dobbleeee", index, ini)
            txt.replace(index, "(")
        else:
            txt.replace(index, ")")



print(txt)