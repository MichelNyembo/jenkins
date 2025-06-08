pipeline {
    agent any

    environment {
        DEPLOY_DIR = "/home/michel-nyembo/Documents/site_apashe"
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/MichelNyembo/jenkins.git', branch: 'main'
            }
        }

        stage('Build') {
            steps {
                echo 'Build étape (si nécessaire)'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    echo "Déploiement local vers $DEPLOY_DIR"
                    mkdir -p "$DEPLOY_DIR"
                    cp -r Jenkinsfile index.html script.js styles.css "$DEPLOY_DIR"
                '''
            }
        }
    }

    post {
        failure {
            echo 'Le déploiement a échoué.'
        }
        success {
            echo 'Le déploiement a réussi.'
        }
    }
}
