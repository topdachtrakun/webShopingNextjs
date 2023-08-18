pipeline {
    agent {
        docker {
            image 'shopingweb'  // ใช้ภาพ Docker ของ Node.js เวอร์ชัน 14
        }
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run dev'
            }
        }

        // stage('Test') {
        //     steps {
        //         sh 'npm test'
        //     }
        // }

        // stage('Deploy') {
        //     steps {
        //         sh 'npm run deploy'
        //     }
        // }
    }

    // post {
    //     always {
    //         cleanWs()  // ลบ workspaces เมื่อเสร็จสิ้น
    //     }
    // }
}
