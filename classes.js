// 1- Modele objetos que simulem propriedades de uma Pessoa, 
// uma Universidade e uma República.

class Pessoa {
    constructor(nome, idade, sexo) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }

    pedirConta(Pedido) {

    }

}

class Garcon extends Pessoa {
    constructor(nome, idade, sexo, localDeTrabalho) {
        super(nome, idade, sexo);
        this.localDeTrabalho = localDeTrabalho;
    }

    // 3 Implemente uma função chamada ‘checarIDs’ que apenas André possa
    // executar. A função deve retornar “‘Nome’ pode tomar cerveja”, 
    // caso a pessoa checada seja maior de idade. 
    // Caso a mesma seja menor retornará “‘Nome’ vai tomar Coca-Cola”

    checarIDs(Pessoa) {

        if (Pessoa.idade >= 18) {
            console.log(Pessoa.nome, ", pode tomar cerveja");
        }
        else {
            console.log(Pessoa.nome, ", vai tomar Coca-Cola");
        }

    }
}

class Estudante extends Pessoa {
    constructor(nome, idade, sexo, curso, instituicao, matricula) {
        super(nome, idade, sexo);
        this.curso = curso;
        this.instituicao = instituicao;
        this.matricula = matricula;
    }
}

class Universidade {
    constructor(curso, periodos, cargaHoraria) {
        this.curso = curso;
        this.periodos = periodos;
        this.cargaHoraria = cargaHoraria
    }
}

class Republica {
    constructor(nome, idade, quantidadeMoradores) {
        this.nome = nome;
        this.idade = idade;
        this.quantidadeMoradores = quantidadeMoradores;
    }
}

class Bebida {
    constructor(item, quantidade, valor) {
        this.item = item;
        this.quantidade = quantidade;
        this.valor = valor;
    }

}

class Pedido extends Bebida {
    constructor(item, quantidade, valor) {
        super(item, quantidade, valor);
    }

    calcularTotal(Pedido) {
        total = 0
        for (i = 0; i <= quantidade.length; i++) {
            total += this.valor;
        }
        console.log("A conta deu R$" + this.total + " galerinha.");
    }

    calcularIndividual(Pedido) {
        totalIndividual = 0
        for (i = 0; i <= quantidade.length; i++) {
            totalIndividual += this.valor;
        }
        console.log("Deu R$" + this.totalIndividual / 4 + " para cada um.");
    }
}



