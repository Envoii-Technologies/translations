# translations

Centralized Multilingual Translation Repository

## About

This repository serves as a centralized resource for managing JSON translation files for multiple languages, specifically designed for React applications. By structuring translations by language and categorization, it facilitates seamless integration and consistent multilingual support across various projects.

## Structure

Translations are organized by language codes (ISO 639-1) in separate directories. Each directory contains JSON files that are further categorized by modules or functional areas of your application.

````
translations/
│
├── en/
│   ├── module1.json
│   ├── module2.json
│   ├── ...json
│
├── de/
│   ├── module1.json
│   ├── module2.json
│   ├── ...json
│
... (other languages)
````

## Using as a Git Submodule

To include this repository in your project as a submodule:

**1. Add the Submodule:**
`git submodule add [URL-of-this-repository] path/to/submodule`

**2. Initialize and Update the Submodule:**
`git submodule update --init --recursive`

**3. Pull Updates Regularly:**
To update the submodule to the latest version:

`git submodule update --remote`

## Contribution Guidelines

1. **Adding New Translations:**
- Fork the repository.
- Add your translations in the respective language folders.
- Ensure JSON file validity and consistency with existing keys.

2. **Updating Existing Translations:**
- Make changes in a separate branch and submit a pull request.
- Ensure changes are reviewed for accuracy and consistency.

3. **Reporting Issues:**
- Use the GitHub Issues feature to report any discrepancies or suggestions.

4. Versioning
- This repository follows Semantic Versioning (SemVer).
- Ensure version numbers are updated appropriately with significant changes.
