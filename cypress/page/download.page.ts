class UploadPage {

    private baseUrl: string
    private selectorDownloadButton: string

    constructor() {
        this.baseUrl = "https://demoqa.com/upload-download"
        this.selectorDownloadButton = "#downloadButton"
    }

    visitPage() {
        cy.visit(this.baseUrl)
    }

    checkUploadedFileName(expectedResult: string) {
        cy.get(this.selectorUploadedFilesText).should('be.visible')
    }
}
export { UploadPage }
