// 3. Создайте интерфейс iAccount соследующимиметодами: • balance: хранит цисловое значение баланса света • getBalance():возвращаеттекущийбаланссчета • deposit(amount: number): пополняет счет на указанную сумму • withdraw(amount: number):снимаетуказаннуюсуммусосчета Реализуйте класс Account, который имплементирует интерфейс iAccount. Реализуйте всеметоды интерфейса. Перед снятием withdraw проверяйте, достаточно ли средств на счете. Если средств недостаточно, выбрасывайте ошибку.
class Account {
    balance = 200;
    getBalance() {
        return this.balance;
    }
    ;
    getDeposit(a) {
        this.balance = this.balance + a;
        return this.balance;
    }
    ;
    withdraw(b) {
        if (b < this.balance) {
            this.balance = this.balance - b;
            return this.balance;
        }
        else {
            return 'Баланс счета недостаточен';
        }
    }
    ;
}
const account = new Account();
console.log(account.getBalance());
console.log(account.getDeposit(+prompt()));
console.log(account.withdraw(+prompt()));
