class PracticeFormPage {

    private selectorParentStateDropdown = ".css-1wa3eu0-placeholder:contains('Select State')"
    private selectorParentCityDropdown = ".css-1wa3eu0-placeholder:contains('Select City')"

    private transformHobby = {
        "Sports": 1,
        "Reading": 2,
        "Music": 3
    }

    private getSelectorState(state: string) {
        return `.css-26l3qy-menu > div > div:contains('${state}')`
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

    public selectState(state: string) {
        this.click(this.selectorParentStateDropdown)
        this.click(this.getSelectorState(state))
    }

    public selectCity(city: string) {
        this.click(this.selectorParentCityDropdown)
        this.click(this.getSelectorState(city))
    }

    public fillForm(information: {
        name: string,
        lastName: string,
        email: string,
        gender: string,
        dateOfBirth: string,
        mobileNumber: string,
        hobbies: Array<string>,
        currentAddress: string,
        state: string,
        city: string
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
        this.selectState(information.state)
        this.selectCity(information.city)
        this.click(this.getSelectorSubmitButton)
    }

    public verifyModalHeaderText(expectedText: string) {
        cy.get(this.getSelectorInputById("example-modal-sizes-title-lg")).should("have.text", expectedText)
    }
}
export { PracticeFormPage }
