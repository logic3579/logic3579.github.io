export const gitbookSidebar = [
    {
        text: "Introduction",
        link: "/gitbook/README",
    },
    {
        text: "CNCF",
        collapsed: false,
        items: [
            {
                text: "Overview",
                link: "/gitbook/CNCF/README",
            },
            {
                text: "AppDefinition and Development",
                link: "/gitbook/CNCF/AppDefinitionDevelopment/README",
                items: [
                    {
                        text: "Application Definition & Image Build",
                        link: "/gitbook/CNCF/AppDefinitionDevelopment/ApplicationDefinitionImageBuild/README",
                        items: [
                            {
                                text: "Helm",
                                link: "/gitbook/CNCF/AppDefinitionDevelopment/ApplicationDefinitionImageBuild/helm",
                            },
                        ],
                        collapsed: true,
                    },
                    {
                        text: "Continuous Integration & Delivery",
                        link: "/gitbook/CNCF/AppDefinitionDevelopment/ContinuousIntegrationDelivery/README",
                        items: [
                            {
                                text: "Argo",
                                link: "/gitbook/CNCF/AppDefinitionDevelopment/ContinuousIntegrationDelivery/argo",
                            },
                            {
                                text: "GitLab",
                                link: "/gitbook/CNCF/AppDefinitionDevelopment/ContinuousIntegrationDelivery/gitlab",
                            },
                            {
                                text: "Jenkins",
                                link: "/gitbook/CNCF/AppDefinitionDevelopment/ContinuousIntegrationDelivery/jenkins",
                            },
                        ],
                        collapsed: true,
                    },
                    {
                        text: "Database",
                        link: "/gitbook/CNCF/AppDefinitionDevelopment/Database/README",
                        items: [
                            {
                                text: "MongoDB",
                                link: "/gitbook/CNCF/AppDefinitionDevelopment/Database/mongodb",
                            },
                            {
                                text: "MySQL",
                                link: "/gitbook/CNCF/AppDefinitionDevelopment/Database/mysql",
                            },
                            {
                                text: "PostgreSQL",
                                link: "/gitbook/CNCF/AppDefinitionDevelopment/Database/postgresql",
                            },
                            {
                                text: "Redis",
                                link: "/gitbook/CNCF/AppDefinitionDevelopment/Database/redis",
                            },
                            {
                                text: "TiKV",
                                link: "/gitbook/CNCF/AppDefinitionDevelopment/Database/tikv",
                            },
                        ],
                        collapsed: true,
                    },
                    {
                        text: "Streaming & Messaging",
                        link: "/gitbook/CNCF/AppDefinitionDevelopment/StreamingMessaging/README",
                        items: [
                            {
                                text: "EMQX",
                                link: "/gitbook/CNCF/AppDefinitionDevelopment/StreamingMessaging/emqx",
                            },
                            {
                                text: "Kafka",
                                link: "/gitbook/CNCF/AppDefinitionDevelopment/StreamingMessaging/kafka",
                            },
                            {
                                text: "RabbitMQ",
                                link: "/gitbook/CNCF/AppDefinitionDevelopment/StreamingMessaging/rabbitmq",
                            },
                            {
                                text: "RocketMQ",
                                link: "/gitbook/CNCF/AppDefinitionDevelopment/StreamingMessaging/rocketmq",
                            },
                        ],
                        collapsed: true,
                    },
                ],
                collapsed: true,
            },
            {
                text: "CNAI",
                link: "/gitbook/CNCF/CNAI/README",
                items: [
                    {
                        text: "Data Architecture",
                        link: "/gitbook/CNCF/CNAI/DataArchitecture/README",
                        items: [
                            {
                                text: "ClickHouse",
                                link: "/gitbook/CNCF/CNAI/DataArchitecture/clickhouse",
                            },
                            {
                                text: "Flink",
                                link: "/gitbook/CNCF/CNAI/DataArchitecture/flink",
                            },
                        ],
                        collapsed: true,
                    },
                    {
                        text: "Data Science",
                        link: "/gitbook/CNCF/CNAI/DataScience/README",
                        items: [
                            {
                                text: "PyTorch",
                                link: "/gitbook/CNCF/CNAI/DataScience/pytorch",
                            },
                            {
                                text: "TensorFlow",
                                link: "/gitbook/CNCF/CNAI/DataScience/tensorflow",
                            },
                        ],
                        collapsed: true,
                    },
                ],
                collapsed: true,
            },
            {
                text: "Observability and Analysis",
                link: "/gitbook/CNCF/ObservabilityAnalysis/README",
                items: [
                    {
                        text: "Chaos Engineering",
                        link: "/gitbook/CNCF/ObservabilityAnalysis/ChaosEngineering/README",
                        items: [
                            {
                                text: "Chaos Mesh",
                                link: "/gitbook/CNCF/ObservabilityAnalysis/ChaosEngineering/chaosmesh",
                            },
                        ],
                        collapsed: true,
                    },
                    {
                        text: "Continuous Optimization",
                        link: "/gitbook/CNCF/ObservabilityAnalysis/ContinuousOptimization/README",
                        items: [
                            {
                                text: "OpenCost",
                                link: "/gitbook/CNCF/ObservabilityAnalysis/ContinuousOptimization/opencost",
                            },
                        ],
                        collapsed: true,
                    },
                    {
                        text: "Observability",
                        link: "/gitbook/CNCF/ObservabilityAnalysis/Observability/README",
                        items: [
                            {
                                text: "Elastic",
                                link: "/gitbook/CNCF/ObservabilityAnalysis/Observability/elastic",
                            },
                            {
                                text: "Fluentd",
                                link: "/gitbook/CNCF/ObservabilityAnalysis/Observability/fluentd",
                            },
                            {
                                text: "Grafana",
                                link: "/gitbook/CNCF/ObservabilityAnalysis/Observability/grafana",
                            },
                            {
                                text: "Jaeger",
                                link: "/gitbook/CNCF/ObservabilityAnalysis/Observability/jaeger",
                            },
                            {
                                text: "Logstash",
                                link: "/gitbook/CNCF/ObservabilityAnalysis/Observability/logstash",
                            },
                            {
                                text: "Loki",
                                link: "/gitbook/CNCF/ObservabilityAnalysis/Observability/loki",
                            },
                            {
                                text: "OpenTelemetry",
                                link: "/gitbook/CNCF/ObservabilityAnalysis/Observability/opentelemetry",
                            },
                            {
                                text: "Prometheus",
                                link: "/gitbook/CNCF/ObservabilityAnalysis/Observability/prometheus",
                            },
                        ],
                        collapsed: true,
                    },
                ],
                collapsed: true,
            },
            {
                text: "Orchestration and Management",
                link: "/gitbook/CNCF/OrchestrationManagement/README",
                items: [
                    {
                        text: "API Gateway",
                        link: "/gitbook/CNCF/OrchestrationManagement/APIGateway/README",
                        items: [
                            {
                                text: "Higress",
                                link: "/gitbook/CNCF/OrchestrationManagement/APIGateway/higress",
                            },
                            {
                                text: "Tyk",
                                link: "/gitbook/CNCF/OrchestrationManagement/APIGateway/tyk",
                            },
                        ],
                        collapsed: true,
                    },
                    {
                        text: "Coordination & Service Discovery",
                        link: "/gitbook/CNCF/OrchestrationManagement/CoordinationServiceDiscovery/README",
                        items: [
                            {
                                text: "CoreDNS",
                                link: "/gitbook/CNCF/OrchestrationManagement/CoordinationServiceDiscovery/coredns",
                            },
                            {
                                text: "Etcd",
                                link: "/gitbook/CNCF/OrchestrationManagement/CoordinationServiceDiscovery/etcd",
                            },
                            {
                                text: "Nacos",
                                link: "/gitbook/CNCF/OrchestrationManagement/CoordinationServiceDiscovery/nacos",
                            },
                            {
                                text: "ZooKeeper",
                                link: "/gitbook/CNCF/OrchestrationManagement/CoordinationServiceDiscovery/zookeeper",
                            },
                        ],
                        collapsed: true,
                    },
                    {
                        text: "Remote Procedure Call",
                        link: "/gitbook/CNCF/OrchestrationManagement/RemoteProcedureCall/README",
                        items: [
                            {
                                text: "gRPC",
                                link: "/gitbook/CNCF/OrchestrationManagement/RemoteProcedureCall/grpc",
                            },
                        ],
                        collapsed: true,
                    },
                    {
                        text: "Scheduling & Orchestration",
                        link: "/gitbook/CNCF/OrchestrationManagement/SchedulingOrchestration/README",
                        items: [
                            {
                                text: "Kubernetes",
                                link: "/gitbook/CNCF/OrchestrationManagement/SchedulingOrchestration/Kubernetes/README",
                                items: [
                                    {
                                        text: "Kubernetes Network",
                                        link: "/gitbook/CNCF/OrchestrationManagement/SchedulingOrchestration/Kubernetes/k8s-network",
                                    },
                                    {
                                        text: "Kubernetes RBAC",
                                        link: "/gitbook/CNCF/OrchestrationManagement/SchedulingOrchestration/Kubernetes/k8s-rbac",
                                    },
                                    {
                                        text: "Kubeadm Deploy",
                                        link: "/gitbook/CNCF/OrchestrationManagement/SchedulingOrchestration/Kubernetes/kubeadm-deploy",
                                    },
                                    {
                                        text: "Kube Eventer",
                                        link: "/gitbook/CNCF/OrchestrationManagement/SchedulingOrchestration/Kubernetes/kube-eventer",
                                    },
                                ],
                                collapsed: true,
                            },
                        ],
                        collapsed: true,
                    },
                    {
                        text: "Service Mesh",
                        link: "/gitbook/CNCF/OrchestrationManagement/ServiceMesh/README",
                        items: [
                            {
                                text: "Istio",
                                link: "/gitbook/CNCF/OrchestrationManagement/ServiceMesh/istio",
                            },
                        ],
                        collapsed: true,
                    },
                    {
                        text: "Service Proxy",
                        link: "/gitbook/CNCF/OrchestrationManagement/ServiceProxy/README",
                        items: [
                            {
                                text: "Envoy",
                                link: "/gitbook/CNCF/OrchestrationManagement/ServiceProxy/envoy",
                            },
                            {
                                text: "HAProxy",
                                link: "/gitbook/CNCF/OrchestrationManagement/ServiceProxy/haproxy",
                            },
                            {
                                text: "Nginx",
                                link: "/gitbook/CNCF/OrchestrationManagement/ServiceProxy/nginx",
                            },
                        ],
                        collapsed: true,
                    },
                ],
                collapsed: true,
            },
            {
                text: "Provisioning",
                link: "/gitbook/CNCF/Provisioning/README",
                items: [
                    {
                        text: "Automation & Configuration",
                        link: "/gitbook/CNCF/Provisioning/AutomationConfiguration/README",
                        items: [
                            {
                                text: "Ansible",
                                link: "/gitbook/CNCF/Provisioning/AutomationConfiguration/ansible",
                            },
                            {
                                text: "Apollo",
                                link: "/gitbook/CNCF/Provisioning/AutomationConfiguration/apollo",
                            },
                            {
                                text: "OpenStack",
                                link: "/gitbook/CNCF/Provisioning/AutomationConfiguration/openstack",
                            },
                            {
                                text: "Salt Project",
                                link: "/gitbook/CNCF/Provisioning/AutomationConfiguration/saltproject",
                            },
                            {
                                text: "Terraform",
                                link: "/gitbook/CNCF/Provisioning/AutomationConfiguration/terraform",
                            },
                        ],
                        collapsed: true,
                    },
                    {
                        text: "Container Registry",
                        link: "/gitbook/CNCF/Provisioning/ContainerRegistry/README",
                        items: [
                            {
                                text: "Harbor",
                                link: "/gitbook/CNCF/Provisioning/ContainerRegistry/harbor",
                            },
                        ],
                        collapsed: true,
                    },
                    {
                        text: "Key Management",
                        link: "/gitbook/CNCF/Provisioning/KeyManagement/README",
                        items: [
                            {
                                text: "Vault",
                                link: "/gitbook/CNCF/Provisioning/KeyManagement/vault",
                            },
                        ],
                        collapsed: true,
                    },
                    {
                        text: "Security & Compliance",
                        link: "/gitbook/CNCF/Provisioning/SecurityCompliance/README",
                        items: [
                            {
                                text: "Cert Manager",
                                link: "/gitbook/CNCF/Provisioning/SecurityCompliance/cert-manager",
                            },
                            {
                                text: "Keycloak",
                                link: "/gitbook/CNCF/Provisioning/SecurityCompliance/keycloak",
                            },
                        ],
                        collapsed: true,
                    },
                ],
                collapsed: true,
            },
            {
                text: "Runtime",
                link: "/gitbook/CNCF/Runtime/README",
                items: [
                    {
                        text: "Cloud Native Network",
                        link: "/gitbook/CNCF/Runtime/CloudNativeNetwork/README",
                        items: [
                            {
                                text: "Cilium",
                                link: "/gitbook/CNCF/Runtime/CloudNativeNetwork/cilium",
                            },
                            {
                                text: "CNI",
                                link: "/gitbook/CNCF/Runtime/CloudNativeNetwork/cni",
                            },
                        ],
                        collapsed: true,
                    },
                    {
                        text: "Cloud Native Storage",
                        link: "/gitbook/CNCF/Runtime/CloudNativeStorage/README",
                        items: [
                            {
                                text: "CSI",
                                link: "/gitbook/CNCF/Runtime/CloudNativeStorage/csi",
                            },
                            {
                                text: "MinIO",
                                link: "/gitbook/CNCF/Runtime/CloudNativeStorage/minio",
                            },
                            {
                                text: "Rook",
                                link: "/gitbook/CNCF/Runtime/CloudNativeStorage/rook",
                            },
                            {
                                text: "Velero",
                                link: "/gitbook/CNCF/Runtime/CloudNativeStorage/velero",
                            },
                        ],
                        collapsed: true,
                    },
                    {
                        text: "Container Runtime",
                        link: "/gitbook/CNCF/Runtime/ContainerRuntime/README",
                        items: [
                            {
                                text: "Docker",
                                link: "/gitbook/CNCF/Runtime/ContainerRuntime/docker",
                            },
                            {
                                text: "Containerd",
                                link: "/gitbook/CNCF/Runtime/ContainerRuntime/containerd",
                            },
                            {
                                text: "CRI-O",
                                link: "/gitbook/CNCF/Runtime/ContainerRuntime/cri-o",
                            },
                            {
                                text: "Lima",
                                link: "/gitbook/CNCF/Runtime/ContainerRuntime/lima",
                            },
                        ],
                        collapsed: true,
                    },
                ],
                collapsed: true,
            },
            {
                text: "Serverless",
                link: "/gitbook/CNCF/Serverless/README",
            },
        ],
    },
    {
        text: "DevOps",
        collapsed: false,
        items: [
            {
                text: "Overview",
                link: "/gitbook/DevOps/README",
            },
            {
                text: "Bash",
                link: "/gitbook/DevOps/bash",
            },
            {
                text: "Golang",
                link: "/gitbook/DevOps/golang",
            },
            {
                text: "Java",
                link: "/gitbook/DevOps/java",
            },
            {
                text: "Node.js",
                link: "/gitbook/DevOps/nodejs",
            },
            {
                text: "Python",
                link: "/gitbook/DevOps/python",
            },
            {
                text: "Ruby",
                link: "/gitbook/DevOps/ruby",
            },
            {
                text: "Command Manual",
                link: "/gitbook/DevOps/CommandManual/README",
                items: [
                    {
                        text: "Automation",
                        link: "/gitbook/DevOps/CommandManual/automation",
                    },
                    {
                        text: "Big Data",
                        link: "/gitbook/DevOps/CommandManual/big-data",
                    },
                    {
                        text: "Build Tools",
                        link: "/gitbook/DevOps/CommandManual/build-tools",
                    },
                    {
                        text: "Container Runtime",
                        link: "/gitbook/DevOps/CommandManual/container-runtime",
                    },
                    {
                        text: "Database",
                        link: "/gitbook/DevOps/CommandManual/database",
                    },
                    {
                        text: "IO Tools",
                        link: "/gitbook/DevOps/CommandManual/io-tools",
                    },
                    {
                        text: "Memory Tools",
                        link: "/gitbook/DevOps/CommandManual/memory-tools",
                    },
                    {
                        text: "Network Tools",
                        link: "/gitbook/DevOps/CommandManual/network-tools",
                    },
                    {
                        text: "OpenSSL",
                        link: "/gitbook/DevOps/CommandManual/openssl",
                    },
                    {
                        text: "Package",
                        link: "/gitbook/DevOps/CommandManual/package",
                    },
                    {
                        text: "Streaming Messaging",
                        link: "/gitbook/DevOps/CommandManual/streaming-messaging",
                    },
                    {
                        text: "System Tools",
                        link: "/gitbook/DevOps/CommandManual/system-tools",
                    },
                    {
                        text: "Systemd",
                        link: "/gitbook/DevOps/CommandManual/systemd",
                    },
                    {
                        text: "Text Swordsman",
                        link: "/gitbook/DevOps/CommandManual/text-swordsman",
                    },
                    {
                        text: "Version Control",
                        link: "/gitbook/DevOps/CommandManual/version-control",
                    },
                    {
                        text: "Video Tools",
                        link: "/gitbook/DevOps/CommandManual/video-tools",
                    },
                ],
                collapsed: true,
            },
            {
                text: "Network",
                link: "/gitbook/DevOps/Network/README",
                items: [
                    {
                        text: "CDN",
                        link: "/gitbook/DevOps/Network/cdn",
                    },
                    {
                        text: "Computer Network",
                        link: "/gitbook/DevOps/Network/computer-network",
                    },
                    {
                        text: "HTTP",
                        link: "/gitbook/DevOps/Network/http",
                    },
                    {
                        text: "TCP",
                        link: "/gitbook/DevOps/Network/tcp",
                    },
                ],
                collapsed: true,
            },
            {
                text: "Service Conf",
                link: "/gitbook/DevOps/ServiceConf/README",
                items: [
                    {
                        text: "Elasticsearch",
                        link: "/gitbook/DevOps/ServiceConf/elasticsearch",
                    },
                    {
                        text: "Grafana",
                        link: "/gitbook/DevOps/ServiceConf/grafana",
                    },
                    {
                        text: "Jenkins",
                        link: "/gitbook/DevOps/ServiceConf/jenkins",
                    },
                    {
                        text: "Kafka",
                        link: "/gitbook/DevOps/ServiceConf/kafka",
                    },
                    {
                        text: "Mongodb",
                        link: "/gitbook/DevOps/ServiceConf/mongodb",
                    },
                    {
                        text: "Mysql",
                        link: "/gitbook/DevOps/ServiceConf/mysql",
                    },
                    {
                        text: "Nginx",
                        link: "/gitbook/DevOps/ServiceConf/nginx",
                    },
                    {
                        text: "Observability",
                        link: "/gitbook/DevOps/ServiceConf/observability",
                    },
                    {
                        text: "PostgreSQL",
                        link: "/gitbook/DevOps/ServiceConf/postgresql",
                    },
                    {
                        text: "Redis",
                        link: "/gitbook/DevOps/ServiceConf/redis",
                    },
                    {
                        text: "Saltstack",
                        link: "/gitbook/DevOps/ServiceConf/saltstack",
                    },
                ],
                collapsed: true,
            },
            {
                text: "System",
                link: "/gitbook/DevOps/System/README",
                items: [
                    {
                        text: "Boot",
                        link: "/gitbook/DevOps/System/boot",
                    },
                    {
                        text: "iptables",
                        link: "/gitbook/DevOps/System/iptables",
                    },
                    {
                        text: "KVM",
                        link: "/gitbook/DevOps/System/kvm",
                    },
                    {
                        text: "Linux From Scratch",
                        link: "/gitbook/DevOps/System/lfs",
                    },
                    {
                        text: "Nix",
                        link: "/gitbook/DevOps/System/nix",
                    },
                ],
                collapsed: true,
            },
            {
                text: "Kernel",
                link: "/gitbook/DevOps/kernel",
            },
        ],
    },
    {
        text: "Environment",
        collapsed: false,
        items: [
            {
                text: "Overview",
                link: "/gitbook/Environment/README",
            },
        ],
    },
    {
        text: "Platform",
        collapsed: false,
        items: [
            {
                text: "Overview",
                link: "/gitbook/Platform/README",
            },
            {
                text: "Alibaba Cloud",
                link: "/gitbook/Platform/AlibabaCloud/README",
                items: [
                    {
                        text: "RAM",
                        link: "/gitbook/Platform/AlibabaCloud/ram",
                    },
                    {
                        text: "VPC",
                        link: "/gitbook/Platform/AlibabaCloud/vpc",
                    },
                ],
                collapsed: true,
            },
            {
                text: "AWS",
                link: "/gitbook/Platform/AWS/README",
                items: [
                    {
                        text: "CloudFront",
                        link: "/gitbook/Platform/AWS/cloudfront",
                    },
                    {
                        text: "EC2",
                        link: "/gitbook/Platform/AWS/ec2",
                    },
                    {
                        text: "EKS",
                        link: "/gitbook/Platform/AWS/eks",
                    },
                ],
                collapsed: true,
            },
            {
                text: "Distribution Installer",
                link: "/gitbook/Platform/distribution-installer",
            },
            {
                text: "Google Cloud",
                link: "/gitbook/Platform/GoogleCloud/README",
                items: [
                    {
                        text: "gcloud",
                        link: "/gitbook/Platform/GoogleCloud/gcloud",
                    },
                    {
                        text: "GCE",
                        link: "/gitbook/Platform/GoogleCloud/gce",
                    },
                    {
                        text: "GKE",
                        link: "/gitbook/Platform/GoogleCloud/gke",
                    },
                ],
                collapsed: true,
            },
        ],
    },
    {
        text: "Standards",
        collapsed: false,
        items: [
            {
                text: "Overview",
                link: "/gitbook/Standards/README",
            },
            {
                text: "Naming Conventions",
                link: "/gitbook/Standards/naming-conventions",
            },
            {
                text: "Git Flow",
                link: "/gitbook/Standards/gitflow",
            },
            {
                text: "JiraCDflow",
                link: "/gitbook/Standards/JiraCDflow/README",
            },
            {
                text: "GitHub Standards",
                link: "/gitbook/Standards/github-standards",
            },
            {
                text: "GitLab Standards",
                link: "/gitbook/Standards/gitlab-standards",
            },
            {
                text: "Docker Standards",
                link: "/gitbook/Standards/docker-standards",
            },
        ],
    },
    {
        text: "Misc",
        collapsed: false,
        items: [
            {
                text: "Overview",
                link: "/gitbook/Misc/README",
            },
            {
                text: "Science",
                link: "/gitbook/Misc/Science/README",
                items: [
                    {
                        text: "V2Ray",
                        link: "/gitbook/Misc/Science/v2ray",
                    },
                    {
                        text: "IPsec",
                        link: "/gitbook/Misc/Science/ipsec",
                    },
                    {
                        text: "OpenVPN",
                        link: "/gitbook/Misc/Science/openvpn",
                    },
                    {
                        text: "SSH Tunnel",
                        link: "/gitbook/Misc/Science/sshtunnel",
                    },
                    {
                        text: "WireGuard",
                        link: "/gitbook/Misc/Science/wireguard",
                    },
                    {
                        text: "Outline",
                        link: "/gitbook/Misc/Science/outline",
                    },
                    {
                        text: "ShadowsocksR",
                        link: "/gitbook/Misc/Science/ssr",
                    },
                    {
                        text: "Hosting",
                        link: "/gitbook/Misc/Science/hosting",
                    },
                ],
                collapsed: true,
            },
            {
                text: "Interview",
                link: "/gitbook/Misc/interview",
            },
        ],
    },
]
