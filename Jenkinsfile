pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        // stage('Test') {
        //     steps {
        //         sh 'npm test'
        //     }
        // }
        stage('Docker Build') {
            steps {
                // sh 'docker build -t webshopingNextjs .'

                // Build and push Docker image
                    sh "docker build -t webshopingNextjs:${env.BUILD_NUMBER} ."
                    sh "docker push webshopingNextjs:${env.BUILD_NUMBER}"
            }
        }
        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dckr_pat_kQEcwu1H9RaaJn65rb5EGX7lWbo', usernameVariable: 'dachtrakun1973', passwordVariable: 'DOCdach1973KER')]) {
                    sh 'docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD'
                    sh 'docker push webshopingNextjs'
                }
            }
        }
    }
}
