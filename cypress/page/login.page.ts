class LoginPage {
    
    private emailInput: string
    private passwdInput: string
    private loginButton: string

    constructor() {
        this.emailInput = "#email"
        this.passwdInput = "#passwd"
        this.loginButton = "#SubmitLogin"
    }

    //Page elements
    public emailInputFun(){
        return cy.get(this.emailInput)
    }

    public passwdInputFun(){
        return cy.get(this.passwdInput)
    }

    public loginButtonFun(){
        return cy.get(this.loginButton)
    }

    //Page actions
    public login(email: string, passwd: string) {
        this.emailInputFun().type(email)
        this.passwdInputFun().type(passwd)
        this.loginButtonFun().click()
    }
}
export {LoginPage}
