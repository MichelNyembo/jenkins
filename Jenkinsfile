pipeline {
    agent any

    environment {
        DEPLOY_USER = 'iis_user'              
        DEPLOY_HOST = '192.168.10.2'          
        DEPLOY_PATH = '/c/inetpub/wwwroot'    
    }

    stages {
        stage('Cloner depuis GitHub') {
            steps {
                git url: 'https://github.com/MichelNyembo/jenkins.git', branch: 'main'
            }
        }

        stage('Transférer vers IIS') {
            steps {
                sshagent (credentials: ['id-ssh-windows']) {
                    sh '''
                    echo "Déploiement vers le serveur IIS..."
                    scp -r * $DEPLOY_USER@$DEPLOY_HOST:$DEPLOY_PATH
                    '''
                }
            }
        }

        stage('Fin') {
            steps {
                echo 'Déploiement terminé avec succès sur IIS'
            }
        }
    }
}
