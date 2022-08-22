class LoginPage {
    
    private email: string
    private emailInput: string
    private passwd: string
    private passwdInput: string
    private loginButton: string

    constructor(email: string, passwd: string) {
        this.email = email
        this.emailInput = "#email"
        this.passwd = passwd
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
