class MenuContentPage {
    private menuButton(buttonText: string){
        return `#block_top_menu > ul > li > a[title='${buttonText}']`
    }
    private menuContentPageUrl: string

    constructor(){
        this.menuContentPageUrl = "http://automationpractice.com/"
    }

    public visitMenuContentPage() {
        cy.visit(this.menuContentPageUrl)
    }

    public goToTShirtMenu() {
        cy.get(this.menuButton("T-shirts")).click()
    }

    public goToDressMenu(){
        cy.get(this.menuButton("Dresses")).click()
    }
}

export {MenuContentPage}
