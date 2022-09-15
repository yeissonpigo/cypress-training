class DownloadPage {

    private baseUrl: string
    private selectorDownloadButton: string

    constructor() {
        this.baseUrl = "https://demoqa.com/upload-download"
        this.selectorDownloadButton = "#downloadButton"
    }

    visitPage() {
        cy.visit(this.baseUrl)
    }

    downloadFile() {
        cy.get(this.selectorDownloadButton).click()
    }

    checkFileExists() {
        cy.readFile("cypress/downloads/sampleFile.jpeg").should('exist')
    }
}
export { DownloadPage }
