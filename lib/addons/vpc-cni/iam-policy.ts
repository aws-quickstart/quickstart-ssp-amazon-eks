import { PolicyDocument } from "aws-cdk-lib/aws-iam";

export function getVpcCniDriverPolicyDocument() : PolicyDocument {
    return PolicyDocument.fromJson({
        "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "Allow",
                "Action": [
                    "ec2:AssignPrivateIpAddresses",
                    "ec2:AttachNetworkInterface",
                    "ec2:CreateNetworkInterface",
                    "ec2:DeleteNetworkInterface",
                    "ec2:DescribeInstances",
                    "ec2:DescribeTags",
                    "ec2:DescribeNetworkInterfaces",
                    "ec2:DescribeInstanceTypes",
                    "ec2:DetachNetworkInterface",
                    "ec2:ModifyNetworkInterfaceAttribute",
                    "ec2:UnassignPrivateIpAddresses"
                ],
                "Resource": "*"
            },
            {
                "Effect": "Allow",
                "Action": [
                    "ec2:CreateTags"
                ],
                "Resource": [
                    "arn:aws:ec2:*:*:network-interface/*"
                ]
            }
        ]
    });
}
