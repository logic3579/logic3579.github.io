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
                text: 'AppDefinition & Development',
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
                            { text: 'Tekton', link: '/gitbook/CNCF/AppDefinitionDevelopment/ContinuousIntegrationDelivery/tekton' }
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
                text: 'Observability & Analysis',
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
                        text: 'Logging',
                        items: [
                            { text: 'Elastic', link: '/gitbook/CNCF/ObservabilityAnalysis/Logging/elastic' },
                            { text: 'Fluentd', link: '/gitbook/CNCF/ObservabilityAnalysis/Logging/fluentd' },
                            { text: 'Logstash', link: '/gitbook/CNCF/ObservabilityAnalysis/Logging/logstash' },
                            { text: 'Loki', link: '/gitbook/CNCF/ObservabilityAnalysis/Logging/loki' }
                        ]
                    },
                    {
                        text: 'Monitoring',
                        items: [
                            { text: 'Grafana', link: '/gitbook/CNCF/ObservabilityAnalysis/Monitoring/grafana' },
                            { text: 'Prometheus', link: '/gitbook/CNCF/ObservabilityAnalysis/Monitoring/prometheus' }
                        ]
                    },
                    {
                        text: 'Tracing',
                        items: [
                            { text: 'Jaeger', link: '/gitbook/CNCF/ObservabilityAnalysis/Tracing/jaeger' }
                        ]
                    }
                ]
            },
            {
                text: 'Orchestration & Management',
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
                            { text: 'Ansible', link: '/gitbook/CNCF/Provisioning/AutomationConfiguration/ansible/README' },
                            { text: 'Apollo', link: '/gitbook/CNCF/Provisioning/AutomationConfiguration/apollo' },
                            { text: 'OpenStack', link: '/gitbook/CNCF/Provisioning/AutomationConfiguration/openstack' },
                            { text: 'Salt Project', link: '/gitbook/CNCF/Provisioning/AutomationConfiguration/saltproject/README' },
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
            { text: 'Bash', link: '/gitbook/Development/Bash/README' },
            { text: 'Golang', link: '/gitbook/Development/Golang/README' },
            { text: 'Java', link: '/gitbook/Development/Java/README' },
            { text: 'Lua', link: '/gitbook/Development/Lua/README' },
            { text: 'Node.js', link: '/gitbook/Development/Node.js/README' },
            { text: 'Python', link: '/gitbook/Development/Python/README' },
            { text: 'Ruby', link: '/gitbook/Development/Ruby/README' },
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
                    { text: 'Automation', link: '/gitbook/Operations/CommandManual/Automation' },
                    { text: 'Build Tools', link: '/gitbook/Operations/CommandManual/BuildTools' },
                    { text: 'Container Runtime', link: '/gitbook/Operations/CommandManual/ContainerRuntime' },
                    { text: 'Database', link: '/gitbook/Operations/CommandManual/Database' },
                    { text: 'IO Tools', link: '/gitbook/Operations/CommandManual/IOTools' },
                    { text: 'Memory Tools', link: '/gitbook/Operations/CommandManual/MemoryTools' },
                    { text: 'Network Tools', link: '/gitbook/Operations/CommandManual/NetworkTools' },
                    { text: 'OpenSSL', link: '/gitbook/Operations/CommandManual/OpenSSL' },
                    { text: 'Package', link: '/gitbook/Operations/CommandManual/Package' },
                    { text: 'Streaming Messaging', link: '/gitbook/Operations/CommandManual/StreamingMessaging' },
                    { text: 'System Tools', link: '/gitbook/Operations/CommandManual/SystemTools' },
                    { text: 'Systemd', link: '/gitbook/Operations/CommandManual/Systemd' },
                    { text: 'Text Swordsman', link: '/gitbook/Operations/CommandManual/TextSwordsman' },
                    { text: 'Version Control', link: '/gitbook/Operations/CommandManual/VersionControl' },
                    { text: 'Video Tools', link: '/gitbook/Operations/CommandManual/VideoTools' }
                ]
            },
            {
                text: 'Network',
                collapsed: true,
                items: [
                    { text: 'CDN', link: '/gitbook/Operations/Network/cdn' },
                    { text: 'Computer Network', link: '/gitbook/Operations/Network/computer-network' },
                    { text: 'HTTP', link: '/gitbook/Operations/Network/http' },
                    { text: 'Kubernetes Network', link: '/gitbook/Operations/Network/k8s-network' },
                    { text: 'NFS', link: '/gitbook/Operations/Network/nfs' },
                    { text: 'TCP', link: '/gitbook/Operations/Network/tcp' }
                ]
            },
            {
                text: 'Service Configuration',
                collapsed: true,
                items: [
                    { text: 'Elastic', link: '/gitbook/Operations/ServiceConf/sc-elastic' },
                    { text: 'Fluentd', link: '/gitbook/Operations/ServiceConf/sc-fluentd' },
                    { text: 'Kafka', link: '/gitbook/Operations/ServiceConf/sc-kafka' },
                    { text: 'Logstash', link: '/gitbook/Operations/ServiceConf/sc-logstash' },
                    { text: 'MongoDB', link: '/gitbook/Operations/ServiceConf/sc-mongodb' },
                    { text: 'Monitoring', link: '/gitbook/Operations/ServiceConf/sc-monitoring' },
                    { text: 'MySQL', link: '/gitbook/Operations/ServiceConf/sc-mysqld' },
                    { text: 'Nginx', link: '/gitbook/Operations/ServiceConf/sc-nginx' },
                    { text: 'PostgreSQL', link: '/gitbook/Operations/ServiceConf/sc-postgresql' },
                    { text: 'Redis', link: '/gitbook/Operations/ServiceConf/sc-redis' },
                    { text: 'SaltStack', link: '/gitbook/Operations/ServiceConf/sc-saltstack' }
                ]
            },
            {
                text: 'System',
                collapsed: true,
                items: [
                    { text: 'Boot', link: '/gitbook/Operations/System/boot' },
                    { text: 'iptables', link: '/gitbook/Operations/System/iptables' },
                    { text: 'Linnux From Scratch', link: '/gitbook/Operations/System/lfs' },
                    { text: 'Nix', link: '/gitbook/Operations/System/nix' }
                ]
            },
            { text: 'Kernel', link: '/gitbook/Operations/Kernel' },
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