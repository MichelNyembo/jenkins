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
                // Ajoute ici tes commandes de build si tu en as (npm build, make, etc.)
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    echo "Déploiement local vers $DEPLOY_DIR"
                    # Supprimer tout dans le dossier de déploiement (attention à bien cibler le bon dossier)
                    rm -rf "$DEPLOY_DIR"/*
                    # Recréer le dossier au cas où (mkdir -p gère déjà ça, mais c'est une précaution)
                    mkdir -p "$DEPLOY_DIR"
                    # Copier tout le contenu du workspace vers le dossier de déploiement
                    rsync -av --exclude='.git' ./ "$DEPLOY_DIR"
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
