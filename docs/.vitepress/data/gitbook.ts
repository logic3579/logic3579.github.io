export const gitbookSidebar = [
    {
        text: 'Introduction',
        link: '/gitbook/README'
    },
    {
        text: 'AI',
        collapsed: false,
        items: [
            { text: 'Overview', link: '/gitbook/AI/README' }
        ]
    },
    {
        text: 'APP-META',
        collapsed: false,
        items: [
            { text: 'Overview', link: '/gitbook/APP-META/README' }
        ]
    },
    {
        text: 'CNCF',
        collapsed: false,
        items: [
            { text: 'Overview', link: '/gitbook/CNCF/README' },
            {
                text: 'AppDefinition and Development',
                collapsed: true,
                items: [
                    {
                        text: 'Application Definition & Image Build',
                        items: [
                            { text: 'Helm', link: '/gitbook/CNCF/AppDefinitionDevelopment/ApplicationDefinitionImageBuild/helm' }
                        ]
                    },
                    {
                        text: 'Continuous Integration & Delivery',
                        items: [
                            { text: 'Argo', link: '/gitbook/CNCF/AppDefinitionDevelopment/ContinuousIntegrationDelivery/argo' },
                            { text: 'GitLab', link: '/gitbook/CNCF/AppDefinitionDevelopment/ContinuousIntegrationDelivery/gitlab' },
                            { text: 'Jenkins', link: '/gitbook/CNCF/AppDefinitionDevelopment/ContinuousIntegrationDelivery/jenkins' },
                        ]
                    },
                    {
                        text: 'Database',
                        items: [
                            { text: 'MongoDB', link: '/gitbook/CNCF/AppDefinitionDevelopment/Database/mongodb' },
                            { text: 'MySQL', link: '/gitbook/CNCF/AppDefinitionDevelopment/Database/mysql' },
                            { text: 'PostgreSQL', link: '/gitbook/CNCF/AppDefinitionDevelopment/Database/postgresql' },
                            { text: 'Redis', link: '/gitbook/CNCF/AppDefinitionDevelopment/Database/redis' },
                            { text: 'TiKV', link: '/gitbook/CNCF/AppDefinitionDevelopment/Database/tikv' }
                        ]
                    },
                    {
                        text: 'Streaming & Messaging',
                        items: [
                            { text: 'EMQX', link: '/gitbook/CNCF/AppDefinitionDevelopment/StreamingMessaging/emqx' },
                            { text: 'Kafka', link: '/gitbook/CNCF/AppDefinitionDevelopment/StreamingMessaging/kafka' },
                            { text: 'RabbitMQ', link: '/gitbook/CNCF/AppDefinitionDevelopment/StreamingMessaging/rabbitmq' },
                            { text: 'RocketMQ', link: '/gitbook/CNCF/AppDefinitionDevelopment/StreamingMessaging/rocketmq' }
                        ]
                    }
                ]
            },
            {
                text: 'CNAI',
                collapsed: true,
                items: [
                    {
                        text: 'Data Architecture',
                        items: [
                            { text: 'ClickHouse', link: '/gitbook/CNCF/CNAI/DataArchitecture/clickhouse' }
                        ]
                    },
                    {
                        text: 'Data Science',
                        items: [
                            { text: 'PyTorch', link: '/gitbook/CNCF/CNAI/DataScience/pytorch' },
                            { text: 'TensorFlow', link: '/gitbook/CNCF/CNAI/DataScience/tensorflow' }
                        ]
                    }
                ]
            },
            {
                text: 'Observability and Analysis',
                collapsed: true,
                items: [
                    {
                        text: 'Chaos Engineering',
                        items: [
                            { text: 'Chaos Mesh', link: '/gitbook/CNCF/ObservabilityAnalysis/ChaosEngineering/chaosmesh' }
                        ]
                    },
                    {
                        text: 'Continuous Optimization',
                        items: [
                            { text: 'OpenCost', link: '/gitbook/CNCF/ObservabilityAnalysis/ContinuousOptimization/opencost' }
                        ]
                    },
                    {
                        text: 'Observability',
                        items: [
                            { text: 'Elastic', link: '/gitbook/CNCF/ObservabilityAnalysis/Observability/elastic' },
                            { text: 'Fluentd', link: '/gitbook/CNCF/ObservabilityAnalysis/Observability/fluentd' },
                            { text: 'Grafana', link: '/gitbook/CNCF/ObservabilityAnalysis/Observability/grafana' },
                            { text: 'Jaeger', link: '/gitbook/CNCF/ObservabilityAnalysis/Observability/jaeger' },
                            { text: 'Logstash', link: '/gitbook/CNCF/ObservabilityAnalysis/Observability/logstash' },
                            { text: 'Loki', link: '/gitbook/CNCF/ObservabilityAnalysis/Observability/loki' },
                            { text: 'Prometheus', link: '/gitbook/CNCF/ObservabilityAnalysis/Observability/prometheus' }
                        ]
                    },
                ]
            },
            {
                text: 'Orchestration and Management',
                collapsed: true,
                items: [
                    {
                        text: 'API Gateway',
                        items: [
                            { text: 'Higress', link: '/gitbook/CNCF/OrchestrationManagement/APIGateway/higress' },
                            { text: 'Tyk', link: '/gitbook/CNCF/OrchestrationManagement/APIGateway/tyk' }
                        ]
                    },
                    {
                        text: 'Coordination & Service Discovery',
                        items: [
                            { text: 'CoreDNS', link: '/gitbook/CNCF/OrchestrationManagement/CoordinationServiceDiscovery/coredns' },
                            { text: 'Etcd', link: '/gitbook/CNCF/OrchestrationManagement/CoordinationServiceDiscovery/etcd' },
                            { text: 'Nacos', link: '/gitbook/CNCF/OrchestrationManagement/CoordinationServiceDiscovery/nacos' },
                            { text: 'ZooKeeper', link: '/gitbook/CNCF/OrchestrationManagement/CoordinationServiceDiscovery/zookeeper' }
                        ]
                    },
                    {
                        text: 'Remote Procedure Call',
                        items: [
                            { text: 'gRPC', link: '/gitbook/CNCF/OrchestrationManagement/RemoteProcedureCall/grpc' }
                        ]
                    },
                    {
                        text: 'Scheduling & Orchestration',
                        items: [
                            { text: 'Kubernetes', link: '/gitbook/CNCF/OrchestrationManagement/SchedulingOrchestration/Kubernetes/README' }
                        ]
                    },
                    {
                        text: 'Service Mesh',
                        items: [
                            { text: 'Istio', link: '/gitbook/CNCF/OrchestrationManagement/ServiceMesh/istio' }
                        ]
                    },
                    {
                        text: 'Service Proxy',
                        items: [
                            { text: 'Envoy', link: '/gitbook/CNCF/OrchestrationManagement/ServiceProxy/envoy' },
                            { text: 'HAProxy', link: '/gitbook/CNCF/OrchestrationManagement/ServiceProxy/haproxy' },
                            { text: 'Nginx', link: '/gitbook/CNCF/OrchestrationManagement/ServiceProxy/nginx' }
                        ]
                    }
                ]
            },
            {
                text: 'Provisioning',
                collapsed: true,
                items: [
                    {
                        text: 'Automation & Configuration',
                        items: [
                            { text: 'Ansible', link: '/gitbook/CNCF/Provisioning/AutomationConfiguration/ansible' },
                            { text: 'Apollo', link: '/gitbook/CNCF/Provisioning/AutomationConfiguration/apollo' },
                            { text: 'OpenStack', link: '/gitbook/CNCF/Provisioning/AutomationConfiguration/openstack' },
                            { text: 'Salt Project', link: '/gitbook/CNCF/Provisioning/AutomationConfiguration/saltproject' },
                            { text: 'Terraform', link: '/gitbook/CNCF/Provisioning/AutomationConfiguration/terraform' }
                        ]
                    },
                    {
                        text: 'Container Registry',
                        items: [
                            { text: 'Harbor', link: '/gitbook/CNCF/Provisioning/ContainerRegistry/harbor' }
                        ]
                    },
                    {
                        text: 'Key Management',
                        items: [
                            { text: 'Vault', link: '/gitbook/CNCF/Provisioning/KeyManagement/vault' }
                        ]
                    },
                    {
                        text: 'Security & Compliance',
                        items: [
                            { text: 'Cert Manager', link: '/gitbook/CNCF/Provisioning/SecurityCompliance/cert-manager' },
                            { text: 'Keycloak', link: '/gitbook/CNCF/Provisioning/SecurityCompliance/keycloak' }
                        ]
                    }
                ]
            },
            {
                text: 'Runtime',
                collapsed: true,
                items: [
                    {
                        text: 'Cloud Native Network',
                        items: [
                            { text: 'Cilium', link: '/gitbook/CNCF/Runtime/CloudNativeNetwork/cilium' },
                            { text: 'CNI', link: '/gitbook/CNCF/Runtime/CloudNativeNetwork/cni' }
                        ]
                    },
                    {
                        text: 'Cloud Native Storage',
                        items: [
                            { text: 'CSI', link: '/gitbook/CNCF/Runtime/CloudNativeStorage/csi' },
                            { text: 'MinIO', link: '/gitbook/CNCF/Runtime/CloudNativeStorage/minio' },
                            { text: 'Rook', link: '/gitbook/CNCF/Runtime/CloudNativeStorage/rook' },
                            { text: 'Velero', link: '/gitbook/CNCF/Runtime/CloudNativeStorage/velero' }
                        ]
                    },
                    {
                        text: 'Container Runtime',
                        items: [
                            { text: 'Docker', link: '/gitbook/CNCF/Runtime/ContainerRuntime/Docker/README' },
                            { text: 'Containerd', link: '/gitbook/CNCF/Runtime/ContainerRuntime/containerd' },
                            { text: 'CRI-O', link: '/gitbook/CNCF/Runtime/ContainerRuntime/cri-o' },
                            { text: 'Lima', link: '/gitbook/CNCF/Runtime/ContainerRuntime/lima' }
                        ]
                    }
                ]
            },
            {
                text: 'Serverless',
                collapsed: true,
                items: [
                    { text: 'Overview', link: '/gitbook/CNCF/Serverless/README' },
                ]
            },
        ]
    },
    {
        text: 'Development',
        collapsed: false,
        items: [
            { text: 'Bash', link: '/gitbook/DevOps/Bash' },
            { text: 'Golang', link: '/gitbook/DevOps/Golang' },
            { text: 'Java', link: '/gitbook/DevOps/Java' },
            { text: 'Node.js', link: '/gitbook/DevOps/NodeJS' },
            { text: 'Python', link: '/gitbook/DevOps/Python' },
            { text: 'Ruby', link: '/gitbook/DevOps/Ruby' },
        ]
    },
    {
        text: 'Environment',
        collapsed: false,
        items: [
            { text: 'Overview', link: '/gitbook/Environment/README' }
        ]
    },
    {
        text: 'Operations',
        collapsed: false,
        items: [
            {
                text: 'Command Manual',
                collapsed: true,
                items: [
                    { text: 'Automation', link: '/gitbook/DevOps/CommandManual/Automation' },
                    { text: 'Build Tools', link: '/gitbook/DevOps/CommandManual/BuildTools' },
                    { text: 'Container Runtime', link: '/gitbook/DevOps/CommandManual/ContainerRuntime' },
                    { text: 'Database', link: '/gitbook/DevOps/CommandManual/Database' },
                    { text: 'IO Tools', link: '/gitbook/DevOps/CommandManual/IOTools' },
                    { text: 'Memory Tools', link: '/gitbook/DevOps/CommandManual/MemoryTools' },
                    { text: 'Network Tools', link: '/gitbook/DevOps/CommandManual/NetworkTools' },
                    { text: 'OpenSSL', link: '/gitbook/DevOps/CommandManual/OpenSSL' },
                    { text: 'Package', link: '/gitbook/DevOps/CommandManual/Package' },
                    { text: 'Streaming Messaging', link: '/gitbook/DevOps/CommandManual/StreamingMessaging' },
                    { text: 'System Tools', link: '/gitbook/DevOps/CommandManual/SystemTools' },
                    { text: 'Systemd', link: '/gitbook/DevOps/CommandManual/Systemd' },
                    { text: 'Text Swordsman', link: '/gitbook/DevOps/CommandManual/TextSwordsman' },
                    { text: 'Version Control', link: '/gitbook/DevOps/CommandManual/VersionControl' },
                    { text: 'Video Tools', link: '/gitbook/DevOps/CommandManual/VideoTools' }
                ]
            },
            {
                text: 'Network',
                collapsed: true,
                items: [
                    { text: 'CDN', link: '/gitbook/DevOps/Network/cdn' },
                    { text: 'Computer Network', link: '/gitbook/DevOps/Network/computer-network' },
                    { text: 'HTTP', link: '/gitbook/DevOps/Network/http' },
                    { text: 'Kubernetes Network', link: '/gitbook/DevOps/Network/k8s-network' },
                    { text: 'NFS', link: '/gitbook/DevOps/Network/nfs' },
                    { text: 'TCP', link: '/gitbook/DevOps/Network/tcp' }
                ]
            },
            {
                text: 'Service Configuration',
                collapsed: true,
                items: [
                    { text: 'Elastic', link: '/gitbook/DevOps/ServiceConf/elasticsearch' },
                    { text: 'Grafana', link: '/gitbook/DevOps/ServiceConf/grafana' },
                    { text: 'Jenkins', link: '/gitbook/DevOps/ServiceConf/jenkins' },
                    { text: 'Kafka', link: '/gitbook/DevOps/ServiceConf/kafka' },
                    { text: 'MongoDB', link: '/gitbook/DevOps/ServiceConf/mongodb' },
                    { text: 'Monitoring', link: '/gitbook/DevOps/ServiceConf/observability' },
                    { text: 'MySQL', link: '/gitbook/DevOps/ServiceConf/mysql' },
                    { text: 'Nginx', link: '/gitbook/DevOps/ServiceConf/nginx' },
                    { text: 'PostgreSQL', link: '/gitbook/DevOps/ServiceConf/postgresql' },
                    { text: 'Redis', link: '/gitbook/DevOps/ServiceConf/redis' },
                    { text: 'SaltStack', link: '/gitbook/DevOps/ServiceConf/saltstack' }
                ]
            },
            {
                text: 'System',
                collapsed: true,
                items: [
                    { text: 'Boot', link: '/gitbook/DevOps/System/boot' },
                    { text: 'iptables', link: '/gitbook/DevOps/System/iptables' },
                    { text: 'KVM', link: '/gitbook/DevOps/System/kvm' },
                    { text: 'Linux From Scratch', link: '/gitbook/DevOps/System/lfs' },
                    { text: 'Nix', link: '/gitbook/DevOps/System/nix' }
                ]
            },
            { text: 'Kernel', link: '/gitbook/DevOps/Kernel' },
        ]
    },
    {
        text: 'Platform',
        collapsed: false,
        items: [
            {
                text: 'Alibaba Cloud',
                collapsed: true,
                items: [
                    { text: 'RAM', link: '/gitbook/Platform/AlibabaCloud/ram' },
                    { text: 'VPC', link: '/gitbook/Platform/AlibabaCloud/vpc' }
                ]
            },
            {
                text: 'AWS',
                collapsed: true,
                items: [
                    { text: 'CloudFront', link: '/gitbook/Platform/AWS/cloudfront' },
                    { text: 'EC2', link: '/gitbook/Platform/AWS/ec2' },
                    { text: 'EKS', link: '/gitbook/Platform/AWS/eks' }
                ]
            },
            {
                text: 'Distribution Installer',
                collapsed: true,
                items: [
                    { text: 'K3s', link: '/gitbook/Platform/DistributionInstaller/k3s' },
                    { text: 'KubeSphere', link: '/gitbook/Platform/DistributionInstaller/kubesphere' },
                    { text: 'Kubespray', link: '/gitbook/Platform/DistributionInstaller/kubespray' },
                    { text: 'Minikube', link: '/gitbook/Platform/DistributionInstaller/minikube' },
                    { text: 'Rancher', link: '/gitbook/Platform/DistributionInstaller/rancher' }
                ]
            },
            {
                text: 'Google Cloud',
                collapsed: true,
                items: [
                    { text: 'GCE', link: '/gitbook/Platform/GoogleCloud/gce' },
                    { text: 'GCloud', link: '/gitbook/Platform/GoogleCloud/gcloud' },
                    { text: 'GKE', link: '/gitbook/Platform/GoogleCloud/gke' }
                ]
            },
            {
                text: 'PaaS Container Service',
                collapsed: true,
                items: [
                    { text: 'Portainer', link: '/gitbook/Platform/PaasContainerService/portainer' }
                ]
            }
        ]
    },
    {
        text: 'Misc', collapsed: false,
        items: [
            { text: 'JiraCDflow', link: '/gitbook/Misc/JiraCDflow/README' },
            {
                text: 'Kubernetes',
                items: [
                    {
                        text: 'Network',
                        link: '/gitbook/Misc/Kubernetes/k8s-network'
                    },
                    {
                        text: 'RBAC',
                        link: '/gitbook/Misc/Kubernetes/k8s-rbac'
                    },
                    {
                        text: 'Kube Eventer',
                        link: '/gitbook/Misc/Kubernetes/kube-eventer'
                    },
                    {
                        text: 'Cluster Deploy',
                        link: '/gitbook/Misc/Kubernetes/ubuntu-containerd-deploy-k8s'
                    }
                ]
            },
            {
                text: 'Science',
                collapsed: false,
                items: [
                    { text: 'V2Ray', link: '/gitbook/Misc/Science/V2Ray/README' },
                    { text: 'ipsec', link: '/gitbook/Misc/Science/ipsec' },
                    { text: 'OpenVPN', link: '/gitbook/Misc/Science/openvpn' },
                    { text: 'SSHTunnel', link: '/gitbook/Misc/Science/sshtunnel' },
                    { text: 'WireGuard', link: '/gitbook/Misc/Science/wireguard' },
                ]
            },
            {
                text: 'Git Flow',
                link: '/gitbook/Misc/gitflow'
            },
            {
                text: 'Hosting',
                link: '/gitbook/Misc/hosting'
            },
            {
                text: 'Interview',
                link: '/gitbook/Misc/interview'
            },

        ]
    },
]
