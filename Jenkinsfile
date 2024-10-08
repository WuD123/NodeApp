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
				sh './jenkins_scripts/tests/test1.sh'
			}
		}
    }
}