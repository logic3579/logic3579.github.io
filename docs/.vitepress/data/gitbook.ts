export const gitbookSidebar = [
    {
        text: 'Introduction',
        link: '/gitbook/README',
    },
    {
        text: 'CNCF',
        collapsed: false,
        items: [
            {
                text: 'Overview',
                link: '/gitbook/CNCF/README',
            },
            {
                text: 'AppDefinition and Development',
                link: '/gitbook/CNCF/AppDefinitionDevelopment/README',
                collapsed: true,
                items: [
                    {
                        text: 'Application Definition & Image Build',
                        link: '/gitbook/CNCF/AppDefinitionDevelopment/ApplicationDefinitionImageBuild/README',
                        collapsed: true,
                        items: [
                            {
                                text: 'Helm',
                                link: '/gitbook/CNCF/AppDefinitionDevelopment/ApplicationDefinitionImageBuild/helm',
                            },
                        ],
                    },
                    {
                        text: 'Continuous Integration & Delivery',
                        link: '/gitbook/CNCF/AppDefinitionDevelopment/ContinuousIntegrationDelivery/README',
                        collapsed: true,
                        items: [
                            {
                                text: 'Argo',
                                link: '/gitbook/CNCF/AppDefinitionDevelopment/ContinuousIntegrationDelivery/argo',
                            },
                            {
                                text: 'GitLab',
                                link: '/gitbook/CNCF/AppDefinitionDevelopment/ContinuousIntegrationDelivery/gitlab',
                            },
                            {
                                text: 'Jenkins',
                                link: '/gitbook/CNCF/AppDefinitionDevelopment/ContinuousIntegrationDelivery/jenkins',
                            },
                        ],
                    },
                    {
                        text: 'Database',
                        link: '/gitbook/CNCF/AppDefinitionDevelopment/Database/README',
                        collapsed: true,
                        items: [
                            {
                                text: 'MongoDB',
                                link: '/gitbook/CNCF/AppDefinitionDevelopment/Database/mongodb',
                            },
                            {
                                text: 'MySQL',
                                link: '/gitbook/CNCF/AppDefinitionDevelopment/Database/mysql',
                            },
                            {
                                text: 'PostgreSQL',
                                link: '/gitbook/CNCF/AppDefinitionDevelopment/Database/postgresql',
                            },
                            {
                                text: 'Redis',
                                link: '/gitbook/CNCF/AppDefinitionDevelopment/Database/redis',
                            },
                            {
                                text: 'TiKV',
                                link: '/gitbook/CNCF/AppDefinitionDevelopment/Database/tikv',
                            },
                        ],
                    },
                    {
                        text: 'Streaming & Messaging',
                        link: '/gitbook/CNCF/AppDefinitionDevelopment/StreamingMessaging/README',
                        collapsed: true,
                        items: [
                            {
                                text: 'EMQX',
                                link: '/gitbook/CNCF/AppDefinitionDevelopment/StreamingMessaging/emqx',
                            },
                            {
                                text: 'Kafka',
                                link: '/gitbook/CNCF/AppDefinitionDevelopment/StreamingMessaging/kafka',
                            },
                            {
                                text: 'RabbitMQ',
                                link: '/gitbook/CNCF/AppDefinitionDevelopment/StreamingMessaging/rabbitmq',
                            },
                            {
                                text: 'RocketMQ',
                                link: '/gitbook/CNCF/AppDefinitionDevelopment/StreamingMessaging/rocketmq',
                            },
                        ],
                    },
                ],
            },
            {
                text: 'CNAI',
                link: '/gitbook/CNCF/CNAI/README',
                collapsed: true,
                items: [
                    {
                        text: 'Data Architecture',
                        link: '/gitbook/CNCF/CNAI/DataArchitecture/README',
                        collapsed: true,
                        items: [
                            {
                                text: 'ClickHouse',
                                link: '/gitbook/CNCF/CNAI/DataArchitecture/clickhouse',
                            },
                            {
                                text: 'Flink',
                                link: '/gitbook/CNCF/CNAI/DataArchitecture/flink',
                            },
                        ],
                    },
                    {
                        text: 'Data Science',
                        link: '/gitbook/CNCF/CNAI/DataScience/README',
                        collapsed: true,
                        items: [
                            {
                                text: 'PyTorch',
                                link: '/gitbook/CNCF/CNAI/DataScience/pytorch',
                            },
                            {
                                text: 'TensorFlow',
                                link: '/gitbook/CNCF/CNAI/DataScience/tensorflow',
                            },
                        ],
                    },
                ],
            },
            {
                text: 'Observability and Analysis',
                link: '/gitbook/CNCF/ObservabilityAnalysis/README',
                collapsed: true,
                items: [
                    {
                        text: 'Chaos Engineering',
                        link: '/gitbook/CNCF/ObservabilityAnalysis/ChaosEngineering/README',
                        collapsed: true,
                        items: [
                            {
                                text: 'Chaos Mesh',
                                link: '/gitbook/CNCF/ObservabilityAnalysis/ChaosEngineering/chaosmesh',
                            },
                        ],
                    },
                    {
                        text: 'Continuous Optimization',
                        link: '/gitbook/CNCF/ObservabilityAnalysis/ContinuousOptimization/README',
                        collapsed: true,
                        items: [
                            {
                                text: 'OpenCost',
                                link: '/gitbook/CNCF/ObservabilityAnalysis/ContinuousOptimization/opencost',
                            },
                        ],
                    },
                    {
                        text: 'Observability',
                        link: '/gitbook/CNCF/ObservabilityAnalysis/Observability/README',
                        collapsed: true,
                        items: [
                            {
                                text: 'Elastic',
                                link: '/gitbook/CNCF/ObservabilityAnalysis/Observability/elastic',
                            },
                            {
                                text: 'Fluentd',
                                link: '/gitbook/CNCF/ObservabilityAnalysis/Observability/fluentd',
                            },
                            {
                                text: 'Grafana',
                                link: '/gitbook/CNCF/ObservabilityAnalysis/Observability/grafana',
                            },
                            {
                                text: 'Jaeger',
                                link: '/gitbook/CNCF/ObservabilityAnalysis/Observability/jaeger',
                            },
                            {
                                text: 'Logstash',
                                link: '/gitbook/CNCF/ObservabilityAnalysis/Observability/logstash',
                            },
                            {
                                text: 'Loki',
                                link: '/gitbook/CNCF/ObservabilityAnalysis/Observability/loki',
                            },
                            {
                                text: 'OpenTelemetry',
                                link: '/gitbook/CNCF/ObservabilityAnalysis/Observability/opentelemetry',
                            },
                            {
                                text: 'Prometheus',
                                link: '/gitbook/CNCF/ObservabilityAnalysis/Observability/prometheus',
                            },
                        ],
                    },
                ],
            },
            {
                text: 'Orchestration and Management',
                link: '/gitbook/CNCF/OrchestrationManagement/README',
                collapsed: true,
                items: [
                    {
                        text: 'API Gateway',
                        link: '/gitbook/CNCF/OrchestrationManagement/APIGateway/README',
                        collapsed: true,
                        items: [
                            {
                                text: 'Higress',
                                link: '/gitbook/CNCF/OrchestrationManagement/APIGateway/higress',
                            },
                            {
                                text: 'Tyk',
                                link: '/gitbook/CNCF/OrchestrationManagement/APIGateway/tyk',
                            },
                        ],
                    },
                    {
                        text: 'Coordination & Service Discovery',
                        link: '/gitbook/CNCF/OrchestrationManagement/CoordinationServiceDiscovery/README',
                        collapsed: true,
                        items: [
                            {
                                text: 'CoreDNS',
                                link: '/gitbook/CNCF/OrchestrationManagement/CoordinationServiceDiscovery/coredns',
                            },
                            {
                                text: 'Etcd',
                                link: '/gitbook/CNCF/OrchestrationManagement/CoordinationServiceDiscovery/etcd',
                            },
                            {
                                text: 'Nacos',
                                link: '/gitbook/CNCF/OrchestrationManagement/CoordinationServiceDiscovery/nacos',
                            },
                            {
                                text: 'ZooKeeper',
                                link: '/gitbook/CNCF/OrchestrationManagement/CoordinationServiceDiscovery/zookeeper',
                            },
                        ],
                    },
                    {
                        text: 'Remote Procedure Call',
                        link: '/gitbook/CNCF/OrchestrationManagement/RemoteProcedureCall/README',
                        collapsed: true,
                        items: [
                            {
                                text: 'gRPC',
                                link: '/gitbook/CNCF/OrchestrationManagement/RemoteProcedureCall/grpc',
                            },
                        ],
                    },
                    {
                        text: 'Scheduling & Orchestration',
                        link: '/gitbook/CNCF/OrchestrationManagement/SchedulingOrchestration/README',
                        collapsed: true,
                        items: [
                            {
                                text: 'Kubernetes',
                                link: '/gitbook/CNCF/OrchestrationManagement/SchedulingOrchestration/Kubernetes/README',
                            },
                        ],
                    },
                    {
                        text: 'Service Mesh',
                        link: '/gitbook/CNCF/OrchestrationManagement/ServiceMesh/README',
                        collapsed: true,
                        items: [
                            {
                                text: 'Istio',
                                link: '/gitbook/CNCF/OrchestrationManagement/ServiceMesh/istio',
                            },
                        ],
                    },
                    {
                        text: 'Service Proxy',
                        link: '/gitbook/CNCF/OrchestrationManagement/ServiceProxy/README',
                        collapsed: true,
                        items: [
                            {
                                text: 'Envoy',
                                link: '/gitbook/CNCF/OrchestrationManagement/ServiceProxy/envoy',
                            },
                            {
                                text: 'HAProxy',
                                link: '/gitbook/CNCF/OrchestrationManagement/ServiceProxy/haproxy',
                            },
                            {
                                text: 'Nginx',
                                link: '/gitbook/CNCF/OrchestrationManagement/ServiceProxy/nginx',
                            },
                        ],
                    },
                ],
            },
            {
                text: 'Provisioning',
                link: '/gitbook/CNCF/Provisioning/README',
                collapsed: true,
                items: [
                    {
                        text: 'Automation & Configuration',
                        link: '/gitbook/CNCF/Provisioning/AutomationConfiguration/README',
                        collapsed: true,
                        items: [
                            {
                                text: 'Ansible',
                                link: '/gitbook/CNCF/Provisioning/AutomationConfiguration/ansible',
                            },
                            {
                                text: 'Apollo',
                                link: '/gitbook/CNCF/Provisioning/AutomationConfiguration/apollo',
                            },
                            {
                                text: 'OpenStack',
                                link: '/gitbook/CNCF/Provisioning/AutomationConfiguration/openstack',
                            },
                            {
                                text: 'Salt Project',
                                link: '/gitbook/CNCF/Provisioning/AutomationConfiguration/saltproject',
                            },
                            {
                                text: 'Terraform',
                                link: '/gitbook/CNCF/Provisioning/AutomationConfiguration/terraform',
                            },
                        ],
                    },
                    {
                        text: 'Container Registry',
                        link: '/gitbook/CNCF/Provisioning/ContainerRegistry/README',
                        collapsed: true,
                        items: [
                            {
                                text: 'Harbor',
                                link: '/gitbook/CNCF/Provisioning/ContainerRegistry/harbor',
                            },
                        ],
                    },
                    {
                        text: 'Key Management',
                        link: '/gitbook/CNCF/Provisioning/KeyManagement/README',
                        collapsed: true,
                        items: [
                            {
                                text: 'Vault',
                                link: '/gitbook/CNCF/Provisioning/KeyManagement/vault',
                            },
                        ],
                    },
                    {
                        text: 'Security & Compliance',
                        link: '/gitbook/CNCF/Provisioning/SecurityCompliance/README',
                        collapsed: true,
                        items: [
                            {
                                text: 'Cert Manager',
                                link: '/gitbook/CNCF/Provisioning/SecurityCompliance/cert-manager',
                            },
                            {
                                text: 'Keycloak',
                                link: '/gitbook/CNCF/Provisioning/SecurityCompliance/keycloak',
                            },
                        ],
                    },
                ],
            },
            {
                text: 'Runtime',
                link: '/gitbook/CNCF/Runtime/README',
                collapsed: true,
                items: [
                    {
                        text: 'Cloud Native Network',
                        link: '/gitbook/CNCF/Runtime/CloudNativeNetwork/README',
                        collapsed: true,
                        items: [
                            {
                                text: 'Cilium',
                                link: '/gitbook/CNCF/Runtime/CloudNativeNetwork/cilium',
                            },
                            {
                                text: 'CNI',
                                link: '/gitbook/CNCF/Runtime/CloudNativeNetwork/cni',
                            },
                        ],
                    },
                    {
                        text: 'Cloud Native Storage',
                        link: '/gitbook/CNCF/Runtime/CloudNativeStorage/README',
                        collapsed: true,
                        items: [
                            {
                                text: 'CSI',
                                link: '/gitbook/CNCF/Runtime/CloudNativeStorage/csi',
                            },
                            {
                                text: 'MinIO',
                                link: '/gitbook/CNCF/Runtime/CloudNativeStorage/minio',
                            },
                            {
                                text: 'Rook',
                                link: '/gitbook/CNCF/Runtime/CloudNativeStorage/rook',
                            },
                            {
                                text: 'Velero',
                                link: '/gitbook/CNCF/Runtime/CloudNativeStorage/velero',
                            },
                        ],
                    },
                    {
                        text: 'Container Runtime',
                        link: '/gitbook/CNCF/Runtime/ContainerRuntime/README',
                        collapsed: true,
                        items: [
                            {
                                text: 'Docker',
                                link: '/gitbook/CNCF/Runtime/ContainerRuntime/docker',
                            },
                            {
                                text: 'Containerd',
                                link: '/gitbook/CNCF/Runtime/ContainerRuntime/containerd',
                            },
                            {
                                text: 'CRI-O',
                                link: '/gitbook/CNCF/Runtime/ContainerRuntime/cri-o',
                            },
                            {
                                text: 'Lima',
                                link: '/gitbook/CNCF/Runtime/ContainerRuntime/lima',
                            },
                        ],
                    },
                ],
            },
            {
                text: 'Serverless',
                link: '/gitbook/CNCF/Serverless/README',
            },
        ],
    },
    {
        text: 'DevOps',
        collapsed: false,
        items: [
            {
                text: 'Overview',
                link: '/gitbook/DevOps/README',
            },
            {
                text: 'Bash',
                link: '/gitbook/DevOps/Bash',
            },
            {
                text: 'Golang',
                link: '/gitbook/DevOps/Golang',
            },
            {
                text: 'Java',
                link: '/gitbook/DevOps/Java',
            },
            {
                text: 'Node.js',
                link: '/gitbook/DevOps/NodeJS',
            },
            {
                text: 'Python',
                link: '/gitbook/DevOps/Python',
            },
            {
                text: 'Ruby',
                link: '/gitbook/DevOps/Ruby',
            },
            {
                text: 'Command Manual',
                link: '/gitbook/DevOps/CommandManual/README',
                collapsed: true,
                items: [
                    {
                        text: 'Automation',
                        link: '/gitbook/DevOps/CommandManual/Automation',
                    },
                    {
                        text: 'Build Tools',
                        link: '/gitbook/DevOps/CommandManual/BuildTools',
                    },
                    {
                        text: 'Container Runtime',
                        link: '/gitbook/DevOps/CommandManual/ContainerRuntime',
                    },
                    {
                        text: 'Database',
                        link: '/gitbook/DevOps/CommandManual/Database',
                    },
                    {
                        text: 'IO Tools',
                        link: '/gitbook/DevOps/CommandManual/IOTools',
                    },
                    {
                        text: 'Memory Tools',
                        link: '/gitbook/DevOps/CommandManual/MemoryTools',
                    },
                    {
                        text: 'Network Tools',
                        link: '/gitbook/DevOps/CommandManual/NetworkTools',
                    },
                    {
                        text: 'OpenSSL',
                        link: '/gitbook/DevOps/CommandManual/OpenSSL',
                    },
                    {
                        text: 'Package',
                        link: '/gitbook/DevOps/CommandManual/Package',
                    },
                    {
                        text: 'Streaming Messaging',
                        link: '/gitbook/DevOps/CommandManual/StreamingMessaging',
                    },
                    {
                        text: 'System Tools',
                        link: '/gitbook/DevOps/CommandManual/SystemTools',
                    },
                    {
                        text: 'Systemd',
                        link: '/gitbook/DevOps/CommandManual/Systemd',
                    },
                    {
                        text: 'Text Swordsman',
                        link: '/gitbook/DevOps/CommandManual/TextSwordsman',
                    },
                    {
                        text: 'Version Control',
                        link: '/gitbook/DevOps/CommandManual/VersionControl',
                    },
                    {
                        text: 'Video Tools',
                        link: '/gitbook/DevOps/CommandManual/VideoTools',
                    },
                ],
            },
            {
                text: 'Network',
                link: '/gitbook/DevOps/Network/README',
                collapsed: true,
                items: [
                    {
                        text: 'CDN',
                        link: '/gitbook/DevOps/Network/cdn',
                    },
                    {
                        text: 'Computer Network',
                        link: '/gitbook/DevOps/Network/computer-network',
                    },
                    {
                        text: 'HTTP',
                        link: '/gitbook/DevOps/Network/http',
                    },
                    {
                        text: 'TCP',
                        link: '/gitbook/DevOps/Network/tcp',
                    },
                ],
            },
            {
                text: 'Service Conf',
                link: '/gitbook/DevOps/ServiceConf/README',
                collapsed: true,
                items: [
                    {
                        text: 'Elasticsearch',
                        link: '/gitbook/DevOps/ServiceConf/elasticsearch',
                    },
                    {
                        text: 'Grafana',
                        link: '/gitbook/DevOps/ServiceConf/grafana',
                    },
                    {
                        text: 'Jenkins',
                        link: '/gitbook/DevOps/ServiceConf/jenkins',
                    },
                    {
                        text: 'Kafka',
                        link: '/gitbook/DevOps/ServiceConf/kafka',
                    },
                    {
                        text: 'Mongodb',
                        link: '/gitbook/DevOps/ServiceConf/mongodb',
                    },
                    {
                        text: 'Mysql',
                        link: '/gitbook/DevOps/ServiceConf/mysql',
                    },
                    {
                        text: 'Nginx',
                        link: '/gitbook/DevOps/ServiceConf/nginx',
                    },
                    {
                        text: 'Observability',
                        link: '/gitbook/DevOps/ServiceConf/observability',
                    },
                    {
                        text: 'PostgreSQL',
                        link: '/gitbook/DevOps/ServiceConf/postgresql',
                    },
                    {
                        text: 'Redis',
                        link: '/gitbook/DevOps/ServiceConf/redis',
                    },
                    {
                        text: 'Saltstack',
                        link: '/gitbook/DevOps/ServiceConf/saltstack',
                    },
                ],
            },
            {
                text: 'System',
                link: '/gitbook/DevOps/System/README',
                collapsed: true,
                items: [
                    {
                        text: 'Boot',
                        link: '/gitbook/DevOps/System/boot',
                    },
                    {
                        text: 'iptables',
                        link: '/gitbook/DevOps/System/iptables',
                    },
                    {
                        text: 'KVM',
                        link: '/gitbook/DevOps/System/kvm',
                    },
                    {
                        text: 'Linux From Scratch',
                        link: '/gitbook/DevOps/System/lfs',
                    },
                    {
                        text: 'Nix',
                        link: '/gitbook/DevOps/System/nix',
                    },
                ],
            },
            {
                text: 'Kernel',
                link: '/gitbook/DevOps/Kernel',
            },
        ],
    },
    {
        text: 'Environment',
        collapsed: false,
        items: [
            {
                text: 'Overview',
                link: '/gitbook/Environment/README',
            },
        ],
    },
    {
        text: 'Platform',
        collapsed: false,
        items: [
            {
                text: 'Overview',
                link: '/gitbook/Platform/README',
            },
            {
                text: 'Alibaba Cloud',
                link: '/gitbook/Platform/AlibabaCloud/README',
                collapsed: true,
                items: [
                    {
                        text: 'RAM',
                        link: '/gitbook/Platform/AlibabaCloud/ram',
                    },
                    {
                        text: 'VPC',
                        link: '/gitbook/Platform/AlibabaCloud/vpc',
                    },
                ],
            },
            {
                text: 'AWS',
                link: '/gitbook/Platform/AWS/README',
                collapsed: true,
                items: [
                    {
                        text: 'CloudFront',
                        link: '/gitbook/Platform/AWS/cloudfront',
                    },
                    {
                        text: 'EC2',
                        link: '/gitbook/Platform/AWS/ec2',
                    },
                    {
                        text: 'EKS',
                        link: '/gitbook/Platform/AWS/eks',
                    },
                ],
            },
            {
                text: 'Distribution Installer',
                link: '/gitbook/Platform/distribution-installer',
            },
            {
                text: 'Google Cloud',
                link: '/gitbook/Platform/GoogleCloud/README',
                collapsed: true,
                items: [
                    {
                        text: 'gcloud',
                        link: '/gitbook/Platform/GoogleCloud/gcloud',
                    },
                    {
                        text: 'GCE',
                        link: '/gitbook/Platform/GoogleCloud/gce',
                    },
                    {
                        text: 'GKE',
                        link: '/gitbook/Platform/GoogleCloud/gke',
                    },
                ],
            },
        ],
    },
    {
        text: 'Standards',
        collapsed: false,
        items: [
            {
                text: 'Overview',
                link: '/gitbook/Standards/README',
            },
            {
                text: 'Naming Conventions',
                link: '/gitbook/Standards/naming-conventions',
            },
            {
                text: 'Git Flow',
                link: '/gitbook/Standards/gitflow',
            },
            {
                text: 'JiraCDflow',
                link: '/gitbook/Standards/JiraCDflow/README',
            },
            {
                text: 'GitHub Standards',
                link: '/gitbook/Standards/github-standards',
            },
            {
                text: 'GitLab Standards',
                link: '/gitbook/Standards/gitlab-standards',
            },
            {
                text: 'Docker Standards',
                link: '/gitbook/Standards/docker-standards',
            },
        ],
    },
    {
        text: 'Misc',
        collapsed: false,
        items: [
            {
                text: 'Overview',
                link: '/gitbook/Misc/README',
            },
            {
                text: 'Kubernetes',
                link: '/gitbook/Misc/Kubernetes/README',
                collapsed: true,
                items: [
                    {
                        text: 'Kubernetes Network',
                        link: '/gitbook/Misc/Kubernetes/k8s-network',
                    },
                    {
                        text: 'Kubernetes RBAC',
                        link: '/gitbook/Misc/Kubernetes/k8s-rbac',
                    },
                    {
                        text: 'Kube Eventer',
                        link: '/gitbook/Misc/Kubernetes/kube-eventer',
                    },
                    {
                        text: 'Ubutun Deploy Kubernetes With Containerd',
                        link: '/gitbook/Misc/Kubernetes/ubuntu-containerd-deploy-k8s',
                    },
                ],
            },
            {
                text: 'Science',
                link: '/gitbook/Misc/Science/README',
                collapsed: true,
                items: [
                    {
                        text: 'V2Ray',
                        link: '/gitbook/Misc/Science/v2ray',
                    },
                    {
                        text: 'IPsec',
                        link: '/gitbook/Misc/Science/ipsec',
                    },
                    {
                        text: 'OpenVPN',
                        link: '/gitbook/Misc/Science/openvpn',
                    },
                    {
                        text: 'SSH Tunnel',
                        link: '/gitbook/Misc/Science/sshtunnel',
                    },
                    {
                        text: 'WireGuard',
                        link: '/gitbook/Misc/Science/wireguard',
                    },
                    {
                        text: 'Outline',
                        link: '/gitbook/Misc/Science/outline',
                    },
                    {
                        text: 'ShadowsocksR',
                        link: '/gitbook/Misc/Science/ssr',
                    },
                    {
                        text: 'Hosting',
                        link: '/gitbook/Misc/Science/hosting',
                    },
                ],
            },
            {
                text: 'Interview',
                link: '/gitbook/Misc/interview',
            },
        ],
    },
]
