import {DownloadPage, UploadPage} from "../page";

describe("Uploads a file, and checks that the name is the right one", () => {
  let uploadPage: UploadPage;
  let downloadPage: DownloadPage;

  before(() => {
    uploadPage = new UploadPage;
  });

  it("Uploads a file", () => {
    // Arrange
    const fileToUpload = "example.json";

    // Act
    uploadPage.visitPage();
    uploadPage.uploadFile(fileToUpload);

    // Assert
    uploadPage.checkUploadedFileName(fileToUpload);
  });

  before(() => {
    downloadPage = new DownloadPage;
  });

  it("Downloads a file", () => {
    // Arrange
    downloadPage.visitPage();

    // Act
    downloadPage.downloadFile();

    // Assert
    downloadPage.checkFileExists();
  });
});
