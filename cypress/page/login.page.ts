class LoginPage {
    
    private email: string
    private emailButton: string
    private passwd: string
    private passwdButton: string
    private loginButton: string

    constructor(email: string, passwd: string) {
        this.email = email
        this.emailButton = "#email"
        this.passwd = passwd
        this.passwdButton = "#passwd"
        this.loginButton = "#SubmitLogin"
    }

    public enterEmail() {
        cy.get(this.emailButton).type(this.email)
    }

    public enterPasswd() {
        cy.get(this.passwdButton).type(this.passwd)
    }

    public loginButtonFun() {
        cy.get(this.loginButton).click()
    }
}
export {LoginPage}
