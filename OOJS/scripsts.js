class ContaBancaria{
    constructor(agencia,numero,tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.saldo = 0;       
    }
    get saldo(){
        return this._saldo;
    }
    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if(valor > this._saldo){
            return 'operação negada';
        }
        saldo = this._saldo - valor;
        
        return this._saldo;
    }

    depositar(valor){
        this._saldo += valor;
        return this._saldo;

    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia,numero,cartaoCredito){
        super(agencia,numero);
        this.tipo='corrente';
        this.cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;       
    }
    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

class ContaPoupança extends ContaBancaria{
    constructor(agencia,numero,saldo){
        super(agencia,numero);
        this.tipo='poupanca';
    }
}
class Contauniversitaria extends ContaBancaria{
    constructor(agencia,numero){
        super(agencia,numero);
        this.tipo='universitaria';
    }d
    sacar(valor){
        if(valor > 500){
            return 'saque maximo de 500 reais';
        }
        this._saldo = this._saldo - valor;
    }    
}
