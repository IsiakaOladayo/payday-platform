# outputs.tf
output "cluster_endpoint" { value = module.eks.cluster_endpoint }
output "ecr_urls"         { value = { for k,v in aws_ecr_repository.repos : k => v.repository_url } }
output "velero_bucket"    { value = aws_s3_bucket.velero.bucket }