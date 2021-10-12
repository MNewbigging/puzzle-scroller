import { action, observable } from 'mobx';

export class ChangingPasswordState {
  @observable public currentPassword: string;
  @observable public passwordInput = '';
  public completed = false;
  private readonly passwords = ['apple', 'banana', 'orange', 'cherry', 'melon'];
  private curPasswordIdx = 0;

  constructor() {
    this.currentPassword = this.passwords[this.curPasswordIdx];
  }

  public disableContinue() {
    return this.passwordInput !== this.currentPassword;
  }

  @action public setPassword(pw: string) {
    this.passwordInput = pw;
  }

  public confirmPassword = () => {
    if (this.passwordInput === this.currentPassword) {
      this.nextPassword();
    }
  };

  @action private nextPassword() {
    this.curPasswordIdx++;
    if (this.curPasswordIdx === this.passwords.length) {
      // Last password
      this.completed = true;
    } else {
      this.currentPassword = this.passwords[this.curPasswordIdx];
    }
  }
}
