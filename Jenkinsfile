pipeline {
    agent any
	
    stages {
        stage('Build') {
            steps {
				echo 'installing'
                sh 'npm install'
            }
		}
		
		stage('Test') {
			steps {
				echo 'testing'
				sh 'chmod +x ./jenkins_scripts/tests/test1.sh'
				sh './jenkins_scripts/tests/test1.sh'
			}
		}
		
		stage('Deliver') {
            steps {
				echo 'delivering'
				sh 'chmod +x ./jenkins_scripts/delivery/deliver.sh'
				sh 'chmod +x ./jenkins_scripts/delivery/kill.sh'
                sh './jenkins_scripts/delivery/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './jenkins_scripts/delivery/kill.sh'
            }
        }
    }
}