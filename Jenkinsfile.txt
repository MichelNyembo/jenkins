pipeline {
    agent any

    environment {
        // Adresse SSH de ton serveur de déploiement
        DEPLOY_USER = 'michel-nyembo'
        DEPLOY_HOST = '192.168.10.10'
        DEPLOY_PATH = '/home/michel-nyembo/Documents/site_apashe'
    }

    stages {
        stage('Checkout') {
            steps {
                // Récupérer le code source depuis GitHub
                git branch: 'main', url: 'https://github.com/MichelNyembo/jenkins.git'
            }
        }

        stage('Build') {
            steps {
                // Ici tu peux ajouter des commandes de build si nécessaire
                // Par exemple, npm install, npm run build, etc.
                echo "Build étape (si nécessaire)"
            }
        }

        stage('Deploy') {
            steps {
                // Copier les fichiers vers le serveur (avec SCP par exemple)
                // Nécessite que Jenkins ait une clé SSH configurée pour le serveur
                sh """
                scp -r * ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}
                """
            }
        }
    }

    post {
        success {
            echo "Déploiement réussi !"
        }
        failure {
            echo "Le déploiement a échoué."
        }
    }
}
