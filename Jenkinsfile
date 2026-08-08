pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Install Playwright') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run Playwright Tests') {
             steps {
                bat 'npx playwright test tests/Demo/AdminHRM2Test.spec.ts --project=chromium'
            }
        }
    }
}