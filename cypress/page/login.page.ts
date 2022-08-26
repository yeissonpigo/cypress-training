class LoginPage {
    
    private emailInput: string
    private passwdInput: string
    private loginButton: string

    constructor() {
        this.emailInput = "#email"
        this.passwdInput = "#passwd"
        this.loginButton = "#SubmitLogin"
    }

    public login(email: string, passwd: string) {
        cy.get(this.emailInput).type(email)
        cy.get(this.passwdInput).type(passwd)
        cy.get(this.loginButton).click()
    }
}
export {LoginPage}
