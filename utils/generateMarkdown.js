// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Github License](https://img.shields.io/badge/License-${license}-yellow.svg)`;
  } else {
    return("");
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `For more information about the license used for this project, please refer to the [${license} license](https://choosealicense.com/licenses/${license}/).`;
  } else {
    return("");
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `This is licensed under ${license}.`
  } else {
    return("");
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contribution}

  ## Tests

  ${data.test}
  
  ## License
  
  ${renderLicenseSection(data.license)}

  ${renderLicenseLink(data.license)}


  ## Questions

  For any questions or to report an issue, please feel free to check out my Github profile or reach out via email:
  - [Github Profile](https://github.com/${data.Github})
  - Email: <${data.email}>

`;
}

module.exports = generateMarkdown;
