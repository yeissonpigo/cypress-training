class PracticeFormPage {

    private transformHobby = {
        "Sports": 1,
        "Reading": 2,
        "Music": 3
    }

    private getSelectorInputById(inputId: string) {
        return `#${inputId}`
    }

    private getSelectorGenderByText(gender: string) {
        return `[value="${gender}"]`
    }

    private getSelectorHobbieByPosition(position: number) {
        return `#hobbies-checkbox-${position}`
    }

    private getSelectorSubmitButton = "#submit"

    private formContentPage: string

    constructor() {
        this.formContentPage = "https://demoqa.com/automation-practice-form"
    }

    public click(element: string) {
        cy.get(element).click({ force: true })
    }

    public visitFormContentPage() {
        cy.visit(this.formContentPage)
    }

    public insertIntoInput(selector: string, text: string) {
        cy.get(this.getSelectorInputById(selector)).type(text)
    }

    public selectGender(gender: string) {
        cy.get(this.getSelectorGenderByText(gender)).parent().click()
    }

    public selectHobby(hobby: number) {
        cy.get(this.getSelectorHobbieByPosition(hobby)).click({ force: true })
    }

    public fillForm(information: {
        name: string,
        lastName: string,
        email: string,
        gender: string,
        dateOfBirth: string,
        mobileNumber: string,
        hobbies: Array<string>,
        currentAddress: string
    }) {
        this.insertIntoInput("firstName", information.name)
        this.insertIntoInput("lastName", information.lastName)
        this.insertIntoInput("userEmail", information.email)
        this.selectGender(information.gender)
        this.insertIntoInput("userNumber", information.mobileNumber)
        this.insertIntoInput("dateOfBirthInput", information.dateOfBirth)
        information.hobbies.forEach((hobbie) => {
            this.selectHobby(this.transformHobby[`${hobbie}`])
        })
        this.insertIntoInput("currentAddress", information.currentAddress)
        this.click(this.getSelectorSubmitButton)
    }
}
export { PracticeFormPage }
