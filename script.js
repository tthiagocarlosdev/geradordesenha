function gerarSenha(){
    var quantidadeCaracteres = document.querySelector('input#quantidadeCaracteres')
    var resposta = document.querySelector('div#resposta')
    resposta.innerHTML = ``
    quantidadeCaracteres = Number(quantidadeCaracteres.value)
    if(quantidadeCaracteres < 6 || quantidadeCaracteres > 93){
        alert('[ATENÇÃO!] Valor incorreto! Digite um valor entre 6 e 93!')
    } else {
        // função gerando um número inteiro aleatório entre dois valores, inclusive
        function getRandomIntInclusive(min, max){
            min = Math.ceil(min)
            max = Math.floor(max)
            return Math.floor(Math.random() * (max - min + 1)) + min
        }
        // definição da resposta e variáveis
        let mininoTipoCaractere = Number.parseInt(quantidadeCaracteres / 4) // Cada tipo caractere terá que apresentar uma quantidade mínima na senha.
        let senhaEmNumero = []
        let senhaEmCaractere = []
        let mininoCaracteres = false
        let simbolo = 0
        let numeros = 0
        let letraMinusculas = 0
        let letraMaiusculas = 0

        //sorteio do valores da escala ascii
		while(mininoCaracteres == false){
			    //sorteio do valores da escala ascii
		    	for(let contador = 0; contador < quantidadeCaracteres; contador++) {
				    senhaEmNumero[contador] = getRandomIntInclusive(33, 126)
		    	}
                
		    	//validação para não repetir caracteres na senha
		    	for (let a = 0; a < quantidadeCaracteres - 1; a++){
				    for (let b = a+1; b < quantidadeCaracteres; b++){
				        while (senhaEmNumero[a] == senhaEmNumero[b]){
                            senhaEmNumero[b] = getRandomIntInclusive(33, 126)
						    a = 0
						    b = 1
					    }
			    	}
		    	}
                
			
                //validação quantidade dos tipos de caracteres
                for (let contador = 0; contador < quantidadeCaracteres; contador++){
                    if (senhaEmNumero[contador] >= 33 && senhaEmNumero[contador] <= 47 || senhaEmNumero[contador] >= 58 && senhaEmNumero[contador] <= 64 || senhaEmNumero[contador] >= 91 && senhaEmNumero[contador] <= 96 || senhaEmNumero[contador] >= 122 && senhaEmNumero[contador] <= 126){
                        simbolo++
                    } else if (senhaEmNumero[contador] >= 48 && senhaEmNumero[contador] <=57){
                        numeros++
                    } else if (senhaEmNumero[contador] >= 97 && senhaEmNumero[contador] <=122){
                        letraMinusculas++
                    } else if (senhaEmNumero[contador] >= 65 && senhaEmNumero[contador] <=90){
                        letraMaiusculas++
                    }
                }
            
                if (simbolo < mininoTipoCaractere || numeros < mininoTipoCaractere || letraMinusculas < mininoTipoCaractere || letraMaiusculas < mininoTipoCaractere){
                    mininoCaracteres = false
                    simbolo = 0
                    numeros = 0
                    letraMinusculas = 0
                    letraMaiusculas = 0
                } else {
                    mininoCaracteres = true
                }
		}

        //confecção de senha a partir da tabela ascii
		for (let contador = 0; contador < quantidadeCaracteres; contador++) {	
			if (senhaEmNumero[contador] == 33){
				senhaEmCaractere[contador] = "!"
			} else if (senhaEmNumero[contador] == 34){
				senhaEmCaractere[contador] = "'"
			} else if (senhaEmNumero[contador] == 35){
				senhaEmCaractere[contador] = "#"
			} else if (senhaEmNumero[contador] == 36){
				senhaEmCaractere[contador] = "$"
			} else if (senhaEmNumero[contador] == 37){
				senhaEmCaractere[contador] = "%"
			} else if (senhaEmNumero[contador] == 38){
				senhaEmCaractere[contador] = "&"
			} else if (senhaEmNumero[contador] == 39){
				senhaEmCaractere[contador] = `"` 
			} else if (senhaEmNumero[contador] == 40){
				senhaEmCaractere[contador] = "("
			} else if (senhaEmNumero[contador] == 41){
				senhaEmCaractere[contador] = ")"
			} else if (senhaEmNumero[contador] == 42){
				senhaEmCaractere[contador] = "*"
			} else if (senhaEmNumero[contador] == 43){
				senhaEmCaractere[contador] = "+"
			} else if (senhaEmNumero[contador] == 44){
				senhaEmCaractere[contador] = ","
			} else if (senhaEmNumero[contador] == 45){
				senhaEmCaractere[contador] = "-"
			} else if (senhaEmNumero[contador] == 46){
				senhaEmCaractere[contador] = "."
			} else if (senhaEmNumero[contador] == 47){
				senhaEmCaractere[contador] = "/"
			} else if (senhaEmNumero[contador] == 48){
				senhaEmCaractere[contador] = "0"
			} else if (senhaEmNumero[contador] == 49){
				senhaEmCaractere[contador] = "1"
			} else if (senhaEmNumero[contador] == 50){
				senhaEmCaractere[contador] = "2"
			} else if (senhaEmNumero[contador] == 51){
				senhaEmCaractere[contador] = "3"
			} else if (senhaEmNumero[contador] == 52){
				senhaEmCaractere[contador] = "4"
			} else if (senhaEmNumero[contador] == 53){
				senhaEmCaractere[contador] = "5"
			} else if (senhaEmNumero[contador] == 54){
				senhaEmCaractere[contador] = "6"
			} else if (senhaEmNumero[contador] == 55){
				senhaEmCaractere[contador] = "7"
			} else if (senhaEmNumero[contador] == 56){
				senhaEmCaractere[contador] = "8"
			} else if (senhaEmNumero[contador] == 57){
				senhaEmCaractere[contador] = "9"
			} else if (senhaEmNumero[contador] == 58){
				senhaEmCaractere[contador] = ":"
			} else if (senhaEmNumero[contador] == 59){
				senhaEmCaractere[contador] = ";"
			} else if (senhaEmNumero[contador] == 60){
				senhaEmCaractere[contador] = "<"
			} else if (senhaEmNumero[contador] == 61){
				senhaEmCaractere[contador] = "="
			} else if (senhaEmNumero[contador] == 62){
				senhaEmCaractere[contador] = ">"
			} else if (senhaEmNumero[contador] == 63){
				senhaEmCaractere[contador] = "?"
			} else if (senhaEmNumero[contador] == 64){
				senhaEmCaractere[contador] = "@"
			} else if (senhaEmNumero[contador] == 65){
				senhaEmCaractere[contador] = "A"
			} else if (senhaEmNumero[contador] == 66){
				senhaEmCaractere[contador] = "B"
			} else if (senhaEmNumero[contador] == 67){
				senhaEmCaractere[contador] = "C"
			} else if (senhaEmNumero[contador] == 68){
				senhaEmCaractere[contador] = "D"
			} else if (senhaEmNumero[contador] == 69){
				senhaEmCaractere[contador] = "E"
			} else if (senhaEmNumero[contador] == 70){
				senhaEmCaractere[contador] = "F"
			} else if (senhaEmNumero[contador] == 71){
				senhaEmCaractere[contador] = "G"
			} else if (senhaEmNumero[contador] == 72){
				senhaEmCaractere[contador] = "H"
			} else if (senhaEmNumero[contador] == 73){
				senhaEmCaractere[contador] = "I"
			} else if (senhaEmNumero[contador] == 74){
				senhaEmCaractere[contador] = "J"
			} else if (senhaEmNumero[contador] == 75){
				senhaEmCaractere[contador] = "K"
			} else if (senhaEmNumero[contador] == 76){
				senhaEmCaractere[contador] = "L"
			} else if (senhaEmNumero[contador] == 77){
				senhaEmCaractere[contador] = "M"
			} else if (senhaEmNumero[contador] == 78){
				senhaEmCaractere[contador] = "N"
			} else if (senhaEmNumero[contador] == 79){
				senhaEmCaractere[contador] = "O"
			} else if (senhaEmNumero[contador] == 80){
				senhaEmCaractere[contador] = "P"
			} else if (senhaEmNumero[contador] == 81){
				senhaEmCaractere[contador] = "Q"
			} else if (senhaEmNumero[contador] == 82){
				senhaEmCaractere[contador] = "R"
			} else if (senhaEmNumero[contador] == 83){
				senhaEmCaractere[contador] = "S"
			} else if (senhaEmNumero[contador] == 84){
				senhaEmCaractere[contador] = "T"
			} else if (senhaEmNumero[contador] == 85){
				senhaEmCaractere[contador] = "U"
			} else if (senhaEmNumero[contador] == 86){
				senhaEmCaractere[contador] = "V"
			} else if (senhaEmNumero[contador] == 87){
				senhaEmCaractere[contador] = "W"
			} else if (senhaEmNumero[contador] == 88){
				senhaEmCaractere[contador] = "X"
			} else if (senhaEmNumero[contador] == 89){
				senhaEmCaractere[contador] = "Y"
			} else if (senhaEmNumero[contador] == 90){
				senhaEmCaractere[contador] = "Z"
			} else if (senhaEmNumero[contador] == 91){
				senhaEmCaractere[contador] = "["
			} else if (senhaEmNumero[contador] == 92){
				senhaEmCaractere[contador] = "\\"
			} else if (senhaEmNumero[contador] == 93){
				senhaEmCaractere[contador] = "]"
			} else if (senhaEmNumero[contador] == 94){
				senhaEmCaractere[contador] = "^"
			} else if (senhaEmNumero[contador] == 95){
				senhaEmCaractere[contador] = "_"
			} else if (senhaEmNumero[contador] == 96){
				senhaEmCaractere[contador] = "`"
			} else if (senhaEmNumero[contador] == 97){
				senhaEmCaractere[contador] = "a"
			} else if (senhaEmNumero[contador] == 98){
				senhaEmCaractere[contador] = "b"
			} else if (senhaEmNumero[contador] == 99){
				senhaEmCaractere[contador] = "c"
			} else if (senhaEmNumero[contador] == 100){
				senhaEmCaractere[contador] = "d"
			} else if (senhaEmNumero[contador] == 101){
				senhaEmCaractere[contador] = "e"
			} else if (senhaEmNumero[contador] == 102){
				senhaEmCaractere[contador] = "f"
			} else if (senhaEmNumero[contador] == 103){
				senhaEmCaractere[contador] = "g"
			} else if (senhaEmNumero[contador] == 104){
				senhaEmCaractere[contador] = "h"
			} else if (senhaEmNumero[contador] == 105){
				senhaEmCaractere[contador] = "i"
			} else if (senhaEmNumero[contador] == 106){
				senhaEmCaractere[contador] = "j"
			} else if (senhaEmNumero[contador] == 107){
				senhaEmCaractere[contador] = "k"
			} else if (senhaEmNumero[contador] == 108){
				senhaEmCaractere[contador] = "l"
			} else if (senhaEmNumero[contador] == 109){
				senhaEmCaractere[contador] = "m"
			} else if (senhaEmNumero[contador] == 110){
				senhaEmCaractere[contador] = "n"
			} else if (senhaEmNumero[contador] == 111){
				senhaEmCaractere[contador] = "o"
			} else if (senhaEmNumero[contador] == 112){
				senhaEmCaractere[contador] = "p"
			} else if (senhaEmNumero[contador] == 113){
				senhaEmCaractere[contador] = "q"
			} else if (senhaEmNumero[contador] == 114){
				senhaEmCaractere[contador] = "r"
			} else if (senhaEmNumero[contador] == 115){
				senhaEmCaractere[contador] = "s"
			} else if (senhaEmNumero[contador] == 116){
				senhaEmCaractere[contador] = "t"
			} else if (senhaEmNumero[contador] == 117){
				senhaEmCaractere[contador] = "u"
			} else if (senhaEmNumero[contador] == 118){
				senhaEmCaractere[contador] = "v"
			} else if (senhaEmNumero[contador] == 119){
				senhaEmCaractere[contador] = "w"
			} else if (senhaEmNumero[contador] == 120){
				senhaEmCaractere[contador] = "x"
			} else if (senhaEmNumero[contador] == 121){
				senhaEmCaractere[contador] = "y"
			} else if (senhaEmNumero[contador] == 122){
				senhaEmCaractere[contador] = "z"
			} else if (senhaEmNumero[contador] == 123){
				senhaEmCaractere[contador] = "{"
			} else if (senhaEmNumero[contador] == 124){
				senhaEmCaractere[contador] = "|"
			} else if (senhaEmNumero[contador] == 125){
				senhaEmCaractere[contador] = "}"
			} else if (senhaEmNumero[contador] == 126){
				senhaEmCaractere[contador] = "~"
			}
		}

        // mostrar o resultado
        resposta.innerHTML += `<p>Sua senha tem ${quantidadeCaracteres} caracteres, sendo:</p>`
        resposta.innerHTML += `<p>${simbolo} símbolos;</p>`
        resposta.innerHTML += `<p>${numeros} números;</p>`
        resposta.innerHTML += `<p>${letraMaiusculas} letras maiúsculas;</p>`
        resposta.innerHTML += `<p>${letraMinusculas} letras minúsculas;</p>`
        //resposta.innerHTML += `<p>Mímino : ${mininoTipoCaractere}`
        resposta.innerHTML += `<p><strong>Sua senha é: </strong></p>`
        /*for(let contador = 0; contador < quantidadeCaracteres; contador++) {
            resposta.innerHTML += `${senhaEmNumero[contador]} - `
        }*/
        resposta.innerHTML += `<p></p>`
        for(let contador = 0; contador < quantidadeCaracteres; contador++) {
            resposta.innerHTML += `<strong>${senhaEmCaractere[contador]}</strong>`
        }
    }
    
}
/*
símbolos - !"#$%&'()*+,-./:;<=>?@[\]^_`~
numeros - 0123456789
letras maiúsculas - ABCDEFGHIJKLMNOPQRSTUVWXYZ
letras minúsculas - abcdefghijklmnopqrstuvwxyz
*/