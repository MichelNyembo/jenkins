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
                echo 'Étape build (si nécessaire)'
            }
        }

        stage('Lint & Test') {
            steps {
                sh '''
                  echo "🔍 Vérification de la syntaxe"
                  npm install
                  npx eslint **/*.js
                  npx stylelint "**/*.css"
                  npx htmlhint "**/*.html"
                '''
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                  echo "🚀 Déploiement vers $DEPLOY_DIR"
                  rm -rf "$DEPLOY_DIR"/*
                  mkdir -p "$DEPLOY_DIR"
                  rsync -av --exclude='.git' ./ "$DEPLOY_DIR"
                '''
            }
        }
    }

    post {
        success { echo 'Déploiement terminé avec succès ! 🎉' }
        failure { echo '🔴 Build ou tests échoués, pas de déploiement.' }
    }
}
